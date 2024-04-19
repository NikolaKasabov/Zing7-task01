import { BsPersonCircle } from "react-icons/bs";

import { IoPersonCircle } from "react-icons/io5";

import person from '../../public/images/person1.png';
import CustomerReviewItem from "./CustomerReviewItem";

export default function CustomerReviews() {
  return (
    <section className="pb-[90px]">
      <h2 className="mt-12 text-[27px] font-bold text-center xl:text-left">Отзиви от клиенти</h2>
      <div className="mt-4 flex flex-wrap gap-x-[18px] gap-y-14 justify-center">
        <CustomerReviewItem
          icon={<IoPersonCircle className="text-[#D92027]" size={58} />}
          name="John Johnson"
          title="Co-founder of Forpeople"
        >
          A visual guide could be a wireframe, creative composition, or information architecture. A device that enables
          collaboration will lessen the chance of work having to be completely redone.
        </CustomerReviewItem>
        <CustomerReviewItem image={person} name="Cha Ji-Hun" title="Co-founder of Forpeople">
          A visual guide could be a wireframe, creative composition, or information architecture.
        </CustomerReviewItem>
        <CustomerReviewItem
          icon={<IoPersonCircle className="text-[#D92027]" size={58} />}
          name="Cha Ji-Hun"
          title="Co-founder of Forpeople"
        >
          A visual guide could be a wireframe, creative composition, or information architecture. A device that enables
          collaboration will lessen the chance of work having to be completely redone.
        </CustomerReviewItem>
        <CustomerReviewItem image={person} name="Cha Ji-Hun" title="Co-founder of Forpeople">
          A visual guide could be a wireframe, creative composition, or information architecture.
        </CustomerReviewItem>
      </div>
    </section>
  );
}
