import React from "react";

const Footer = () => {
  return (
    <div className="px-44 mt-[45px] ">
      <div className="flex justify-between pb-[43px] border-b-2">
        <div className="flex  flex-col ">
          <div className="ml-15 mb-2 w-[140px] h-[60px]">
            <img src="imgs/logo.jpg" alt="" />
          </div>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe Tải Chở Thuê Cần Thơ</a>
            <a href="/">Thuê xe tải cần thơ</a>
            <a href="/">Tin tức</a>
            <a href="/">Liên hệ</a>
          </div>
        </div>
        <div className="flex  flex-col">
          <h3 className="font-poppins font-medium text-[18px] ml-15 mb-2">
            Từ khóa
          </h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe tai cho thue can tho</a>
            <a href="/">Dich vu xe tai cho hang can tho</a>
            <a href="/">Xe tải chở thuê Cần Thơ</a>
            <a href="/">Xe tải chở thuê Cần Thơ giá rẻ</a>
          </div>
        </div>
        <div className="flex  flex-col font-poppins ">
          <h3 className="font-poppins font-medium text-[18px] ml-15 mb-2">
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe Tải Chở Thuê Cần Thơ | Xe Tải Minh Trí</a>
            <a href="/">
              <strong>Địa chỉ:</strong> Cái Răng, Cần Thơ
            </a>
            <a href="/">
              <strong>Điện thoại:</strong> 0907 115 677
            </a>
            <a href="/">
              <strong>Email: </strong> xetaichothueminhtri@gmail.com
            </a>
            <a href="/">
              <strong>Website:</strong> http://xetaicanthogiare.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[14px] font-poppins font-normal my-[36px]">
        <p>Copyright © 2021ACEM</p>
        <p>Thiết kế bởi 3B Việt Nam</p>
      </div>
    </div>
  );
};

export default Footer;
