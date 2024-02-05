import { TiMessages } from "react-icons/ti";
import { GiMedicalDrip } from "react-icons/gi";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function PricingCard() {
  useGSAP(() => {
    gsap.from(".card", {
      yPercent: 30,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".wrapper", // Replace with your actual section class or ID
        start: "top 80%",
        scrub: false,
      },
    });
  });
  const cardItems = [
    {
      icon: <TiMessages />,
      title: "Second Opinion",
      description:
        "When facing a serious, life-changing illness, we understand the critical importance of obtaining expert advices",
    },
    {
      icon: <GiMedicalDrip />,
      title: "Treatment",
      description:
        "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.",
    },
    {
      icon: <PiGlobeHemisphereWestThin />,
      title: "Global Plans",
      description:
        "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.",
    },
  ];
  return (
    <section className="m-4 md:m-28">
      <div className="flex justify-center items-center gap-4 md:gap-16 flex-wrap flex-1 wrapper">
        {cardItems.map((cardItem) => (
          <div
            key={cardItem.title}
            className="bg-ghost-white w-[350px] h-[378px] p-4 md:p-8 rounded-[20px] flex flex-col justify-center items-center shadow-md card"
          >
            <p className="text-primary text-5xl md:text-7xl pb-3 md:pb-5">
              {cardItem.icon}
            </p>
            <h2 className="text-black font-Outfit text-[20px] md:text-[24px] font-medium pb-2 md:pb-4">
              {cardItem.title}
            </h2>
            <p className="text-center font-Outfit text-slate-gray text-[14px] md:text-[16px]">
              {cardItem.description}
            </p>
            <div className="relative top-10 md:top-20 font-Outfit">
              <Button type="pricing" label="Get Started" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
