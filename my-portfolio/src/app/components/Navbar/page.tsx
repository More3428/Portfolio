
const Navbar = () => {
  return (
    
    <nav className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 rounded-lg shadow-lg">
      <ul className="flex justify-center space-x-4 ">
        
        <li>
          <a href="/" className="text-lg font-semibold text-white hover:text-blue-300">
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