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
        source, kappaTable.dayTrunk);
      const nectarWorker = comparison.isSameLiturgy ?
        'Bee' : 'Butterfly';
      return {
        columnIndex,
        upperCell: source,
        dayTrunk: kappaTable.dayTrunk,
        nectarWorker,
        isSameLiturgy: comparison.isSameLiturgy,
        upperCellLiturgy:  comparison.sourceLiturgy,
        dayTrunkLiturgy:  comparison.targetLiturgy
      }
    }
    catch(err){
      throw 'Cannot get nectar worker due to -> ' + err;
    }
  }

  const palmDoor_2 = kappaApplyPartial(
    compareFn, kappaTable);
    
  return {
    ...kappaTable,
    palmDoor_2
  }

}
