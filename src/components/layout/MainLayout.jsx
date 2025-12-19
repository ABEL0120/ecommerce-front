import { Outlet, Link } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { useState, useEffect } from "react";

const MainLayout = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const { user } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors">
                E
              </div>
              <span
                className={`text-xl font-bold tracking-tight ${
                  scrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                Ecommerce
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="#"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Hombres
              </Link>
              <Link
                to="#"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Mujeres
              </Link>
              <Link
                to="#"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Accesorios
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-gray-600 hidden sm:block">
                    {"Bienvenido " + user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors px-3 py-2"
                  >
                    Ingresar
                  </Link>
                  <Link
                    to="/register"
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 hidden sm:block"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Tienda
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Nuevas Llegadas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Destacados
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Soporte
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Envíos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Términos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Social
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; 2025 Ecommerce Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
