import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Rp</h1> {/* Updated font size */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rahul-pulluri-173924161/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rahulpulluri?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:rahulpulluri1@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
