import {Link, useFetcher} from "@remix-run/react";
import {useEffect, useState} from "react";
import type {ActionFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {saveEmailToFirestore} from "~/routes/landingPageRepo.server";

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const isIndustry = formData.get("isIndustry") === "true";

  if (typeof email !== "string" || !email.includes("@")) {
    return json({error: "Invalid email format!"}, {status: 400});
  }

  try {
    await saveEmailToFirestore(email, isIndustry);
    return json({success: true});
  } catch (error) {
    return json({error: "Failed to save email."}, {status: 500});
  }
};

export default function IndustryLandingPage() {
  const [email, setEmail] = useState("");
  const fetcher = useFetcher<FetcherResponse>();

  interface FetcherResponse {
    success?: boolean;
    error?: string;
  }

  const error = fetcher.data?.error;
  const submitted = fetcher.data?.success === true;

  useEffect(() => {
    if (submitted) {
      setEmail("");
    }
  }, [submitted]);

  return (
    <div className="items-center flex flex-col w-full bg-industryColor">
      <div
        className="flex items-center justify-between text-left w-full lg:w-[70rem] h-[4.5rem] lg:px-0
        px-[1.75rem] py-[1rem] lg:mt-5 gap-[1.75rem] border-b-white-[0.05rem]">
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
            className={"font-custom text-[0.75rem] lg:text-[0.9rem] text-customBrown"}
          >
            Go here
          </Link>
        </div>
      </div>
      <div className={"lg:flex lg:flex-row items-center w-full h-auto lg:h-[48rem] lg:w-[70rem] lg:justify-between"}>
        <div className="flex flex-col w-full h-full lg:h-[18rem] p-4 gap-5 lg:text-left">
          <div className="flex-col w-full h-auto gap-5 lg:flex lg:gap-5">
            <div className={'text-center flex flex-col gap-5'}>
              <p className="font-custom font-light text-[2rem] lg:text-[3rem] text-center lg:text-left
                lg:leading-[3.5rem] leading-[2.3rem] italic text-black">
                Share your network{" "}
                <span className="lg:text-left not-italic font-semibold ">
                  of{" "}
                  <br/>
                  favorite venues with your regulars
                </span>
              </p>
              <p className=" flex mb-2 text-center ml-5 lg:ml-0 lg:text-left text-[0.8rem] lg:text-[1rem]
               w-[full] h-[4rem] font-custom font-normal leading-[1.3rem] text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col h-auto w-full gap-4 lg:w-full">
              <div className="flex flex-col lg:flex-row lg:h-[3.8rem] gap-4 lg:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-[20rem] h-[3.25rem] lg:h-full rounded outline-0 font-custom text-[0.8rem]
                  lg:text-[0.9rem] lg:rounded-l-lg bg-inputColor py-5 pl-[1rem]"
                />
                <button
                  disabled={!email.trim()}
                  onClick={() => fetcher.submit({email}, {method: "post"})}
                  className={`w-full h-auto px-3 py-4 lg:text-[0.9rem] text-white lg:w-[8rem] rounded
                  lg:rounded-r-lg lg:rounded-l-none transition-all duration-200
                   ${email.trim() ? "bg-customBrown hover:bg-buttonHoverColor" : "bg-buttonDisabledColor " +
                    "cursor-not-allowed disabled:hover:bg-buttonDisabledColor"}`}
                >
                  <span className="block lg:hidden">Get notified</span>
                  <span className="hidden lg:block font-custom text-[1rem]">Join waitlist</span>
                </button>
              </div>
              {error && (
                <div className="flex flex-row w-full h-full gap-1">
                  <img className="w-[1.25rem] h-[1.25rem]" src="assets/X.png" alt="Error X"/>
                  <p className="w-full font-custom font-normal text-[14px] text-error">
                    {error}
                  </p>
                </div>
              )}
              {submitted && (
                <div className="flex flex-row w-full h-full gap-1">
                  <img className="w-[1.25rem] h-[1.25rem]" src="assets/Check.png" alt="Check"/>
                  <p className="w-full font-custom font-normal text-[14px] text-successful">
                    You’ve successfully joined the waitlist
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <img
          className="lg:object-fill object-contain ml-10 lg:ml-0 max-w-full h-auto lg:h-[48rem] lg:w-[36rem]"
          src="assets/Version01.png"
          alt="MobileView"
        />
      </div>
      <div
        className="flex flex-col w-full h-auto py-5 gap-1.5 border-t border-borderColor items-center
         text-secondary lg:w-[70rem] lg:h-[5rem] lg:flex-row-reverse lg:justify-between">
        <div className="h-auto gap-1 flex items-center lg:gap-[1.25rem] lg:text-[0.75rem] lg:mt-auto">
          <Link to="#">Contact us</Link>
          <img className={"flex w-[3px] h-[4px] lg:hidden"} src={"assets/Ellipse.png"} alt="Dot"/>
          <Link to={"#"}>Privacy policy</Link>
        </div>
        <div className="font-custom text-sm lg:text-[0.75rem] lg:mt-auto">© 2024 Corner Table App</div>
      </div>
    </div>
  );
}
