import discordlogo from "../assets/discord_biglogo.svg";

function Navbar(props) {
  return (
    <nav className="w-[100%] flex justify-around items-center  pt-4">
      <span className="text-[#fff]">
        <img src={discordlogo} alt="discord_logo" />
      </span>

      <ul className="text-white  flex header-five">
        <li className="text-[10px] font-bold ml-4  hover:underline  hover:cursor-pointer inline-block">
          Download
        </li>

        <li className="text-[10px] font-bold ml-4  hover:underline  hover:cursor-pointer inline-block">
          Nitro
        </li>

        <li className="text-[10px] font-bold ml-4  hover:underline  hover:cursor-pointer inline-block">
          Safety
        </li>

        <li className="text-[10px] font-bold ml-4  hover:underline  hover:cursor-pointer inline-block">
          Support
        </li>

        <li className="text-[10px] font-bold ml-4  hover:underline  hover:cursor-pointer inline-block">
          Blog
        </li>

        <li className="text-[10px] font-bold ml-4  hover:underline hover:cursor-pointer inline-block">
          Careers
        </li>
      </ul>

      <button className="bg-[#fff] text-[10px] px-2 py-1 rounded-full text-[#23272a] font-medium hover:text-[#5865f2]">
        Open Discord
      </button>
    </nav>
  );
}

export default Navbar;
