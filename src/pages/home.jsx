import React from "react";
import { useState } from "react";
import Avatar1 from "../../public/assets/avatar1.png";

export default function Home() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20">
      <div className="flex items-center justify-between mt-20">
        <button className="border-4 rounded-full border-[#fff] py-4 lg:px-48 font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
          CREATE RAFFLE
        </button>
        <button className="border-4 rounded-full border-[#fff] py-4 lg:px-48 font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
          BROWSE RAFFLES
        </button>
      </div>

      <div className="w-full my-14 justify-between">
        <h4 className="mb-6 font-semibold">Popular</h4>

        <div className="flex flex-wrap justify-between">
          <div className="p-2 mb-6 bg-black rounded-lg shadow-lg overflow-hidden w-[23%] flex items-center flex-col">
            <div className="relative rounded-lg h-[251px]">
              <img
                className="rounded-lg w-full h-full"
                src={Avatar1}
                alt="Avatar 1"
              />
              <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <i className="h-8 w-8 fa fa-heart" aria-hidden="true"></i>
                ) : (
                  <i className="h-8 w-8 fa fa-heart-o" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <div className="px-4 py-2 flex justify-between  w-full">
              <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
              <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
            </div>
            <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
              ENTER NOW
            </button>
          </div>

          <div className="p-2 bg-black rounded-lg shadow-lg overflow-hidden w-[23%] flex items-center flex-col">
            <div className="relative rounded-lg h-[251px]">
              <img
                className="rounded-lg w-full h-full"
                src={Avatar1}
                alt="Avatar 1"
              />
              <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <i className="h-8 w-8 fa fa-heart" aria-hidden="true"></i>
                ) : (
                  <i className="h-8 w-8 fa fa-heart-o" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <div className="px-4 py-2 flex justify-between  w-full">
              <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
              <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
            </div>
            <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
              ENTER NOW
            </button>
          </div>

          <div className="p-2 bg-black rounded-lg shadow-lg overflow-hidden w-[23%] flex items-center flex-col">
            <div className="relative rounded-lg h-[251px]">
              <img
                className="rounded-lg w-full h-full"
                src={Avatar1}
                alt="Avatar 1"
              />
              <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <i className="h-8 w-8 fa fa-heart" aria-hidden="true"></i>
                ) : (
                  <i className="h-8 w-8 fa fa-heart-o" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <div className="px-4 py-2 flex justify-between  w-full">
              <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
              <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
            </div>
            <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
              ENTER NOW
            </button>
          </div>

          <div className="p-2 bg-black rounded-lg shadow-lg overflow-hidden w-[23%] flex items-center flex-col">
            <div className="relative rounded-lg h-[251px]">
              <img
                className="rounded-lg w-full h-full"
                src={Avatar1}
                alt="Avatar 1"
              />
              <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <i className="h-8 w-8 fa fa-heart" aria-hidden="true"></i>
                ) : (
                  <i className="h-8 w-8 fa fa-heart-o" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <div className="px-4 py-2 flex justify-between  w-full">
              <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
              <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
            </div>
            <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
              ENTER NOW
            </button>
          </div>

          <div className="p-2 bg-black rounded-lg shadow-lg overflow-hidden w-[23%] flex items-center flex-col">
            <div className="relative rounded-lg h-[251px]">
              <img
                className="rounded-lg w-full h-full"
                src={Avatar1}
                alt="Avatar 1"
              />
              <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <i className="h-8 w-8 fa fa-heart" aria-hidden="true"></i>
                ) : (
                  <i className="h-8 w-8 fa fa-heart-o" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <div className="px-4 py-2 flex justify-between  w-full">
              <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
              <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
            </div>
            <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
              ENTER NOW
            </button>
          </div>

          <div className="p-2 bg-black rounded-lg shadow-lg overflow-hidden w-[23%] flex items-center flex-col">
            <div className="relative rounded-lg h-[251px]">
              <img
                className="rounded-lg w-full h-full"
                src={Avatar1}
                alt="Avatar 1"
              />
              <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <i className="h-8 w-8 fa fa-heart" aria-hidden="true"></i>
                ) : (
                  <i className="h-8 w-8 fa fa-heart-o" aria-hidden="true"></i>
                )}
              </button>
            </div>
            <div className="px-4 py-2 flex justify-between  w-full">
              <h4 className="text-[#fff] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
              <h4 className="text-[#9A46CA] text-[16px] font-bold text-xl mb-2">
                Isekai #3683
              </h4>
            </div>
            <button className="border-2 rounded-full px-4 border-[#fff] h-[38px] font-bold bg-[#9A46CA] hover:bg-[#5A32BF]">
              ENTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
