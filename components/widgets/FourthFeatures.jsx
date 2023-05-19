"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules

import ItemSecondFeatures from "@components/ItemSecondFeatures";

const FourthFeatures = () => {
  const slides = [
    {
      uid: "1aaaa",
      name: "Xe tải cho thuê",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/hom2.jpg",
    },
    {
      uid: "2bbbb",
      name: "Xe tải cho thuê",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/home1.jpg",
    },
    {
      uid: "3cccc",
      name: "Xe tải cho thuê",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/home4.jpg",
    },
    {
      uid: "3caccc",
      name: "Xe tải cho thuê",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/img4.jpg",
    },
    {
      uid: "5eeee",
      name: "Xe tải cho thuê",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/img5.jpg",
    },
    {
      uid: "1aaasaaa",
      name: "Xe tải cho thuê",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/img6.jpg",
    },
  ];
  return (
    <div className="mx-44">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px]">
          THUÊ XE TẢI CẦN THƠ
        </h3>
        <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] mb-[50px]">
          Vận chuyển hàng hóa nhanh, gọn, dễ dàng. Giá cả cạnh tranh, đầu xe
          phong phú các trọng tải, đi được hẻm nhỏ. Đồ nhỏ - đồ lớn chúng tôi
          nhận hết !
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
              <div className="swiper-slide2 max-w-[200px] h-[298px] inline-block z-0 ">
                <ItemSecondFeatures nameItem={data.name} image={data.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FourthFeatures;
