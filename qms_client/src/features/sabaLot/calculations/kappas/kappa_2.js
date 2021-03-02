import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappa_1';
import {
  comparePlastic
} from '../plastics/plastic_1';

export const buildKappaSeries = (kappaTable) => {
  return {
    kappaTable
  }
}

export const addCheckedLesson =
  (kappaSeries, lessonNumber, lessonName) => {

  kappaSeries.checkedLesson.push({
    lessonNumber,
    lessonName
  });
}


export const buildCephalopodContext_1 = (kappaSeries) => {

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

  const cephalopodContext_1 = applyFn(
    compareFn, kappaTable);
  const lessonsChecked = [];

  return {
    kappaTable,
    cephalopodContext_1,
    lessonsChecked
  };
}

export const buildCephalopodContext_2 = (kappaSeries) => {

  const getCephalopodCount = cephalopod =>
    R.filter(R.propEq('cephalopod', cephalopod),
    kappaSeries.cephalodContext_1).length;

  const squidCount = getCephalopodCount('Squid');
  const octopusCount = getCephalopodCount('Octopus');
  let lesson;

  const isLesson01 = squidCount == 1 && octopusCount == 0
  const isLesson02 = squidCount == 1 && octopusCount > 0
  const isLesson03 = octopusCount == 1 && squidCount == 0

  if(isLesson01){
    lesson = '始入課';
  }
  else if(isLesson02){
    lesson = '重審課';
  }
  else if(isLesson03){
    lesson = '元首課';
  }
  else {
    lesson = '比用法';
  }

  const cephalopodContext_2 = {
    squidCount,
    octopusCount,
    lesson
  }

  return {
    ...kappaSeries,
    cephalopodContext_2
  }
}


export function checker(kappaSentence){
  const palmDoorOne = R.compose(
    buildCephalopod_2,
    buildCephalopod_1,
    parseKappaSentence)(kappaSentence);
  return palmDoorOne;
}
