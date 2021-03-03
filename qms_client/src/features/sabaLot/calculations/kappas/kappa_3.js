import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  applyToKappaTable
} from './kappa_2'
import {
  comparePlasticLiturgy
} from '../plastics/plastic_1';

export function buildPalmDoor_2(kappaTable){

  const applyFn = (fn) => {
    return [
      fn(0, kappaTable.trunkAlpha),
      fn(1, kappaTable.trunkOmega),
      fn(2, kappaTable.branchAlpha),
      fn(3, kappaTable.branchOmega)
    ]
  }

  const compareFn = (column, source) => {
    try {
      const result = comparePlasticLiturgy(
        source, kappaTable.dayTrunk);
      const nectarWorker = result.comparison == 'Same' ?
        'Bee' : 'Butterfly';
      return {
        column,
        upperCell: source,
        dayTrunk: kappaTable.dayTrunk,
        nectarWorker,
        comparison: result.comparison,
        upperCellLiturgy: result.sourceLiturgy,
        dayTrunkLiturgy: result.targetLiturgy
      }
    }
    catch(err){
      throw 'Cannot get nectar worker due to -> ' + err;
    }
  }

  const palmDoor_2 = applyFn(compareFn);
  return {
    ...kappaTable,
    palmDoor_2
  }

}
