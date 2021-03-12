import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  kappaApplyPartial,
  crabFarm,
  getCrabShell
} from './kappa_1';
import {
  getElemOfPlastic,
  getElementalRelation,
  isValidBranch
} from '../plastics/plastic_1';
import {
  branchSlider
} from '../plastics/plastic_3';

const buildMagnet = (magnet, crabShell) => {

  const mapFn = (target) => {
    try {
      const targetElemental = getElemOfPlastic(target);
      const magnetElemental = getElemOfPlastic(magnet);
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

const buildMagnetPath = (rawMagnetStart, magnetEnd) => {

  const finalMagnetStart = isValidBranch(rawMagnetStart) ?
    rawMagnetStart : getCrabShell(rawMagnetStart);

  const rawIronPath = branchSlider(finalMagnetStart, magnetEnd);
  const mapFn = (crabShell) => buildMagnet(magnetEnd, crabShell);

  const processedIronPath =
    R.map(mapFn, rawIronPath);

  const totalIronCount =
    R.compose(
      R.reduce(R.add, 0),
      R.map(R.prop('ironCount')))
    (processedIronPath)

  return {
    rawIronPath,
    ironPathLength: rawIronPath.length,
    processedIronPath,
    totalIronCount
  }
}

export function check(){
  return buildMagnetPath('辰','子')
}

export function buildPalmDoor_3(kappaTable){



}
