import { useAuth } from "@/app/AuthContext";
import Link from "next/link";

const Navbar = () => {
  const { user, logout } =  useAuth(); 
  
  return (
    
    
    <nav className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 rounded-lg shadow-lg">
      <ul className="flex justify-center space-x-4 ">
        
        <li>
          <a href="/" className="text-lg font-semibold text-white hover:text-blue-300">
            About
          </a>
        </li>
        <li>
          <a href="/#projects" className="text-lg font-semibold text-white hover:text-blue-300" >
            Projects
          </a>

        </li>
        <li>
          <a href="/#contact" className="text-lg font-semibold text-white hover:text-blue-300">
            Contact
          </a>

        </li>
        <li>
          <Link href = "/Blog" replace>
          <p className="text-lg font-semibold text-white hover:text-blue-300" >
            Blog
          </p>
          </Link>

        </li>
        <li>
          {user ? (
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <a href="/Login" className="bg-black">
              <img src="/assets/editlogo1.png" alt="edit" className="w-6 h-6  drop-shadow-m"/>
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;