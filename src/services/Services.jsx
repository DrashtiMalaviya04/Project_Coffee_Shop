import React from "react";
import Coffee1 from "../assets/coffee/coffee1.png";
import Coffee3 from "../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    icon: Coffee1,
    tital: "Black Coffee",
    text:
      "Good communication is just as stimulating as black coffee, and just as hard to sleep after.",
  },
  {
    id: 2,
    icon: Coffee3,
    tital: "Hot Coffee",
    text:
      " Rise and grind, it's coffee time! You can't buy happiness, but you can buy coffee, and that's pretty close.",
  },
  {
    id: 2,
    icon: Coffee1,
    tital: "Clod Coffee",
    text:
      " Cold coffee, warm heart. When life gives you hot days, make iced coffee.Sip, sip, hooray! ...",
  },
];

const Services = () => {
  return (
    <>
      <div className=" container my-16 space-y-4 ">
        {/* header section */}
        <div className=" text-center max-w-lg mx-auto space-y-2">
          <h1 className=" text-3xl font-bold text-lightGray" data-aos="fade-up">
            Fresh and <span className=" text-primary">Tasty coffee</span>
          </h1>
          <p className=" text-sm opacity-50" data-aos="zoom-in">
            Coffee is always a good idea.I love the smell of fresh coffee in the
            morning.Behind every successful person is a substantial amount of
            coffee.
          </p>
        </div>
        {/* card section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {servicesData.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className=" text-center p-4 space-y-6 "
            >
              <img
                src={service.icon}
                alt=""
                className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              />
              <div className="space-y-2">
                <h1 className=" text-2xl font-bold text-primary">
                  {service.tital}
                </h1>
                <p className=" text-darkGray">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
