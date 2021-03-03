import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappa_1';
import {
  comparePlasticElemental,
  getElementalOfPlastic
} from '../plastics/plastic_1';

export function buildPalmDoor_1(kappaTable) {

  const applyFn = (fn) => {
    return [
      fn(0, kappaTable.dayTrunk, kappaTable.trunkAlpha),
      fn(1, kappaTable.trunkAlpha, kappaTable.trunkOmega),
      fn(2, kappaTable.dayBranch, kappaTable.branchAlpha),
      fn(3, kappaTable.branchAlpha, kappaTable.branchOmega)
    ]
  }

  const compareFn = (column, lowerCell, upperCell) => {

    try {
      const relation = comparePlasticElemental(
        lowerCell, upperCell);
      const getCephalopod = relation => {
        switch (relation) {
          case 'Bank':
            return 'Squid';
          case 'Hacker':
            return 'Octopus';
          case 'Draw':
          case 'Root':
          case 'Fruit':
            return 'Jellyfish';
          default:
            throw `${relation} is not a valid relation.`;
        }
      }

      return {
        column,
        lowerCell,
        upperCell,
        relation,
        cephalopod: getCephalopod(relation)
      }
    }
    catch(err){
      throw 'Cannot build palm door 1 due to -> ' + err;
    }

  }

  const palmDoor_1 = applyFn(compareFn);

  return {
    ...kappaTable,
    palmDoor_1
  }
}
