import * as R from 'ramda';
import {
  parseKappaSentence,
  buildKappaTable
} from './kappa_1'
import {
  buildPalmDoor_1
} from './kappa_2'
import {
  buildPalmDoor_2
} from './kappa_3'

export default function kappaContext(kappaSentence){
  try{
    const kappaContext = R.compose(
      buildPalmDoor_2,
      buildPalmDoor_1,
      buildKappaTable,
      parseKappaSentence)(kappaSentence);
    return kappaContext;
  }
  catch(err){
    throw 'Cannot build kappa context due to -> ' + err;
  }

}
