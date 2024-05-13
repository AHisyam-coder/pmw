import { motion } from "framer-motion";
import { Beef, Truck, Utensils } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    name: "Penghantaran ke seluruh Malaysia",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Truck,
  },
  {
    name: "Pelbagai jenis hidangan barat",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Beef,
  },
  {
    name: "Hidangan istimewa setiap hari",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Utensils,
  },
];

export default function Feature() {
  const [aboutInView, setAboutInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutInView(true);
          } else {
            setAboutInView(false);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    const currentRef = aboutRef.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden bg-green-50 py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-700">
                Ciri-ciri
              </h2>
              <p className="font-serif mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kenapa Kami Menjadi Pilihan?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Pak Mat Western ialah sebuah restoran yang terkenal dengan
                hidangan baratnya, seperti stik dan bermacam lagi. Restoran ini
                mempunyai cawangan di seluruh Malaysia dan menawarkan pelbagai
                hidangan barat yang lazat dan berpatutan.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-green-700"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <motion.div
            ref={aboutRef}
            initial={{ scale: 0 }}
            animate={aboutInView ? { rotate: 360, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image
              src="/homebanner-03.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={1432}
              height={442}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
