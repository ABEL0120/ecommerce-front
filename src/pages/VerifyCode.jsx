import { useForm } from "react-hook-form";
import useVerifyCode from "../hooks/useVerifyCode";

const VerifyCode = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { error, loading, verifyCode } = useVerifyCode();
  const codeValue = watch("code", "");
  const onSubmit = async (data) => {
    await verifyCode(data.code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Verifica tu identidad
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Hemos enviado un código a tu correo. <br />
            Ingrésalo para continuar.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-6">
            <div className="flex justify-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-12 h-14 border-2 rounded-lg flex items-center justify-center text-2xl font-bold bg-white transition-all
                    ${
                      errors.code
                        ? "border-red-300"
                        : index === (codeValue?.length || 0)
                        ? "border-indigo-500 ring-1 ring-indigo-500"
                        : "border-gray-200"
                    }
                    ${
                      (codeValue?.length || 0) > index
                        ? "text-gray-900 border-indigo-500"
                        : "text-gray-400"
                    }
                  `}
                >
                  {codeValue?.[index] || ""}
                </div>
              ))}
            </div>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer font-mono tracking-widest"
              {...register("code", {
                required: "El código es requerido",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "El código debe tener 6 dígitos",
                },
              })}
            />
          </div>

          {errors.code && (
            <p className="text-center text-red-500 text-sm font-medium">
              {errors.code.message}
            </p>
          )}

          {error && (
            <p className="text-center text-red-500 text-sm font-medium">
              {error}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50"
            >
              {loading ? "Verificando..." : "Verificar"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            ¿No recibiste el código?{" "}
            <button className="font-medium text-indigo-600 hover:text-indigo-500">
              Reenviar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
