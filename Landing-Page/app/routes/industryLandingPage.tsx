import {Link} from "@remix-run/react";

export default function RegularLandingPage() {

  /*  const texts = [
      "Find your favorite bar's favorite bars.",
      "Enjoy your favorite restaurant's favorite restaurant.",
      "Meet your favorite bartender's favorite bartender.",
      "Visit your favorite chef's favorite chefs."
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];*/

  return (
    <div className="items-center flex flex-col w-full">
      <div className="flex items-center justify-between text-left w-full lg:w-[70rem] h-[4.5rem]
      lg:px-0 px-[1.75rem] py-[1rem] lg:mt-5 gap-[1.75rem]
      border-b-white-[0.05rem]">
        <img
          src="/assets/Corner_Table_LogoMay20242.png"
          alt="Corner Table Logo"
          className="w-[6.25rem] lg:w-[10rem] h-[2.5rem] lg:h-[4rem]"
        />
        <div className="flex flex-none items-center w-auto gap-1">
          <p className="font-custom text-textColor text-right font-normal text-[0.75rem] lg:text-[0.9rem]">
            Are you a regular?{" "}
          </p>
          <Link
            to="/regularLandingPage"
            className={"font-custom text-[0.75rem] lg:text-[0.9rem] text-customBrown"}>
            Go here
          </Link>
        </div>
      </div>
      <div className={"lg:flex lg:flex-row items-center w-full h-auto lg:h-[48rem] lg:w-[70rem] lg:justify-between"}>
        <div className="flex flex-col w-full h-full lg:h-[18rem] p-4 gap-[1.75rem] lg:text-left">
          <div className="flex-col w-full h-auto gap-4 lg:flex lg:gap-5">
            <p className="font-custom font-light text-[2rem] lg:text-[3rem] text-center lg:text-left
              lg:leading-[3.5rem] leading-[2.3rem] italic text-black">
              Share your network{" "}
              <span className="lg:text-left not-italic font-semibold ">
                  of{" "}
                <br/>
                  favorite venues with your regulars
              </span>
            </p>
            <p className=" flex mb-2 text-center ml-5 lg:ml-0 lg:text-left text-[0.8rem] lg:text-[1rem] w-[22rem] h-[4rem]
              font-custom font-normal leading-[1.3rem] text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <div className="flex flex-col h-auto lg:h-[3.8rem] w-full gap-4 lg:gap-0 lg:flex-row lg:w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full lg:w-[20rem] h-[3.25rem] lg:h-full outline-0 font-custom text-[0.8rem]
                lg:text-[0.9rem] rounded-[0.25rem] bg-inputColor py-5 pl-[1rem] gap-2.5 "/>
              <button
                className="w-full h-auto rounded px-3 py-4 gap-1 lg:text-[0.9rem] bg-customBrown
                 text-white lg:w-[8rem] lg:rounded-tl-none lg:rounded-bl-none">
                <span className="block lg:hidden">Get notified</span>
                <span className={"hidden lg:block font-custom font-[1rem]"}>Join waitlist</span>
              </button>
            </div>
          </div>
        </div>
        <img
          className="lg:object-fill object-contain ml-10 lg:ml-0 max-w-full h-auto lg:h-[48rem] lg:w-[36rem]"
          src="assets/Version01.png"
          alt="MobileView"
        />
      </div>
      <div className="flex flex-col w-full h-auto py-5 gap-1.5 border-t border-borderColor items-center
        text-secondary lg:w-[70rem] lg:h-[5rem] lg:flex-row-reverse lg:justify-between ">
        <div className="h-auto gap-1 flex items-center lg:gap-[1.25rem] lg:text-[0.75rem] lg:mt-auto">
          <Link to="#">
            Contact us
          </Link>
          <img className={"flex w-[3px] h-[4px] lg:hidden"} src={"assets/Ellipse.png"} alt="Dot"/>
          <Link to={'#'}>
            Privacy policy
          </Link>
        </div>
        <div className="font-custom text-sm lg:text-[0.75rem] lg:mt-auto">
          © 2024 Corner Table App
        </div>
      </div>
    </div>
  );
}
