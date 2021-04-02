
const getCalr_3 = () => {

  const months_3 = RA.concatAll(
    R.map(year => year.months, calr_2));

  let months_4 = [];

  for(var i = 0; i < months_3.length - 1; i++){
    const wmoend = months_3[i+1].wmost;
    months_4.push({
      ...months_3[i],
      wmoend
    })
  }

  return months_4;
}

const calr_3 = getCalr_3();
