import { type FC } from "react";
import FirstSidebar from "./first-sidebar";
import SecondSidebar from "./second-sidebar";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const SideBar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("pb-12", className)}>
      <FirstSidebar />
      <SecondSidebar />
    </div>
  );
};

export default SideBar;
