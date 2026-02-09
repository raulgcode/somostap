import { Outlet, Link } from "react-router";

export default function IndexLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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

      <main className="flex-1 bg-white">
        <Outlet />
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
