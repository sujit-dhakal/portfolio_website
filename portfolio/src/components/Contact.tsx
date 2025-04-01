import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mx-auto lg:pt-10 max-w-[70%] lg:h-screen" id="contact">
      <div className="text-center mb-30">
        <p className="text-gray-700">Get in Touch</p>
        <h1 className="text-[30px] lg:text-[50px] font-bold">Contact Me</h1>
      </div>
      <div className="lg:w-[720px] mx-auto border border-solid p-4 lg:p-8 rounded-[20px]">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mr-2">
            <button className="flex mb-2">
              <IoMail size={30} className="mr-2" />
              <p className="lg:text-[20px]">sujitramdhakal59@gmail.com</p>
            </button>
          </div>
          <div className="mr-2">
            <button className="flex mb-2">
              <FaLinkedin size={30} className="mr-2" />
              <a
                href="https://www.linkedin.com/in/sujit-ram-dhakal-89243924a/"
                target="blank"
                className="lg:text-[20px]"
              >
                LinkedIn
              </a>
            </button>
          </div>
          <div>
            <button className="flex">
              <FaPhoneSquare size={30} className="mr-2" />
              <p className="lg:text-[20px]">+977 9865011999</p>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-700 mt-[200px] lg:mt-[400px]">
        Copyright © 2025 Sujit Ram Dhakal. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
