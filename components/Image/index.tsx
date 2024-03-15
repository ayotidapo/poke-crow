import NextImage from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<Props> = (props) => {
  const { className = '', width = '', height = '', ...rest } = props;
  return (
    <div
      className={` ${className}`}
      style={{ width, height, position: 'relative' }}
    >
      <NextImage fill {...rest} />
    </div>
  );
};

export default Image;
