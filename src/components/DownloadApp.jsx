import { useEffect } from "react";
import hoverEffect from "hover-effect";

import {
  Alafia_mock_up,
  Apple_logo,
  Google_Play_logo,
  Alafia,
} from "../assets";

import Button from "./Button";
import { useGSAP } from "@gsap/react";

function DownloadApp() {
  const apple = {
    image: Apple_logo,
    text: "Apple Store",
  };

  const googlePlay = {
    image: Google_Play_logo,
    text: "Google Play",
  };
  useGSAP(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: 0.3,
      image1: Alafia_mock_up,
      image2: Alafia,
      displacementImage: Alafia,
    });
  });

  const downloadBtnLabel = (image, text) => {
    return (
      <div className="font-Outfit flex gap-2">
        <img src={image} alt="Apple logo" className="w-[2rem]" />
        <div>
          <p className="">Download on</p>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-ghost-white py-10">
      <div className="flex lg:flex-row justify-center lg:gap-20 gap-10 items-center mb-20 px-10 max-lg:flex-wrap">
        <div>
          <img src={Alafia_mock_up} alt="Mock up" />
        </div>
        <div>
          <h2 className="font-recoleta font-medium text-primary text-[2.6rem] leading-snug max-lg:text-center">
            Access Healthcare Anywhere: Download Now
          </h2>
          <div className="flex gap-5 mt-10 flex-wrap justify-center">
            <Button
              type="download"
              label={downloadBtnLabel(apple.image, apple.text)}
            />
            <Button
              type="download"
              label={downloadBtnLabel(googlePlay.image, googlePlay.text)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
