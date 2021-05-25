export const sigmaBrakeContext_01 = {
  _type:'SigmaBrakeContext',
	sigmaBrakeIndex: 1,
  sigmaBrakeName: '巳天元祿',
  sigmaBrakeDescription: [
    '凡事遇之大吉。'
  ],
  sigmaBrakeSource: 'sigma-day-trunk',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeOriginalSentence: [
    '甲祿在寅，乙祿在卯，丙戊祿在巳，丁己祿居午，',
    '庚祿居申，辛祿在酉，壬祿在亥，癸祿在子。'
  ],
  sigmaBoltDictionary: {
    '甲': '寅',
    '乙': '卯',
    '丙': '巳',
    '丁': '午',
    '戊': '巳',
    '己': '午',
    '庚': '申',
    '辛': '酉',
    '壬': '亥',
    '癸': '子'
  }
}

export const sigmaBrakeContext_02 = {
  _type:'SigmaBrakeContext',
  sigmaBrakeIndex: 2,
  sigmaBrakeName: '巳驛馬',
  sigmaBrakeDescription: [
    '出行及占行人俱要看之。'
  ],
  sigmaBrakeSource: 'sigma-day-branch',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeOriginalSentence: [
    '寅午戌馬居申，申子辰馬居寅，',
    '巳酉丑馬在亥，亥卯未馬在巳。'
  ],
  sigmaBoltDictionary: {
    '子': '寅',
    '丑': '亥',
    '寅': '申',
    '卯': '巳',
    '辰': '寅',
    '巳': '亥',
    '午': '申',
    '未': '巳',
    '申': '寅',
    '酉': '亥',
    '戌': '申',
    '亥': '巳'
  }
}

export const sigmaBrakeContext_03 = {
  _type:'SigmaBrakeContext',
  sigmaBrakeIndex: 3,
  sigmaBrakeName: '巳天乙貴人',
  sigmaBrakeSource: 'sigma-day-trunk',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeDescription: [
    '凡事遇之吉。'
  ],
  sigmaBrakeOriginalSentence: [
    '甲戊兼牛羊，乙己鼠猴鄉，丙丁豬雞位，',
    '壬癸兔蛇藏，庚辛逢馬虎，此是貴人方。'
  ],
  sigmaBoltDictionary: {
    '甲': '丑未',
    '乙': '子申',
    '丙': '亥酉',
    '丁': '亥酉',
    '戊': '丑未',
    '己': '子申',
    '庚': '午寅',
    '辛': '午寅',
    '壬': '卯巳',
    '癸': '卯巳'
  }
}

export const sigmaBrakeContext_04 = {
  _type:'SigmaBrakeContext',
  sigmaBrakeIndex: 4,
  sigmaBrakeName: '巳福星貴人',
  sigmaBrakeDescription: [
    '求仕用之。'
  ],
  sigmaBrakeSource: 'sigma-day-trunk',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeOriginalSentence: [
    '甲虎乙豬牛，丙同犬鼠遊，丁雞戊猴走，',
    '己羊庚馬頭，辛蛇癸愛兔，壬日占龍樓。'
  ],
  sigmaBoltDictionary: {
    '甲': '寅',
    '乙': '亥丑',
    '丙': '戌子',
    '丁': '酉',
    '戊': '申',
    '己': '未',
    '庚': '午',
    '辛': '巳',
    '壬': '辰',
    '癸': '卯'
  }
}

export const sigmaBrakeContext_05 = {
  _type:'SigmaBrakeContext',
  sigmaBrakeIndex: 5,
  sigmaBrakeName: '巳天德貴人',
  sigmaBrakeDescription: [
    '求仕用之。此處只取原‘天德貴人’之天干',
    '故加‘巳’字以標示之。'
  ],
  sigmaBrakeSource: 'sigma-brake-source-month-original',
  sigmaBrakeTarget: 'sigma-brake-target-cross-trunk',
  sigmaBrakeOriginalSentence: [
    '正丁、二申宮，三壬、四辛同，五亥、',
    '六甲上，七癸、八寅逢，九丙、十歸乙，',
    '子己、丑庚中。'
  ],
  sigmaBoltDictionary: {
    '正': '丁',
    '三': '壬',
    '四': '辛',
    '六': '甲',
    '七': '癸',
    '九': '丙',
    '十': '乙',
    '十一': '己',
    '十二': '庚'
  }
}

export const sigmaBrakeContextSubset_01 = [
  sigmaBrakeContext_01,
  sigmaBrakeContext_02,
  sigmaBrakeContext_03,
  sigmaBrakeContext_04,
  sigmaBrakeContext_05
];
