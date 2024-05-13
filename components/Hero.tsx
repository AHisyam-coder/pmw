import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BadgeX } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="bg-fixed relative w-full min-h-screen pt-20"
      style={{
        backgroundImage: 'url("/banner-3.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-center items-center w-full mt-40">
        <div className="bg-green-50 relative flex max-w-7xl rounded-xl overflow-hidden">
          <div className="grid justify-items-stretch w-1/2 relative py-16 sm:py-16 lg:py-20 px-6 lg:px-8">
            <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Image
                className="w-auto h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 justify-self-center"
                src="/pmw2.png"
                alt="Delicious Food"
                width={1000}
                height={100}
              />
            </motion.div>
          </div>
          {/* Content Section */}
          
          <div className="w-1/2 py-16 sm:py-24 lg:py-20 px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Citarasa Hotel, Harga Warong!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>

              <div className="mt-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <blockquote className="italic text-center text-xl  leading-8 text-gray-900  sm:leading-9">
                    <p>
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nulla quis lorem ut libero malesuada feugiat.
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi.&quot;
                    </p>
                  </blockquote>
                  <p className="text-gray-900 font-semibold mt-2">- Pak Mat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
