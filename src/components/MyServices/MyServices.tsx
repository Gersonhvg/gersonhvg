import { FaReact, FaJava, FaPhp, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const MyServices = () => {
  const technologies = [
    { icon: FaReact, name: 'React' },
    { icon: SiSpringboot, name: 'Spring Boot' },
    { icon: FaPython, name: 'Python' },
    { icon: FaJava, name: 'Java' },
    { icon: FaPhp, name: 'PHP' },
    { icon: FaNodeJs, name: 'Node.js' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-teal-700 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white  mb-12 transform transition duration-500 hover:scale-105">
          Presentación
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-slate-900 bg-opacity-90  justify-between  rounded-3xl p-10 mb-12 shadow-2xl hover:shadow-teal-300/20 transition duration-900">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8 hover:scale-105 transform transition duration-500">
            <p className="text-white text-lg leading-relaxed mb-6 font-sans">
              Soy Gerson Vasquez, Bachiller de la carrera de Ingeniería de Computación y Sistemas. A lo largo de mi formación académica y profesional,
               he desarrollado una pasión por la tecnología y la innovación, especializándome en el desarrollo de software.
            </p>
            <p className="text-white text-lg leading-relaxed font-sans">
              Me motiva crear soluciones que no solo sean funcionales, sino que también aporten valor y mejoren la vida de los usuarios. Mi curiosidad y deseo constante de aprender me han llevado a dominar varias tecnologías, las cuales utilizo para construir aplicaciones eficientes y escalables.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Desarrollador" 
                className="hover:shadow-cyan-400/30   rounded-sm shadow-lg   object-cover relative transform transition duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center bg-slate-900 bg-opacity-90 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:bg-opacity-80 hover:shadow-lg hover:shadow-teal-900/90 ">
              <tech.icon className="text-5xl text-teal-300 mb-4" />
              <span className="text-white text-center font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;