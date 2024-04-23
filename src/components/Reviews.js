import Link from "next/link";
import { Tweet } from "react-tweet";

export const Reviews = () => {
  return (
    <>
      <div>
        <Tweet id="1782653978683072684" />
        <Tweet id="1782680701067776207" />
      </div>
      <div>
        <small>
          Feel free to Leave a Review{" "}
          <Link
            href="https://twitter.com/intent/tweet?url=&text=%40HextaStudio"
            className="blue-link"
          >
            Here
          </Link>
          !
        </small>
      </div>
    </>
  );
};
