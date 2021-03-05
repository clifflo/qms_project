import * as R from 'ramda';
import {
  parseKappaSentence,
  initializeKappaTable
} from './kappa_1'
import {
  buildPalmDoor_1
} from './kappa_2'
import {
  buildPalmDoor_2
} from './kappa_3'

export function getPalmDoor_1(kappaSentence){
  try{
    const palmDoor_1 = R.compose(
      buildPalmDoor_1,
      initializeKappaTable,
      parseKappaSentence)(kappaSentence);
    return palmDoor_1;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot build kappa table.')
  }
}
