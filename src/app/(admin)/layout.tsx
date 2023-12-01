import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "./_components/Header";
import { Sidebar } from "./_components/sidebar";

import { Toaster } from "sonner";
import Providers from "@/components/providers";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className="flex w-full min-h-screen">
        <Sidebar className="block w-[200px] fixed left-0  top-16 bottom-0 " />

        <main className="w-[calc(100%-200px)] ml-[200px] bg-gray-50 ">
          {children}
        </main>
        <Toaster />
      </div>
    </Providers>
  );
}
