import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About The Hidden Rack"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At <strong>The Hidden Rack</strong>, we believe that style should be
            unique, expressive, and accessible to everyone. We're an online
            fashion destination dedicated to bringing you handpicked collections
            that reflect the latest trends and timeless essentials — all curated
            with care and creativity.
          </p>
          <p>
            Whether you're looking for bold statement pieces or everyday
            wardrobe staples, The Hidden Rack is where individuality meets
            affordability. Each item we feature is selected for quality, style,
            and the ability to make you feel confident and effortlessly stylish.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to uncover and deliver fashion's hidden gems — giving
            you access to high-quality, trend-forward pieces without the premium
            price tag. We aim to build a community that celebrates
            self-expression, style diversity, and conscious shopping.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Quality Assurance</b>
          <p className="text-gray-600">
            Every product at The Hidden Rack is selected with attention to
            detail and quality. We partner with trusted suppliers to ensure that
            what you receive is made to last, looks great, and feels even
            better.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Convenience</b>
          <p className="text-gray-600">
            Enjoy a seamless shopping experience from browsing to checkout. Our
            intuitive platform makes it easy to find what you love, place your
            order, and get it delivered to your doorstep — fast and hassle-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Exceptional Customer Service</b>
          <p className="text-gray-600">
            We're more than just a store — we're a support system for your style
            journey. Our friendly customer support team is always ready to help
            with any questions, returns, or styling advice you might need.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
