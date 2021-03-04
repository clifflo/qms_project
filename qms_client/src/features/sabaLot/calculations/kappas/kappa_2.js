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
    return RA.mapIndexed(
      fn,
      [
        [kappaTable.dayTrunk, kappaTable.trunkAlpha],
        [kappaTable.trunkAlpha, kappaTable.trunkOmega],
        [kappaTable.dayBranch, kappaTable.branchAlpha],
        [kappaTable.branchAlpha, kappaTable.branchOmega]
      ]
    )
  }

  const compareFn = (cells, columnIndex) => {

    try {
      const lowerCell = cells[0];
      const upperCell = cells[1];
      const comparison = comparePlasticElemental(
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
        columnIndex,
        lowerCell,
        upperCell,
        relation: comparison.relation,
        lowerCellElemental: comparison.sourceElemental,
        upperCellElemental: comparison.targetElemental,
        cephalopod: getCephalopod(comparison.relation)
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
