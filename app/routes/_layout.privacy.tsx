import type { Route } from "./+types/_layout.privacy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Política de Privacidad - TAP" },
    {
      name: "description",
      content: "Política de privacidad de TAP - Talent Access Portal.",
    },
  ];
}

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Política de Privacidad
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
            Información que Recopilamos
          </h2>
          <p>
            Recopilamos información básica necesaria para proporcionar nuestros servicios, 
            incluyendo datos de contacto e información relacionada con el uso de la plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Uso de la Información
          </h2>
          <p>
            Utilizamos su información para proporcionar y mejorar nuestros servicios, 
            comunicarnos con usted y cumplir con obligaciones legales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Protección de Datos
          </h2>
          <p>
            Implementamos medidas de seguridad para proteger su información. 
            No vendemos ni compartimos sus datos personales con terceros para fines de marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Sus Derechos
          </h2>
          <p>
            Usted tiene derecho a acceder, corregir o eliminar su información personal. 
            Para ejercer estos derechos, contáctenos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Cookies
          </h2>
          <p>
            Utilizamos cookies esenciales para el funcionamiento del sitio. 
            Puede configurar su navegador para rechazar cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Cambios a esta Política
          </h2>
          <p>
            Podemos actualizar esta política periódicamente. 
            Los cambios serán publicados en esta página.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Contacto
          </h2>
          <p>
            Para preguntas sobre privacidad, contáctenos en{" "}
            <a href="mailto:info@somostap.com" className="text-blue-600 hover:underline">
              info@somostap.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
