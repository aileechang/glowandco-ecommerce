import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-xl sm:text-2xl text-center pt-10 border-t border-[#6D4C3D]">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-1/2">
          <img
            src={assets.aboutus}
            className="w-full h-auto object-cover rounded-lg"
            alt="About Us"
            loading='lazy'
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-slate-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            amet tempora harum magni, saepe voluptatum quo odio magnam cumque
            voluptate, exercitationem sequi, non nisi necessitatibus placeat
            porro consequuntur vitae. Fugiat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nam,
            non sint ullam aliquid fugiat neque, dolorem aut suscipit
            reprehenderit id obcaecati quasi deserunt quo sed, saepe minima
            provident adipisci.
          </p>
          <b className="text-slate-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur ex blanditiis culpa nulla! Voluptatem libero, assumenda
            soluta et deleniti itaque molestias voluptas accusantium ducimus
            nihil nisi modi earum tenetur.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE USE"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-[#6D4C3D] px-10 md:px-12 py-8 sm:py-16 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            veniam libero nihil ab aliquam veritatis. Exercitationem accusamus
            maiores, nostrum praesentium mollitia ad est modi debitis nam
            perspiciatis voluptates ab quibusdam.
          </p>
        </div>
        <div className="border border-[#6D4C3D] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            consequatur. Est, laborum? In, ipsam illo repudiandae ducimus, eum
            magnam porro omnis praesentium fugit aut, eveniet at consequuntur
            dignissimos vel officiis.
          </p>
        </div>
        <div className="border border-[#6D4C3D] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dicta
            quia rem ullam quaerat consectetur nemo, porro, accusamus explicabo
            qui laborum veniam! Debitis architecto beatae, cupiditate laborum
            laudantium odit earum.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
