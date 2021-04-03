import * as R from 'ramda';

export const pflat = obj_1 => {
  try{
    let result = {};
    let obj_2 = Object.assign({}, obj_1);
    Object.keys(obj_1).forEach(key_1 => {
      const key_2s = R.split('', key_1);
      key_2s.forEach(key_2 => {
        result[key_2] = obj_2[key_1];
      });
    })
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Pflat does not work.');
  }
}
