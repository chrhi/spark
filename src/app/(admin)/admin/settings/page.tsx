import type { FC } from "react";
import ShippingSelector from "../../_components/shipping-selector";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <div className=" max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <h1 className="text-2xl font-bold text-start ">Settings</h1>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ShippingSelector />
      </div>
    </div>
  );
};

export default page;
