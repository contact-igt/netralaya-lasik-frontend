import AdvancedCataract from "@/component/AdvancedCataract";
import Hero from "@/component/Hero";
import StickyForm from "@/component/StickyForm";
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
