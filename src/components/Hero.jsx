import Navbar from "./Navbar";
import styles from "../styles/NavBar.module.css";
import Search from "./Search";
import heroImage from "../assets/heroImage.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  const tagLeft = useRef();
  const tagRight = useRef();
  const heroImg = useRef();

  useGSAP(() => {
    gsap.from(tagLeft.current, {
      xPercent: -30,
      duration: 2,
      ease: "expoScale(1, 2)",
      scrollTrigger: {
        trigger: tagLeft.current,
        start: "top 90%",

        duration: 2,
        scrub: true,
      },
    });

    gsap.from(tagRight.current, {
      xPercent: 30,

      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: tagRight.current,
        start: "top 80%",

        duration: 2,
        scrub: true,
      },
    });

    gsap.from(heroImg.current, {
      opacity: 0.4,
      scale: 0.6,
      yPercent: 30,
      duration: 2,
    });
    gsap.from(".text", {
      opacity: 0.4,
      duration: 0.5,
      stagger: 0.03,
    });
  });

  return (
    <div className="hero">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="hero-heading">
          {"World's Best Advanced Cross-Border Care"
            .split("")
            .map((child, idx) => (
              <span className="text" key={idx}>
                {child}
              </span>
            ))}
        </h1>
        <p className="text-white font-recoleta pt-3 text-center max-w-[80%]">
          Find The Best Hospital and Doctors Across the world
        </p>
        <Search />
      </div>

      <div className="flex justify-center" ref={heroImg}>
        <div
          className="relative self-center left-[150px] bg-dark p-8 text-white text-[18px] text-center rounded-full font-Outfit z-10 max-md:hidden "
          id="tagLeft"
          ref={tagLeft}
        >
          World's Leading USA Hospitals
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero Image" />
        </div>
        <div
          className="self-end relative s right-[120px] bottom-20 bg-dark p-8 text-white  text-[18px] text-center rounded-full font-Outfit z-10 max-md:hidden"
          id="tagRight"
          ref={tagRight}
        >
          52 Countries Reached
        </div>
      </div>
    </div>
  );
}
