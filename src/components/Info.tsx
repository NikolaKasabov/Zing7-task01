import About from "./About";
import Gallery from "./Gallery";
import Performers from "./Performers";
import PromoPackages from "./PromoPackages";

export default function Info() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-[56%_44%]">
      <div className="justify-self-center xl:justify-self-end mt-[195px] xl:mr-[38px] px-5">
        <section className="max-w-[644px] w-full">
          <About />
          <Gallery />
          <PromoPackages />
          <Performers />
        </section>
      </div>
      <div className="justify-self-center xl:justify-self-start xl:w-full">
        <section className="pt-[195px] sticky top-10 bg-[#FAFAFA]">right</section>
      </div>
    </section>
  );
}
