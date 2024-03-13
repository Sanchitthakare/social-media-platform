import React from "react";

type Props = {};

const HomePageInfoPage = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto mt-16 p-2">
      <div className="bg-blue-200 flex w-full p-4 rounded-xl md:rounded-full mb-4 ">
        <div className="hidden md:w-1/3 bg-white rounded-l-full md:flex justify-center items-center text-2xl text-blue-500">
        Lorem Ipsum
        </div>
        <div className="w-full md:w-2/3 p-10 flex flex-col gap-4">
          <p className="md:hidden flex">Lorem Ipsum</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ratione sunt dolores pariatur culpa necessitatibus omnis nisi minus
          possimus assumenda magni, ipsa voluptatibus veritatis est laboriosam
          maiores corrupti corporis. Doloremque ad hic, cumque facilis quod
          nulla omnis non! Omnis provident repudiandae dolore voluptatem
          accusamus porro suscipit doloremque veritatis harum perspiciatis
          laudantium odit eaque dolor soluta in laboriosam doloribus nam, quidem
          tempore voluptatum vero laborum dicta fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sed quis temporibus soluta inventore commodi expedita nsto voluptatem nulla consequatur, dolorem tempora impedit vitae temporibus neque sequi iure, laboriosam itaque minus assumenda explicabo quaerat?</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfoPage;
