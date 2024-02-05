import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  boston,
  childrenHosptal,
  clevelandClinic,
  Mayo,
  mdAnderson,
  stanford,
  stanfordHealth,
  mountSinai,
  clinicalCenter,
} from "../assets";

function Hospitals() {
  const hospitals = [
    boston,
    childrenHosptal,
    clevelandClinic,
    Mayo,
    mdAnderson,
    stanford,
    stanfordHealth,
    mountSinai,
    clinicalCenter,
  ];

  useGSAP(() => {
    gsap.from("._card", {
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "._card",
        start: "top 80%",
        scrub: false,
      },
    });
  });
  return (
    <section>
      <div className="flex xl:flex-row flex-col-reverse justify-evenly lg:gap-36 gap-10 items-center mb-20 px-10 ">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 grid-flow">
          {hospitals.map((hospital) => (
            <div
              key={hospital}
              className="w-[179px] h-[180px]  bg-ghost-white flex justify-center items-center rounded-3xl shadow-md ml-10 _card"
            >
              <img src={hospital} alt={hospital} />
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-recoleta font-medium text-primary text-[2.6rem] leading-snug max-lg:text-center">
            World’s Best USA Hospitals & Research Centers
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hospitals;
