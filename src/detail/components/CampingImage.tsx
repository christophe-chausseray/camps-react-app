import React from 'react';
import { CampingItem, ImagePlaceholder, LazyLoadedImage } from '../../common';

type CampingImageProps = {
  campingItem: CampingItem | null;
};

const CampingImage = ({ campingItem }: CampingImageProps) => {
  if (null === campingItem || !campingItem.image) {
    return (
      <ImagePlaceholder />
    );
  }

  return (
    <LazyLoadedImage src={campingItem.image} alt={campingItem.name} />
  );
}

export { CampingImage }
