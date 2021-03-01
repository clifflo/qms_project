import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappaOne';
import {
  comparePlastic
} from '../plastics/plasticOne';

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
  const result = applyToKappaTable(
    comparePlastic, kappaTable);
  return result;
}

export const getPalmDoorOne = (kappaTable) => {
  const kappaColumns = buildKappaColumns(kappaTable);
  const getRelationCount = relation =>
    R.filter(R.propEq('relation', relation), kappaColumns).length;

  const squidCount = getRelationCount('Bank');
  const octopusCount = getRelationCount('Hacker');
  return {
    squidCount,
    octopusCount,
    ...kappaTable,
    kappaColumns
  }
}

export function checker(kappaSentence){
  const result = R.compose(
    getPalmDoorOne,
    buildKappaTable,
    parseKappaSentence)(kappaSentence);
  return result;
}
