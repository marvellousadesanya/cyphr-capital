import NavBar from "@/components/navbar";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="bg-[url('/header-image.png')] h-screen w-screen ">
        <NavBar />
        <header className="flex justify-center items-center h-full">
          <h1 className="font-bold text-white text-center text-6xl">
            We{"'"}re not just About Closing Deals;
            <br /> We{"'"}re About Strategic
            <br /> Partnerships.
          </h1>
        </header>
      </div>

      <section className="bg-[#111111] w-screen">
        <div className="px-20 py-7">
          <p className="font-bold text-white">
            We believe that business has the power to be a force for good. We
            {"'"}re not just about closing deals; we{"'"}re about building a
            more just and equitable world through strategic partnerships and
            investments.
          </p>
        </div>

        <div className="flex justify-between space-x-7 w-full px-20">
          <Image
            src="/about-1.png"
            alt="about image"
            height={600}
            width={600}
          />
          <Image
            src="/about-2.png"
            alt="about image"
            height={600}
            width={600}
          />
        </div>

        <div className="p-20">
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
            in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
            parturient orci ac etiam congue mi. Elementum pellentesque non
            hendrerit et pharetra tellus leo tempus tellus. Consectetur
            scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor
            vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar
            adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec
            consequat amet. Id cursus purus et fringilla molestie a nulla
            turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque
            consectetur orci dui est sem nulla.Tortor ullamcorper neque,
            habitant vulputate at in. Vel nulla in ornare amet id praesent.
            Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac
            urna diam tincidunt interdum faucibus mauris est. Nec, lacinia
            eleifend amet, quis turpis et massa duis.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Et in sed in pellentesque ornare nunc
            nisl. Augue habitant accumsan, ut parturient orci ac etiam congue
            mi.{" "}
          </p>
        </div>
      </section>

      <section className="relative bg-white z-10 flex justify-center items-center pt-20">
        <Image
          src="/map.png"
          alt="map image"
          width={1000}
          height={400}
          className="mb-[-50px]"
        />
      </section>

      <section className="relative bg-[url('/legacy.png')] z-20 space-y-7 py-40 ">
        <div className="flex justify-center">
          <div className="w-[650px] ">
            <h2 className="text-center font-bold text-5xl">
              The Difference Between A Deal and A Legacy is Impact.
            </h2>
          </div>
        </div>

        <p className="text-sm text-center">
          Pitch us your business and leave a lasting positive mark on the world.
        </p>

        <div className="w-full flex justify-center">
          <button className="bg-[#111111] text-white px-4 py-2 rounded-md">
            Submit Your Pitch Desk
          </button>
        </div>
      </section>
    </div>
  );
}
