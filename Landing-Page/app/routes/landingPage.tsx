import {Link} from "@remix-run/react";

export default function LandingPage() {
  const texts = [
    "Find your favorite bar's favorite bars.",
    "Enjoy your favorite restaurant's favorite restaurant.",
    "Meet your favorite bartender's favorite bartender.",
    "Visit your favorite chef's favorite chefs."
  ];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  return (
    <div className="items-center flex flex-col md:w-[25rem] md:h-[64rem] lg:w-[1440px]">
      <div className="flex ite-center sm:text-left sm:w-full sm:h-[4.5rem] sm:px-[1.75rem] sm:py-[1rem] sm:gap-[1.75rem]
      sm:border-b-white-[0.05rem] justify-between">
        <img
          src="/assets/Corner_Table_LogoMay20242.png"
          alt="Corner Table Logo"
          className="sm:w-[6.25rem] sm:h-[2.5rem]"
        />
        <p className="font-custom text-textColor font-normal text-[0.75rem]">
          Do you work in the hospitality industry?{" "}
          <Link to="hospitality" className="text-customBrown">
            Go here
          </Link>
        </p>
      </div>
      <div className="flex flex-col sm:w-[25rem] sm:h-[18.4rem] sm:p-[1rem] sm:gap-[1.75rem]">
        <div className="flex-col sm:w-full sm:h-auto sm:gap-4">
          <div className={"sm:w-full sm:gap-4 sm:h-auto"}>
          <p className="font-custom font-light sm:text-[2rem] text-center sm:italic text-textTertiaryColor">
            Be a regular{" "}<br/>
            <span className="font-semibold text-primaryColor">
            anywhere in the world
          </span>
          </p>
          <p className="sm:w-[22rem] sm:h-[4rem] font-custom text-[0.8rem] font-normal text-secondary sm:leading-[1.3rem] text-center">
            {randomText}
          </p>
          </div>
          <div className="flex flex-col h-auto w-[23rem] sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="sm:w-full sm:h-[3.25rem] sm:rounded-[0.25rem] bg-inputColor sm:py-5 sm:gap-2.5"
            />
            <button className="sm:w-full sm:h-auto sm:rounded sm:px-3 sm:py-4 sm:gap-1 bg-customBrown text-white">
              Get notified
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto flex justify-center">
        <img
          className="w-[26rem]"
          src="assets/Version01.png"
          alt="MobileView"
        />
      </div>
      <div
        className="w-[80rem] h-10 pt-6 mx-10 border-t border-borderColor flex justify-between ite-center
        text-paragraphColor">
        <div className="font-custom text-sm">
          © 2024 Corner Table App
        </div>
        <div className="flex gap-4 font-custom text-sm">
          <Link to="/contact">
            Contact us
          </Link>
          <Link to="/privacy-policy">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}
