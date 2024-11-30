import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around">
        <li className="border-r border-white last:border-none px-4">
          <Link to="/" className="text-white font-bold hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li className="border-r border-white last:border-none px-4">
          <Link to="/about" className="text-white font-bold hover:text-yellow-400">
            About
          </Link>
        </li>
        <li className="border-r border-white last:border-none px-4">
          <Link to="/Gallery" className="text-white font-bold hover:text-yellow-400">
           Gallery
          </Link>
        </li>
        <li className="px-4">
          <Link to="/contact" className="text-white font-bold hover:text-yellow-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
