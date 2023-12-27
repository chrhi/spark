import Link from "next/link";
import type { FC } from "react";

interface BreadcrumbsAbdullahProps {
  category: string;
  productName: string;
}

const Breadcrumbs: FC<BreadcrumbsAbdullahProps> = ({
  category,
  productName,
}) => {
  return (
    <div>
      <Link href={"/"}>Home</Link> &gt;{" "}
      <Link href={"/collection/hhhh"}>{category}</Link> &gt; {productName}
    </div>
  );
};

export default Breadcrumbs;
