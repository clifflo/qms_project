import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { brlcSet } from './twig_5'

export const miloBrake = {
  '甲':'寅',
  '乙':'卯',
  '丙':'巳',
  '戊':'巳',
  '丁':'午',
  '己':'午',
  '庚':'申',
  '辛':'酉',
  '壬':'亥',
  '癸':'子'
}

const getHorseBrake = tBranch => {
  const findFn = _brlc => {
    return R.includes(tBranch, _brlc.branches);
  }

  const brlc = R.find(findFn, brlcSet);
  
}
