'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error('Error fetching advice:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-darkBlue px-4 h-screen w-screen flex items-center justify-center">
      <div className="relative px-4 sm:px-8 py-8 sm:py-12 min-w-[320px] max-w-[400px]  bg-darkGrayishBlue rounded-xl">
        <h2 className="mb-2 text-center text-neonGreen text-xs tracking-widest">
          ADVICE #{advice.id}
        </h2>
        <h1 className="mb-4 text-center text-xl font-semibold text-lightCyan">
          "{advice.advice}"
        </h1>
        <Image
          src="/images/pattern-divider-mobile.svg"
          alt="Pattern Divider"
          width={280}
          height={20}
          className="mx-auto mb-4"
          sizes="(max-width: 640px) 280px, 400px"
          srcSet="
    /images/pattern-divider-mobile.svg 280w,
    /images/pattern-divider-desktop.svg 400w
  "
        />
        <button
          onClick={fetchAdvice}
          disabled={loading}
          className="hover:shadow-shadowOnAllSides bg-neonGreen rounded-full p-4 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/icon-dice.svg"
            alt="Dice Icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
