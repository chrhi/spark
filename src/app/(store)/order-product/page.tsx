import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { OrderForm } from "@/components/forms/order-form";
import { FC } from "react";
import YourBagShowCase from "../_components/YourBagShowCase";

const page: FC = ({}) => {
  return (
    <MaxWidthWrapper className="max-w-screen-2xl">
      <div className="w-full min-h-screen h-fit grid grid-col-1 md:grid-cols-2 ">
        <div className="w-full hidden md:block my-8 rounded-xl h-[80%]  bg-gray-50">
          <YourBagShowCase />
        </div>
        <div className="w-full h-full p-3 md:p-6 pt-12">
          <h1 className="text-xl font-bold text-start my-4 ">
            Enter your informations
          </h1>
          <OrderForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
