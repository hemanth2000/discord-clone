import { Navbar } from ".";
import leftBg from "../assets/left_bg_landing_header.svg";
import rightBg from "../assets/right_bg_landing_header.svg";
import tinyStars from "../assets/tiny_stars_landing.svg";
import centerBg from "../assets/center_bg_landing_header.svg";
import inviteBg from "../assets/invite_only_landing.svg";

function LandingPage(props) {
  return (
    <div>
      <div className="relative bg-[#404eed] w-screen h-screen truncate flex flex-col items-center">
        <Navbar />

        <div className="w-[70%] mt-[60px] flex flex-col items-center z-50">
          <div className="text-[#fff] mb-4">
            <h1 className="uppercase font-extrabold display-1 text-center align-baseline text-[50px] leading-[95%] mb-4">
              Imagine a place...
            </h1>

            <div className="text-[16px] text-center whitespace-normal leading-[1.625]">
              "...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often."
            </div>
          </div>

          <div>
            <button className="bg-white hover:text-[#404eed] rounded-full px-3 py-3 hover:shadow-[#00000033] shadow-2xl">
              Download for Windows
            </button>
            <button className="text-white ml-5 bg-[#23272a] rounded-full px-3 py-3">
              Open Discord in your browser
            </button>
          </div>
        </div>

        <div className="absolute bottom-0">
          <img src={centerBg} alt="centerBg" />
        </div>

        <div className="">
          <img src={tinyStars} alt="tinystars" />
        </div>

        <div className="w-[50%] absolute -left-[230px] bottom-0">
          <img src={leftBg} alt="leftbg" />
        </div>

        <div className="w-[50%] absolute -right-[230px] bottom-0">
          <img src={rightBg} alt="rightbg" />
        </div>
      </div>

      <div className="flex w-screen h-screen truncate items-center">
        <div className="w-[60%]">
          <img src={inviteBg} alt="inviteBg" />
        </div>
        <div className="w-[40%] text-center whitespace-normal">
          <h1 className="text-[48px] text-[#23272a] leading-[120%] font-bold display-2">
            Create an invite-only place where you belong
          </h1>
          <div className=" mt-[10px] text-[#23272a] leading-[1.625]">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default LandingPage;
