export default function MainView() {
  const texts = [
    "Find your favorite bar's favorite bars.",
    "Enjoy your favorite restaurant's favorite restaurant.",
    "Meet your favorite bartender's favorite bartender.",
    "Visit your favorite chef's favorite chefs."
  ];
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  return (
    <div className="flex flex-col lg:flex-row max-w-[80rem] mx-auto h-auto lg:h-[48rem] mt-8 lg:mt-[8.5rem] px-6 lg:px-20 gap-12 lg:gap-24 ite-center">
      {/* Left Section */}
      <div className="w-full lg:w-[40rem] text-left">
        <p className="font-custom font-light text-3xl lg:text-[3.5rem] leading-[1.2] text-textTertiaryColor">
          Be a regular{" "}
          <span className="font-semibold text-primaryColor">
            anywhere <br /> in the world
          </span>
        </p>
        <p className="font-custom text-lg lg:text-xl mt-4 lg:mt-6 text-paragraphColor leading-relaxed">
          {randomText}
        </p>

        {/* Input and Button */}
        <div className="flex w-full mt-6 lg:mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-14 lg:h-16 bg-inputColor rounded-l-lg px-4 text-base lg:text-lg"
          />
          <button className="w-32 lg:w-40 h-14 lg:h-16 bg-customBrown text-white font-medium rounded-r-lg">
            Join waitlist
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-auto flex justify-center">
        <img
          className="object-cover w-full max-w-md lg:max-w-[30rem]"
          src="assets/Version01.png"
          alt="MobileView"
        />
      </div>
    </div>
  );
}
