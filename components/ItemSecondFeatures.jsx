import React from "react";

function ItemSecondFeatures(props) {
  const handleClick = () => {
    window.location.href = "http://zalo.me/0907115677"; // Đường dẫn muốn chuyển đến
  };
  const { nameItem, image, contact } = props;
  return (
    <div
      className="w-[360px] h-[450px] bg-white  rounded-b-xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-[360px] h-[352px] ">
        <img className=" rounded-t-xl" src={image} alt="img" />
      </div>

      <h3 className="font-poppins font-semibold text-[20px] py-[10px]   ">
        {nameItem}
      </h3>
    </div>
  );
}

export default ItemSecondFeatures;
