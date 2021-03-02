import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappa_1';
import {
  comparePlastic
} from '../plastics/plastic_1';

export const buildCephalopodContext_1 = (kappaTable) => {

}


export function checker(kappaSentence){
  const palmDoorOne = R.compose(
    buildCephalopodContext_1,
    parseKappaSentence)(kappaSentence);
  return palmDoorOne;
}
