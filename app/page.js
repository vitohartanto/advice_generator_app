import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkBlue px-4 h-screen w-screen flex items-center justify-center">
      <div className="relative px-4 py-8 min-w-[320px] max-w-[400px]  bg-darkGrayishBlue rounded-xl">
        <h2 className="mb-2 text-center text-neonGreen text-xs tracking-widest">
          ADVICE #47
        </h2>
        <h1 className="text-center text-xl font-semibold text-lightCyan">
          "If you need cheering up, try searching online for photos of kittens."
        </h1>
        <Image
          src="/images/pattern-divider-mobile.svg"
          alt="Pattern Divider"
          width={280}
          height={20}
          className="mx-auto"
        />
        <button className="bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/images/icon-dice.svg" width={50} height={50} />
        </button>
      </div>
    </div>
  );
}
