import type { Route } from "./+types/_layout.terms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Términos y Condiciones - TAP" },
    {
      name: "description",
      content:
        "Términos y condiciones de uso del servicio TAP - Talent Access Portal. Lea los términos antes de utilizar nuestra plataforma.",
    },
  ];
}

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Términos y Condiciones del Servicio
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
            1. Aceptación de los Términos
          </h2>
          <p className="text-gray-700 mb-4">
            Bienvenido a TAP - Talent Access Portal. Estos Términos y
            Condiciones del Servicio ("Términos") constituyen un acuerdo legal
            vinculante entre usted ("Usuario", "usted" o "su") y TAP - Talent
            Access Portal ("nosotros", "nuestro" o "la Compañía") que rige su
            acceso y uso de nuestra plataforma de gestión de recursos humanos.
          </p>
          <p className="text-gray-700 mb-4">
            Al acceder o utilizar nuestros servicios, usted acepta estar
            legalmente obligado por estos Términos. Si no está de acuerdo con
            estos Términos, no debe utilizar nuestros servicios.
          </p>
          <p className="text-gray-700">
            Si está utilizando nuestros servicios en nombre de una organización,
            declara tener la autoridad legal para vincular a dicha organización
            a estos Términos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Descripción del Servicio
          </h2>
          <p className="text-gray-700 mb-3">
            TAP - Talent Access Portal proporciona una plataforma de software
            como servicio (SaaS) que mejora los procesos de peticiones de
            recursos humanos, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Gestión de solicitudes de ausencias y vacaciones</li>
            <li>Generación y administración de constancias laborales</li>
            <li>Flujos de aprobación personalizables</li>
            <li>Integración con sistemas de gestión empresarial</li>
            <li>Reportes y análisis de recursos humanos</li>
            <li>Portal de autoservicio para empleados</li>
          </ul>
          <p className="text-gray-700">
            Nos reservamos el derecho de modificar, suspender o descontinuar
            cualquier aspecto de nuestros servicios en cualquier momento, con o
            sin previo aviso.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Registro y Cuentas de Usuario
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.1 Elegibilidad
          </h3>
          <p className="text-gray-700 mb-4">
            Debe tener al menos 18 años para usar nuestros servicios. Al
            registrarse, declara y garantiza que cumple con este requisito de
            edad y que toda la información que proporciona es precisa y
            completa.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.2 Credenciales de Cuenta
          </h3>
          <p className="text-gray-700 mb-3">Usted es responsable de:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
            <li>Todas las actividades que ocurran bajo su cuenta</li>
            <li>
              Notificarnos inmediatamente sobre cualquier uso no autorizado
            </li>
            <li>Asegurar que su información de contacto esté actualizada</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            3.3 Suspensión y Terminación de Cuenta
          </h3>
          <p className="text-gray-700">
            Nos reservamos el derecho de suspender o terminar su cuenta si
            determinamos que ha violado estos Términos, ha utilizado el servicio
            de manera fraudulenta, o por cualquier otra razón a nuestra
            discreción razonable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Uso Aceptable
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.1 Conducta Permitida
          </h3>
          <p className="text-gray-700 mb-4">
            Usted acepta usar nuestros servicios únicamente para fines legítimos
            relacionados con la gestión de recursos humanos y de conformidad con
            todas las leyes y regulaciones aplicables.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.2 Conductas Prohibidas
          </h3>
          <p className="text-gray-700 mb-3">Usted no debe:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Usar el servicio para propósitos ilegales o no autorizados</li>
            <li>
              Intentar acceder a sistemas, datos o información sin autorización
            </li>
            <li>Interferir con el funcionamiento normal del servicio</li>
            <li>Cargar virus, malware u otro código malicioso</li>
            <li>
              Realizar ingeniería inversa, descompilar o desensamblar el
              software
            </li>
            <li>
              Copiar, modificar, distribuir o crear trabajos derivados del
              servicio
            </li>
            <li>
              Usar el servicio para enviar spam o comunicaciones no solicitadas
            </li>
            <li>Suplantar la identidad de otra persona u organización</li>
            <li>
              Recopilar información de otros usuarios sin su consentimiento
            </li>
            <li>Usar el servicio para acosar, intimidar o discriminar</li>
            <li>Violar derechos de propiedad intelectual de terceros</li>
            <li>
              Usar técnicas de scraping, crawling o extracción automatizada de
              datos
            </li>
            <li>Sobrecargar o intentar interrumpir nuestros servidores</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Propiedad Intelectual
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            5.1 Derechos de TAP
          </h3>
          <p className="text-gray-700 mb-4">
            Todos los derechos, títulos e intereses en y sobre el servicio,
            incluyendo todo el software, código, diseños, gráficos, texto,
            documentación, marcas comerciales y otros materiales, son y
            permanecerán como propiedad exclusiva de TAP - Talent Access Portal
            o nuestros licenciantes. Estos Términos no le otorgan ningún derecho
            de propiedad intelectual.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            5.2 Licencia Limitada
          </h3>
          <p className="text-gray-700 mb-4">
            Le otorgamos una licencia limitada, no exclusiva, no transferible y
            revocable para acceder y usar nuestros servicios de acuerdo con
            estos Términos. Esta licencia no incluye derechos de reventa, uso
            comercial, modificación o redistribución del servicio.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            5.3 Contenido del Usuario
          </h3>
          <p className="text-gray-700">
            Usted retiene todos los derechos sobre los datos que carga en
            nuestro servicio. Al usar el servicio, nos otorga una licencia
            mundial, libre de regalías para usar, almacenar, procesar y
            transmitir su contenido únicamente con el propósito de proporcionar
            y mejorar el servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Tarifas y Pagos
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            6.1 Tarifas del Servicio
          </h3>
          <p className="text-gray-700 mb-4">
            Las tarifas por el uso de nuestros servicios se establecen en su
            acuerdo de suscripción específico. Todas las tarifas son no
            reembolsables excepto cuando lo requiera la ley o se indique
            expresamente.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            6.2 Facturación y Renovación
          </h3>
          <p className="text-gray-700 mb-4">
            Las suscripciones se facturan por adelantado de forma mensual o
            anual, según lo acordado. Su suscripción se renovará automáticamente
            al final de cada período, a menos que cancele antes de la fecha de
            renovación.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            6.3 Cambios en las Tarifas
          </h3>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar nuestras tarifas con un aviso
            de al menos 30 días. Los cambios en las tarifas entrarán en vigor en
            su próximo período de facturación.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            6.4 Impuestos
          </h3>
          <p className="text-gray-700">
            Todas las tarifas son exclusivas de impuestos aplicables. Usted es
            responsable de pagar cualquier impuesto sobre ventas, uso, GST, IVA
            u otros impuestos aplicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Confidencialidad
          </h2>
          <p className="text-gray-700 mb-4">
            Ambas partes acuerdan mantener la confidencialidad de cualquier
            información confidencial a la que tengan acceso en virtud de estos
            Términos. Información confidencial incluye, pero no se limita a,
            información comercial, técnica, financiera y de empleados.
          </p>
          <p className="text-gray-700">
            Esta obligación no se aplica a información que: (a) sea de dominio
            público, (b) sea legalmente conocida por el receptor, (c) sea
            independientemente desarrollada, o (d) deba divulgarse por ley.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Seguridad y Protección de Datos
          </h2>
          <p className="text-gray-700 mb-4">
            Implementamos medidas de seguridad razonables para proteger sus
            datos. Sin embargo, ningún sistema es completamente seguro. Usted
            reconoce y acepta que no podemos garantizar la seguridad absoluta de
            sus datos.
          </p>
          <p className="text-gray-700">
            Nuestra recopilación y uso de datos personales se rige por nuestra
            Política de Privacidad, que forma parte integral de estos Términos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Nivel de Servicio y Disponibilidad
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            9.1 Disponibilidad
          </h3>
          <p className="text-gray-700 mb-4">
            Nos esforzamos por proporcionar un servicio confiable y de alta
            calidad. Sin embargo, no garantizamos que el servicio estará
            disponible de forma ininterrumpida o sin errores. El servicio puede
            estar sujeto a mantenimiento programado y no programado.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            9.2 Soporte Técnico
          </h3>
          <p className="text-gray-700">
            Proporcionamos soporte técnico según se especifique en su acuerdo de
            suscripción. Nos esforzamos por responder a consultas de soporte en
            un plazo razonable durante nuestro horario comercial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Limitación de Responsabilidad
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            10.1 Renuncia de Garantías
          </h3>
          <p className="text-gray-700 mb-4">
            EL SERVICIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD". EN
            LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, RENUNCIAMOS A TODAS LAS
            GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A
            GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR
            Y NO INFRACCIÓN.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            10.2 Limitación de Daños
          </h3>
          <p className="text-gray-700 mb-4">
            EN NINGÚN CASO TAP - TALENT ACCESS PORTAL, SUS DIRECTORES, EMPLEADOS
            O AGENTES SERÁN RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES,
            ESPECIALES, CONSECUENTES O PUNITIVOS, INCLUYENDO PERO NO LIMITADO A
            PÉRDIDA DE GANANCIAS, DATOS, USO, BUENA VOLUNTAD U OTRAS PÉRDIDAS
            INTANGIBLES, RESULTANTES DE:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Su acceso o uso o incapacidad de acceder o usar el servicio</li>
            <li>Cualquier conducta o contenido de terceros en el servicio</li>
            <li>Cualquier contenido obtenido del servicio</li>
            <li>
              Acceso no autorizado, uso o alteración de sus transmisiones o
              contenido
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            10.3 Límite Máximo
          </h3>
          <p className="text-gray-700">
            NUESTRA RESPONSABILIDAD TOTAL HACIA USTED POR CUALQUIER RECLAMO BAJO
            ESTOS TÉRMINOS NO EXCEDERÁ LA CANTIDAD QUE NOS HAYA PAGADO EN LOS 12
            MESES ANTERIORES AL EVENTO QUE DIO LUGAR A LA RESPONSABILIDAD.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Indemnización
          </h2>
          <p className="text-gray-700">
            Usted acepta indemnizar, defender y eximir de responsabilidad a TAP
            - Talent Access Portal, sus afiliados, directores, empleados y
            agentes de cualquier reclamo, daño, obligación, pérdida,
            responsabilidad, costo o deuda, y gastos (incluyendo honorarios
            legales) que surjan de: (a) su uso del servicio, (b) su violación de
            estos Términos, (c) su violación de derechos de terceros, o (d)
            cualquier contenido que proporcione.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Terminación
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            12.1 Terminación por el Usuario
          </h3>
          <p className="text-gray-700 mb-4">
            Puede terminar su cuenta en cualquier momento cancelando su
            suscripción. Seguirá teniendo acceso al servicio hasta el final de
            su período de facturación actual.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            12.2 Terminación por TAP
          </h3>
          <p className="text-gray-700 mb-4">
            Podemos suspender o terminar su acceso al servicio inmediatamente,
            sin previo aviso ni responsabilidad, por cualquier razón, incluyendo
            pero no limitado a violación de estos Términos.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            12.3 Efectos de la Terminación
          </h3>
          <p className="text-gray-700">
            Al terminar: (a) su derecho de uso cesará inmediatamente, (b)
            eliminaremos o anonimizaremos sus datos de acuerdo con nuestra
            Política de Privacidad, excepto cuando la retención sea requerida
            por ley, y (c) las disposiciones que por su naturaleza deban
            sobrevivir continuarán en vigor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            13. Resolución de Disputas
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            13.1 Ley Aplicable
          </h3>
          <p className="text-gray-700 mb-4">
            Estos Términos se regirán e interpretarán de acuerdo con las leyes
            de Costa Rica, sin dar efecto a ningún principio de conflicto de
            leyes.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            13.2 Jurisdicción
          </h3>
          <p className="text-gray-700 mb-4">
            Cualquier disputa derivada de estos Términos será sometida a la
            jurisdicción exclusiva de los tribunales de Costa Rica.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            13.3 Resolución Informal
          </h3>
          <p className="text-gray-700">
            Antes de iniciar cualquier acción legal, las partes acuerdan
            intentar resolver la disputa de manera informal durante al menos 30
            días mediante negociación de buena fe.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            14. Modificaciones a los Términos
          </h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar estos Términos en cualquier
            momento. Le notificaremos sobre cambios materiales publicando los
            nuevos términos en nuestro sitio web y actualizando la fecha de
            "Última actualización".
          </p>
          <p className="text-gray-700">
            Su uso continuado del servicio después de que los cambios entren en
            vigor constituye su aceptación de los nuevos términos. Si no está de
            acuerdo con los cambios, debe dejar de usar el servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            15. Disposiciones Generales
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            15.1 Acuerdo Completo
          </h3>
          <p className="text-gray-700 mb-4">
            Estos Términos, junto con nuestra Política de Privacidad y cualquier
            acuerdo de suscripción aplicable, constituyen el acuerdo completo
            entre usted y TAP - Talent Access Portal con respecto al servicio.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            15.2 Divisibilidad
          </h3>
          <p className="text-gray-700 mb-4">
            Si alguna disposición de estos Términos se considera inválida o
            inaplicable, dicha disposición será modificada o eliminada en la
            medida mínima necesaria, y las disposiciones restantes continuarán
            en pleno vigor y efecto.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            15.3 Renuncia
          </h3>
          <p className="text-gray-700 mb-4">
            Ninguna renuncia a cualquier término de estos Términos será
            considerada una renuncia adicional o continua de dicho término o de
            cualquier otro término.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            15.4 Cesión
          </h3>
          <p className="text-gray-700 mb-4">
            Usted no puede ceder o transferir estos Términos sin nuestro
            consentimiento previo por escrito. Podemos ceder estos Términos sin
            restricción.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            15.5 Fuerza Mayor
          </h3>
          <p className="text-gray-700">
            No seremos responsables por ningún retraso o falla en el
            cumplimiento debido a causas fuera de nuestro control razonable,
            incluyendo actos de Dios, guerra, terrorismo, disturbios, embargos,
            actos de autoridades civiles o militares, incendios, inundaciones,
            desastres naturales, huelgas, o escasez de medios de transporte,
            combustible, energía, mano de obra o materiales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            16. Contacto
          </h2>
          <p className="text-gray-700 mb-4">
            Si tiene preguntas sobre estos Términos y Condiciones, contáctenos:
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

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
          <p className="text-sm text-gray-700">
            <strong>Nota Importante:</strong> Estos términos y condiciones son
            un documento legal vinculante. Al utilizar nuestros servicios,
            confirma que ha leído, comprendido y aceptado estos términos. Le
            recomendamos que imprima o guarde una copia de estos términos para
            su referencia.
          </p>
        </div>
      </div>
    </div>
  );
}
