import {
  cardiology,
  Endocrinology,
  infertility,
  mentalHealth,
  neurology,
  oncology,
  plasticSurgery,
  rareDisease,
  surrogacy,
  rheumatology,
} from "../assets";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function TreatmentList() {
  useGSAP(() => {
    gsap.from(".treatment-card", {
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".treatment-card",
        start: "top 80%",
        scrub: false,
      },
    });
  });
  const treatments = [
    {
      label: "Cardiology",
      image: cardiology,
    },
    {
      label: "Endocrinology",
      image: Endocrinology,
    },
    {
      label: "Infertility",
      image: infertility,
    },
    {
      label: "mental Health",
      image: mentalHealth,
    },
    {
      label: "Neurology",
      image: neurology,
    },
    {
      label: "Oncology",
      image: oncology,
    },
    {
      label: "Plastic Surgery",
      image: plasticSurgery,
    },
    {
      label: "Rare Disease",
      image: rareDisease,
    },
    {
      label: "Surrogacy",
      image: surrogacy,
    },
    {
      label: "Rheumatology",
      image: rheumatology,
    },
  ];
  return (
    <section className="flex justify-center items-center">
      <div className="p-36 flex flex-col items-start justify-center">
        <h1 className="font-recoleta text-primary text-4xl max-w-sm py-10 ">
          Explore Treatments across specialties
        </h1>
        <div className="grid grid-cols-5 max-sm:grid-cols-1 max-lg:grid-cols-3 gap-10 justify-center items-center max-xl:grid-cols-3">
          {treatments.map((treatment) => (
            <div
              key={treatment.label}
              className="bg-ghost-white flex flex-col justify-center items-center w-[200px] h-[200px] shadow-md rounded-3xl treatment-card"
            >
              <img src={treatment.image} alt={treatment.label} />
              <h3 className="font-medium mt-3">{treatment.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
