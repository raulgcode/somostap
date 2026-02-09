import type { Route } from "./+types/_index";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TAP - Talent Access Portal | Próximamente" },
    {
      name: "description",
      content:
        "TAP - Talent Access Portal. Estamos trabajando en algo increíble. Próximamente disponible.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/tap-logo.png"
              alt="TAP - Talent Access Portal"
              className="h-20 mx-auto"
            />
          </div>

          {/* Construction Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitio en Construcción
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8">
            Estamos trabajando para traerte una experiencia increíble.
            <br />
            <span className="text-blue-600 font-semibold">Próximamente disponible.</span>
          </p>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">
              ¿Tienes preguntas? Contáctanos:
            </p>
            <a
              href="mailto:info@somostap.com"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              <svg
                className="w-5 h-5"
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
              info@somostap.com
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              Privacidad
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              Términos
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} TAP - Talent Access Portal
        </p>
      </footer>
    </div>
  );
}
