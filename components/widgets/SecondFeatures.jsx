"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";

import ItemSecondFeatures from "@components/ItemSecondFeatures";

const SecondFeatures = () => {
  const slides = [
    {
      uid: "a",
      name: "Dịch vụ chuyển nhà giá rẻ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/chuyennha.jpg",
    },
    {
      uid: "b",
      name: "Nhanh chóng & Gọn gàng",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/chuyennha1.jpg",
    },

    {
      uid: "c",
      name: "Đóng gói sạch sẽ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/chuyennha3.jpg",
    },
    {
      uid: "d",
      name: "Chuyển máy lạnh",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/chuyennha4.jpg",
    },
    {
      uid: "e",
      name: "Dịch vụ chuyển nhà giá rẻ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/slider6.jpg",
    },
    {
      uid: "f",
      name: "Hút bụi sạch sẽ",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/chuyennha2.gif",
    },
  ];
  return (
    <div className="mx-44">
      <div>
        <h3 className="font-poppins font-bold text-[44px] mt-[55px] mb-[25px]">
          DỊCH VỤ CHUYỂN NHÀ
        </h3>
        <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] mb-[50px]">
          Chúng tôi cung cấp dịch vụ chuyển nhà nhanh, gọn, dễ dàng giá rẻ{" "}
          <span>
            Chuyển nhà không còn là một gánh nặng khi bạn chọn dịch vụ của chúng
            tôi!
          </span>
        </p>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px]">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
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

export default SecondFeatures;
