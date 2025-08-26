import Hero from "./components/Hero";
import WhyUseSpendIn1 from "./components/Benefit-1";
import WhyUseSpendIn2 from "./components/Benefit-2";
import HowItWork1 from "./components/HowItWork-1";
import HowItWork2 from "./components/HowItWork-2";
import Productivity from "./components/Productivity-1";

export default function Home() {
  return (
    <div className="font-sans">
    <Hero/>
    <WhyUseSpendIn1 />
    <WhyUseSpendIn2 />
    <HowItWork1 />
    <HowItWork2 />
    <Productivity />
    </div>
  );
}
