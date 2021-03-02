import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  buildKappaTable,
  parseKappaSentence
} from './kappa_1';
import {
  comparePlastic,
  getElementalOfPlastic
} from '../plastics/plastic_1';

export function buildPalmDoor_1(kappaTable) {

  console.log(kappaTable);

  function applyFn(fn){
    return [
      fn(1, kappaTable.dayTrunk, kappaTable.trunkAlpha),
      fn(2, kappaTable.trunkAlpha, kappaTable.trunkOmega),
      fn(3, kappaTable.dayBranch, kappaTable.branchAlpha),
      fn(4, kappaTable.branchAlpha, kappaTable.branchOmega)
    ]
  }

  function compareFn(column, lowerCell, upperCell){
    try{

      const relation = comparePlastic(lowerCell, upperCell);
      console.log(relation);
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
        column,
        lowerCell,
        upperCell,
        relation,
        cephalopod: getCephalopod(relation)
      }
    }
    catch(err){
      throw 'Cannot build palm door 1 because of ' + err;
    }

  }

  const palmDoor_1 = applyFn(compareFn);



  return {
    ...kappaTable,
    palmDoor_1
  }
}


export function checker(kappaSentence){
  const kappaTable = R.compose(
    buildPalmDoor_1,
    buildKappaTable,
    parseKappaSentence)(kappaSentence);
  return kappaTable;
}
