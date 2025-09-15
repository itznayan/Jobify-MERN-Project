import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import Layer from "../../utils/Layer";

const Home = () => {
  return (
    <section className="bg-[#E5E5E5] relative -top-20">
      <HeroSection />
      <hr />
      <HowItWorks />
      <PopularCategories />
      <PopularCompanies />
    </section>
  );
};

export default Layer(Home);
