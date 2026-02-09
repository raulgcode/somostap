/// <reference types="@cloudflare/workers-types" />

/**
 * OAuth Callback Proxy - Cloudflare Pages Function
 *
 * Este endpoint actúa como proxy para redirecciones OAuth de Azure/Outlook.
 * Permite registrar una única URL de redirección en Azure y luego redirigir
 * a cada cliente con los parámetros de OAuth.
 *
 * Endpoint: /oauth/callback
 *
 * Flujo:
 * 1. El cliente inicia el flujo OAuth con Azure, incluyendo state con la finalUrl codificada
 * 2. Azure redirige aquí: /oauth/callback?code=xxx&state=base64({"finalUrl":"https://cliente.com/callback","originalState":"xyz"})
 * 3. Este proxy decodifica el state, extrae la finalUrl y redirige al cliente
 *
 * Uso desde el cliente:
 * Cuando construyas la URL de autorización de Azure, incluye en el `state` un JSON con:
 * - finalUrl: la URL de callback de tu aplicación cliente
 * - originalState: tu state original para CSRF protection
 *
 * Ejemplo:
 * const state = btoa(JSON.stringify({
 *   finalUrl: "https://mi-cliente.com/auth/callback",
 *   originalState: "mi-csrf-token"
 * }));
 *
 * La URL de autorización de Azure sería:
 * https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize?
 *   client_id=xxx&
 *   response_type=code&
 *   redirect_uri=https://somostap.com/oauth/callback&
 *   scope=openid%20profile%20email&
 *   state={state}
 */

interface OAuthState {
  finalUrl: string;
  originalState?: string;
}

interface Env {
  // Add any environment variables here if needed
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const searchParams = url.searchParams;

  // Parámetros de OAuth que Azure envía
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  // Si hay un error de OAuth, intentamos redirigir con el error
  if (error) {
    // Intentar extraer finalUrl del state aunque haya error
    let finalUrl: string | null = null;
    if (state) {
      try {
        const decodedState = JSON.parse(atob(state)) as OAuthState;
        finalUrl = decodedState.finalUrl;
      } catch {
        // Si no podemos decodificar el state, mostramos error
      }
    }

    if (finalUrl) {
      const redirectUrl = new URL(finalUrl);
      redirectUrl.searchParams.set("error", error);
      if (errorDescription) {
        redirectUrl.searchParams.set("error_description", errorDescription);
      }
      return Response.redirect(redirectUrl.toString(), 302);
    }

    // Si no hay finalUrl, mostramos página de error
    return new Response(
      `OAuth Error: ${error} - ${errorDescription || "Unknown error"}`,
      { status: 400, headers: { "Content-Type": "text/plain" } }
    );
  }

  // Validar que tenemos los parámetros necesarios
  if (!code) {
    return new Response("Missing authorization code", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  if (!state) {
    return new Response("Missing state parameter", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Decodificar el state para obtener la finalUrl
  let decodedState: OAuthState;
  try {
    decodedState = JSON.parse(atob(state)) as OAuthState;
  } catch {
    return new Response("Invalid state parameter: could not decode", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  if (!decodedState.finalUrl) {
    return new Response("Invalid state parameter: missing finalUrl", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Validar que la finalUrl sea una URL válida
  let finalUrl: URL;
  try {
    finalUrl = new URL(decodedState.finalUrl);
  } catch {
    return new Response("Invalid finalUrl in state parameter", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Construir la URL de redirección con todos los parámetros
  finalUrl.searchParams.set("code", code);

  // Si había un originalState, lo pasamos como state
  if (decodedState.originalState) {
    finalUrl.searchParams.set("state", decodedState.originalState);
  }

  // También pasar session_state si Azure lo envió
  const sessionState = searchParams.get("session_state");
  if (sessionState) {
    finalUrl.searchParams.set("session_state", sessionState);
  }

  return Response.redirect(finalUrl.toString(), 302);
};
