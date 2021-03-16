import * as R from 'ramda';

export const comparePelem = (source, target) => {
  try {

    const sElem = getElem(source);
    const tElem = getElem(target);

    const relation = getElr(
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
