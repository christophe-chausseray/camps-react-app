import React from 'react';
import { CampingItem, ImagePlaceholder, LazyLoadedImage } from '../../common';

type CampingImageProps = {
  campingItem: CampingItem;
};

function CampingImage({ campingItem }: CampingImageProps) {
  if (null === campingItem) {
    return (
      <ImagePlaceholder />
    );
  }

  return (
    <LazyLoadedImage src={campingItem.image} alt={campingItem.name} />
  );
}

export { CampingImage }
