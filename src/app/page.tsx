import CompareSlider from '@/components/CompareSlider';
import Link from 'next/link';
import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';

export default function Home() {
  return (
    <main className='my-auto flex gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around items-center'>
        <div className='felx relative max-w-xl flex-col justify-center items-center gap-5 gradiant-bg' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 className='text-grey-400 text-5xl font-bold text-center'>Redesign rooms in seconds{" "} <span className='text-blue-400'>using AI</span></h1>
            <p className="text-gray-500 text-lg text-center">
                Take a picture of a room and instantly redesign it in 8+ diffenrent
                themes. Join thousands of happy customers and remodel your room today!
            </p>
            <Link href={"/room"}>
                <button className='bg-blue-500 margin-auto hover:opacity-90
                                    text-white font-semibold
                                    py-3 px-4 rounded-lg ' style={{margin: 'auto'}}>
                    Redesign your room
                </button>
            </Link>
        </div>
        <div >
            <CompareSlider />
        </div>
    </main>
  );
};


