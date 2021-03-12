import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  comparePlasticLiturgy
} from '../plastics/plastic_1';
import {
  kappaApplyPartial
} from './kappa_2';

export function buildPalmDoor_2(kappaTable){

  const compareFn = (source, columnIndex) => {
    try {
      const comparison = comparePlasticLiturgy(
        source, kappaTable.dayTrk);
      const nectarWorker = comparison.isSameLiturgy ?
        'Bee' : 'Butterfly';
      return {
        columnIndex,
        upperCell: source,
        dayTrk: kappaTable.dayTrk,
        nectarWorker,
        isSameLiturgy: comparison.isSameLiturgy,
        upperCellLiturgy:  comparison.sourceLiturgy,
        dayTrkLiturgy:  comparison.targetLiturgy
      }
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot get nectar worker.');
    }
  }

  const palmDoor_2 = kappaApplyPartial(
    compareFn, kappaTable);

  return {
    ...kappaTable,
    palmDoor_2
  }

}
