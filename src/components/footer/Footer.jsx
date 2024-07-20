import React from "react";

const Footer = () => {
  return (
    <div className="bg-background-900 flex flex-wrap justify-center flex-col text-text-50 gap-3 mt-auto">
      <div className="flex flex-wrap justify-evenly">
        <div>logo</div>
        <div className="flex
         flex-col gap-5 items-center">
          <div className="text-slate-500">Company</div>
          <div>
            <ul className=" items-center flex flex-col">
              <li>Features</li>
              <li>Pricing</li>
              <li>Affliate Program</li>
              <li>Press Kit</li>
            </ul>
          </div>
        </div>
        <div className="flex
         flex-col gap-5 items-center">
          <div className="text-slate-500">Support</div>
          <div>
            <ul className=" items-center flex flex-col">
              <li>Account</li>
              <li>Help</li>
              <li>Contact Us</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
        <div className="flex
         flex-col gap-5 items-center">
          <div className="text-slate-500">Legals</div>
          <div>
            <ul className=" items-center flex flex-col">
              <li>Terms and Condition</li>
              <li>Privacy Policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="text-slate-500 text-center">
        © Copyright 2023. All Rights Reserved by blog
      </div>
    </div>
  );
};

export default Footer;
