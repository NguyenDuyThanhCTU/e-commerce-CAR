"use client";
import Button from "@components/Button";
import ItemFirstFeatures from "@components/ItemFirstFeatures";
import React, { useState } from "react";

const FirstFeatures = () => {
  const [Click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  };
  return (
    <div className=" px-44  bg-white flex flex-col items-center">
      <div className="flex flex-col items-center mt-[39px] ">
        <h3 className="font-poppins font-bold uppercase text-[44px] ">
          XE TẢI CHỞ THUÊ GIÁ RẺ
        </h3>
        <p className="font-poppins font-normal text-[16px] max-w-[479px] text-center text-gray5a">
          Vận chuyển hàng hóa nhanh, gọn, dễ dàng. Giá cả cạnh tranh, đầu xe
          phong phú các trọng tải, đi được hẻm nhỏ. Đồ nhỏ - đồ lớn chúng tôi
          nhận hết !
        </p>
      </div>
      <div className="grid grid-cols-4 gap-12  mt-[36px]">
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/home1.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/hom2.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/home3.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/home4.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        <ItemFirstFeatures
          url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
          text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
        />
        {Click ? (
          <>
            {" "}
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/home1.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/hom2.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/home3.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/home4.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
            <ItemFirstFeatures
              url="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.jpg"
              text=" Xe Tải Chở Thuê Minh Trí Chở Từ 750kg - 20 Tấn."
            />
          </>
        ) : null}
      </div>
      <Button
        text="Xem thêm"
        style="button-white h-[56px] mb-[32px] w-[190px] mt-[27px] hover:bg-gray-100"
        handleClick={handleClick}
      />
    </div>
  );
};

export default FirstFeatures;
