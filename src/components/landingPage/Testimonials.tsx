import { Tweet } from "react-tweet";

export const Testimonials = () => {
  return (
    <>
      <div className="flex -mb-8  items-center justify-center flex-col text-center">
        <h2 className="text-4xl">What people are saying</h2>
        <p>
          Don't just take our word for it. Here's what real people are saying
          about hextastudio/ui on X.
        </p>
      </div>

      <div className="group flex overflow-hidden my-[3rem] py-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        <div className="flex flex-col [gap:var(--gap)] ">
          <div className="flex [gap:var(--gap)] h-[300px] overflow-hidden [mask-image:linear-gradient(to_top,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item1">
                    <Tweet id="1782653978683072684" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item2">
                    <Tweet id="1782680701067776207" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item3">
                    <Tweet id="1787135072392364394" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item4">
                    <Tweet id="1787091751997440143" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item5">
                    <Tweet id="1786800646433423488" />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex [gap:var(--gap)] h-[300px] overflow-hidden [mask-image:linear-gradient(to_top,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [animation-direction:reverse] [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item6">
                    <Tweet id="1785345519033684406" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item7">
                    <Tweet id="1787163815987007863" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item8">
                    <Tweet id="1787088566025122186" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item9">
                    <Tweet id="1794991372996313366" />
                  </div>
                  <div className="testimonial-item scale-[0.9] text-sm w-[330px] item10">
                    <Tweet id="1794994587213451321" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
