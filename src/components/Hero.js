import React, { useState, useEffect } from "react";
import data from "../content/hero.json";
import { Link } from "react-scroll";
import "../index.css";
import smartdress from "../assets/smartdress.png";

function Hero(props) {
  let content = data;
  props.language === "Deutsch"
    ? (content = data.Deutsch)
    : (content = data.English);

  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    handleScroll,
    visible,
    setScrollPos
  );
  return (
    <section id="hero" className="container mx-auto hero">
      <div class="flex z-10 flex-col md:flex-row mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 pt-12 md:pt-48">
        <div class="flex flex-col md:-mt-16">
          <p class="text-4xl font-bold color-y">Hi, {content.title}</p>
          <p>{content.d2}</p>
          <p class="my-4">{content.d3}</p>
          {/* <p>{content.d4}</p> */}
          <Link
            to="contact"
            class="self-center sm:justify-center lg:self-start"
            smooth={true}
            duration={1000}
            spy={true}
            exact={true}
          >
            <button class="btn-4-y mt-8">{content.btn}</button>
          </Link>
        </div>
        <div class="flex flex-col order-2 md:my-auto mt-8 md:ml-8 xl:pr-16">
          <img
            className="z-0 max-h-64 px-4 sm:max-h-80 order-1 lg:order-2 mx-auto my-12 sm:my-16 lg:mr-8 lg:max-h-96 xl:mr-16"
            src={smartdress}
          ></img>
        </div>
      </div>
      <section class="container fixed bottom-0 mx-auto">
        <div
          className={
            visible
              ? "hidden md:flex md:flex-col md:items-center md:mb-4 lg:mb-16 "
              : "hidden"
          }
        >
          <p class="scroll-ani bounce">Scroll</p>
        </div>
      </section>
    </section>
  );
}

export default Hero;
