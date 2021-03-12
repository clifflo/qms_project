import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  adjust,
  item,
  idxTool
} from '../utils';

export const trkContext = {
  '甲': 'Beta',
  '乙': 'Gamma',
  '丙': 'Delta',
  '丁': 'Epsilon',
  '戊': 'Zeta',
  '己': 'Eta',
  '庚': 'Theta',
  '辛': 'Iota',
  '壬': 'Kappa',
  '癸': 'Lamda'
}

export const elemOrder = '金水木火土';

export const trkOrder = '甲乙丙丁戊己庚辛壬癸';

export const brhContext = {
  '子': 'Psi',
  '丑': 'Chi',
  '寅': 'Phi',
  '卯': 'Upsilon',
  '辰': 'Tau',
  '巳': 'Sigma',
  '午': 'Rho',
  '未': 'Pi',
  '申': 'Omicron',
  '酉': 'Xi',
  '戌': 'Nu',
  '亥': 'Mu',
}

export const brhOrder = '子丑寅卯辰巳午未申酉戌亥';

// Brh Elemental Order
export const belemOrder = '水土木木土火火土金金土水';

// Trk Elemental Order
export const telemOrder = '木木火火土土金金水水';

export const idxOfTrk = (trk) => {
  return idxTool(trk, trkOrder)
}

export const getTrkLiturgy = (trk) => {
  return (idxOfTrk(trk) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getBrhLiturgy = (brh) => {
  return (idxOfBrh(brh) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getPlasticLiturgy = (plastic) => {

  if(isValidTrk(plastic)){
    const trk = plastic;
    return getTrkLiturgy(trk);
  }
  else if(isValidBrh(plastic)){
    const brh = plastic;
    return getBrhLiturgy(brh);
  }
  else {
    throw new Error(`${plastic} is not a valid plastic.`);
  }
}

export const idxOfBrh = (brh) => {
  return idxTool(brh, brhOrder)
}

export function getElemOfPlastic(plastic){
  if(R.isNil(plastic)){
    throw new Error(
      'The input is nil for plastic.');
  }
  if(isValidTrk(plastic)){
    const trk = plastic;
    return telemOrder[idxOfTrk(trk)];
  }
  else if(isValidBrh(plastic)){
    const brh = plastic;
    return belemOrder[idxOfBrh(brh)];
  }
  else {
    throw new Error(`'${plastic}' is not plastic.`);
  }
}

export const comparePelem = (source, target) => {
  try {
    const sElem = getElemOfPlastic(source);
    const tElem = getElemOfPlastic(target);

    const relation = getEler(
      sElem, tElem)
    return relation;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot compare elemental.')
  }

}

export function comparePlasticLiturgy(source, target){
  try {
    if(R.isNil(source)){
      throw 'Source is nil for plastic liturgy.'
    }

    if(R.isNil(target)){
      throw 'Target is nil for plastic liturgy.'
    }

    const sourceLiturgy = getPlasticLiturgy(source);
    const targetLiturgy = getPlasticLiturgy(target);
    const isSameLiturgy = sourceLiturgy == targetLiturgy;
    return {
      isSameLiturgy,
      sourceLiturgy,
      targetLiturgy
    }
  }
  catch(err){
    throw 'Cannot get plastic liturgy due to: ' + err;
  }
}

export function itemOfTrk(index){
  return item(trkOrder, index);
}

export function itemOfBrh(index){
  return item(brhOrder, index);
}

export function itemOfElem(index){
  return item(elemOrder, index);
}

export function isValidBrh(brh){
  return R.includes(brh, brhOrder);
}

export function isValidTrk(trk){
  return R.includes(trk, trkOrder);
}

export function isValidElemental(elemental){
  return R.includes(elemental, elemOrder);
}

export const idxOfElem = (elemental) => {
  return idxTool(elemental, elemOrder)
}

export const elers = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Seed'
];

export const getEler = (source, target) => {

  if(!RA.isString(source)){
    throw new Error('Source elemental must be string.');
  }

  if(!RA.isString(target)){
    throw new Error('Target elemental must be string.');
  }

  if(R.isNil(source)){
    throw new Error('Source elemental cannot be nil.');
  }

  if(R.isNil(target)){
    throw new Error('Target elemental cannot be nil.');
  }

  if(!isValidElemental(source)){
    throw new Error(
      `${source} is not a valid source elemental.`);
  }

  if(!isValidElemental(target)){
    throw new Error(
      `${target} is not a valid target elemental.`);
  }

  const sourceIndex = idxTool(
    source, elemOrder);

  const targetIndex = idxTool(
    target, elemOrder);

  if(sourceIndex == -1){
    throw new Error(
      `'${source}' is not a valid source elemental.`);
  }

  if(targetIndex == -1){
    throw new Error(
      `'${target}' is not a valid target elemental.`);
  }

  const difference = targetIndex - sourceIndex;
  const relation = item(elers, difference);
  return relation;
}
