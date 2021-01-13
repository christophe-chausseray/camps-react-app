import React from 'react';

const loadImage = (imagePath: string) => {
  return new Promise<void>((resolve: any) => {
    const downloadingImage = new Image();
    downloadingImage.onload = () => {
      resolve();
    };
    downloadingImage.src = imagePath;
  });
};

const useImageLoader = (url: string): string | undefined => {
  const [loadedUrl, setLoadedUrl] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadedUrl(undefined);
    }, 300);

    loadImage(url).then(() => {
      clearTimeout(timeout);
      setLoadedUrl(url);
    });

    return () => clearTimeout(timeout);
  }, [url]);

  return loadedUrl;
};

export { useImageLoader };
