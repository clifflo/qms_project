import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { brlcSet } from './twig_5';
import {
  isValidBranch,
  branchOrder,
  idxOfBranch,
  itemOfBranch
} from './twig_1';

// Milo Tangerine is the 天元祿吉神
export const miloTgrnSet = {
  '甲':'寅',
  '乙':'卯',
  '丙戊':'巳',
  '丁己':'午',
  '庚':'申',
  '辛':'酉',
  '壬':'亥',
  '癸':'子'
}

// Horse Tangerine is 驛馬吉神
const getHorseTgrn = tBranch => {

  if(!isValidBranch(tBranch)){
    throw new Error(
      `${tBranch} is not a valid branch `
      + `for horse brake.`)
  }

  try{
    const findFn = _brlc => {
      return R.includes(tBranch, _brlc.branches);
    }

    const brlc = R.find(findFn, brlcSet);
    const midBranch = brlc.branches[2];
    const midBridx = idxOfBranch(midBranch);
    const result = itemOfBranch(midBridx + 2);
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get horse brake.');
  }
}

export const horseTgrnSet =
  R.map(getHorseTgrn, branchOrder);

// Gamma Sigma Tangerine Set
// 乙巳貴人（火珠林專用天乙貴人）
export const gmsmTgrnSet = {
  '甲戊':'牛羊',
  '乙己':'鼠猴',
  '丙丁':'豬雞',
  '壬癸':'兔蛇',
  '庚辛':'虎馬',
}

// Gamma Mu Tangerine Set
// 乙亥貴人（六壬專用天乙貴人）
export const gmmuTgrnSet = {
  '甲戊庚': '牛羊',
  '乙己':'鼠猴',
  '丙丁':'豬雞',
  '壬癸':'兔蛇',
  '辛': '馬虎'
}

export const luckyTgrnSet = {

}
