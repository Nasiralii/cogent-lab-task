import React from "react";
import CountUp from "react-countup";
export default function SignUp() {
  return (
    <>
      <div className="sign-up-bg xl:bg-cover lg:bg-contain bg-cover">
        <div className="container md:my-28 my-16 xl:py-32 py-24 flex flex-col xl:gap-28 gap-20">
          <div className="flex md:flex-row flex-col justify-between xl:gap-24 md:gap-0 gap-8 text-white xl:mx-[200px] lg:mx-[120px] md:mx-[50px]">
            <div className="flex flex-col gap-2">
              <h2 className="font-extrabold lg:text-[64px] md:text-start text-center md:text-[48px] text-[36px]">
                <CountUp start={0} end={1000}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start} className="mx-2">
                        {" "}
                        M
                      </button>
                    </div>
                  )}
                </CountUp>{" "}
              </h2>
              <p className="md:text-start text-center md:text-base text-xs">
                Clicks annually through system
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extrabold lg:text-[64px] md:text-start text-center md:text-[48px] text-[36px]">
                <CountUp start={0} end={5}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start} className="mx-2">
                        {" "}
                        M
                      </button>
                    </div>
                  )}
                </CountUp>{" "}
              </h2>
              <p className="md:text-start text-center md:text-base text-xs">
                Relationships created annually
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-extrabold lg:text-[64px] md:text-start text-center md:text-[48px] text-[36px]">
                <CountUp start={0} end={100}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start} className="mx-2">
                        {" "}
                        M
                      </button>
                    </div>
                  )}
                </CountUp>{" "}
              </h2>
              <p className="md:text-start text-center md:text-base text-xs">
                Advertisers with udix
              </p>
            </div>
          </div>
          <button className="p-3 transition-transform duration-300 ease-in-out transform hover:scale-110 hover: mx-auto flex bg-[#381DDB] text-white px-6 rounded-[4px]">
            Sign up now!
          </button>
        </div>
      </div>
      <img src="/images/border.svg" className="mb-16 md:hidden w-full" />
    </>
  );
}
