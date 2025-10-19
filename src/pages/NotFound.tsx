import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-gray-900 to-blue-950 text-white px-6">
      <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-slate-500 to-teal-600 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Página no encontrada
      </h2>
      <p className="mb-8 text-lg text-gray-300 text-center max-w-md">
        Puedes volver al inicio y segir explorando el portafolio.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-slate-500 to-teal-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Volver al Inicio
      </a>
    </div>
  )
}

export default NotFound
