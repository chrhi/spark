import { FC } from "react";

interface pageAbdullahProps {}

const page: FC = ({}) => {
  return (
    <div className="hidden max-w-[1200px] mx-auto flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Customize</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
