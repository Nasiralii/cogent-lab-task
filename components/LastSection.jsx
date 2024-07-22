export default function LastSection() {
  return (
    <div className="container">
      <div className="xl:mx-[150px] md:mx-4 px-5 lg:mx-[80px] lg:my-24 md:my-16">
        <div className="flex flex-col-reverse md:flex-row gap-9">
          <div className="md:w-1/2">
            <img className="object-contain" src="/images/last-section.svg" />
          </div>
          <div className="md:w-1/2 flex flex-col lg:gap-0 gap-8 justify-between xl:py-8">
            <div className="flex flex-col gap-6">
              <h2 className="lg:text-[34px] text-[28px] font-bold">
                Creativity & Technology
              </h2>
              <p className="text-[#222222] leading-relaxed">
                Some networks believe that by only offering a basic tracking
                system their affiliates can reach a high level of creativity. We
                like to set the bar a lot higher by offering you cutting-edge
                tech solutions together with a team of creative experts on-call
                with the tools you need based on real-time results
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="lg:text-[34px] text-[28px] font-bold">
                Defines our true value
              </h2>
              <ul className="flex flex-col lg:gap-8 gap-5 list-disc">
                <li>
                  Some networks believe that by only offering a basic tracking
                  system
                </li>
                <li>
                  Some networks believe that by only offering a basic tracking
                  system
                </li>
                <li>
                  Some networks believe that by only offering a basic tracking
                  system
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-[#381DDB] font-bold">Check our solutions</p>
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                src="/images/arrow-right-circle.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
