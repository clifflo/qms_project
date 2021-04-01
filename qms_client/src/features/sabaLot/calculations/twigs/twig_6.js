import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { brlcSet } from './twig_5';
import { adjust } from '../utils/util_1';
import {
  isValidBranch,
  branchOrder,
  idxOfBranch,
  itemOfBranch
} from './twig_1';

// Milo Tangerine is the 天元祿吉神
export const miloTgset = {
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
const getHorseTgset = () => {

  const brhList = '寅亥申巳';

  const mapFn = idx => {
    const sBranch = itemOfBranch(idx);
    const tBranch = item(brhList, idx);

    return {
      [sBranch]: tBranch
    }
  }

  return R.map(mapFn, R.range(0, 12));
}

export const horseTgset = getHorseTgset();

// Gamma Sigma Tangerine Set
// 乙巳貴人（火珠林專用天乙貴人）
export const gmsmTgset = {
  '甲戊':'牛羊',
  '乙己':'鼠猴',
  '丙丁':'豬雞',
  '壬癸':'兔蛇',
  '庚辛':'虎馬',
}

// Gamma Xi Tangerine Set
// 乙酉貴人（六壬專用天乙貴人）
export const gmxiTgset = {
  '甲戊庚':'牛羊',
  '乙己':'鼠猴',
  '丙丁':'豬雞',
  '壬癸':'兔蛇',
  '辛': '馬虎'
}

export const luckyTgset = {
  '甲':'虎',
  '乙':'豬牛',
  '丙':'犬鼠',
  '丁':'雞',
  '戊':'𤠣',
  '己':'羊',
  '庚':'馬',
  '辛':'蛇',
  '癸':'兔',
  '壬':'龍'
}

const getGivenKill = () => {
  const brhList = '巳寅亥申';

  const mapFn = idx => {
    const sBranch = itemOfBranch(idx);
    const tBranch = item(brhList, idx);

    return {
      [sBranch]: tBranch
    }
  }

  return R.map(mapFn, R.range(0, 12));
}

export const givenKill = getGivenKill();
