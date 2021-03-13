import * as R from 'ramda';
import {
  itemOfBranch,
  getElem
} from './plastic_1';

// Branch Large Compound
const getBlcSet = () => {

  const mapFn = i => {

    const bri_2 = i * 3;
    const bri_1 = bri_2 - 4;
    const bri_3 = bri_2 + 4;
    const bris = [bri_1, bri_2, bri_3];
    const branches = R.map(itemOfBranch, bris);
    const celem = getElem(branches[1]);
    return {
      branches,
      celem
    }
  }

  try{
    return R.map(mapFn, R.range(0, 4));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get branch big compound.'
    )
  }
}


export const blcSet = getBlcSet();
