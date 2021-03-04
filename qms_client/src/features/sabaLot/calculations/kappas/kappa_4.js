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

const buildMagnet = (magnet, hive) => {

  const magnetElemental = getElementalOfPlastic(magnet);

  const mapFn_1 = (crab) => {
    try{
      return {
        ...crab,
        magnet,
        magnetElemental,
        plastics: [
          crab.crabBody,
          crab.crabShell
        ]
      }
    }
    catch(err){
      throw new Error('Map function 1 of build magnet is error.')
    }

  }

  const mapFn_2 = (crab) => {

    try{
      const elementals =
        R.map(getElementalOfPlastic, crab.plastics)

      return {
        ...crab,
        elementals
      };
    }
    catch(err){
      console.error(err);
      throw new Error('Map function 2 of build magnet is error.')
    }
  }

  const identifyIron = (crabElemental) => {
    try{
      const relation = getElementalRelation(
        magnetElemental, crabElemental);
      return relation == 'Hacker';
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot identify iron.');
    }

  }

  const mapFn_3 = (crab) => {

    try{
      const ironCount = R.filter(
        identifyIron, crab.elementals).length
      return {
        ...crab,
        ironCount
      }
    }
    catch(err){
      console.error(err);
      throw new Error('Map function 3 of build magnet is error.');
    }
  }

  const fullMapFn = R.compose(mapFn_3, mapFn_2, mapFn_1);

  const crabs = R.filter(
    R.propEq('crabShell', hive), crabFarm);

  const result = R.map(fullMapFn, crabs);

  return result;
}

export function check(){
  return buildMagnet('巳', '亥')
}

export function buildPalmDoor_3(kappaTable){



}
