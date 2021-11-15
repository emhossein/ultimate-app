import React from 'react';
import Image from 'next/image';

const Img = ({ src, name, width, height }) => {
  return (
    <Image
      src={src}
      alt={name}
      height={height ? height : '175px'}
      width={width ? width : '175px'}
    />
  );
};

export default Img;
