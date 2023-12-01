import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Toaster } from "sonner";
import Header from "./_components/Header";
import SideBar from "./_components/sidebar";
import EditorProviders from "./_components/editor-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EditorProviders>
      <Header />
      <div className="flex w-full min-h-screen">
        <SideBar className="w-[350px]   left-0  top-16 bottom-0   h-full flex fixed " />
        <main className="w-[calc(100%-350px)] ml-[350px] bg-gray-50 ">
          {children}
        </main>
        <Toaster />
      </div>
    </EditorProviders>
  );
}
