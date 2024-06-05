import React, { useState } from 'react';
import banner from '../assets/images/banner.png'
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

const Banner = () => {
  const items = [
    'Thu Duc City',
    'District 1',
    'District 3',
    'District 4',
    'District 5',
    'District 6',
    'District 7',
    'District 8',
    'District 10',
    'District 11',
    'District 12',
    'Binh Tan District',
    'Binh Thanh District',
    'Go Vap District',
    'Phu Nhuan District',
    'Tan Binh District',
    'Tan Phu District',
    'Nha Be Province',
    'Can Gio Province',
    'Cu Chi Province',
    'Hoc Mon Province',
    'Binh Chanh Province'
  ];

  const [loading, setLoading] = useState(false);

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };
  return (
    <div className='font-Inter text-base bg-gray-100 overflow-x-hidden'>
      <div className="flex flex-wrap  sm:justify-start sm:flex-nowrap 2xl:max-w-screen-1440 2xl:mx-auto max-h-[500px] relative">
        <img src={banner}
          alt="Banner"
          className='object-center object-cover opacity-50'/>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10 max-w-[450px] w-full flex flex-col gap-3.5 items-center justify-between bg-white rounded-3xl py-5 px-10 shadow-gray-800 shadow-lg">
          <div className='text-4xl font-medium text-gray-800'>
            Find court now
          </div>
          <div className='text-gray-500 text-sm'>
            Search for badminton courts in Ho Chi Minh City
          </div>
          <Dropdown
            placeholder="Select the district"
            items={items}
            onSelect={handleSelect}
          />
          <Button 
            label='Find'
            fullWidth
            fullRounded
            size='medium'
            className='bg-primary-green hover:bg-teal-900 text-white'
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }}
          />
        </div>
      </div>
    </div>

  );
}

export default Banner;
