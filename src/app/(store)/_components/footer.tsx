import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { type FC } from "react";
import Secret from "./secret";

interface FooterAbdullahProps {}

const Footer: FC = ({}) => {
  return (
    <div className="w-full h-fit  overflow-hidden bg-black ">
      <MaxWidthWrapper className="flex flex-col">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 p-8 ">
          <div className="w-full h-[150px] flex gap-y-4  flex-col justify-start items-start">
            <h4 className="text-white text-lg font-semibold">Quick links</h4>
            <p className="text-white text-md">Bags</p>
            <p className="text-white text-md">Shoes</p>
            <p className="text-white text-md">Lookbook</p>
          </div>
          <div className="w-full h-[150px] flex gap-y-4  flex-col justify-start items-start">
            <h4 className="text-white text-lg font-semibold">Info</h4>
            <p className="text-white text-md">About</p>
            <p className="text-white text-md">Contact us</p>
            <p className="text-white text-md">Shipping policy</p>
          </div>
          <div className="w-full h-[150px] gap-y-4 flex flex-col justify-start items-start">
            <h4 className="text-white text-lg font-semibold">Our mission</h4>
            <p className="text-white text-md">
              Quality materials, good designs, craftsmanship and sustainability.
            </p>
          </div>
        </div>
        <div className="w-full  h-[100px] flex justify-between items-end p-6 ">
          <p className="text-white text-start">© 2023, All Rights resolved</p>{" "}
          <Secret />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
