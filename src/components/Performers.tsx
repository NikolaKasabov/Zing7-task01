import Image from "next/image";
import performer1 from "../../public/images/performer1.png";
import performer2 from "../../public/images/performer2.png";
import performer3 from "../../public/images/performer3.png";
import performer4 from "../../public/images/performer4.png";

export default function Performers() {
  return (
    <>
      <h3 className="mt-12 text-lg font-bold text-center xl:text-left">Изпълнители</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-[15px] text-black">
        <div>
          <Image src={performer1} alt="Fat Joe" />
          <p className="mt-2 text-sm text-center">Fat Joe</p>
        </div>
        <div>
          <Image src={performer2} alt="Eminem" />
          <p className="mt-2 text-sm text-center">Eminem</p>
        </div>
        <div>
          <Image src={performer3} alt="50 cent" />
          <p className="mt-2 text-sm text-center">50 cent</p>
        </div>
        <div>
          <Image src={performer4} alt="Jay-Z" />
          <p className="mt-2 text-sm text-center">Jay-Z</p>
        </div>
      </div>
    </>
  );
}
