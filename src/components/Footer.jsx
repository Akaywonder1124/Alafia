import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  instagram_icon,
  facebook_icon,
  linkedin_icon,
  youtube_icon,
} from "../assets";
import { legal, usefullLinks } from "../constants";

export default function Footer() {
  const socialIcon = [
    facebook_icon,
    instagram_icon,
    youtube_icon,
    linkedin_icon,
  ];
  return (
    <section className="bg-primary py-20 ">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between">
          <Logo />
          <ul className="flex gap-10">
            {socialIcon.map((icon, index) => (
              <li key={index}>
                <Link to="/">
                  <img src={icon} alt="social icon" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-20 gap-20 border-y-[1px] py-20">
          <div>
            <h3 className="text-white font-Outfit text-xl">About Alafia</h3>
            <p className="text-white font-Outfit mt-5 ">
              By using Alafia, patients can connect with licensed healthcare
              providers through secure video consultations, get prescriptions,
              and access medical advice from the comfort of their homes. With
              our user-friendly interface and advanced technology, we aim to
              make healthcare more accessible, convenient, and affordable for
              everyone.
            </p>
          </div>
          <div className="text-nowrap">
            <h3 className="text-white font-Outfit text-xl">Usefull Links</h3>
            <ul className="text-white font-Outfit mt-5 space-y-5">
              {usefullLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-nowrap">
            <h3 className="text-white font-Outfit text-xl">Contact Info</h3>
            <p className="text-white font-Outfit mt-5">Lagos, Nigeria</p>
            <div></div>
          </div>

          <div className="text-nowrap">
            <h3 className="text-white font-Outfit text-xl">Legal</h3>
            <ul className="text-white font-Outfit mt-5 space-y-5">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-white font-Outfit mt-10">&copy; Alafia 2024</p>
        </div>
      </div>
    </section>
  );
}
