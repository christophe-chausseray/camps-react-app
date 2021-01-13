import React from 'react';
import styled from 'styled-components';
import { useImageLoader } from '../hooks';
import { Placeholder } from './Placeholder';

const ImagePlaceholder = styled(Placeholder)`
  min-width: 220px;
  min-height: 152px;
  margin: 25px 10px 0 10px;
`;

const Image = styled.img`
  width: 220px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.55);
`;

type LazyLoadedImageProps = {
  src: string;
  alt: string;
};

const LazyLoadedImage = React.memo(({ src, alt }: LazyLoadedImageProps) => {
  const loadedSrc = useImageLoader(src);

  return undefined === loadedSrc ? (
    <ImagePlaceholder />
  ) : (
    <Image src={src} alt={alt} />
  );
});

export { ImagePlaceholder, LazyLoadedImage }
