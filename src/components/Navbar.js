import { Link } from "react-router-dom";
import discordlogo from "../assets/discord_biglogo.svg";

function Navbar(props) {
  return (
    <nav className="w-full flex justify-around items-center  pt-4">
      <span className="text-[white] w-[100px]">
        <img src={discordlogo} alt="discord_logo" className="w-full" />
      </span>

      <ul className="text-white  flex header-five">
        {["Download", "Nitro", "Safety", "Support", "Blog", "Careers"].map(
          (title) => (
            <li className="text-[10px] font-bold ml-4  hover:underline  hover:cursor-pointer inline-block">
              {title}
            </li>
          )
        )}
      </ul>
      <Link to="/login">
        {" "}
        <button className="bg-[#fff] text-[10px] px-2 py-1 rounded-full text-[#23272a] font-medium hover:text-[#5865f2]">
          Open Discord
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
