import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Daigo Yamashita. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
