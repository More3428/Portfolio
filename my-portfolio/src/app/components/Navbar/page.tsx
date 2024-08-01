
const Navbar = () => {
  return (
    <nav className=" fixed-top w-full bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4 p-4">
        
        <li>
          <a href="#about" className="text-lg font-semibold text-white hover:text-blue-300">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-lg font-semibold text-white hover:text-blue-300" >
            Projects
          </a>

        </li>
        <li>
          <a href="#contact" className="text-lg font-semibold text-white hover:text-blue-300" >
            Contact
          </a>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;