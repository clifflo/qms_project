
export const getSigmaBrakeHandfulContextSet_2 =
  sigmaBrakeHandfulContext_1 => {

  const {
    firstSigmaBrakeCharacterType,
    comingSigmaBrakeCharacterType,
    delimiter,
    sigmaBrakeBuiltFullSentence
  } = sigmaBrakeBuiltContext_3;

  const sigmaTypeText =
    firstSigmaBrakeCharacterType + '-'
    + comingSigmaBrakeCharacterType;

  let sigmaRegex;

  const branchRegex =
    '([子丑寅卯辰巳午未申酉戌亥鼠牛虎兔龍蛇馬羊猴雞狗豬]+)';

  const trunkRegex = '([甲乙丙丁戊己庚辛壬癸]+)';

  const monthRegex =
    '([正二三四五六七八九十霜臘]+)';

  const seasonRegex =
    '([春夏秋冬])';

  if(sigmaTypeText == 'Trunk-Branch'){
    sigmaRegex =
    trunkRegex + branchRegex;
  }
  else if(sigmaTypeText == 'Branch-Branch'
  && delimiter == 'Sun'){
    sigmaRegex =
    branchRegex + '日' + branchRegex;
  }
  else if(sigmaTypeText == 'Branch-Branch'
  && delimiter == 'Moon'){
    sigmaRegex =
    branchRegex + '月' + branchRegex;
  }
  else if(sigmaTypeText == 'Trunk-Branch'){
    sigmaRegex =
    trunkRegex + branchRegex;
  }
  else if(sigmaTypeText == 'Month-Trunk'){
    sigmaRegex =
    monthRegex + '(.*?)' + trunkRegex;
  }
  else if(sigmaTypeText == 'Season-Branch'){
    sigmaRegex =
    seasonRegex + branchRegex;
  }
  else if(sigmaTypeText == 'Branch-Season'){
    sigmaRegex =
    branchRegex + seasonRegex;
  }

  var patt = new RegExp(sigmaRegex, "g");
  var result = sigmaBrakeBuiltFullSentence.match(patt);

  console.log(result);

  return result;
}

export const sigmaBrakeHandfulContextSet_2 =
  R.map(
    getSigmaBrakeHandfulContextSet_2,
    sigmaBrakeHandfulContextSet_1);
