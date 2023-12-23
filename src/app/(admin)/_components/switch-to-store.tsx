"use client";

import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { useRouter } from "next/navigation";

interface SwitchToStoreAbdullahProps {}

const SwitchToStoreAbdullahProps: FC = ({}) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")} size={"lg"}>
      switch to store
    </Button>
  );
};

export default SwitchToStoreAbdullahProps;
