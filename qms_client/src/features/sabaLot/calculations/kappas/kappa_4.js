import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  kappaApplyPartial,
  crabFarm
} from './kappa_1';
import {
  getElementalOfPlastic,
  getElementalRelation
} from '../plastics/plastic_1';
import {
  branchSlider
} from '../plastics/plastic_3';

const buildIronCrab = (magnet, crabShell) => {

  const mapFn = (target) => {
    try {
      const targetElemental = getElementalOfPlastic(target);
      const magnetElemental = getElementalOfPlastic(magnet);
      const relation = getElementalRelation(
        magnetElemental, targetElemental);
      const isIron = relation == 'Hacker';
      return {
        magnet,
        magnetElemental,
        target,
        targetElemental,
        relation,
        isIron,
        crabShell
      }
    }
    catch(err){
      console.error(err);
      throw new Error('Map function of build iron crab failed.');
    }
  }

  const crabs = R.filter(
    R.propEq('crabShell', crabShell), crabFarm);

  const crabBodys = R.map(crab => crab.crabBody, crabs);
  const rawCrabPlastics = R.join('',R.append(crabShell, crabBodys));
  const builtCrabPlastics = R.map(
    mapFn,
    rawCrabPlastics);

  const ironCount = R.filter(
    R.prop('isIron'), builtCrabPlastics).length;

  return {
    magnet,
    crabShell,
    rawCrabPlastics,
    builtCrabPlastics,
    ironCount
  }
}

const buildIronCrabPath = (magnetStart, magnetEnd) => {

  const rawIronPath = branchSlider(magnetStart, magnetEnd);
  const mapFn = (crabShell) => buildIronCrab(magnetEnd, crabShell);

  const processedIronPath =
    R.map(mapFn, rawIronPath);

  return processedIronPath;
}

export function check(){
  return buildIronCrabPath('未','亥')
}

export function buildPalmDoor_3(kappaTable){



}
