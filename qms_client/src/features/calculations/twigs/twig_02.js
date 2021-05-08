import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidElem,
  indexOfBranch,
  indexOfTrunk,
  isValidBranch,
  isValidTrunk,
  elementalOrder,
  itemOfElemental
} from './twig_01';
import {
  utGetIdx,
  utItem,
} from '../utils/util_01';
import * as E from '../examiner';

export const elrs = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Seed'
];

export const isElreHacker = elre => elre == 'Hacker';
export const isElreFruit = elre => elre == 'Fruit';
export const isElreSeed = elre => elre == 'Seed';
export const isElreBank = elre => elre == 'Bank';
export const isElreDraw = elre => elre == 'Draw';

export const getElre = (selem, telem) => {

  E.checkNilWithString(selem);
  E.checkNilWithString(telem);

  if(!isValidElem(selem)){
    throw new Error(
      `${selem} is not a valid [selem].`);
  }

  if(!isValidElem(telem)){
    throw new Error(
      `${telem} is not a valid [telem].`);
  }

  try{

    const sourceIndex = utGetIdx(
      selem, elementalOrder);

    const targetIndex = utGetIdx(
      telem, elementalOrder);

    if(sourceIndex == -1){
      throw new Error(
        `'${selem}' is not a valid [selem].`);
    }

    if(targetIndex == -1){
      throw new Error(
        `'${telem}' is not a valid [telem].`);
    }

    const difference = targetIndex - sourceIndex;
    const relation = utItem(elrs, difference);
    return relation;

  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [elre].')
  }
}

export const isValidElre = elre => {
  return R.includes(elre, elrs);
}

export const getTwigElemc = twig => {

  const getBelem = branch => {

    const belementalOrder = '水土木木土火火土金金土水';
    const bridx = indexOfBranch(branch);
    return belementalOrder[bridx];
  }

  const getTelem = trunk => {
    const tki = indexOfTrunk(trunk);
    const elei = Math.floor(tki / 2) + 2;
    return itemOfElemental(elei);
  }

  if(R.isNil(twig)){
    throw new Error(
      'The input is nil for twig.');
  }
  if(isValidTrunk(twig)){
    const trunk = twig;
    return getTelem(trunk);
  }
  else if(isValidBranch(twig)){
    const branch = twig;
    return getBelem(branch);
  }
  else {
    throw new Error(
      `'${twig}' is not a valid twig.`);
  }
}
