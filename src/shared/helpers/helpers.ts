
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};


export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
