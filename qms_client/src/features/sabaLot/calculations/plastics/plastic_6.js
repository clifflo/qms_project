import {
  plrFilter
} from './plastic_2';
import * as R from 'ramda';

export const getCyclicArrestments = () => {

  const cycleArrestmentSentences =
    plrFilter(sentence => sentence.length == 8);

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

const cyclicArrestments = getCyclicArrestments();

const impoliteArrestments = [
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

const getSelfArrestments = () => {
  const selfArrestmentSentence =
    plrFilter(sentence =>
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

export const allArrestments = RA.concatAll(
  [cyclicArrestments,
  impoliteArrestments,
  selfArrestments]);
