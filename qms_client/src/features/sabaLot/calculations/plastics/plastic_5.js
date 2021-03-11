import {
  plrFilter
} from './plastic_2';

export const getCollisions = () => {

  const collisionSentences =
    plrFilter(
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
