export const useImage = (path = "http://localhost:1337") => {
  const handleLoadImage = (url: string): string => {
    return `${path}${url}`;
  };

  return { handleLoadImage };
};
