import type { Route } from "./+types/_layout.privacy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Política de Privacidad - TAP" },
    {
      name: "description",
      content:
        "Política de privacidad de TAP - Talent Access Portal. Conozca cómo protegemos y manejamos su información personal.",
    },
  ];
}

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Política de Privacidad
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Última actualización:</strong>{" "}
          {new Date().toLocaleDateString("es-CR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introducción
          </h2>
          <p className="text-gray-700 mb-4">
            TAP - Talent Access Portal ("nosotros", "nuestro" o "la Compañía")
            se compromete a proteger la privacidad de los usuarios ("usted" o
            "el Usuario") de nuestros servicios. Esta Política de Privacidad
            explica cómo recopilamos, usamos, divulgamos y protegemos su
            información cuando utiliza nuestra plataforma de gestión de recursos
            humanos.
          </p>
          <p className="text-gray-700">
            Al utilizar nuestros servicios, usted acepta las prácticas descritas
            en esta Política de Privacidad. Si no está de acuerdo con esta
            política, por favor no utilice nuestros servicios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Información que Recopilamos
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2.1 Información Personal
          </h3>
          <p className="text-gray-700 mb-3">
            Recopilamos información personal que usted nos proporciona
            directamente, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              Nombre completo, número de identificación y fecha de nacimiento
            </li>
            <li>
              Información de contacto (dirección de correo electrónico, número
              de teléfono, dirección postal)
            </li>
            <li>
              Información laboral (cargo, departamento, fecha de contratación,
              salario)
            </li>
            <li>Datos de autenticación (nombre de usuario, contraseña)</li>
            <li>Información de solicitudes de ausencias y constancias</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2.2 Información Recopilada Automáticamente
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dirección IP y tipo de navegador</li>
            <li>Información del dispositivo y sistema operativo</li>
            <li>Páginas visitadas, tiempo de acceso y URLs de referencia</li>
            <li>Cookies y tecnologías similares</li>
            <li>Registros de actividad en la plataforma</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2.3 Información de Terceros
          </h3>
          <p className="text-gray-700">
            Podemos recibir información de sistemas de gestión empresarial integrados,
            incluyendo datos de nómina, estructura organizacional y registros de
            empleados necesarios para el funcionamiento del servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Cómo Utilizamos su Información
          </h2>
          <p className="text-gray-700 mb-3">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Proporcionar, mantener y mejorar nuestros servicios</li>
            <li>
              Procesar solicitudes de ausencias, constancias y aprobaciones
            </li>
            <li>Autenticar usuarios y prevenir accesos no autorizados</li>
            <li>
              Comunicarnos con usted sobre actualizaciones, notificaciones y
              soporte técnico
            </li>
            <li>Generar reportes y análisis para su organización</li>
            <li>Cumplir con obligaciones legales y regulatorias</li>
            <li>
              Detectar, prevenir y resolver problemas técnicos o de seguridad
            </li>
            <li>Mejorar la experiencia del usuario mediante análisis de uso</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Compartir Información
          </h2>
          <p className="text-gray-700 mb-3">
            No vendemos su información personal. Podemos compartir su
            información en las siguientes circunstancias:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.1 Con su Organización
          </h3>
          <p className="text-gray-700 mb-4">
            Compartimos información con su empleador según sea necesario para la
            gestión de recursos humanos y el cumplimiento de políticas internas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.2 Proveedores de Servicios
          </h3>
          <p className="text-gray-700 mb-4">
            Podemos compartir información con terceros que nos ayudan a operar
            nuestros servicios, como proveedores de hosting, análisis, soporte
            técnico y procesamiento de pagos, bajo estrictos acuerdos de
            confidencialidad.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.3 Requisitos Legales
          </h3>
          <p className="text-gray-700 mb-4">
            Divulgaremos información si es requerido por ley, orden judicial,
            proceso legal, o para proteger nuestros derechos legales y los de
            nuestros usuarios.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.4 Transferencias Empresariales
          </h3>
          <p className="text-gray-700">
            En caso de fusión, adquisición o venta de activos, su información
            personal puede ser transferida como parte de esa transacción.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Seguridad de los Datos
          </h2>
          <p className="text-gray-700 mb-3">
            Implementamos medidas de seguridad técnicas, administrativas y
            físicas diseñadas para proteger su información contra acceso no
            autorizado, alteración, divulgación o destrucción, incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Encriptación de datos en tránsito y en reposo (SSL/TLS)</li>
            <li>Controles de acceso basados en roles</li>
            <li>Autenticación de múltiples factores cuando sea apropiado</li>
            <li>Auditorías de seguridad regulares</li>
            <li>Capacitación del personal en seguridad de datos</li>
            <li>Copias de seguridad y planes de recuperación ante desastres</li>
          </ul>
          <p className="text-gray-700">
            Sin embargo, ningún método de transmisión por Internet o
            almacenamiento electrónico es 100% seguro. No podemos garantizar la
            seguridad absoluta de su información.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Retención de Datos
          </h2>
          <p className="text-gray-700">
            Retenemos su información personal durante el tiempo necesario para
            cumplir con los propósitos descritos en esta política, a menos que
            la ley requiera o permita un período de retención más largo. Los
            criterios para determinar nuestros períodos de retención incluyen:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              La duración de su relación laboral con la organización cliente
            </li>
            <li>Obligaciones legales y regulatorias de retención</li>
            <li>Necesidades operativas y de auditoría</li>
            <li>Resolución de disputas y cumplimiento de acuerdos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Sus Derechos
          </h2>
          <p className="text-gray-700 mb-3">
            Dependiendo de su ubicación, puede tener los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              <strong>Acceso:</strong> Solicitar una copia de su información
              personal
            </li>
            <li>
              <strong>Corrección:</strong> Solicitar la corrección de
              información inexacta o incompleta
            </li>
            <li>
              <strong>Eliminación:</strong> Solicitar la eliminación de su
              información personal (sujeto a excepciones legales)
            </li>
            <li>
              <strong>Portabilidad:</strong> Recibir su información en un
              formato estructurado y de uso común
            </li>
            <li>
              <strong>Objeción:</strong> Oponerse al procesamiento de su
              información en ciertas circunstancias
            </li>
            <li>
              <strong>Restricción:</strong> Solicitar la restricción del
              procesamiento de su información
            </li>
            <li>
              <strong>Retiro de Consentimiento:</strong> Retirar su
              consentimiento cuando el procesamiento se base en el mismo
            </li>
          </ul>
          <p className="text-gray-700">
            Para ejercer estos derechos, contáctenos en info@somostap.com.
            Responderemos a su solicitud de acuerdo con las leyes aplicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Cookies y Tecnologías de Seguimiento
          </h2>
          <p className="text-gray-700 mb-3">
            Utilizamos cookies y tecnologías similares para mejorar su
            experiencia, analizar el uso y personalizar contenido. Los tipos de
            cookies que utilizamos incluyen:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              <strong>Cookies Esenciales:</strong> Necesarias para el
              funcionamiento básico del sitio
            </li>
            <li>
              <strong>Cookies de Rendimiento:</strong> Para analizar cómo se
              utiliza nuestro servicio
            </li>
            <li>
              <strong>Cookies Funcionales:</strong> Para recordar sus
              preferencias
            </li>
            <li>
              <strong>Cookies de Seguridad:</strong> Para detectar y prevenir
              actividades fraudulentas
            </li>
          </ul>
          <p className="text-gray-700">
            Puede controlar las cookies a través de la configuración de su
            navegador, pero deshabilitar ciertas cookies puede afectar la
            funcionalidad del servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Transferencias Internacionales
          </h2>
          <p className="text-gray-700">
            Su información puede ser transferida y mantenida en servidores
            ubicados fuera de su jurisdicción, donde las leyes de protección de
            datos pueden diferir. Al usar nuestros servicios, usted consiente
            estas transferencias. Implementamos salvaguardas apropiadas para
            proteger su información de acuerdo con esta política y las leyes
            aplicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Menores de Edad
          </h2>
          <p className="text-gray-700">
            Nuestros servicios no están dirigidos a menores de 18 años. No
            recopilamos intencionalmente información personal de menores. Si
            descubrimos que hemos recopilado información de un menor, la
            eliminaremos inmediatamente. Si cree que un menor nos ha
            proporcionado información personal, contáctenos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Enlaces a Terceros
          </h2>
          <p className="text-gray-700">
            Nuestro servicio puede contener enlaces a sitios web de terceros. No
            somos responsables de las prácticas de privacidad de estos sitios.
            Le recomendamos revisar las políticas de privacidad de cualquier
            sitio de terceros que visite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Cambios a esta Política
          </h2>
          <p className="text-gray-700">
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Le notificaremos sobre cambios materiales
            publicando la nueva política en esta página y actualizando la fecha
            de "Última actualización". Su uso continuado de nuestros servicios
            después de tales cambios constituye su aceptación de la política
            modificada.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            13. Contacto
          </h2>
          <p className="text-gray-700 mb-4">
            Si tiene preguntas, inquietudes o solicitudes relacionadas con esta
            Política de Privacidad o nuestras prácticas de datos, contáctenos:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-800 font-semibold mb-2">
              TAP - Talent Access Portal
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@somostap.com"
                className="text-blue-600 hover:underline"
              >
                info@somostap.com
              </a>
            </p>
            <p className="text-gray-700">
              Teléfono:{" "}
              <a
                href="tel:+50688318394"
                className="text-blue-600 hover:underline"
              >
                +506 8831 8394
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            14. Cumplimiento Legal
          </h2>
          <p className="text-gray-700">
            Esta política cumple con las leyes de protección de datos aplicables
            en Costa Rica y regulaciones internacionales relevantes. Nos
            comprometemos a mantener el cumplimiento continuo con todas las
            leyes y regulaciones aplicables en materia de privacidad y
            protección de datos personales.
          </p>
        </section>
      </div>
    </div>
  );
}
