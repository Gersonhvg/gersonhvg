import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import vq from '../../assets/images/vq.png';
import dcm from '../../assets/images/dcm.jpg';
import playphp from '../../assets/images/playphp.png';
const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Playground PHP ", 
      description: "Aplicación interactiva que permite a los usuarios adivinar las palabras.",
      tags: ["PHP", "JavaScript", "CSS"],
      image: playphp,
      github: "#",
      live: "http://fullplay.kesug.com/index.php"
    },
    {
      title: "Voice Quiz",
      description: "Plataforma de generación de cuestionarios con conexión QR a partir de grabaciones de audio en sesiones de aprendizaje.",
      tags: ["React", "Tailwind", "Flask", "Fireworks AI", "Mixtral 8x7b" ,"Supabase"],
      image: vq,
      github: "#",
      live: "https://voice-quiz-app.vercel.app/"
    },
    {
      title: "DASHBOARD CITAS MÉDICAS ", 
      description: "Indicadores de citas medicas con datos obtenidos del E.S.E Hospital Universitario de Santander.",
      tags: ["SQL Server", "Power BI", "Visual Studio"],
      image: dcm,
      github: "#",
      live: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F90271985-f7bf-48f0-a444-8ac7f936d0a9%2F2bcc2e8e-c479-4d98-9418-931e42771d37%2FDashboar_citas_medicas.jpg?table=block&id=62ff7a09-1c61-495c-9c19-01aa8fd7ba5e&spaceId=90271985-f7bf-48f0-a444-8ac7f936d0a9&width=2000&userId=ae77479a-3cf3-43da-a6ff-bb79ff1445b6&cache=v2"
    },
   
  ];

  return (
    <div id="projects" className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white  mb-12">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full max-h-48 object-cover" />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center ">
                    { project.github == "#" ? null : (
                      <a href={project.github} className="text-white ms-4 hover:text-teal-300 transition duration-300">
                        <FaGithub size={30} />
                      </a>
                    )}
                    { project.live == "#" ? null : (
                      <a href={project.live} className="text-white hover:text-teal-300 transition duration-300">
                        <FaExternalLinkAlt size={30} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    
                    <span key={tagIndex} className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;