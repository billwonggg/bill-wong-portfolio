import cp from "../assets/images/cp.png";
import investing from "../assets/images/investing.png";
import { CollapseProps } from "../components/Collapsable/Collapse";

const MyInterests: CollapseProps[] = [
  {
    headline: "Competitive Programming",
    content: (
      <>
        <img src={cp} alt="competitive programming" />
        <p>
          I like to compete in programming competitions, such as the ICPC and Google Kick Start. I
          competed in the 2021 ICPC South Pacific Division and achieved the second place.
        </p>
      </>
    ),
  },
  {
    headline: "Investments",
    content: (
      <>
        <img src={investing} alt="investing" />
        <p>
          I listen to financial podcasts and I like to invest. I have previously won the National
          First Prize in the ASX Schools Sharemarket Game.
        </p>
      </>
    ),
  },
];

export default MyInterests;
