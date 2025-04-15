const Projects = () => {
  return (
    <div
      className="mx-auto lg:pt-10 max-w-[70%] mb-[200px] lg:mb-[250px]"
      id="projects"
    >
      <div className="text-center mb-30">
        <p className="text-gray-700">Browse My Recent</p>
        <h1 className="text-[30px] lg:text-[50px] font-bold">Projects</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-[100px] mb-20">
        <div className="w-[200px] lg:w-[500px] border border-solid rounded-[30px] p-4 text-center mb-10 lg:mb-0">
          <img
            src="ecommerce.jpg"
            alt="Ecommerce"
            className="mb-2 lg:h-[300px]"
          />
          <h1 className="text-[20px] lg:text-[30px] font-bold mb-2">
            Ecommerce
          </h1>
          <button className="text-gray-700 border border-solid rounded-[20px] py-4 px-8 hover:text-white hover:bg-black">
            <a href="https://github.com/sujit-dhakal/EcomNepal" target="blank">
              Github
            </a>
          </button>
        </div>
        <div className="w-[200px] lg:w-[500px] border border-solid rounded-[30px] p-4 text-center">
          <img src="chatbot.png" alt="Chatbot" className="mb-2 lg:h-[300px]" />
          <h1 className="text-[30px] font-bold mb-2">Chatbot</h1>
          <button className="text-gray-700 border border-solid rounded-[20px] py-4 px-8 hover:text-white hover:bg-black">
            <a href="https://github.com/sujit-dhakal/chat-bot" target="blank">
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
