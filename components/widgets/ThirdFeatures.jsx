"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules

import ItemSecondFeatures from "@components/ItemSecondFeatures";

const ThirdFeatures = () => {
  const slides = [
    {
      uid: "a",
      name: "Thu mua đồ cũ giá cao",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/slider6.jpg",
    },
    {
      uid: "2bbbb",
      name: "Chuyên thu mua đồ cũ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/docu6.jpeg",
    },
    {
      uid: "c",
      name: "Chuyên mua bán đồ cũ gia dụng",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/docu1.jpg",
    },
    {
      uid: "d",
      name: "Chuyên mua bán đồ cũ xưa",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/docu2.JPG",
    },
    {
      uid: "e",
      name: "Thu mua đồ cũ giá cao",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/slider4.jpg",
    },
    {
      uid: "f",
      name: "Thu mua đồ cũ giá cao",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/docu4.png",
    },
    {
      uid: "g",
      name: "Kho nội thất giá rẻ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/add7.jpg",
    },
    {
      uid: "h",
      name: "TKho nội thất cũ giá rẻ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/add8.jpg",
    },
  ];
  return (
    <div className="mx-44">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px]">
          THU MUA ĐỒ CŨ
        </h3>
        <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] mb-[50px]">
          Chúng tôi chuyên thu mua đồ cũ. Nếu bạn đang có nhu cầu thanh lý các
          món đồ cũ không còn sử dụng như đồ nội thất, đồ cũ xưa, đồ gia dụng
          thì hãy liên hệ với chúng tôi!
        </p>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px]">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={10}
          loop={true}
          className="mySwiper"
        >
          {slides.map((data) => (
            <SwiperSlide
              key={data.uid}
              //
            >
              <div className="swiper-slide2 max-w-[200px] h-[298px] inline-block z-0 object-contain">
                <ItemSecondFeatures nameItem={data.name} image={data.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThirdFeatures;
