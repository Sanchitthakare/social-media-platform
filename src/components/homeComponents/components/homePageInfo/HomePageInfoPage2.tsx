import React from "react";

type Props = {};

const HomePageInfoPage2 = (props: Props) => {
  return (
    <div className=" p-2 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {[1, 2, 3].map((item, index) => (
          <div key={index}>
            <div className="w-full bg-gray-100 flex-col gap-4 md:flex-row flex justify-center items-center p-10 mb-4">
              <div className="w-1/3">
                <p>Lorem Ipsum</p>
              </div>
              <div className="w-2/3">
                <ul>
                  <li
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione aspernatur neque aliquid consequatur vero, culpa
                    quod voluptatibus odio dolorem accusamus esse nostrum
                    doloremque! Tempore, vero sint provident repudiandae ducimus
                    nulla.
                  </li>
                  <li
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati deleniti, temporibus sapiente saepe cupiditate ab
                    similique aspernatur eum architecto cum maiores. Distinctio
                    ex porro ut expedita, praesentium magnam quae ducimus!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageInfoPage2;
