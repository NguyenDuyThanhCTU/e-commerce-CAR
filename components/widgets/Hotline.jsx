import { AiFillYoutube } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
const Hotline = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        className="w-[50px] h-[50px] bg-orange-700 flex justify-center items-center rounded-3xl call-animation"
        href="tel:0907115677"
      >
        <BsFillTelephoneFill className="w-[30px] h-[30px] text-white " />
      </a>

      <a
        className="w-[50px] h-[50px] bg-blue-600 flex justify-center items-center rounded-3xl spin-animation "
        href="http://zalo.me/0907115677"
      >
        <SiZalo className="w-[30px] h-[30px] text-white" />
      </a>
    </div>
  );
};

export default Hotline;
