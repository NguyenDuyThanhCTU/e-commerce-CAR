"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";

import ItemSecondFeatures from "@components/ItemSecondFeatures";

const SecondFeatures = () => {
  const slides = [
    {
      uid: "1aaaa",
      name: "Dịch vụ chuyển nhà giá rẻ",
      image: "/imgs/chuyennha.jpg",
    },
    {
      uid: "2bbbb",
      name: "Nhanh chóng & Gọn gàng",
      image: "/imgs/chuyennha1.jpg",
    },

    {
      uid: "3caccc",
      name: "Đóng gói sạch sẽ",
      image: "/imgs/chuyennha3.jpg",
    },
    {
      uid: "5eeee",
      name: "Chuyển máy lạnh",
      image: "/imgs/chuyennha4.jpg",
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
          <p>
            Chuyển nhà không còn là một gánh nặng khi bạn chọn dịch vụ của chúng
            tôi!
          </p>
        </p>
      </div>

      <div className="bg-[#FDF5F7] mb-[50px]">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={2}
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
