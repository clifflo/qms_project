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

export const concatAll = (...array) => {
  const appender = (a, b) => { return R.concat(a, b) };
  const result = R.reduce(appender, [], array);
  return result;
};

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

const elementOrder = '水木火土金';

const trunkOrder = '甲乙丙丁戊己庚辛壬癸';

export function getIndexFromSentence(character, order){
  return R.findIndex(R.equals(character),R.split('', trunkOrder));
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

export function getIndexOfTrunk(trunk){
  return getIndexFromSentence(trunk, trunkOrder);
}

export function getIndexOfBranch(branch){
  return getIndexFromSentence(branch, branchOrder);
}

export function isTrunk(plastic) {
  if (getIndexOfTrunk(plastic) != -1)
    return true;
  else if (getIndexOfBranch != -1)
    return false;
  else
    throw 'Wrong plastic.';
}

export function getBranchFromEnglish(branchEnglish) {
  return R.invert(branchContext)[branchEnglish][0];
}

export const plasticReactionSentences = [
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
  '寅卯辰會木',
  '巳午未會火',
  '申酉戌會金',
  '亥子丑會水',
  '寅巳申為無恩之刑',
  '丑戌未為持勢之刑',
  '子卯為無禮之刑',
  '辰午酉亥為自刑',
  '甲己合土',
  '乙庚合金',
  '丙辛合水',
  '丁壬合木',
  '戊癸合火',
]

export function plasticReactionFilter(filterFn) {
  return R.filter(filterFn, plasticReactionSentences);
}

export function getCompounds() {

  const filterFn = sentence => {
    const reactionChar = item(sentence, -2);
    return reactionChar == '合' || reactionChar == '會'
  }

  const compoundSentences =
    plasticReactionFilter(filterFn);

  const sliceFn = sentence =>
    R.slice(0, sentence.length - 2, sentence);

  const splitFn = sentence => R.split('', sentence);

  const compoundTypeFn = sentence => {
    if(sentence.length == 4){
      if(isTrunk(sentence[0])){
        return 1;
      }
      else {
        return 2;
      }
    }
    else {
      if(item(sentence, -2) == '合'){
        return 3;
      }
      else {
        return 4;
      }
    }
  }

  const sentenceFn = R.compose(splitFn, sliceFn);

  const firstMapFn = sentence => {
    return {
      plastics: sentenceFn(sentence),
      element: item(sentence, -1),
      compoundType: compoundTypeFn(sentence),
      isTrunk: isTrunk(sentence[0])
    }
  }

  const mapper = [
    '天干五小合',
    '地支六小合',
    '地支三大合',
    '地支三會'
  ]

  const secondMapFn = rawCompound =>{
    return {
      ...rawCompound,
      compoundStyle: mapper[rawCompound.compoundType - 1]
    }
  }


  const buildFn =　R.compose(
    secondMapFn,
    firstMapFn);

  const _compounds =
    R.map(buildFn, compoundSentences);

  console.log(_compounds);

  return _compounds;
}

export const compounds = getCompounds();

export function getCollisions(){

  const collisionSentences =
    plasticReactionFilter(
      sentence => sentence.length == 3);

  const getCollisionType = collision => {
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
      tank: sentence[0],
      victim: sentence[1],
      collisionType:
        getCollisionType(sentence[2]),
      collisionStyle:
        sentence[2]
    }
  }

  const _collisions =
    R.map(mapFn, collisionSentences);

  return _collisions;

}

export const collisions = getCollisions();

export function getCyclicArrestments(){

  const cycleArrestmentSentences =
    plasticReactionFilter(sentence => sentence.length == 8);

  const getInitalList = branch => {

    const sentence =
      R.find(sentence => sentence[0] == branch,
        cycleArrestmentSentences);

    const sliceSentence =
      R.slice(0, 3, sentence)

    const initialList =
      R.split('', sliceSentence);

    return initialList;
  }

  const getFinalList =
    (branch, arrestmentType, arrestmentStyle) => {

    const initialList = getInitalList(branch);

    let finalList = [];

    for(let i = 0; i < 3; i++){
      const police = item(initialList, i);
      const suspect = item(initialList, i+1);
      finalList.push({
        police,
        suspect,
        arrestmentType,
        arrestmentStyle
      });
    }

    return finalList;
  }

  const typeOneArrestment =
    getFinalList('寅', 1, '無恩之刑');

  const typeTwoArrestment =
    getFinalList('丑', 1, '持勢之刑');

  const fullList =
    R.concat(typeOneArrestment, typeTwoArrestment);

  return fullList;

}

export const cyclicArrestments = getCyclicArrestments();

export const impoliteArrestments = [
  {
    police: '子',
    suspect: '卯',
    arrestmentType: 3,
    arrestmentStyle: '無禮之刑'
  },
  {
    police: '卯',
    suspect: '子',
    arrestmentType: 3,
    arrestmentStyle: '無禮之刑'
  }
]

export function getSelfArrestments(){
  const selfArrestmentSentence =
    plasticReactionFilter(sentence =>
      R.takeLast(2, sentence) == '自刑')[0];

  const splitFn = sentence =>
    R.split('', sentence);

  const takeFn = sentence =>
    R.take(4, sentence);

  const mapFn = branch => {
    return {
      police: branch,
      suspect: branch,
      arrestmentType: 4,
      arrestmentStyle: '自刑'
    }
  }

  const fullMapFn = sentence => R.map(mapFn, sentence);

  const arrestments =
    R.compose(fullMapFn, takeFn, splitFn)(selfArrestmentSentence);

  return arrestments;

}

export const selfArrestments = getSelfArrestments();

export const allArrestments = concatAll(
  cyclicArrestments,
  impoliteArrestments,
  selfArrestments)




export const crabFarmSentences = [
  '甲祿在寅',
  '丙戊祿在巳',
  '庚祿在申',
  '壬祿在亥'
]
