import React from "react";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="w-screen h-screen bg-[url('/contact.png')] object-fit flex justify-center items-center">
      <div className="w-[800px] max-w-[1076px] h-[600px] max-h-[985px] bg-white flex justify-center items-center">
        <form className="flex justify-center items-center ">
          <div className="space-y-8 ">
            <div>
              <label className="font-bold">What is your first name?</label>
              <input
                type="text"
                className="w-full border border-[#747373] h-[48px] placeholder:p-5"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className="font-bold">What is your last name?</label>
              <input
                type="text"
                className="w-full border border-[#747373] h-[48px] placeholder:p-5"
                placeholder="Your last name"
              />
            </div>

            <div>
              <label className="font-bold">What is your email?</label>
              <input
                type="text"
                className="w-full border border-[#747373] h-[48px] placeholder:p-5"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="font-bold ">What is your first name?</label>
              <input
                type="text"
                className="w-full border border-[#747373] h-[48px] placeholder:p-5"
              />
            </div>

            <button className="px-7 py-2 rounded-md bg-[#189B39] text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
