import { FaTrophy, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

const Results = () => {
  const achievements = [
    { 
      icon: FaTrophy,
      title: "Proyectos Exitosos",
      value: "25+",
      description: "Proyectos completados con éxito para clientes satisfechos"
    },
    { 
      icon: FaChartLine,
      title: "Mejora de Rendimiento",
      value: "40%",
      description: "Aumento promedio en la eficiencia de aplicaciones optimizadas"
    },
    { 
      icon: FaUsers,
      title: "Clientes Felices",
      value: "100+",
      description: "Clientes satisfechos con soluciones personalizadas"
    },
    { 
      icon: FaLightbulb,
      title: "Innovaciones Implementadas",
      value: "15",
      description: "Nuevas tecnologías y metodologías introducidas en proyectos"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Resultados y Logros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 transform transition duration-300 hover:scale-105">
              <achievement.icon className="text-5xl text-teal-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white text-center mb-2">{achievement.title}</h3>
              <p className="text-3xl font-bold text-teal-300 text-center mb-2">{achievement.value}</p>
              <p className="text-gray-300 text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-800 bg-opacity-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Impacto en la Industria</h3>
          <p className="text-gray-300 text-center mb-6">
            Mi trabajo ha contribuido significativamente al avance tecnológico en diversas industrias, 
            desde startups innovadoras hasta empresas Fortune 500. He liderado iniciativas que han 
            transformado procesos empresariales y mejorado la experiencia del usuario en múltiples plataformas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">Optimización de Procesos</span>
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">Innovación Tecnológica</span>
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">Mejora de UX/UI</span>
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">Escalabilidad de Sistemas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
