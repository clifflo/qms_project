import {
  isValidBrh,
  idxOfBrh,
  itemOfElem,
  itemOfBrh
} from './plastic_1';

// Brh Small Compound
export const bscSet = () => {

  const mapFn = i => {
    const fstBrh = itemOfBrh(i);
    const sndBrhIdx =  (13 - i) % 12;
    const sndBrh = itemOfBrh(brh_2_idx);

    // Second Brh Elemental
    const sndBelem = getElemOfPlastic(sndBrh);
    const adjList_1 = [0, 1, 4]
    const adjList_2 = R.concat(adjList_1, adjLi_1);
    const adjustment = adjList_2[i - 1];

    // Compound Elemental
    const celemIdx = adjustment + sndBelem;
    const celem = itemOfElem(celemIdx);

    return {
      brhes: [brh_1, brh_2],
      celem
    }
  }

  try{
    const result = R.map(mapFn, R.range(1, 6));
    return result
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Brh Compound Set.');
  }



}
