import { FaUsers, FaLightbulb, FaCode, FaDatabase, FaServer, FaArrowUp, FaBullseye, FaChartLine, FaComments } from 'react-icons/fa';

const Presentation = () => {
  const skills = [
    { icon: FaCode, name: 'Front-end', color: 'text-yellow-400' },
    { icon: FaServer, name: 'Back-end', color: 'text-green-400' },
    { icon: FaDatabase, name: 'Databases', color: 'text-blue-400' },
    { icon: FaChartLine, name: 'Data Analytics', color: 'text-red-400' }
  ];

  const qualities = [
    { icon: FaUsers, text: 'Colaboración' },
    { icon: FaArrowUp, text: 'Proactividad' },
    { icon: FaLightbulb, text: 'Análisis' },
    { icon: FaBullseye, text: 'Resultados' },
    { icon: FaComments, text: 'Comunicación' },
  ];

  return (
<div className="bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
  <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center px-4 text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">Gersonhvg</h1>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-300">Desarrollador Full Stack</h2>
    
    <p className="text-lg md:text-xl mb-8 leading-relaxed">
      En un mundo donde la tecnología es el motor del cambio, mi misión es convertir las ideas innovadoras en soluciones digitales. Con cada proyecto, fusiono diseño y desarrollo para crear plataformas que potencian a individuos y empresas.
    </p>
    
    <div className="flex justify-center mb-8 flex-wrap space-x-4 md:space-x-8">
      {qualities.map((quality, index) => (
        <div key={index} className="flex flex-col items-center group">
          <quality.icon className="text-3xl md:text-4xl mb-2 group-hover:animate-bounce" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
            {quality.text}
          </span>
        </div>
      ))}
    </div>
    
    <div className="flex justify-center space-x-8 mb-8 flex-wrap">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="cursor-pointer flex flex-col items-center transition-transform duration-500 hover:scale-110"
        >
          <skill.icon className={`text-3xl md:text-4xl ${skill.color} hover:rotate-12 transition-transform duration-500`} />
          <div className="mt-2 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300">
            {skill.name}
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex justify-center flex-wrap">
      <a href="#projects" className="bg-teal-600 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition duration-300 transform hover:scale-105 m-2">
        Descubre Mis Proyectos
      </a>
      <a href="#contact" className="bg-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300 transform hover:scale-105 m-2">
        Contáctame
      </a>
    </div>
  </div>
</div>

  );
};

export default Presentation;