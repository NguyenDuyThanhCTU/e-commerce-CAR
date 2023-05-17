import FirstFeatures from "@components/widgets/FirstFeatures";
import Introduction from "@components/widgets/Introduction";
import SecondFeatures from "@components/widgets/SecondFeatures";
import Subcription from "@components/widgets/Subcription";
import Footer from "@components/widgets/Footer";
import Header from "@components/widgets/Header";
import ThirdFeatures from "@components/widgets/ThirdFeatures";
import FourthFeatures from "@components/widgets/FourthFeatures";

const page = () => {
  return (
    <>
      <div id="Home">
        <Header />
      </div>

      <Introduction />

      <div id="firstFeatures">
        <FirstFeatures />
      </div>
      <div>
        <SecondFeatures />
      </div>
      <div className="">
        <ThirdFeatures />
      </div>
      <div id="secondFeatures">
        <FourthFeatures />
      </div>
      <div id="subcription">
        <Subcription />
      </div>

      <Footer />
    </>
  );
};

export default page;
