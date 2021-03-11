import {
  plrSentences,
  plrFilter
} from './plastic_2';

export function getCompounds() {

  const filterFn = sentence => {
    const reactionChar = item(sentence, -2);
    return reactionChar == '合' || reactionChar == '會'
  }

  const compoundSentences =
    plrFilter(filterFn);

  const sliceFn = sentence =>
    R.slice(0, sentence.length - 2, sentence);

  const splitFn = sentence => R.split('', sentence);

  const compoundTypeFn = sentence => {
    if(sentence.length == 4){
      if(isValidTrunk(sentence[0])){
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
      elemental: item(sentence, -1),
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
  return _compounds;
}

export const compounds = getCompounds();
