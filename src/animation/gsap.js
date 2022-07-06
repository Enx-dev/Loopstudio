import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

const Gsap = () => {
  useEffect(() => {
    gsap
      .timeline({ defaults: { duration: 0.6, ease: "power1.in" } })
      .fromTo(
        "#HeroSection__title",
        { opacity: 0, scale: 0.5, perspective: 1000 },
        { opacity: 1, scale: 1, perspective: 300 }
      )
      .fromTo(
        "#HeroSection__span",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2 }
      );
    const img = gsap.fromTo(
      "#InfoSection__gridImg",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    ScrollTrigger.create({
      animation: img,
      trigger: "#Info_Section",
      start: "top 80%",
    });

    gsap.fromTo(
      "#ProjectSection__title",
      { text: " ", opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#InfoSection__gridContent",
          start: "center 60%",
        },
        text: { value: "Our creations", speed: 0.5, padSpace: true },
        opacity: 1,
        duration: 3,
      }
    );

    gsap.fromTo(
      "#Menu__links",
      { xPercent: -200 },
      { xPercent: 0, stagger: 0.5, duration: 0.5, ease: "power1.in" }
    );
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": () => {
        gsap.utils.toArray("#Cards").forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: 200 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
              opacity: 1,
              x: 0,
              duration: 0.5,
            }
          );
        });
        gsap.fromTo(
          "#InfoSection__text",
          { scale: 0.7, opacity: 0, y: 200, rotateX: 45 },
          {
            scrollTrigger: {
              trigger: "#InfoSection__gridImg",
              start: "center center",
            },
            scale: 1,
            opacity: 1,
            duration: 0.6,
            y: 0,
            stagger: 0.3,
            rotateX: 0,
            ease: "power1.out",
          }
        );
      },
      "(min-width: 768px)": () => {
        gsap.fromTo(
          "#InfoSection__text",
          { scale: 0.7, opacity: 0, y: 200, rotateX: 45 },
          {
            scrollTrigger: {
              trigger: "#HeroSection",
              start: "80% top",
            },
            scale: 1,
            opacity: 1,
            duration: 0.6,
            y: 0,
            stagger: 0.3,
            rotateX: 0,
            ease: "power1.out",
          }
        );
        gsap.fromTo(
          "#Cards",
          { opacity: 0, y: 200 },
          {
            scrollTrigger: {
              trigger: "#Info_Section",
              start: "90% 20%",
              scrub: 2,
            },
            opacity: 1,
            y: 0,
            stagger: { amount: 1 },
          }
        );
      },
    });
  }, []);
  return <div></div>;
};

export default Gsap;
