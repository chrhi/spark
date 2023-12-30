import "../globals.css";
import "swiper/css";
import "swiper/css/pagination";
import TopLine from "./_components/top-line";
import NavBar from "./_components/nav-bar";
import Footer from "./_components/footer";

import StoreProvider from "./_components/store-provider";

export const revalidate = 3600; // revalidate at most every hour

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <div className={"h-fit w-full"}>
        <TopLine />
        <NavBar />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
