import Header from "./_components/Header";
import { Sidebar } from "./_components/sidebar";
import { Toaster } from "sonner";
import Providers from "@/components/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "spark",
  description: "Example dashboard app built using the components.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className="flex w-full min-h-screen">
        <Sidebar className=" hidden md:block w-[200px] fixed left-0  top-16 bottom-0 " />

        <main className=" w-full md:w-[calc(100%-200px)] md:ml-[200px] bg-gray-50 ">
          {children}
        </main>
        <Toaster />
      </div>
    </Providers>
  );
}
