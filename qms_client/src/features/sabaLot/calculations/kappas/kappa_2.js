import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  initializeKappaTable,
  parseKappaSentence
} from './kappa_1';
import {
  comparePlasticElemental,
  getElementalOfPlastic
} from '../plastics/plastic_1';

export const kappaApplyFull = (fn, kappaTable) => {
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

export const kappaApplyPartial = (fn, kappaTable) => {
  return RA.mapIndexed(
    fn,
    [kappaTable.trunkAlpha,
    kappaTable.trunkOmega,
    kappaTable.branchAlpha,
    kappaTable.branchOmega]);
}


export function buildPalmDoor_1(kappaTable) {

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
      throw new Error('Cannot build palm door 1.');
    }

  }

  const palmDoor_1 = kappaApplyFull(
    compareFn, kappaTable);

  return {
    ...kappaTable,
    palmDoor_1
  }
}
