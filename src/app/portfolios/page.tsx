import NavBar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Image from "next/image";
import React from "react";

export default function Portfolios() {
  return (
    <div>
      <div className="bg-[url('/portfolio.png')] bg-cover h-screen w-screen ">
        <NavBar />
        <header className="flex justify-center items-center h-full">
          <h1 className="font-bold text-white text-center text-6xl">
            Strategic Investments,
            <br /> Collaborative Journeys and the
            <br /> Power of Innovation
          </h1>
        </header>
      </div>

      <section className="w-full">
        <h2 className="text-center font-bold text-5xl">
          Cyphr Capital In Action
        </h2>
        <p className="text-center">Our Portfolio of Success Stories</p>

        <div className="w-full px-20 py-12">
          <div className="grid grid-cols-3 gap-y-7">
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="relative w-full flex items-center ">
          <div className="relative flex w-full justify-between items-center bg-red-400">
            <div className="relative w-[844px] z-10 h-[444px] flex items-center bg-[#99CCFF] p-12">
              <div className="space-y-7">
                <h2 className="font-bold text-5xl">
                  Anyone Can Make A Deal.
                  <br /> Not Everyone Can Make A Difference.
                </h2>
                <p>
                  Do you have a business that is making a difference? We want to
                  hear from you.
                </p>

                <button className="text-white font-bold px-5 py-3 rounded bg-[#111111]">
                  Submit Your Pitch Deck
                </button>
              </div>
            </div>

            <div className="absolute w-[600px] right-0 bg-[#930300]">
              <Image src="/deal.png" alt="deal" height={800} width={600} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
