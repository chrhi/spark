import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { OrderForm } from "@/components/forms/order-form";
import type { FC } from "react";
import YourBagShowCase from "../_components/YourBagShowCase";

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full min-h-screen h-fit grid grid-cols-2 ">
        <div className="w-full my-8 rounded-xl h-[80%]  bg-gray-50">
          <YourBagShowCase />
        </div>
        <div className="w-full h-full  p-6">
          <OrderForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
