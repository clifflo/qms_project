import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappaOne';
import {
  comparePlastic
} from '../plastics/plasticOne';

export const kappaLessons = [
  '元首',
  '重審'
]

export const applyToKappaTable = (func, kappaTable) => {

  const result = [
    func(kappaTable.dayTrunk, kappaTable.trunkAlpha),
    func(kappaTable.trunkAlpha, kappaTable.trunkOmega),
    func(kappaTable.dayBranch, kappaTable.branchAlpha),
    func(kappaTable.branchAlpha, kappaTable.branchOmega)
  ];

  return result;
}

export const buildKappaColumns = (kappaTable) => {
  const compareFn = (source, target) => {
    const compareResult = comparePlastic(source, target);
    return {
      lowerCell: source,
      upperCell: target,
      relation: compareResult.relation
    }
  }
  const kappaColumns = applyToKappaTable(
    compareFn, kappaTable);
  return kappaColumns;
}

export const getPalmDoorOne = kappaTable => {
  const kappaColumns = buildKappaColumns(kappaTable);
  const getRelationCount = relation =>
    R.filter(R.propEq('relation', relation), kappaColumns).length;

  const squidCount = getRelationCount('Bank');
  const octopusCount = getRelationCount('Hacker');
  let lesson;

  if(squidCount == 1 && octopusCount == 0) {
    lesson = '始入'
  }
  else if(squidCount == 1 && octopusCount > 0){
    lesson = '重審'
  }
  else if(octopusCount == 1 && squidCount == 0){
    lesson = '元首'
  }

  return {
    squidCount,
    octopusCount,
    ...kappaTable,
    kappaColumns,
    palmDoor: 1,
    lesson
  }
}



export function checker(kappaSentence){
  const palmDoorOne = R.compose(
    getPalmDoorOne,
    buildKappaTable,
    parseKappaSentence)(kappaSentence);
  return palmDoorOne;
}
