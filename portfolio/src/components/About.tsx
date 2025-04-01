import { GiAchievement } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
const About = () => {
  return (
    <div
      className="mx-auto lg:pt-10 max-w-[70%] mb-[200px] lg:h-screen lg:mb-0"
      id="about"
    >
      <div className="text-center mb-30">
        <p className="text-gray-700">Get To Know More</p>
        <h1 className="text-[30px] lg:text-[50px] font-bold">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-[200px] mb-20">
        <div className="w-[200px] lg:w-[400px] border border-solid rounded-[30px] p-4 text-center mb-10 lg:mb-0">
          <button>
            <GiAchievement size={30} />
          </button>
          <h1 className="text-[20px] lg:text-[30px] font-bold">Experience</h1>
          <p className="text-gray-700">1+ years</p>
          <p className="text-gray-700">Fullstack Development</p>
        </div>
        <div className="w-[200px] lg:w-[400px] border border-solid rounded-[30px] p-4 text-center">
          <button>
            <MdPeople size={30} />
          </button>
          <h1 className="text-[30px] font-bold">Education</h1>
          <p className="text-gray-700">Bachelor of Science in</p>
          <p className="text-gray-700">
            Computer Science and Information Technology
          </p>
        </div>
      </div>
      <div className="lg:text-[20px] text-gray-700">
        I'm a Full Stack Developer with 1 year of experience and a Bachelor of
        Science in Computer Science and Information Technology. I specialize in
        building web applications using React, Next.js, Django REST Framework,
        and FastAPI. I also have experience with DevOps tools and AWS, ensuring
        scalable and efficient deployments.
        <br /> <br /> I’m passionate about creating seamless, high-performance
        applications and constantly learning new technologies to stay ahead in
        the industry. Feel free to explore my work in the portfolio section, and
        reach out if you’d like to collaborate!
      </div>
    </div>
  );
};

export default About;
