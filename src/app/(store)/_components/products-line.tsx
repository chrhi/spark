import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Props {
  title: string;
  href: string;
  children: ReactNode;
}

export default function ProductsLine({ title, href, children }: Props) {
  return (
    <div className="bg-white mx-auto w-full flex flex-col h-fit gap-y-8 my-8">
      <div className="w-full h-[50px] px-2 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-start ">{title}</h2>

        <Button variant="link">view more products</Button>
      </div>
      <div className="w-full px-2  mx-auto h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8 ">
        {children}
      </div>
    </div>
  );
}
