import React from "react";

const ItemFirstFeatures = ({ url, text }) => {
  const handleClick = () => {
    window.location.href = "http://zalo.me/0907115677"; // Đường dẫn muốn chuyển đến
  };
  return (
    <div
      className="h-[444px] w-[281px] flex flex-col items-center "
      onClick={handleClick}
    >
      <div className="h-[356px] w-[281px] relative img-container">
        <img
          className="h-[356px] w-[281px] rounded-3xl"
          src={url}
          alt="xe tải chở thuê giá rẻ"
        />
        <a className=" hover:scale-125 transition duration-500 absolute top-2 right-2 bg-white text-violetf9 rounded-2xl py-[9px] px-[11px]">
          Đặt ngay
        </a>
      </div>
      <a className="font-poppins font-normal text-center text-[19px] mt-[22px]  hover:font-bold hover:underline rounded-2xl hover cursor-pointer">
        {text}
      </a>
    </div>
  );
};

export default ItemFirstFeatures;
