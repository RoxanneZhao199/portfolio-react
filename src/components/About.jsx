import React from "react";
import profileImg from "../assets/profile.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-[#E1DFDF]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="about__img mt-1 flex justify-center items-center">
          <img src={profileImg} alt="" />
        </div>
        <p className="text-lg mt-2 font-bold flex justify-center items-center">
          Front-end Developer | Full-stack Developer | Freelancer
        </p>

        <br />

        <p className="text-base text-gray-500">
          I worked as a project engineer👷🏻‍♀️ in the manufacturing and construction
          industry for many years. It was by chance that my programming learning
          journey started in 2021. I instantly fell in love with it both the
          idea of using logic on one hand and also being very creative on the
          other hand. I enjoy problem-solving and it gives me a sense of
          achievement.
          <br />
          Changing careers midway is not an easy task. But I have the confidence
          and the faith in myself to get to where I want to be despite the
          industry or the people that I will be working with. I am passionate
          about building beautiful and functional web pages and applications.
          For sure there are still a lot of unknowns, but that’s what excites me
          and motivates me to be a better developer in the future.✌🏻
        </p>
      </div>
    </div>
  );
};

export default About;
