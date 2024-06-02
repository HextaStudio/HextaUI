import { Tweet } from "react-tweet";

export const Testimonials = () => {
  return (
    <>
      <div className="flex -mb-8  items-center justify-center flex-col text-center">
        <h2 className="text-4xl">What people are saying</h2>
        <p>
          Don't just take our word for it. Here's what real people are saying
          about Magic UI on X.
        </p>
      </div>
      <div className="flex flex-col -space-y-4">
        <div className="flex gap-4 testimonial-wrapper scale-[0.9]">
          <div className="testimonial-item item1">
            <Tweet id="1782653978683072684" />
          </div>
          <div className="testimonial-item item2">
            <Tweet id="1782680701067776207" />
          </div>
          <div className="testimonial-item item3">
            <Tweet id="1787135072392364394" />
          </div>
          <div className="testimonial-item item4">
            <Tweet id="1787091751997440143" />
          </div>
          <div className="testimonial-item item5">
            <Tweet id="1786800646433423488" />
          </div>
        </div>
        <div className="flex gap-4 testimonial-wrapper-reverse mb-8 scale-[0.9]">
          <div className="testimonial-item item6">
            <Tweet id="1785345519033684406" />
          </div>
          <div className="testimonial-item item7">
            <Tweet id="1787163815987007863" />
          </div>
          <div className="testimonial-item item8">
            <Tweet id="1787088566025122186" />
          </div>
          <div className="testimonial-item item9">
            <Tweet id="1794991372996313366" />
          </div>
          <div className="testimonial-item item10">
            <Tweet id="1794994587213451321" />
          </div>
        </div>
      </div>
    </>
  );
};
