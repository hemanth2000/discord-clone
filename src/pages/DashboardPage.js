import { Link } from "react-router-dom";

import { ReactComponent as DiscordMiniIcon } from "../assets/discord_mini_icon.svg";
import { ReactComponent as DwnIcon } from "../assets/dwn_icon.svg";

import { ReactComponent as PlusIcon } from "../assets/dashboard/plus_icon.svg";
import { ReactComponent as Friends } from "../assets/dashboard/friends.svg";
import { ReactComponent as NitroIcon } from "../assets/dashboard/nitro_icon.svg";
import { ReactComponent as StageDiscIcon } from "../assets/dashboard/stage_discovery.svg";
import { ReactComponent as UserPlusIcon } from "../assets/dashboard/user_plus_icon.svg";
import { ReactComponent as LaughIcon } from "../assets/dashboard/1f603.svg";
import { ReactComponent as DMIcon } from "../assets/dashboard/dm_icon.svg";

const conversations = {
  Friends: Friends,
  "Stage Discovery": StageDiscIcon,
  Nitro: NitroIcon,
};

function DashboardPage(props) {
  return (
    <div className="w-full h-screen flex items-stretch">
      <div className="bg-[#202225] flex flex-col p-1 pt-2 space-y-2 items-center">
        <DiscordMiniIcon className="text-white py-[8px] px-[5px] bg-[#5865f2] rounded-lg" />

        <div className="w-[40px] rounded-lg overflow-hidden">
          <img
            src={require("../assets/new_line.png")}
            alt="newline"
            className="w-full"
          />
        </div>
        <PlusIcon className="text-[#3ba55d] bg-[#36393f] p-3 rounded-full" />
        <DwnIcon className="text-[#3ba55d] bg-[#36393f] p-3 rounded-full" />
      </div>

      <div className="flex flex-col bg-[#393c43] p-2 text-[10px] text-[#8e9297]">
        <div className="search-bar">
          <input
            type="text"
            className="bg-[#202225] focus:outline-none hover:cursor-pointer rounded-sm p-[5px] "
            placeholder="Find or start a conversation"
          />
        </div>

        <div className="conversations mt-2">
          {Object.keys(conversations).map((key) => {
            const Icon = conversations[key];
            return (
              <div className="flex items-center text-[12px] pl-[5px] py-[8px] rounded-sm hover:text-white hover:cursor-pointer hover:bg-[#2f3136]">
                <Icon className="h-[13px] mr-2" /> {key}
              </div>
            );
          })}

          <div className="friends-list">
            <div className="flex items-center justi1fy-between hover:text-white">
              <h4 className="uppercase  text-[10px]">Direct Messages</h4>
              <PlusIcon className="h-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
