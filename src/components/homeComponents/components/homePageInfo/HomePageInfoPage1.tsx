import React from "react";
import Image from "next/image";
type Props = {};

const HomePageInfoPage1 = (props: Props) => {
  return (
    <div className=" p-2 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {[1, 2, 3].map((item, index) => (
          <div key={index}>
            <div
              className={` flex w-full p-4  mb-4  ${
                (index as number) % 2 === 0
                  ? "rounded-xl md:rounded-r-full flex-row bg-yellow-100"
                  : "rounded-xl md:rounded-l-full flex-row-reverse bg-blue-200"
              }`}
            >
              <div className="w-full md:w-2/3 p-10 flex gap-4 flex-col justify-center items-start">
                <p className="">Lorem Ipsum</p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita ratione sunt dolores pariatur culpa necessitatibus
                  omnis nisi minus possimus assumenda magni, ipsa voluptatibus
                  veritatis est laboriosam maiores corrupti corporis. Doloremque
                  ad hic, cumque facilis quod nulla omnis non! Omnis provident
                  repudiandae dolore voluptatem accusamus porro suscipit
                  doloremque veritatis harum perspiciatis laudantium odit eaque
                  dolor soluta in laboriosam doloribus nam, quidem tempore
                  voluptatum vero laborum dicta fuga?
                </p>
                <button className="p-1 px-3 rounded-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105">
                  Button {"->"}
                </button>
              </div>
              <div className="hidden  md:flex md:w-1/3 p-6  justify-center items-center">
                <Image
                  src={`/manage${(index % 2) + 1}.svg`}
                  alt="Image"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageInfoPage1;
