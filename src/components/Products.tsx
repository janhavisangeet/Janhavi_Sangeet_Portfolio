// "use client";
// import React from "react";
// import { Heading } from "./Heading";
// import { Product } from "@/types/products";
// import { products } from "@/constants/products";
// import Link from "next/link";
// import Image from "next/image";
// import { Paragraph } from "./Paragraph";
// import { motion } from "framer-motion";

// export const Products = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-1  gap-10">
//         {products.map((product: Product, idx: number) => (
//           <motion.div
//             key={product.href}
//             initial={{
//               opacity: 0,
//               x: -50,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{ duration: 0.2, delay: idx * 0.1 }}
//           >
//             <Link
//               href={product.slug ? `/projects/${product.slug}` : product.href}
//               key={product.href}
//               className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rounded-2xl border border-transparent hover:border-neutral-200 hover:bg-white p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               <Image
//                 src={product.thumbnail}
//                 alt="thumbnail"
//                 height="200"
//                 width="200"
//                 className="rounded-xl object-cover shadow-sm group-hover:shadow-md transition duration-300"
//               />
//               <div className="flex flex-col justify-between">
//                 <div>
//                   <Heading
//                     as="h4"
//                     className="font-black text-lg md:text-lg lg:text-lg "
//                   >
//                     {product.title}
//                   </Heading>
//                   <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
//                     {product.description}
//                   </Paragraph>
//                 </div>
//                 <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
//                   {product.stack?.map((stack: string) => (
//                     <span
//                       key={stack}
//                       className="text-xs bg-neutral-100 px-2 py-1 rounded-md text-secondary border border-neutral-200"
//                     >
//                       {stack}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href}
              className="
                group
                flex
                flex-col
                md:flex-row
                space-y-4
                md:space-y-0
                md:space-x-4
                rounded-2xl
                border
                border-transparent
                hover:border-neutral-200
                dark:hover:border-neutral-800
                hover:bg-white
                dark:hover:bg-neutral-900
                p-4
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              <Image
                src={product.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="
                  rounded-xl
                  object-cover
                  shadow-sm
                  group-hover:shadow-md
                  transition
                  duration-300
                "
              />

              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="
                      font-black
                      text-lg
                      md:text-lg
                      lg:text-lg
                      text-black
                      dark:text-white
                    "
                  >
                    {product.title}
                  </Heading>

                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl text-neutral-700 dark:text-neutral-300">
                    {product.description}
                  </Paragraph>
                </div>

                <div className="flex flex-wrap gap-2 md:mb-1 mt-3 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="
                        text-xs
                        bg-neutral-100
                        dark:bg-neutral-800
                        px-2
                        py-1
                        rounded-md
                        text-secondary
                        dark:text-neutral-300
                        border
                        border-neutral-200
                        dark:border-neutral-700
                      "
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
