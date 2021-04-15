import wnli_3 from './wnli_3';

const getWnli_4 = () => {

  const mapFn = month => {

    const yrContext = R.find(
      R.propEq('year', parseInt(month.year)),
      calr_2);

    const leap = yrContext.leap;

    if(leap == ''){
      return {
        ...month,
        wyrHasLeap: false
      }
    }
    else {

      const isLeap = moment(leap)
        .isBetween(
          month.wmost,
          month.wmoend,
          undefined,
          '[)');

      if(!isLeap){
        return {
          ...month,
          wyrHasLeap: true,
          isLeap: false
        }
      }
      else {
        return {
          ...month,
          wyrHasLeap: true,
          isLeap: true,
          leap
        }
      }
    }
  }

  return R.map(mapFn, calr_3);

}

export default wnli_4 = getWnli_4();
