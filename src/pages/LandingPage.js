import { Link } from "react-router-dom";
import { Navbar, SideCard } from "../components";

/*Landing page imports*/
import leftBg from "../assets/left_bg_landing_header.svg";
import rightBg from "../assets/right_bg_landing_header.svg";
import tinyStars, {
  ReactComponent as TinyStars,
} from "../assets/tiny_stars_landing.svg";
import centerBg from "../assets/center_bg_landing_header.svg";
import { ReactComponent as InviteBg } from "../assets/invite_only_landing.svg";
import { ReactComponent as HangingBg } from "../assets/hanging_out_easy_landing.svg";
import { ReactComponent as ChillBg } from "../assets/just_chiling_landing.svg";
import { ReactComponent as FandomBg } from "../assets/fandom_landing.svg";

import { ReactComponent as DwnIcon } from "../assets/dwn_icon.svg";
import { ReactComponent as Discordlogo } from "../assets/discord_biglogo.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube_icon.svg";
import { ReactComponent as TwitterLogo } from "../assets/twitter_icon.svg";
import { ReactComponent as InstaLogo } from "../assets/instagram_icon.svg";
import { ReactComponent as FbLogo } from "../assets/facebook_icon.svg";

// const socialLogos = [
//   "youtube_icon.svg",
//   "twitter_icon.svg",
//   "instagram_icon.svg",
//   "facebook_icon.svg",
// ];

//const socialLogos = [youtubeLogo, twitterLogo, instaLogo, fbLogo];

const socialLogos = [YoutubeLogo, TwitterLogo, InstaLogo, FbLogo];

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
              <h1 className="uppercase font-extrabold font-header-font text-center align-baseline text-[46px] leading-[95%] mb-4">
                Imagine a place...
              </h1>

              <div className="text-[14px] text-center whitespace-normal leading-[1.625]">
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to talk
                every day and hang out more often.
              </div>
            </div>

            <div className="flex items-center text-[14px]">
              <button className="flex bg-[#ffffff] hover:text-[#404eed] rounded-full px-3 py-3 hover:shadow-[#00000033] shadow-2xl">
                <DwnIcon className="h-full" /> Download for Windows
              </button>

              <button className="text-white ml-5 bg-[#23272a] rounded-full px-3 py-3 hover:bg-[#23272a]/90">
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

      <section className="w-full h-screen truncate box-border px-[50px]">
        <div className="flex w-full h-full items-center">
          <InviteBg className="w-3/5 " />
          <SideCard
            title="Create an invite-only place where you belong"
            content="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
          />
        </div>
      </section>

      <section className="w-full h-screen bg-[#f6f6f6] truncate box-border px-[50px] ">
        <div className="flex flex-row-reverse w-full h-full items-center">
          <HangingBg className="w-3/5 " />
          <SideCard
            title="Where hanging out is easy"
            content="Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call."
          />
        </div>
      </section>

      <section className="w-full h-screen truncate box-border px-[50px]">
        <div className="flex w-full h-full items-center">
          <FandomBg className="w-3/5 " />
          <SideCard
            title="From few to a fandom"
            content="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
          />
        </div>
      </section>

      <section className=" w-full bg-[#f6f6f6] truncate px-[50px] py-10">
        <div className="flex flex-col w-full items-center">
          <h1 className="font-header-font text-[32px] font-black mb-4">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <div className="text-[14px] whitespace-normal text-center">
            Low-latency voice and video feels like you're in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </div>
          <ChillBg />
          <div className="relative font-extrabold my-5 text-[16px]">
            <TinyStars className="absolute scale-110" />
            Ready to start your journey?
          </div>

          <button className="flex bg-[#404eed] text-[white] text-[14px] hover:text-[#ffffff] rounded-full px-3 py-3 hover:bg-[#404eed]/60 hover:shadow-[#00000033] shadow-2xl">
            <DwnIcon /> Download for Windows
          </button>
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
              {socialLogos.map((Logo) => {
                return <Logo className="mr-3 w-[16px]" />;
                //return <img src={logo} alt="cool" className="mr-3 w-[16px]" />;
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
            <Discordlogo />
          </span>
          <Link to="/register">
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
