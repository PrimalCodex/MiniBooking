import {Link} from "@remix-run/react";
import MainView from "~/routes/MainView";

export default function LandingPage() {
  return (
    <div className="max-w-[90rem] h-[61rem] mt-[5rem] m-[5rem] items-center bg-white">
      <div className="max-w-[70rem] h-[4rem] mt-[1.25rem] m-[10rem] flex justify-between items-center">
        <img
          src="/assets/Corner_Table_LogoMay20242.png"
          alt="Corner Table Logo"
          className="w-[10] h-[4]"
        />
        <p className="text-textColor text-right font-custom p-[12] gap-10 text-[0.85]">
          Do you work in the hospitality industry?{" "}
          <span>
            <Link
              to="hospitality"
              className="text-customBrown pointer-events-auto"
            >
              Go here
            </Link>
          </span>
        </p>
      </div>
      <MainView/>
      <div
        className="max-w-[70rem] h-[2.6rem] pt-[1.5rem] ml-[10rem] border-t-[1px]
          flex justify-between items-center text-paragraphColor">
        <div className={"w-[9rem] h-[1rem] font-custom font-normal text-[0.8rem] leading-[1rem] "}>
          © 2024 Corner Table App
        </div>
        <div
          className={"flex justify-between gap-1 w-[10rem] h-[1rem] font-custom text-[0.8rem] " +
            "leading-[1rem] text-paragraphColor"}>
          <span>Contact us</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  );
}
