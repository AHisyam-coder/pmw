import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = [
  { name: "Pek Ayam", price: "49.90" },
  { name: "Pek Ayam", price: "49.90" },
  { name: "Pek Ayam", price: "49.90" },
  { name: "Pek Ayam", price: "49.90" },
  { name: "Pek Ayam", price: "49.90" },
  { name: "Pek Ayam", price: "49.90" },
];

const Menu = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "70px",
      }}
    >
      <Header />
      <div className="container mx-auto py-24">
        <div className="mx-auto max-w-2xl text-center mb-20 mt-10">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Produk Kami
          </h2>
        </div>
        <div className="flex justify-center">
          <Tabs defaultValue="foods">
            <TabsList>
              <TabsTrigger value="foods">Foods</TabsTrigger>
              <TabsTrigger value="drinks">Drinks</TabsTrigger>
              <TabsTrigger value="packets">Packets</TabsTrigger>
            </TabsList>
            <TabsContent value="foods">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/MEATBALL.png"
                      alt={item.name}
                      className="w-full h-32 object-contain"
                      width={1000}
                      height={100}
                    />
                    <div className="p-4 sm:p-6">
                      <p className="font-serif text-gray-700 text-[22px] leading-7 mb-1">
                        {item.name}
                      </p>
                      <div className="flex flex-row">
                        <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                          MYR 69.90
                        </p>
                        <p className="text-[17px] font-bold text-green-700">
                          MYR {item.price}
                        </p>
                      </div>
                      <p className="text-[#7C7C80] font-[15px] mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="drinks">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/MEATBALL.png"
                      alt={item.name}
                      className="w-full h-32 object-contain"
                      width={1000}
                      height={100}
                    />
                    <div className="p-4 sm:p-6">
                      <p className="font-serif text-gray-700 text-[22px] leading-7 mb-1">
                        {item.name}
                      </p>
                      <div className="flex flex-row">
                        <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                          MYR 69.90
                        </p>
                        <p className="text-[17px] font-bold text-green-700">
                          MYR {item.price}
                        </p>
                      </div>
                      <p className="text-[#7C7C80] font-[15px] mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="packets">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/MEATBALL.png"
                      alt={item.name}
                      className="w-full h-32 object-contain"
                      width={1000}
                      height={100}
                    />
                    <div className="p-4 sm:p-6">
                      <p className="font-serif text-gray-700 text-[22px] leading-7 mb-1">
                        {item.name}
                      </p>
                      <div className="flex flex-row">
                        <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                          MYR 69.90
                        </p>
                        <p className="text-[17px] font-bold text-green-700">
                          MYR {item.price}
                        </p>
                      </div>
                      <p className="text-[#7C7C80] font-[15px] mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Menu;
