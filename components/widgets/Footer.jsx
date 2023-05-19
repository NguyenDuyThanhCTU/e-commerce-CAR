const Footer = () => {
  return (
    <div className="px-44 mt-[45px] ">
      <div className="flex justify-between pb-[43px] border-b-2">
        <div className="flex  flex-col ">
          <div className="ml-15 mb-2 w-[140px] h-[60px]">
            <img
              src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/xetaiminhtri/logo.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe Tải Chở Thuê Cần Thơ</a>
            <a href="/">Thuê xe tải cần thơ</a>
            <a href="/">Tin tức</a>
            <a href="/">Liên hệ</a>
          </div>
        </div>
        <div className="flex items-center  flex-col">
          <h3 className="font-poppins font-medium text-[18px]  mb-2">
            Từ khóa
          </h3>
          <div className="flex flex-col font-light text-[16px] font-poppins">
            <a href="/">Xe tải cho thuê Cần Thơ</a>
            <a href="/">Dịch vụ xe tải chở hàng Cần Thơ </a>
            <a href="/">Thu mua đồ cũ Cần Thơ</a>
            <a href="/">Chuyển nhà giá rẻ Cần Thơ</a>
          </div>
        </div>
        <div className="flex  flex-col items-center font-poppins ">
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

      <div className="flex justify-center text-[14px] font-poppins font-normal my-[36px]">
        <p className="pr-2">©2022 All Rights reserved ADS Company</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by Thanh Dev ADS Company
        </p>
      </div>
    </div>
  );
};

export default Footer;
