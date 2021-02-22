import * as R from 'ramda';

export function item(array, index){
  if(index >= array.length){
    return array[index - array.length];
  }
  else if(index < 0){
    return array[index +  array.length];
  }
  else {
    return array[index]
  }
}

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
  return R.find(R.equals(trunk),R.split('', trunkOrder));
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

export const reactionSentences = [
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

export function getTrunkCompounds() {

  const trunkCompoundSentences = R.filter(
    sentence => sentence[2] == '合',
    reactionSentences);

  const mapFn = sentence => {
    return {
      trunks: [sentence[0], sentence[1]],
      element: sentence[3]
    }
  }

  const _trunkCompounds =
    R.map(mapFn, trunkCompoundSentences);

  return _trunkCompounds;
}

export const trunkCompounds = getTrunkCompounds()

export function reactionFilter(filterFn) {
  return R.filter(filterFn, reactionSentences);
}

export function getCollisions(){

  const collisionSentences = reactionFilter(
    sentence => sentence.length == 3);

  const getCollisionTypeEnglish = collision => {
    switch(collision){
      case '沖':
        return 1;
      case '害':
        return 2;
      case '破':
        return 3;
      default:
        throw 'Wrong collision Chinese.';
    }
  }

  const mapFn = sentence => {
    return {
      branch: [sentence[0], sentence[1]],
      collisionType: sentence[2],
      collisionTypeEnglish:
        getCollisionTypeEnglish(sentence[2]),
    }
  }

  const _collisions =
    R.map(mapFn, collisionSentences);

  return _collisions;

}

export const collisions = getCollisions();

export function getCyclicArrestment(){

  const cycleArrestmentSentences =
    reactionFilter(sentence => sentence.length == 8);

  const getTypedList = branch => {

    const sentence =
      R.find(sentence => sentence[0] == branch,
        cycleArrestmentSentences);

    const sliceSentence =
      R.slice(0, 3, sentence)

    const list =
      R.split('', sliceSentence);

    return list;
  }

  const typeOneList =
    getTypedList('寅');

  const typeTwoList =
    getTypedList('丑');

  const builder = (typedList, type) => {

    let arrestmentList = [];

    for(let i = 0; i < 3; i++){
      const police = item(typedList, i);
      const suspect = item(typedList, i+1);
      arrestmentList.push({
        police,
        suspect,
        type
      });
    }

    return arrestmentList;
  }

  console.log(builder(typeOneList, 1));

  return 'A';

}

export const crabFarmSentences = [
  '甲祿在寅',
  '丙戊祿在巳',
  '庚祿在申',
  '壬祿在亥'
]
