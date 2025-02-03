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
    <div className="items-center flex flex-col w-[25rem] h-[64rem] overflow-hidden lg:w-[90rem]">
      <div className="flex items-center text-left w-fit h-[4.5rem] px-[1.75rem] py-[1rem] gap-[1.75rem]
      border-b-white-[0.05rem] justify-between lg:h-[4rem] lg:w-[70rem]">
        <img
          src="/assets/Corner_Table_LogoMay20242.png"
          alt="Corner Table Logo"
          className="w-[6.25rem] h-[2.5rem]"
        />
        <div className={'flex flex-none items-center w-auto gap-1'}>
          <p className="font-custom text-textColor text-right font-normal text-[0.75rem] hidden lg:block">
            Do you in the hospitality industry?{" "}
          </p>
          <p className="lg:hidden font-custom text-textColor text-right font-normal text-[0.75rem]">
            Are you in the industry?{" "}
          </p>
          <Link to="hospitality" className={"font-custom text-[0.75rem] text-customBrown"}>
            Go here
          </Link>
        </div>
      </div>
      <div className={"lg:flex lg:flex-row lg:gap-[3rem] items-center lg:h-[48rem] lg:w-[70rem] lg:items-center"}>
        <div className="flex flex-col w-[25rem] h-[18.4rem] p-[1rem] gap-[1.75rem] lg:w-[30rem] lg:h-[18rem] lg:text-left">
          <div className="flex-col w-full h-auto gap-4 lg:flex lg:flex-col lg:items-center lg:gap-5">
            <div className={"w-full gap-4 h-auto"}>
              <p className="font-custom font-light text-[2rem] text-center italic lg:not-italic text-textTertiaryColor">
                Be a regular{" "}<br/>
                <span className="not-italic font-semibold text-primaryColor">
              anywhere in the world
              </span>
              </p>
              <p
                className="w-[22rem] h-[4rem] font-custom text-[0.8rem] font-normal text-secondary leading-[1.3rem] text-center">
                {randomText}
              </p>
            </div>
            <div className="flex flex-col h-auto w-[23rem] gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="font-custom text-[0.8rem] w-full h-[3.25rem] rounded-[0.25rem] bg-inputColor py-5 pl-[1rem] gap-2.5"
              />
              <button className="w-full h-auto rounded px-3 py-4 gap-1 bg-customBrown text-white">
                Get notified
              </button>
            </div>
          </div>
        </div>
        <img
          className="relative object-fill w-[26rem] h-[36rem] rotate--180 left-[3.5rem]"
          src="assets/Version01.png"
          alt="MobileView"
        />
      </div>
      <div className="flex flex-col w-full h-auto py-5 gap-1.5 border-t border-borderColor items-center
        text-secondary">
        <div className="h-auto gap-1 flex items-center">
          <Link to="#">
            Contact us
          </Link>
          <img className={"flex w-[3px] h-[4px]  "} src={"assets/Ellipse.png"} alt="Dot"/>
          <Link to={'#'}>
            Privacy policy
          </Link>
        </div>
        <div className="font-custom text-sm">
          © 2024 Corner Table App
        </div>
      </div>
    </div>
  );
}
