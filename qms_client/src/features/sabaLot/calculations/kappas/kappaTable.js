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

export default function buildKappaTable(kappaSentence){
  try{
    const kappaTable = R.compose(
      buildPalmDoor_2,
      buildPalmDoor_1,
      buildKappaTable,
      parseKappaSentence)(kappaSentence);
    return kappaTable;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot build kappa table.')
  }

}
