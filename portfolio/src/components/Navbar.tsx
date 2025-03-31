import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NAVIGATION_LINKS = [
    {
      index: 1,
      name: "About",
      to: "#about",
    },
    {
      index: 2,
      name: "Experience",
      to: "#experience",
    },
    {
      index: 3,
      name: "Projects",
      to: "#projects",
    },
    {
      index: 4,
      name: "Contact",
      to: "#contact",
    },
  ];

  return (
    <div>
      <nav className="left-0 right-0 top-4">
        {/* Desktop menu */}
        <div className="mx-auto hidden max-w-[70%] p-8 lg:block">
          <div className="flex justify-between items-center text-center">
            <div className="">
              <a href="#" className="">
                <h1 className="text-[40px] font-[300] text-gray-700">
                  Sujit R. Dhakal
                </h1>
              </a>
            </div>
            <div className="">
              <ul className="flex gap-8">
                {NAVIGATION_LINKS.map((item) => (
                  <li
                    key={item.index}
                    className="text-[30px] font-[300] text-gray-700"
                  >
                    <a href={item.to}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="mx-auto max-w-2xl lg:hidden">
          <div className="flex justify-between items-center text-center p-2">
            <div className="">
              <a href="#" className="">
                <h1 className="text-[30px] font-[300]">Sujit R. Dhakal</h1>
              </a>
            </div>
            <div className="">
              <div onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <div>
                    <div>
                      <IoMdClose size={30} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <CiMenuBurger size={30} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-center">
            {isMobileMenuOpen ? (
              <ul className="w-full flex flex-col justify-center text-[30px] font-[300] bg-black text-white h-screen">
                {NAVIGATION_LINKS.map((item) => (
                  <li key={item.index} className="p-8">
                    <a href={item.to}>{item.name}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
