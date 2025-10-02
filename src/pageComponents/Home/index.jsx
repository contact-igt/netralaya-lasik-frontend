import About from "@/component/About";
import AdvancedCataract from "@/component/AdvancedCataract";
import Faq from "@/component/Faq";
import Hero from "@/component/Hero";
import StickyForm from "@/component/StickyForm";
import TestimonalText from "@/component/TestimonalText";
import { HomeConstantData } from "@/constant/Home";

const HomePageComponent = () => {
  return (
    <>
      <Hero />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <AdvancedCataract
              cataractData={HomeConstantData?.AdvancedCataract}
            />

            <About aboutData={HomeConstantData?.About}/>

            <TestimonalText />

            <Faq />
          </div>
          <div className="col-lg-4">
            <StickyForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;
