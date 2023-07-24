export const textEllipsis = (name: string, lenOfLetter: number): string => {
  if (name?.length > lenOfLetter) return name.slice(0, lenOfLetter) + '...';
  else return name;
};
