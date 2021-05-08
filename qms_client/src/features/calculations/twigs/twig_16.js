import {
  getElre
} from './twig_02';

// Get element cooperation
export const getElementalCorrelation = (selem, telem) => {

  E.checkNilWithString(selem);
  E.checkNilWithString(telem);

  try{

    const elre = getElre(selem, telem);
    E.checkNilWithString(elre, 'elre');

    if(elre == 'Draw'){
      return 'Either Draw';
    }
    else if(elre == 'Seed' || elre == 'Fruit'){
      return 'Either Seed';
    }
    else if(elre == 'Hacker' || elre == 'Bank'){
      return 'Either Hacker';
    }
    else {
      throw new Error(`${elre} is not valid.`);
    }
  }
  catch(err){}


}

export const isErcoEitherDraw =
  elementalCorrelation => elementalCorrelation == 'Either Draw';

export const isErcoEitherSeed =
  elementalCorrelation => elementalCorrelation == 'Either Seed';

export const isErcoEitherHacker =
  elementalCorrelation => elementalCorrelation == 'Either Hacker';
