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
    <div>
      <div
        className="mx-auto lg:pt-10 max-w-[70%] mb-[200px] lg:mb-[250px]"
        id="experience"
      >
        <div className="text-center mb-20">
          <p className="text-gray-700">Explore My</p>
          <h1 className="text-[30px] lg:text-[50px] font-bold mb-20">
            Experience
          </h1>
        </div>
        <div>
          <div className="mb-5">
            <h1 className="text-[20px] text-center lg:text-[30px] font-bold mb-2">
              Frontend Development
            </h1>
            <div className="flex flex-wrap justify-between lg:gap-[120px] border border-solid p-2 rounded-[10px]">
              {FRONTEND_SKILLS.map((skill) => (
                <div key={skill.id} className="text-center">
                  <button>{skill.icon}</button>
                  <h1 className="text-[20px] font-bold">{skill.name}</h1>
                  <p className="text-gray-700">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] text-center lg:text-[30px] font-bold mb-2">
              Backend Development
            </h1>
            <div className="flex flex-wrap justify-between border border-solid p-2 rounded-[10px]">
              {BACKEND_SKILLS.map((skill) => (
                <div key={skill.id} className="text-center">
                  <button>{skill.icon}</button>
                  <h1 className="text-[20px] font-bold">{skill.name}</h1>
                  <p className="text-gray-700">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] text-center lg:text-[30px] font-bold mb-2">
              Devops and Cloud
            </h1>
            <div className="flex flex-wrap justify-between lg:gap-[120px] border border-solid p-2 rounded-[10px]">
              {DEVOPS_CLOUD_SKILLS.map((skill) => (
                <div key={skill.id} className="text-center">
                  <button>{skill.icon}</button>
                  <h1 className="text-[20px] font-bold">{skill.name}</h1>
                  <p>{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
