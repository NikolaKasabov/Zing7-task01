import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import MoreOffers from "@/components/MoreOffers";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
        <MoreOffers />
      </main>
    </>
  );
}
