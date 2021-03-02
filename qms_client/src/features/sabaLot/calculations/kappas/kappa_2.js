import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappa_1';
import {
  comparePlastic
} from '../plastics/plastic_1';

export const buildKappaContext = (kappaTable) => {
  return {
    kappaTable
  }
}


export const buildCephalopodContent_1 = (kappaContext) => {

  const applyFn = (func, kappaTable) => {

    const result = [
      func(kappaTable.dayTrunk, kappaTable.trunkAlpha),
      func(kappaTable.trunkAlpha, kappaTable.trunkOmega),
      func(kappaTable.dayBranch, kappaTable.branchAlpha),
      func(kappaTable.branchAlpha, kappaTable.branchOmega)
    ];

    return result;
  }

  const getCephalopod = relation => {
    switch(relation){
      case 'Bank':
        return 'Squid';
      case 'Hacker':
        return 'Octopus';
      default:
        return 'Jellyfish';
    }
  }

  const compareFn = (source, target) => {
    const compareResult = comparePlastic(source, target);
    return {
      lowerCell: source,
      upperCell: target,
      relation: compareResult.relation,
      cephalopod: getCephalopod(compareResult.relation)
    }
  }

  const cephalopod_1 = applyFn(
    compareFn, kappaTable);
  const lessonsChecked = [];

  return {
    kappaTable,
    cephalopod_1,
    lessonsChecked
  };
}

export const buildCephalopodContent_2 = (kappaContext) => {

  const getCephalopodTypeCount = cephalopod =>
    R.filter(R.propEq('cephalopod', cephalopod),
    kappaContext.cephalodContent_1).length;

  const squidCount = getRelationCount('Bank');
  const octopusCount = getRelationCount('Hacker');
  let lessonFinalized = false;

  const lesson_01 = squidCount == 1 && octopusCount == 0;
  // 始入課

  const lesson_02 = squidCount == 1 && octopusCount > 0
  // 重審課

  const lesson_03 = octopusCount == 1 && squidCount == 0
  // 元首課

  const cephalopod_2 = {
    squidCount,
    octopusCount
  }

  return {
    ...kappaContext,
    cephalopod_2,
    lessons: {
      lesson_01,
      lesson_02,
      lesson_03
    }
  }
}

export const buildCephalopod_3 = null;


export function checker(kappaSentence){
  const palmDoorOne = R.compose(
    buildCephalopod_2,
    buildCephalopod_1,
    parseKappaSentence)(kappaSentence);
  return palmDoorOne;
}
