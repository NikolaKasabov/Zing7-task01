import About from "./About";
import Gallery from "./Gallery";

export default function Info() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-[56%_44%]">
      <div className="justify-self-center xl:justify-self-end mt-[195px] xl:mr-[58px]">
        <section className="max-w-[644px] w-full">
          <About />
          <Gallery />
        </section>
      </div>
      <div className="justify-self-center xl:justify-self-start w-full">
        <section className="pt-[195px] sticky top-10 bg-[#FAFAFA]">right</section>
      </div>
    </section>
  );
}