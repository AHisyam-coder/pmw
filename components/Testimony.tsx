import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Sehingga menjilat jari",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2024",
    datetime: "2020-03-16",
    category: { title: "Johor" },
    author: {
      name: "Ahmad Ali",
      role: "Pelanggan Setia",
      href: "#",
      imageUrl: "/pmkj.jpg",
    },
  },
  {
    id: 2,
    title: "Sehingga menjilat jari",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2024",
    datetime: "2020-03-16",
    category: { title: "Johor" },
    author: {
      name: "Ahmad Ali",
      role: "Pelanggan Setia",
      href: "#",
      imageUrl: "/pmkj.jpg",
    },
  },
  {
    id: 3,
    title: "Sehingga menjilat jari",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2024",
    datetime: "2020-03-16",
    category: { title: "Johor" },
    author: {
      name: "Ahmad Ali",
      role: "Pelanggan Setia",
      href: "#",
      imageUrl: "/pmkj.jpg",
    },
  },
];

export default function Testimony() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <div className="bg-green-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-green-700">
            Testimoni
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lihatlah beberapa testimoni dari pelanggan kami.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-green-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-green-100">
                  {post.category.title}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt="sda"
                  className="h-10 w-10 rounded-full bg-gray-50"
                  width={10}
                  height={10}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
