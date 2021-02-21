import * as R from 'ramda';

export const trunkContext = {
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

export const elementOrder = '水木火土金';

export const trunkOrder = '甲乙丙丁戊己庚辛壬癸';

export function getElementOfTrunk(trunk){


  return R.find(R.equals(trunk))(R.split('', trunkOrder));
}

export const branchContext = {
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

export const branchOrder = '子丑寅卯辰巳午未申酉戌亥';

export function getBranchFromEnglish(branchEnglish) {
  return R.invert(branchContext)[branchEnglish][0];
}

export const elementalContext = [
  '子丑合土',
  '寅亥合木',
  '卯戌合火',
  '辰酉合金',
  '巳申合水',
  '午未合火',
  '子午沖',
  '丑未沖',
  '寅申沖',
  '卯酉沖',
  '辰戌沖',
  '巳亥沖',
  '子未害',
  '丑午害',
  '寅巳害',
  '卯辰害',
  '申亥害',
  '酉戌害',
  '子酉破',
  '寅亥破',
  '辰丑破',
  '午卯破',
  '申巳破',
  '戌未破',
  '申子辰合水',
  '亥卯未合木',
  '寅午戌合火',
  '巳酉丑合金',
  '寅卯辰會東方木',
  '巳午未會南方火',
  '申酉戌會西方金',
  '亥子丑會北方水',
  '寅巳申為無恩之刑',
  '丑戌未為持勢之刑',
  '子卯為無禮之刑',
  '辰午酉亥為自刑'
]
