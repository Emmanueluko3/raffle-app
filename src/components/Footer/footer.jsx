import React from "react";
import Logo from "../../assets/images/logo.svg";
import Solana from "../../assets/images/solana.png";
import Opensea from "../../assets/images/opensea.png";

const Footer = () => {
  return (
    <footer className="text-gray-200">
      <div className="container mx-auto py-6 px-4 flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-auto lg:flex-grow lg:flex-shrink-0 lg:flex lg:items-center">
          <a href="" className="h-16 w-16 lg:block mr-8">
            <img className="h-16 w-16" src={Logo} alt="Your Company" />
          </a>
          <div className="flex flex-col">
            <p className="mb-2 text-[16px] font-semibold">Powered by</p>
            <div className="flex">
              <a href="/" className="w-[30%] mr-3">
                <img src={Solana} className="w-full h-full" alt="Solana" />
              </a>
              <a href="/" className="w-[30%]">
                <img src={Opensea} className="w-full h-full" alt="Opensea" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              <i className="fa-brands fa-discord"></i>
            </a>
          </span>
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </span>
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              <i className="fa-brands fa-reddit-alien"></i>
            </a>
          </span>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-auto lg:flex-grow lg:flex-shrink-0 lg:flex lg:items-center">
          <a href="/" className="text-lg ">
            Copyright © 2023 IGamie Limited. All rights reserved.
          </a>
        </div>
        <div className="mt-4 lg:mt-0">
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              About
            </a>
          </span>
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              Privacy
            </a>
          </span>
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              Contact us
            </a>
          </span>
          <span className="mr-4">
            <a href="/" className="hover:text-gray-400">
              Disclaimer
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
