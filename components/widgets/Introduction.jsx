"use client";
import Button from "@components/Button";
import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Introduction = () => {
  return (
    <>
      <div className="mt-[180px] ml-[135px] mb-[78px] mr-[113px] flex flex-col items-center ">
        <div className="flex ">
          <div className="h-[430px] w-[537px]">
            <h2 className="font-sora font-bold text-[62px] leading-[72px]">
              Dịch vụ xe tải chở thuê, Chuyển nhà, thu mua đồ cũ Cần Thơ giá rẻ
            </h2>
            <p className="font-poppins font-normal text-gray5a w-[486px] pt-[20px] mb-[42px]">
              Chúng tôi với đội ngũ xe đa dạng đầu xe, tài xế tận tâm chuyển
              nghiệp, giá cả hợp lý - chỉ cần khách hàng thấy hài lòng là niềm
              hạnh phúc của chúng tôi.
            </p>
            <Button
              text="Chi tiết"
              style="button-white h-[56px] w-[190px] hover:bg-gray-100"
            />
          </div>
          <div className="w-[528px] h-[457px] ml-[127px] ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img
                  className="bg-[#FDF5F7]"
                  src="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image.png"
                  alt="introduction Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="bg-[#FDF5F7]"
                  src="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image2.png"
                  alt="introduction Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="bg-[#FDF5F7]"
                  src="https://ads-project3.s3.ap-southeast-2.amazonaws.com/Image3.png"
                  alt="introduction Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    src="/imgs/slider1.jpg"
                    alt="introduction Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    src="/imgs/slider2.jpg"
                    alt="introduction Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    src="/imgs/slider3.jpg"
                    alt="introduction Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    src="/imgs/slider4.jpg"
                    alt="introduction Image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div>
                  <img
                    className="bg-[#FDF5F7] min-w-full h-auto object-contain "
                    src="/imgs/slider5.jpg"
                    alt="introduction Image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mt-[150px] mb-[20px] w-[985px] h-[120px] flex justify-between items-center px-10 bg-[#FDFEFF] rounded-xl ">
          <div className="w-[660px] h-[60px] border-b-[1px] border-gray-200 flex items-center justify-between ">
            <p className="font-poppins font-light text-gray5a text-[18px]">
              Gọi ngay <strong> 0907 115 677</strong> (A Trí) để được phục vụ
              <strong> NHANH NHẤT CÓ THỂ</strong>.
            </p>
            <svg
              width="9"
              height="13"
              viewBox="0 0 9 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.55C9 3.95249 8.8836 3.36082 8.65746 2.80879C8.43131 2.25676 8.09984 1.75517 7.68198 1.33266C7.26412 0.910158 6.76804 0.575007 6.22208 0.346348C5.67611 0.117689 5.09095 0 4.5 0C3.90905 0 3.32389 0.117689 2.77792 0.346348C2.23196 0.575007 1.73588 0.910158 1.31802 1.33266C0.900156 1.75517 0.568688 2.25676 0.342542 2.80879C0.116396 3.36082 -8.80582e-09 3.95249 0 4.55C0 5.45155 0.263571 6.29005 0.710357 6.99725H0.705214C2.22236 9.399 4.5 13 4.5 13L8.29479 6.99725H8.29029C8.75341 6.26689 8.99971 5.41758 9 4.55ZM4.5 6.5C3.98851 6.5 3.49797 6.29455 3.13629 5.92886C2.77462 5.56316 2.57143 5.06717 2.57143 4.55C2.57143 4.03283 2.77462 3.53684 3.13629 3.17114C3.49797 2.80545 3.98851 2.6 4.5 2.6C5.01149 2.6 5.50203 2.80545 5.86371 3.17114C6.22538 3.53684 6.42857 4.03283 6.42857 4.55C6.42857 5.06717 6.22538 5.56316 5.86371 5.92886C5.50203 6.29455 5.01149 6.5 4.5 6.5Z"
                fill="#FC757C"
              />
            </svg>
          </div>

          <Button
            text="Đặt ngay"
            style="button-violet w-[194px] h-[72px] hover:bg-[#270bc9]"
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
