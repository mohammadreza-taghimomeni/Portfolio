import Head from "next/head";
import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/me.jpg";
import AnimatedNumbers from "../components/AnimatedNumbers";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <Head>
        <title>Mohammad Reza Taghimomeni | About Page</title>
        <meta name="description" content="description" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={"Mohammad Reza Taghimomeni"} className="mb-16" />

          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>

              <p className="font-medium">
                Hi, I&apos;m Mohammad Reza Taghimomeni, a front-End Developer
                with proven experience at 5+ corporations in helping companies
                create and maintain a better code base for reusability.
                High-spirited about learning and development with a desire to
                apply skills to a larger development team at Kasra. Eager to
                tackle more complex problems and continue to find ways to
                maximize user efficiency.
              </p>
              {/* <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p> */}
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark" />

              <Image src={ProfilePic} alt="Mohammad Reza Taghimomeni" />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Companies
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
