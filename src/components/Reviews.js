import Link from "next/link";
import { Tweet } from "react-tweet";

export const Reviews = () => {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <Tweet id="1782653978683072684" />
        </div>
        <div>
          <Tweet id="1782680701067776207" />
        </div>
        <div>
          <Tweet id="1787135072392364394" />
        </div>
        <div>
          <Tweet id="1787091751997440143" />
        </div>
        <div>
          <Tweet id="1787091751997440143" />
        </div>
        <div>
          <Tweet id="1786800646433423488" />
        </div>
        <div>
          <Tweet id="1786800646433423488" />
        </div>
        <div>
          <Tweet id="1785345519033684406" />
        </div>
        <div>
          <Tweet id="1787163815987007863" />
        </div>
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
