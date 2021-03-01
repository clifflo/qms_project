import * as R from 'ramda';
import * as RA from 'ramda-adjunct';



export const applyToKappaTable = (func, kappaTable) => {

  const result = [
    func(kappaTable.dayTrunk, kappaTable.trunkAlpha),
    func(kappaTable.trunkAlpha, kappaTable.trunkOmega),
    func(kappaTable.dayBranch, kappaTable.branchAlpha),
    func(kappaTable.branchAlpha, kappaTable.branchOmega)
  ];

  return result;
}

export const buildCephalopod = (kappaTable) => {

  const result = applyToKappaTable(comparePlastic, kappaTable);
  return result;
}

export function checker(kappaSentence){
  const result = R.compose(
    buildCephalopod,
    buildKappaTable,
    parseKappaSentence)(kappaSentence);
  return result;
}
