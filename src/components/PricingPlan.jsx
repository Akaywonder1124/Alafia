import Button from "./Button";

export default function PricingPlan() {
  return (
    <section className="bg-dark ">
      <div className="flex flex-col justify-center items-center gap-3 pt-32">
        <h3 className="text-white font-recoleta text-4xl ">Global Plans</h3>
        <p className="text-white font-light font-Outfit md:w-[500px] text-center leading-normal px-5">
          World’s Best USA Healthcare, Now Accessible and Affordable with
          MediPocket Global Membership Plan
        </p>
      </div>
      <div className="flex justify-center items-center gap-20 py-14 flex-wrap">
        <div className="pricing p-10">
          <h4 className="font-Outfit text-2xl text-white mb-8">Global Lite</h4>
          <p className="font-Outfit font-thin text-[14px] text-white">
            Starting at
          </p>
          <h4 className="font-recoleta text-white text-4xl pt-2">$10/Month</h4>
          <ul className="font-Outfit text-white font-light text-[16px] leading-normal space-y-2 list-disc my-10 ">
            <li>Global Health Coverage IN 50L-3Cr</li>
            <li>USA Health Advisor</li>
            <li>Discounted USA Medication</li>
            <li>Visa Assistance</li>
            <li>Preventative Genetic Screening</li>
            <li>Global Concierge Service</li>
          </ul>
          <Button type="cta" label="Get Started" />
        </div>
        <div className="pricing p-10">
          <h4 className="font-Outfit text-2xl text-white mb-8">
            Global Family
          </h4>
          <p className="font-Outfit font-thin text-[14px] text-white">
            Starting at
          </p>
          <h4 className="font-recoleta text-white text-4xl pt-2">$45/Month</h4>
          <ul className="font-Outfit text-white font-light text-[16px] leading-normal space-y-2 list-disc my-10 ">
            <li>Global Health Coverage IN 50L-3Cr</li>
            <li>USA Health Advisor</li>
            <li>Discounted USA Medication</li>
            <li>Visa Assistance</li>
            <li>Preventative Genetic Screening</li>
            <li>Global Concierge Service</li>
          </ul>
          <Button type="cta" label="Get Started" />
        </div>
      </div>
    </section>
  );
}
