/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

function About() {
  const paraRef = useRef(null);

  useEffect(() => {
    let text = paraRef.current.innerText;
    let arrayPrimary = text.split(" ");

    paraRef.current.innerText = "";

    for (let i = 0; i < arrayPrimary.length; i++) {
      let span = document.createElement("span");
      span.innerText = arrayPrimary[i] + " ";
      span.classList.add("word");
      paraRef.current.appendChild(span);
    }

    window.addEventListener("scroll", () => {
      let words = document.querySelectorAll(".word");
      let containerHeight = paraRef.current?.getBoundingClientRect().height;

      for (let i = 0; i < words.length; i++) {
        console.log(
          i,
          (document.documentElement.scrollTop / containerHeight) *
            words.length -
            100
        );
        let word = words[i];
        if (
          i <
          (document.documentElement.scrollTop / containerHeight) *
            words.length -
            70
        ) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        let words = document.querySelectorAll(".word");
        let containerHeight = paraRef.current.getBoundingClientRect().height;

        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          if (
            i <
            (document.documentElement.scrollTop / containerHeight) *
              words.length -
              60
          ) {
            word.classList.add("active");
          } else {
            word.classList.remove("active");
          }
        }
      });
    };
  }, []);

  return (
    <div className="w-full bg-[#171A33] py-[130px] px-[100px] relative">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690121193/Dtory/portfolio/aboutGradient_zrgtgz.png"
        className="absolute left-0 -top-[30%] opacity-50"
        alt=""
      />
      <h1 className="text-center text-white text-5xl font-bold">
        But WTF is Dtory?
      </h1>
      <p className="text-white text-xl font-semibold mt-10">
        Are you struggling with strong visual appearance ? or sales ? or a
        strong brand presence ?
      </p>
      <p
        ref={paraRef}
        className="text-[48px] leading-[1.3] font-semibold mt-10 font-mona-sans"
      >
        Well from no one cares to everyone craves to work with your brand.
        It&apos;s Dtory who will show you the path to the golden gate of amazing
        lorem & sales success.
      </p>
      <p className="text-white text-xl font-semibold mt-10">
        What is “struggle” ? Work with us and see that there is not such word in
        our dictionary.
      </p>

      <div className="flex items-center justify-center mt-24 space-x-4">
        <button className="bg-white px-10 h-12 font-medium rounded-lg text-sm">
          See plans
        </button>
        <button className="bg-transparent border border-white text-white px-10 h-12 font-medium rounded-lg text-sm">
          Contact now
        </button>
      </div>
    </div>
  );
}

export default About;
