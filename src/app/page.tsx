'use client';

import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Footer from '@/components/Footer';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [textColorClass, setDataForTextColor] = React.useState(String);
  const [backgroundColorClass, setDataForBGColor] = React.useState(String);


  const handleBGColor = async (className: string) => {

    setDataForBGColor(className);
  };

  const handleTextColor = async (className: string) => {

    setDataForTextColor(className);
  };
  return (
    <main>

      <section className="">
        <div className="container mx-auto mt-5 flex gap-3 justify-center">
          <label htmlFor="bg-color">Choose a BG color:</label>
          <select name="bg-color" onChange={(e) => {
            handleBGColor(e.target.value);
          }} className="border-primary-50 border-[1px] focus-visible:border-primary-50">
            <option value="bg-primary-0" >Primary-0</option>
            <option value="bg-primary-10">Primary-10</option>
            <option value="bg-primary-20">Primary-20</option>
            <option value="bg-primary-30">Primary-30</option>
            <option value="bg-primary-40">Primary-40</option>
            <option value="bg-primary-50">Primary-50</option>
            <option value="bg-primary-60">Primary-60</option>
            <option value="bg-primary-70">Primary-70</option>
            <option value="bg-primary-80">Primary-80</option>
            <option value="bg-primary-90">Primary-90</option>
            <option value="bg-primary-100">Primary-100</option>
          </select>
          <label htmlFor="text-color">Choose a Text color:</label>
          <select name="text-color"
            onChange={(e) => {
              handleTextColor(e.target.value);
            }} className="border-primary-50 border-[1px] focus-visible:border-primary-50">
            <option value="text-primary-0" >Primary-0</option>
            <option value="text-primary-10">Primary-10</option>
            <option value="text-primary-20">Primary-20</option>
            <option value="text-primary-30">Primary-30</option>
            <option value="text-primary-40">Primary-40</option>
            <option value="text-primary-50">Primary-50</option>
            <option value="text-primary-60">Primary-60</option>
            <option value="text-primary-70">Primary-70</option>
            <option value="text-primary-80">Primary-80</option>
            <option value="text-primary-90">Primary-90</option>
            <option value="text-primary-100">Primary-100</option>
          </select>
        </div>
        <div className={`container mx-auto mt-5 p-4 border-[1px] my-28 ${backgroundColorClass}`}>
          <p className={textColorClass}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta odio vitae leo varius maximus. Nullam interdum tortor eu elit efficitur aliquam. Praesent mattis dolor quis blandit egestas. Sed aliquam pharetra dapibus. Nam ornare semper libero quis viverra. Praesent arcu est, posuere eu lobortis et, posuere a quam. Suspendisse ut euismod augue, non iaculis mi. Aliquam at eros malesuada, viverra nunc ut, lacinia tellus.
          </p>
        </div>

        <div className='py-12 mx-20'>
          <h1 className='large'>This is Display L</h1>
          <h1 className='medium'>This is Display M</h1>
          <h1 className='small'>This is Display S</h1>
          <h2>This is Header L</h2>
          <h3>This is Header S</h3>
          <h4>This is Header S</h4>
          <h5>This is Header XS</h5>
          <p className='xl'>This is Body XL</p>
          <p className='xl-150'>This is Body XL-150</p>
          <p className='large'>This is Body M</p>
          <p className='large-150'>This is Body M-150</p>
          <p className='medium'>This is Body S</p>
          <p className='medium-150'>This is Body S-150</p>
          <p className='small'>This is Body S</p>
        </div>
      </section >
      <Footer />
    </main >
  );
}
