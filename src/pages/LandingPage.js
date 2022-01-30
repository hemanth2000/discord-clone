import { Link } from "react-router-dom";
import { Navbar } from "../components";
import leftBg from "../assets/left_bg_landing_header.svg";
import rightBg from "../assets/right_bg_landing_header.svg";
import tinyStars from "../assets/tiny_stars_landing.svg";
import centerBg from "../assets/center_bg_landing_header.svg";
import inviteBg from "../assets/invite_only_landing.svg";
import dwnIcon from "../assets/dwn_icon.svg";
import discordlogo from "../assets/discord_biglogo.svg";
import youtubeLogo from "../assets/youtube_icon.svg";
import twitterLogo from "../assets/twitter_icon.svg";
import instaLogo from "../assets/instagram_icon.svg";
import fbLogo from "../assets/facebook_icon.svg";

// const socialLogos = [
//   "youtube_icon.svg",
//   "twitter_icon.svg",
//   "instagram_icon.svg",
//   "facebook_icon.svg",
// ];

const socialLogos = [youtubeLogo, twitterLogo, instaLogo, fbLogo];

const footerData = {
  Product: ["Download", "Nitro", "Status"],
  Company: ["About", "Jobs", "Branding", "Newsroom"],
  Resources: ["College", "Support", "Safety", "Blog", "Feedback"],
  Policies: [
    "Terms",
    "Privacy",
    "Cookie Settings",
    "Guidelines",
    "Acknowledgements",
  ],
};

function LandingPage(props) {
  return (
    <div>
      <section className="w-full h-screen truncate box-border">
        <div className="relative bg-[#404eed]  w-full h-full flex flex-col items-center">
          <Navbar />

          <div className="w-[70%] mt-[60px] flex flex-col items-center z-50">
            <div className="text-white mb-4">
              <h1 className="uppercase font-extrabold font-header-font text-center align-baseline text-[50px] leading-[95%] mb-4">
                Imagine a place...
              </h1>

              <div className="text-[16px] text-center whitespace-normal leading-[1.625]">
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to talk
                every day and hang out more often.
              </div>
            </div>

            <div>
              <button className="bg-[#ffffff] hover:text-[#404eed] rounded-full px-3 py-3 hover:shadow-[#00000033] shadow-2xl">
                <span className="flex">
                  <img src={dwnIcon} alt="down" />
                  Download for Windows
                </span>
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
      </section>

      <section className="w-full h-screen truncate box-border animate-[showme_1s_ease-in-out_1">
        <div className="flex w-full h-full items-center">
          <div className="w-3/5">
            <img src={inviteBg} alt="inviteBg" />
          </div>
          <div className="w-2/5 text-center whitespace-normal">
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
      </section>

      <section className="w-full bg-[#23272a] truncate box-border px-[50px]">
        <div className="flex justify-around pt-10 mb-5">
          <div className="w-[30%]">
            <h1 className="font-header-font font-extrabold uppercase text-[32px] text-[#5865f2] leading-[90%] whitespace-normal tracking-tighter">
              Imagine a place
            </h1>
            <div className="flex text-white text-[9px] my-2 items-center ">
              <img
                src={require("../assets/usa_flag.png")}
                className="w-[16px] h-full"
                alt="usa-flag"
              />
              <span className="ml-1">English, USA</span>
            </div>
            <div className="flex">
              {socialLogos.map((logo) => {
                return <img src={logo} alt="cool" className="mr-3 w-[16px]" />;
              })}
            </div>
          </div>

          {Object.keys(footerData).map((key) => (
            <div className="">
              <div className="text-[#5865f2] text-[10px]">{key}</div>
              {footerData[key].map((text) => (
                <div className="text-white mt-2 text-[10px] hover:underline hover:cursor-pointer">
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t-[1px] border-t-[#5865f2] py-3">
          <span className="inline-block w-[90px] text-[#fff] ">
            <img src={discordlogo} alt="discord_logo" />
          </span>
          <Link to="/login">
            {" "}
            <button className="bg-[#5865f2] text-[10px] px-2 py-1 rounded-full text-[#ffffff] font-medium hover:bg-[#5865f2]/70">
              Sign up
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
