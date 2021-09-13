export const sortByDate = (items, key) => {
  if (!items && !items?.length) return items;

  return items.sort((a, b) => {
    if (moment(b[key]).isBefore(a[key])) {
      return -1;
    } 
    return 1;
  });
};


export const sort = (items, key) => {
  if (!items && !items?.length) return items;

  return list.sort((a, b) => a[key] - b[key]);
};


