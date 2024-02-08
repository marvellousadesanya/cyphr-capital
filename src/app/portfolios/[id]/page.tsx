import React from "react";
import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Detail() {
  return (
    <div>
      <div className="bg-[url('/detail.png')] bg-cover h-screen w-screen ">
        <NavBar />
        <header className="flex justify-center items-center h-full">
          <h1 className="font-bold text-white text-center text-6xl">
            Foodie Fun is a subscription service
            <br /> that offers exclusive discounts and
            <br /> deals at your favorite restaurants. Power of Innovation
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
    </div>
  );
}
