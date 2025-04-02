import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiDjango,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Experience = () => {
  const FRONTEND_SKILLS = [
    {
      id: 1,
      name: "HTML",
      level: "Intermediate",
      icon: <FaHtml5 />,
    },
    {
      id: 2,
      name: "CSS",
      level: "Basic",
      icon: <FaCss3 />,
    },
    {
      id: 3,
      name: "Javascript",
      level: "Intermediate",
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      name: "Typescript",
      level: "Basic",
      icon: <SiTypescript />,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      level: "Basic",
      icon: <SiTailwindcss />,
    },
    {
      id: 6,
      name: "React",
      level: "Intermediate",
      icon: <FaReact />,
    },
  ];
  const BACKEND_SKILLS = [
    {
      id: 1,
      name: "Postgresql",
      level: "Intermediate",
      icon: <BiLogoPostgresql />,
    },
    {
      id: 2,
      name: "Python",
      level: "Intermediate",
      icon: <FaPython />,
    },
    {
      id: 3,
      name: "Django REST Framework",
      level: "Intermediate",
      icon: <SiDjango />,
    },
    {
      id: 4,
      name: "FastAPI",
      level: "Intermediate",
      icon: <SiFastapi />,
    },
  ];
  const DEVOPS_CLOUD_SKILLS = [
    {
      id: 1,
      name: "Docker",
      level: "Basic",
      icon: <FaDocker />,
    },
    {
      id: 2,
      name: "Terraform",
      level: "Basic",
      icon: <SiTerraform />,
    },
    {
      id: 3,
      name: "CI/CD",
      level: "Basic",
      icon: <SiGithubactions />,
    },
    {
      id: 4,
      name: "AWS",
      level: "Basic",
      icon: <FaAws />,
    },
  ];

  return (
    <div
      id="experience"
      className="mx-auto lg:pt-10 max-w-[70%] mb-[200px] lg:mb-[250px]"
    >
      <div className="text-center mb-16">
        <p className="text-gray-500 text-xl">Explore My</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Experience
        </h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-3 mx-auto max-w-screen-xl">
        {/* Frontend Development */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-400">
            Frontend Development
          </h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {FRONTEND_SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-400">
            Backend Development
          </h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {BACKEND_SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps and Cloud */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-400">
            DevOps & Cloud
          </h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {DEVOPS_CLOUD_SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
