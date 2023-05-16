import React from "react";

const ItemFirstFeatures = ({ url, text }) => {
  return (
    <div className="h-[444px] w-[281px] flex flex-col items-center ">
      <div className="h-[356px] w-[281px] relative img-container">
        <img
          className="h-[356px] w-[281px] rounded-3xl"
          src={url}
          alt="xe tải chở thuê giá rẻ"
        />
        <button className=" hover:scale-125 transition duration-500 absolute top-2 right-2 bg-white text-violetf9 rounded-2xl py-[9px] px-[11px]">
          Đặt ngay
        </button>
      </div>
      <a
        href="/"
        className="font-poppins font-normal text-center text-[19px] mt-[22px]  hover:font-bold hover:underline rounded-2xl"
      >
        {text}
      </a>
    </div>
  );
};

export default ItemFirstFeatures;
