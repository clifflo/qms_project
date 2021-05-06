import {
  getElre
} from './twig_02';

// Get element cooperation
export const getErco = (selem, telem) => {

  E.cknws(selem);
  E.cknws(telem);

  try{

    const elre = getElre(selem, telem);
    E.cknws(elre, 'elre');

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
  erco => erco == 'Either Draw';

export const isErcoEitherSeed =
  erco => erco == 'Either Seed';

export const isErcoEitherHacker =
  erco => erco == 'Either Hacker';
