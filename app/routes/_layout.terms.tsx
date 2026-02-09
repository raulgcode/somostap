import type { Route } from "./+types/_layout.terms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Términos de Uso - TAP" },
    {
      name: "description",
      content: "Términos de uso del servicio TAP - Talent Access Portal.",
    },
  ];
}

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Términos de Uso
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p className="text-sm text-gray-500">
          Última actualización: {new Date().toLocaleDateString("es-CR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Aceptación
          </h2>
          <p>
            Al utilizar TAP - Talent Access Portal, usted acepta estos términos de uso. 
            Si no está de acuerdo, por favor no utilice nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Uso del Servicio
          </h2>
          <p>
            TAP es una plataforma de gestión de recursos humanos. Usted se compromete a 
            usar el servicio de manera responsable y conforme a las leyes aplicables.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Cuenta de Usuario
          </h2>
          <p>
            Usted es responsable de mantener la confidencialidad de sus credenciales 
            de acceso y de todas las actividades que ocurran bajo su cuenta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido y software de TAP es propiedad de TAP - Talent Access Portal. 
            Se le otorga una licencia limitada para usar el servicio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Limitación de Responsabilidad
          </h2>
          <p>
            TAP se proporciona "tal cual". No garantizamos que el servicio esté libre 
            de errores o interrupciones. No somos responsables por daños indirectos 
            derivados del uso del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Modificaciones
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. 
            Los cambios serán efectivos al publicarse en esta página.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Contacto
          </h2>
          <p>
            Para cualquier consulta sobre estos términos, contáctenos en{" "}
            <a href="mailto:info@somostap.com" className="text-blue-600 hover:underline">
              info@somostap.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
