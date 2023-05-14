import React from "react";
import { useState } from "react";
import Avatar1 from "../assets/images/avatar1.png";
import Avatar2 from "../assets/images/avatar2.png";
import Avatar3 from "../assets/images/avatar3.png";
import Avatar4 from "../assets/images/avatar4.png";
import Avatar5 from "../assets/images/avatar5.png";
import Avatar6 from "../assets/images/avatar6.png";
import Avatar7 from "../assets/images/avatar7.png";
import Avatar8 from "../assets/images/avatar8.png";

const AvatarData = [
  {
    avatarImg: Avatar1,
    avatarName: "Isekai #3683",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar2,
    avatarName: "Pop It Punk #18431",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar3,
    avatarName: "Angry Ape #2591",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar4,
    avatarName: "Everybody #8122",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar5,
    avatarName: "YuGiYn #8755",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar6,
    avatarName: "Queen of Ether",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar7,
    avatarName: "PEC Friends #3400",
    avatarPrice: "49,267.89",
  },
  {
    avatarImg: Avatar8,
    avatarName: "PEC Friends #3400",
    avatarPrice: "49,267.89",
  },
];

export default function Home() {
  const [isFavorite, setIsFavorite] = useState(null);

  const handleFavorite = (index) => {
    if (isFavorite === index) {
      setIsFavorite(null);
    } else {
      setIsFavorite(index);
    }
  };

  const Avatars = AvatarData.map((item, index) => (
    <div
      key={index}
      className="p-2 lg:h-[360px] mb-6 mx-[1%] bg-black rounded-lg shadow-lg overflow-hidden lg:w-[23%] w-[90%] flex items-center flex-col"
    >
      <div className="relative rounded-lg h-[351px] lg:h-[251px] w-full">
        <img
          className="rounded-lg w-full h-full"
          src={item.avatarImg}
          alt="Avatar 1"
        />
        <button
          className="absolute top-0 h-10 w-10 m-2 right-0 p-3 text-center rounded-full flex justify-center items-center bg-gray-100 backdrop-blur-sm bg-white/30 hover:text-red-500"
          onClick={() => {
            handleFavorite(index);
          }}
        >
          {isFavorite == index ? (
            <i
              className="fa fa-heart h-full w-full text-red-700"
              aria-hidden="true"
            ></i>
          ) : (
            <i className="fa-regular fa-heart text-red-700"></i>
          )}
        </button>
      </div>
      <div className="px-4 py-2 flex justify-between  w-full">
        <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
          {item.avatarName}
        </h4>
        <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
          ${item.avatarPrice}
        </h4>
      </div>
      <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
        ENTER NOW
      </button>
    </div>
  ));
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20 mb-10">
      <div className="flex items-center flex-col lg:flex-row justify-between mt-16">
        <button className="border-4 rounded-full border-[#fff] lg:py-4 py-2 mb-4 lg:mb-0 lg:px-40 font-bold bg-[#9A46CA] hover:bg-[#5A32BF] lg:w-[40%] w-[90%] whitespace-nowrap">
          CREATE RAFFLE
        </button>
        <button className="border-4 rounded-full border-[#fff] lg:py-4 py-2 mb-4 lg:mb-0 lg:px-40 font-bold bg-[#9A46CA] hover:bg-[#5A32BF] lg:w-[40%] w-[90%] whitespace-nowrap">
          BROWSE RAFFLES
        </button>
      </div>

      <div className="w-full my-14">
        <h4 className="mb-6 font-semibold">Popular</h4>

        <div className="flex flex-wrap justify-center lg:justify-start">
          {Avatars}
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <button className="border-4 rounded-full border-[#fff] lg:py-4 py-2 mb-4 lg:mb-0 lg:px-40 font-bold bg-[#9A46CA] hover:bg-[#5A32BF] lg:w-[40%] w-[90%] whitespace-nowrap">
            BROWSE RAFFLES
          </button>
        </div>
      </div>

      <div className="w-full mb-14">
        <h2 className="text-[#6752BF] font-bold text-[55px] lg:text-[120px]">
          IGMI TOKEN
        </h2>
        <p className="lg:text-[28px] text-[18px] font-semibold uppercase text-white">
          IGMI Token is a utility token that will be used to power the iGamie
          gaming platform. It will be used for a variety of purposes, including:
        </p>
        <ul className="list-disc ml-10 lg:text-[28px] text-[18px] font-semibold uppercase text-white">
          <li>Paying for in-game items and services</li>
          <li>Staking to earn rewards</li>
          <li>Voting on governance proposals</li>
          <li>Participating in airdrops and giveaways</li>
        </ul>

        <p className="lg:text-[28px] text-[18px] font-semibold mb-8 uppercase text-white">
          IGMI Token is currently in development, and the team is working hard
          to make it the best it can be. Stay tuned for more updates!
        </p>

        <div className="w-full flex justify-center lg:justify-start">
          <a
            href=""
            className="border-4 flex justify-center rounded-full border-[#fff] lg:py-4 py-2 mb-4 lg:mb-0 lg:px-40 font-bold bg-[#9A46CA] hover:bg-[#5A32BF] lg:w-[40%] w-[90%] whitespace-nowrap"
          >
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="uppercase lg:text-[36px] leading-10 font-semibold">
          We don't want to let you down
        </h2>
        <p className="text-8 font-normal lg:w-[50%] text-center">
          Get notify to our public auction event, make sure you didn’t miss it.
          Enter your email below, so we can invite you to join the party.
        </p>
      </div>
    </div>
  );
}
