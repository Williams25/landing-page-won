export const useImage = (path = process.env.NEXT_PUBLIC_IMAGE_HOST) => {
  const handleLoadImage = (url: string): string => {
    return `${path}${url}`;
  };

  return { handleLoadImage };
};
