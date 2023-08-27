import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark 
      text-light py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name={"HTML"} x="-20vw" y="2vw" />
        <Skill name={"ReactJS"} x="-6vw" y="-11vw" />
        <Skill name={"Javascript"} x="20vw" y="20vw" />
        <Skill name={"CSS"} x="-20vw" y="-15vw" />
        <Skill name={"NextJS"} x="0vw" y="11vw" />
        <Skill name={"Angular"} x="15vw" y="-12vw" />
        <Skill name={"SCSS"} x="32vw" y="5vw" />
        <Skill name={"tailwind CSS"} x="0" y="-18vw" />
        <Skill name={"jQuery"} x="-25vw" y="18vw" />
        <Skill name={"Asp.Net Core"} x="-4vw" y="19vw" />
        <Skill name={"Redux Toolkit"} x="18vw" y="4vw" />
      </div>
    </>
  );
};

export default Skills;
