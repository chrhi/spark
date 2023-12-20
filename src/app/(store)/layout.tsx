import "../globals.css";
import "swiper/css";
import "swiper/css/pagination";
import TopLine from "./_components/top-line";
import NavBar from "./_components/nav-bar";
import Footer from "./_components/footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"h-fit w-full"}>
      <TopLine />
      <NavBar />
      <main className="min-h-screen w-full">{children}</main>
      <Footer />
    </div>
  );
}
