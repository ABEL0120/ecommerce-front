const Home = () => {
  const products = [
    {
      id: 1,
      name: "Minimalist Watch",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      name: "Leather Bag",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      name: "White Sneakers",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      name: "Sunglasses",
      price: "$150",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900 overflow-hidden isolate">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920"
          alt="Hero background"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Eleva tu estilo <br />{" "}
              <span className="text-indigo-400">cada día.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Descubre nuestra nueva colección de temporada. Diseños
              minimalistas y materiales premium pensados para ti.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Comprar Ahora
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors"
              >
                Ver Colección <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending Now
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Ver todo <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 transition-opacity">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Premium Collection
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-700 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Suscríbete a nuestras noticias.
              </h2>
              <p className="mt-4 text-lg leading-8 text-indigo-200">
                Recibe ofertas exclusivas, novedades y consejos de estilo
                directamente en tu bandeja de entrada.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-indigo-200"
                  placeholder="Ingresa tu email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Suscribirme
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Lanzamientos Semanales
                </dt>
                <dd className="mt-2 leading-7 text-indigo-200">
                  Nuevos productos cada semana para mantener tu estilo fresco.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">Sin Spam</dt>
                <dd className="mt-2 leading-7 text-indigo-200">
                  Odiamos el spam tanto como tú. Solo contenido de calidad.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
