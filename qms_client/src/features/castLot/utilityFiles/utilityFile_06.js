import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getPermutation = items => {

  let result = [];
  if (items.length === 0) return [];
  if (items.length === 1) return [items];

  for (let i = 0; i < items.length; i++) {
    const currentNum = items[i];
    const remainingItems = items
      .slice(0, i)
      .concat(items.slice(i + 1));

  const remainingItemsPermuted =
    getPermutation(remainingItems);

  for (let j = 0; j < remainingItemsPermuted.length; j++) {
      const permutedArray =
        [currentNum]
        .concat(remainingItemsPermuted[j]);
      result.push(permutedArray);
    }
  }

  return result;
}

export const getCombinations = items => {

  var combi = [];
  var temp = [];
  var slent = Math.pow(2, items.length);

  for (var i = 0; i < slent; i++) {

    temp = [];
    for (var j = 0; j < items.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp.push(items[j]);
      }
    }

    if (temp.length > 0) {
      combi.push(temp);
    }
  }

  combi.sort((a, b) => a.length - b.length);
  return combi;
}
