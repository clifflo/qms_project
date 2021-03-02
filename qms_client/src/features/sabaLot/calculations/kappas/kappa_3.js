import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  applyToKappaTable
} from './kappa_2'
import {
  getPlasticLiturgy
}

export const buildFish_1(kappaContext){

  const compareFn = (source, dayTrunk) => {
    const dayTrunkLiturgy = getPlasticLiturgy(dayTrunk);
    const sourceLiturgy = getPlasticLiturgy(source);
    const fish = dayTrunkLiturgy == sourceLiturgy ?
      'Tuna' : 'Salmon'
  }

}
