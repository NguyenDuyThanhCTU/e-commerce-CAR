"use client";
import Button from "@components/Button";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const clickedStyle = "font-bold";
  const clickStyle = "font-medium";
  const [click, setClick] = useState(0);

  return (
    <div className="flex z-10 fixed top-0 justify-between items-center h-[98px] w-full px-60 bg-[#FDF5F7]">
      <div className="w-[140px] h-[60px]">
        <img
          src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/logo.jpg"
          alt="logo"
        />
      </div>
      <div className="flex flex-row items-center">
        <ul className=" flex flex-row font-poppins  w-[600px] justify-between relative">
          <Link to="Home" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 0 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(0)}
            >
              Trang chủ
            </button>{" "}
          </Link>
          <Link to="firstFeatures" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 1 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(1)}
            >
              Xe tải chở thuê Cần Thơ
            </button>
          </Link>
          <Link to="secondFeatures" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 2 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(2)}
            >
              Thuê xe tải Cần Thơ
            </button>
          </Link>
          <Link to="subcription" spy={true} smooth={true} duration={500}>
            <button
              className={`${
                click === 3 ? clickedStyle : clickStyle
              } text-gray4a hover:scale-125 transition duration-500 `}
              onClick={() => setClick(3)}
            >
              Tin tức
            </button>
          </Link>
          <div
            className={`bg-violetf9 w-[10px] h-1 rounded-xl absolute -bottom-2 ${
              click === 0
                ? "translate-x-[35px] transform  transition duration-1000"
                : click === 1
                ? "translate-x-[210px]  transform  transition duration-1000"
                : click === 2
                ? "translate-x-[420px]  transform  transition duration-1000"
                : click === 3
                ? "translate-x-[570px]  transform  transition duration-1000"
                : null
            } `}
          ></div>
        </ul>
        <div className="ml-[70px]">
          <Button
            text="Liên hệ"
            style="button-violet h-[50px] w-[154px] hover:bg-[#270bc9]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
