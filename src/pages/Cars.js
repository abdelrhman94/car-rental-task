import React from 'react';
import carData from '../assets/dummy-data/booking-cars';

import CarItem from '../components/CarItem';

const Cars = () => {
  return (
    <div >
      <div >
        <h2 >Booking</h2>

        <div >
          <div >
            <select>
              <option value='New'>New</option>
              <option value='Popular'>Popular</option>
              <option value='Upcoming'>Upcoming</option>
            </select>
          </div>

          <div >
            <select>
              <option value='toyota'>Toyota</option>
              <option value='bmw'>Bmw</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </div>

        <div >
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
