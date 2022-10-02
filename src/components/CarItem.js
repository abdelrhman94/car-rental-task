import React from 'react';

const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  return (
    <div >
      <div >
        <div >
          <h3>{carName}</h3>
          <span>
            <i class='ri-heart-line'></i>
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div >
        <img src={imgUrl} alt='' />
      </div>

      <div >
        <div >
          <p>
            <i class='ri-user-line'></i> {groupSize}
          </p>
          <p>
            <i class='ri-repeat-line'></i>
            {type}
          </p>
        </div>

        <p >${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
