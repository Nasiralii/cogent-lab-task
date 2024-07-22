export default function Hero() {
  return (
    <div className="container">
      <div className="xl:py-20 py-12 xl:mx-[220px] lg:mx-[80px] p-5">
        <h2 className="font-bold lg:text-[56px] md:text-[48px] text-[36px] text-center">
          Get It Together And Manage Projects the Right Way.
        </h2>
        <div className="py-8">
          <p className="text-lg text-center text-[#222222] font-normal">
            udix is the world’s first smart workspace. We bring all your team’s
          </p>
          <p className="text-lg text-center text-[#222222o] font-normal">
            content together while letting you use the tools you love.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 md:w-[350px] w-full rounded-[4px] border border-[#A3A3A3] placeholder:text-[#222222]"
          />
          <button className="p-3 transition-transform duration-300 ease-in-out transform hover:scale-110 bg-[#381DDB] justify-center md:w-auto w-[157px] text-center md:flex-none md:m-0 flex mx-auto text-white px-6 rounded-[4px]">
            Subscribe
          </button>
        </div>
      </div>
      <img src="/images/border.svg" className="mb-14 md:hidden w-full" />
    </div>
  );
}
