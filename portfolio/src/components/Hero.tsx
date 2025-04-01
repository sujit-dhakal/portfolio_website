import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-61px)]">
      <div className="lg:pr-4 mb-10 lg:mb-0">
        <img
          src="profilepic.jpg"
          alt="Image"
          className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] object-cover rounded-full"
        />
      </div>
      <div className="lg:pl-4 lg:w-[430px] text-center">
        <p className="text-gray-700 font-semibold">Hello, I'm</p>
        <ReactTyped
          strings={["Sujit Ram Dhakal"]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-[30px] font-bold"
        />
        <p className="text-gray-700 font-semibold text-[20px] mb-2">
          Fullstack Developer
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <button className="mb-2 w-[200px] p-2 border border-solid rounded-[20px] hover:text-white hover:bg-black">
            <a href="#" download="SujitRamDhakal__Resume.pdf">
              Download CV
            </a>
          </button>
          <button className="w-[200px] p-2 bg-black text-white border border-solid rounded-[20px] mb-2">
            <a href="#contact">Contact Info</a>
          </button>
        </div>
        <div>
          <button className="mr-2">
            <a href="https://github.com/sujit-dhakal" target="blank">
              <FaGithub size={30} />
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/sujit-ram-dhakal-89243924a/"
              target="blank"
            >
              <FaLinkedin size={30} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
