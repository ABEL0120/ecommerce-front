import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, loading, error } = useLogin();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 max-w-[600px] mx-auto relative">
        <Link
          to="/"
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-500 transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center lg:text-left">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
              Bienvenido de nuevo
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Regístrate gratis
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="nombre@empresa.com"
                      className={`appearance-none block w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all sm:text-sm ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-transparent"
                      }`}
                      {...register("email", {
                        required: "El correo es requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Correo inválido",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      className={`appearance-none block w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all sm:text-sm ${
                        errors.password
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-transparent"
                      }`}
                      {...register("password", {
                        required: "La contraseña es requerida",
                      })}
                    />
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm font-medium text-center bg-red-50 p-2 rounded">
                    {error}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      {...register("rememberMe")}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Recordarme
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Procesando..." : "Iniciar Sesión"}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    O continúa con
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920"
          alt="Fashion background"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-20">
          <div className="text-white">
            <h3 className="text-4xl font-bold">Descubre tu estilo</h3>
            <p className="mt-4 text-lg text-gray-200">
              La mejor moda, al mejor precio, en un solo lugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
