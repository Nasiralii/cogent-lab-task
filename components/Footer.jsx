export default function Footer() {
  return (
    <div className="bg-[#22222208]">
      <div className="container">
        <div className="lg:px-16 px-4 flex flex-col md:gap-7 gap-8 py-8 md:mt-0 mt-28">
          <div className="flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-between">
            <img src="/images/logo.svg" />
            <div>
              <ul className="flex flex-wrap flex-row lg:gap-16 md:gap-3 gap-8 justify-center items-center Montserrat font-semibold">
                <li>Home</li>
                <li>Blog</li>
                <li>Product</li>
                <li>Contacts</li>
                <li className="text-[#381DDB] lg:ml-8">SIGN IN</li>
                <li>
                  <button className="text-[#381DDB] p-3 px-5 border border-[#381DDB]">
                    SIGN UP
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-8 items-center justify-between">
            <p className="text-[#222222] w-full md:w-[400px] text-xs md:text-start text-center m:p-0 p-2">
              udix is a market-leading provider of digital marketing services,
              using proprietary tools and methodologies to generate high-value
              engagement for our customers.
            </p>
            <div className="flex flex-row lg:gap-16 gap-8 items-center">
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src="/images/social-icons/facebook.svg"
              />
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src="/images/social-icons/youtube.svg"
              />
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src="/images/social-icons/linkedin.svg"
              />
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src="/images/social-icons/google.svg"
              />{" "}
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src="/images/social-icons/skype.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
