import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#189B39] text-white h-[400px] flex justify-center">
      <div>
        <div className="p-12">
          <div className="flex justify-around space-x-12">
            <div>
              <Image src="/logo.png" alt="logo" height={80} width={80} />
            </div>

            <div className="space-y-7">
              <h2 className="font-bold text-lg">Contact</h2>
              <div className="text-sm">
                <p>+1+86 852 346 000 </p>
                <p>info@cyphr.com</p>
              </div>

              <div className="text-sm">
                <p>1959 Sepulveda Blvd.Culver City, CA, 90230</p>
              </div>
            </div>

            <div className="space-y-7">
              <h2 className="font-bold text-lg">Never miss an update</h2>
              <div>
                <div className="">
                  <div className="space-x-5">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="border border-white bg-[#189B39] w-96 h-10 placeholder:p-3 placeholder:text-white"
                    />
                    <button className="bg-[#99CCFF] px-7 py-2 rounded-md text-[#111111] font-bold">
                      See All
                    </button>
                  </div>
                  <p className="text-xs pt-6">
                    Join our subscribers and get best investment news delivered
                    each week!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-screen border border-dashed mt-24" />

        <div className="flex justify-between p-5">
          <p className="text-sm">© 2020 CyphrInc. All rights Reserved</p>

          <Image
            src="/social-icons.png"
            alt="social icons"
            height={12}
            width={130}
          />
        </div>
      </div>
    </footer>
  );
}
