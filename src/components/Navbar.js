import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import clsx from "clsx";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={clsx(className, "relative group")}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomSocialLink = ({ href, className, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className={clsx("w-6", className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href={"/"} title="Home" className={"mr-4"} />
        <CustomLink href={"/about"} title="About" className={"mx-4"} />
        <CustomLink href={"/projects"} title="Projects" className={"mx-4"} />
        <CustomLink href={"/articles"} title="Articles" className={"ml-4"} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <CustomSocialLink href={"https:/twitter.com"} className={"mr-3"}>
          <TwitterIcon />
        </CustomSocialLink>

        <CustomSocialLink href={"https:/twitter.com"} className={"mx-3"}>
          <GithubIcon />
        </CustomSocialLink>

        <CustomSocialLink href={"https:/twitter.com"} className={"mx-3"}>
          <LinkedInIcon />
        </CustomSocialLink>

        <CustomSocialLink href={"https:/twitter.com"} className={"mx-3"}>
          <PinterestIcon />
        </CustomSocialLink>

        <CustomSocialLink href={"https:/twitter.com"} className={"ml-3"}>
          <DribbbleIcon />
        </CustomSocialLink>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
