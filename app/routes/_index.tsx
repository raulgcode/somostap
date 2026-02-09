import type { Route } from "./+types/_index";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TAP - Talent Access Portal | Soluciones Modernas de RRHH" },
    {
      name: "description",
      content:
        "Moderniza tu gestión de recursos humanos con TAP. Solicitudes de ausencias, constancias y flujos de aprobación simplificados para tu empresa.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/tap-logo.png"
              alt="TAP - Talent Access Portal"
              className="h-12"
            />
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Inicio
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Privacidad
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Términos
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 bg-linear-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Moderniza tu gestión de <span className="text-blue-600">RRHH</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Optimiza y lleva tus procesos de recursos humanos al
            siguiente nivel. Solicitudes de ausencias, constancias y
            aprobaciones más simples que nunca.
          </p>
          <a
            href="mailto:info@somostap.com"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Solicitar Demo
          </a>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir TAP?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Integración con tu Sistema
              </h3>
              <p className="text-gray-600">
                Conectividad perfecta con tu sistema de gestión existente. No más
                duplicación de datos ni procesos manuales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Gestión Ágil de Ausencias
              </h3>
              <p className="text-gray-600">
                Solicita vacaciones, permisos y ausencias en segundos.
                Aprobaciones automáticas y notificaciones en tiempo real.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Constancias Automáticas
              </h3>
              <p className="text-gray-600">
                Genera constancias laborales al instante. Reduce la carga
                administrativa y mejora la experiencia del empleado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Flujos de Aprobación
              </h3>
              <p className="text-gray-600">
                Configura jerarquías y flujos personalizados. Aprobaciones
                inteligentes que respetan tu estructura organizacional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Interfaz Moderna
              </h3>
              <p className="text-gray-600">
                Olvídate de interfaces complicadas. Diseño intuitivo y
                responsivo que funciona en cualquier dispositivo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Reportes y Analytics
              </h3>
              <p className="text-gray-600">
                Visualiza métricas importantes. Toma decisiones informadas con
                datos en tiempo real sobre tu equipo.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mejora tu Portal de RRHH
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Los portales tradicionales no fueron diseñados para la gestión
              moderna de RRHH. TAP complementa y mejora tu experiencia con una
              interfaz amigable, procesos optimizados y la funcionalidad que tus
              empleados necesitan.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu RRHH?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Contáctanos hoy y descubre cómo podemos ayudarte a optimizar tus
              procesos.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <svg
                  className="w-8 h-8 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="font-semibold mb-1">Email</div>
                <a
                  href="mailto:info@somostap.com"
                  className="text-blue-100 hover:text-white transition"
                >
                  info@somostap.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <svg
                  className="w-8 h-8 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="font-semibold mb-1">Teléfono</div>
                <a
                  href="tel:+50688318394"
                  className="text-blue-100 hover:text-white transition"
                >
                  +506 8831 8394
                </a>
              </div>
            </div>

            <a
              href="mailto:info@somostap.com"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Contáctanos Ahora
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} TAP - Talent Access Portal. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
