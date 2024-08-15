import React from "react";
import ServiceUtils from "../serviceUtils/ServiceUtils";

const AbtSection = () => {
  return (
    <div id="About"className=" px-5 lg:px-20 mt-32" data-aos="fade-right">
      <div
        className="title font-semibold text-2xl text-center pb-16"
        data-aos="fade-up"
      >
        About Us
      </div>

      <div className="mb-16">
        <div className=" flex items-center gap-3">
          <div className="left bg-[#FF3F8E] w-2 rounded-md h-12"></div>
          <div className=" text-2xl text-[#2f2f22bd]">
            Want to Know about `Norriscole Cleaning Service`?
          </div>
        </div>
        <div className="text-[#414845]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex
          praesentium, reprehenderit blanditiis neque totam, dolorem in debitis
          nihil quo fugit. Nihil nemo est quos aliquid dolorem. Repudiandae,
          autem eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sunt laudantium in fugiat commodi eius consectetur quia
          reiciendis dolores, quam ipsam veritatis error vero velit quas, cumque
          ex, amet aliquid necessitatibus. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nesciunt, odio voluptatum expedita
          quibusdam aliquam aspernatur nobis neque nemo. Repellat porro earum
          dignissimos nihil, eius hic illo voluptas laudantium! At, dolorem!
        </div>
      </div>

      <div className="box flex flex-col gap-6 ">
        <div className=" lg:flex items-center gap-5">
          <div
            className="text lg:w-[50%] flex flex-col text-center justify-center gap-5 lg:px-12 items-center"
            data-aos="fade-left"
          >
            <div className="title">Hello Title</div>
            <div className="text-[#414845] leading-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ducimus iste illo nemo, accusantium dicta? Cupiditate architecto
              pariatur iusto necessitatibus quod ipsa odit nesciunt repellat
              voluptas, fugiat, enim placeat veniam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis expedita consequuntur velit
              ipsum saepe, maiores blanditiis officiis cupiditate, deserunt
              laborum corporis. Mollitia explicabo tempore aliquid hic
              repudiandae quod. Repudiandae,
            </div>
          </div>

          <div
            className="imgbg1 lg:w-[50%] border-2 mt-3"
            data-aos="fade-up"
          ></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
          <div className="imgbg2 w-full lg:w-[50%]" data-aos="fade-left"></div>

          <div
            className="text w-full lg:w-[50%] flex flex-col text-center justify-center gap-5 lg:px-12 items-center"
            data-aos="fade-right"
          >
            <div className="title">Hello Title</div>
            <div className="text-[#414845] leading-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ducimus iste illo nemo, accusantium dicta? Cupiditate architecto
              pariatur iusto necessitatibus quod ipsa odit nesciunt repellat
              voluptas, fugiat, enim placeat veniam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis expedita consequuntur velit
              ipsum saepe, maiores blanditiis officiis cupiditate, deserunt
              laborum corporis. Mollitia explicabo tempore aliquid hic
              repudiandae quod. Repudiandae, fuga?
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <ServiceUtils />
      </div>
    </div>
  );
};

export default AbtSection;
