import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    alert(`Registro simulado para ${data.name}`);
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2 max-w-[600px] mx-auto">
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
              Crear cuenta nueva
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Inicia Sesión
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre completo
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      type="text"
                      className={`appearance-none block w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all sm:text-sm ${
                        errors.name
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-transparent"
                      }`}
                      {...register("name", {
                        required: "El nombre es requerido",
                      })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
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
                  <div className="mt-1">
                    <input
                      id="password"
                      type="password"
                      className={`appearance-none block w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all sm:text-sm ${
                        errors.password
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-transparent"
                      }`}
                      {...register("password", {
                        required: "La contraseña es requerida",
                        minLength: { value: 6, message: "Mínimo 6 caracteres" },
                      })}
                    />
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
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
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent flex items-end p-20">
          <div className="text-white">
            <h3 className="text-4xl font-bold">Únete a nosotros</h3>
            <p className="mt-4 text-lg text-gray-200">
              Accede a colecciones exclusivas y ofertas especiales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
