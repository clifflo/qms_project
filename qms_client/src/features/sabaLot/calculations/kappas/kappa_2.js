import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  initializeKappaTable,
  parseKappaSentence,
  moveStandardForward,
  moveStandardBackward
} from './kappa_1';
import {
  comparePelem,
  elemOfPla
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
      const comparison = comparePelem(
        lowerCell, upperCell);
      const getCephalopod = relation => {
        switch (relation) {
          case 'Bank':
            return 'Squid';
          case 'Hacker':
            return 'Octopus';
          case 'Draw':
          case 'Seed':
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

  const columns = kappaApplyFull(
    compareFn, kappaTable);

  const squidCount = R.filter(
    R.propEq('cephalopod', 'Squid'),
    columns).length;

  const octopusCount = R.filter(
    R.propEq('cephalopod', 'Octopus'),
    columns).length;

  const palmDoor_1 = {
    squidCount,
    octopusCount,
    columns
  }

  const isBox_10 = squidCount == 1 && octopusCount == 0;
  const box_10 = {
    boxName: '始入課',
    boxCode: 10,
    boxDescription: '只有一課下賊上而沒有上克下',
    referredPage: 119
  }

  const isBox_11 = squidCount == 1 && octopusCount > 0;
  const box_11 = {
    boxName: '重審課',
    boxCode: 11,
    boxDescription: '只有一課下賊上而同時亦有上克下',
    referredPage: 119
  }

  const isBox_12 = squidCount == 0 && octopusCount == 1;
  const box_12 = {
    boxName: '元首課',
    boxCode: 12,
    boxDescription: '只有一課上克下而無下賊上',
    referredPage: 119
  }

  let box;

  if(isBox_10){
    box = box_10;
  }
  else if(isBox_11){
    box = box_11;
  }
  else if(isBox_12){
    box = box_12
  }

  return {
    ...kappaTable,
    palmDoor_1,
    box
  }
}
