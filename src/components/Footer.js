import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center text-sm lg:py-2">
          Built at Mankale
          <Link className="underline " target="_blank"  href="https://shambhulingeshwara.vercel.app/"><p>{""}-the abode of Shambhulingeshwara</p></Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
