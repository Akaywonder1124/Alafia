import { FiPhone } from "react-icons/fi";
import Button from "../components/Button";
import Hero from "../components/Hero";
import PricingCard from "../components/PricingCard";
import doctor from "../assets/doctor.png";
import Hospitals from "../components/Hospitals";
import PricingPlan from "../components/PricingPlan";
import TreatmentList from "../components/TreatmentList";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function HomePage() {
  gsap.registerPlugin(ScrollTrigger);
  const section1 = useRef();
  const section2 = useRef();

  useGSAP(() => {
    gsap.from(section1.current, {
      y: 70,
      opacity: 0.8,
      scale: 0.85,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section1.current,
        start: "top 100%",
        scrub: false,
      },
    });

    gsap.from(section2.current, {
      y: 70,
      scale: 0.85,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section2.current,
        start: "top 100%",
        scrub: false,
      },
    });
  });
  return (
    <div className="smoothscroll ">
      <Hero />
      <main className="max-w-[1600px] m-auto">
        <section
          className="flex flex-row justify-center gap-28 items-center mt-36 flex-wrap section"
          ref={section1}
        >
          <h1 className="text-4xl font-recoleta text-primary w-[550px] leading-normal">
            Experience Exceptional Healthcare In The USA With Omnicure USA
          </h1>
          <p className="md:w-[600px] w-[550px] font-Outfit font-[400] text-lg text-slate-gray">
            Discover the pinnacle of healthcare services in the United States,
            where advancements, quality, cutting edge research, expert doctors
            and a commitment to patient success, combine to provide an
            unparalleled medical tourism experience. Omnicure USA is your
            dedicated partner, guiding you towards improved health and wellness.
            Connect with us today and embark on a journey of exceptional USA
            healthcare services.
          </p>
        </section>
        <PricingCard />
        <section
          className="flex justify-center mt-[15%] mb-[10%]"
          ref={section2}
        >
          <div className="bg-dark w-3/4 flex justify-evenly items-center rounded-[40px] h-[400px] max-lg:h-[300px] px-16">
            <div className=" max-xl:pl-4">
              <h1 className="font-recoleta text-3xl text-white lg:w-3/4 mb-5 leading-normal">
                Teleconsult Our Patient Advisor
              </h1>
              <Button type="cta" label="Book a Call" />
            </div>
            <div className="relative left-52 backdrop-blur  bg-white/30 p-10  z-10 rounded-full">
              <FiPhone color="white" size="50" />
            </div>
            <div className="max-lg:hidden">
              <img
                src={doctor}
                alt="Doctor"
                className="relative top-[-40px] "
              />
            </div>
          </div>
        </section>
      </main>
      <Hospitals />
      <PricingPlan />
      <TreatmentList />
      <DownloadApp />
      <Footer />
    </div>
  );
}
