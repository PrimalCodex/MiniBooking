export default function MainView() {

  const texts = [
    "Find your favorite bar's favorite bars.",
    "Enjoy your favorite restaurant's favorite restaurant.",
    "Meet your favorite bartender's favorite bartender.",
    "Visit your favorite chef's favorite chefs."
  ];
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  return (
    <div className="flex flex-row max-w-[70rem] h-[48rem] mt-[8.5rem] ml-[10rem] gap-[3rem] items-center">
      <div className="w-[30rem] h-[18rem]">
        <div className="w-[30rem] h-[13.5rem] gap-[1.25rem]">
          <p className="w-[36rem] font-custom font-light text-[3rem] leading-[3.5rem] text-textTertiaryColor">
            Be a regular{' '}
            <span className="font-custom font-semibold text-[3rem] leading-[3.5rem]">
            anywhere<br/>
              in the world
            </span>
          </p>
          <p className={"font-custom  text-[1.2rem] mt-[1rem] leading-[1.5rem] text-paragraphColor"}>
            {randomText}
          </p>
        </div>
        <div className="flex w-[30rem] h-[4rem]">
          <input placeholder={'Enter your email address'}
                 className={'w-full h-full bg-inputColor rounded-tl-lg rounded-bl-lg p-[1rem] gap-[1rem] pr-0'}/>
          <button
            className="w-[9rem] h-full bg-customBrown rounded-tr-lg rounded-br-lg flex items-center justify-center">
            <span className="text-white font-custom font-normal text-[1rem]">
              Join waitlist
            </span>
          </button>
        </div>
      </div>
      <div>
        <img className={" max-h-[48rem]"} src="assets/Version01.png" alt="MobileView"/>
      </div>
    </div>
  );
}
