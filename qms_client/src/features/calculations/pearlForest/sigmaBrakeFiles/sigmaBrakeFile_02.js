import * as R from 'ramda';

export const sigmaBrakeContext_06 = {
  _type:'SigmaBrakeContext',
	sigmaBrakeIndex: 6,
  sigmaBrakeName: '丁天德貴人',
  sigmaBrakeDescription: [
    '求仕用之。此處只取原‘天德貴人’之地支',
    '故加‘丁’字以標示之。'
  ],
  sigmaBrakeSource: 'sigma-brake-source-month-original',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeOriginalSentence: [
    '正丁、二申宮，三壬、四辛同，五亥、',
    '六甲上，七癸、八寅逢，九丙、十歸乙，',
    '子己、丑庚中。'
  ],
  sigmaBoltDictionary: {
    '二': '申',
    '五': '亥',
    '八': '寅'
  }
}

export const sigmaBrakeContext_07 = {
  _type:'SigmaBrakeContext',
	sigmaBrakeIndex: 7,
  sigmaBrakeName: '巳月德貴人',
  sigmaBrakeDescription: '凡有所占，轉凶為吉。',
  sigmaBrakeTopics: [
    'sigma-topic-general'
  ],
  sigmaBrakeSource: 'sigma-brake-source-month-branch',
  sigmaBrakeTarget: 'sigma-brake-target-cross-trunk',
  sigmaBrakeOriginalSentence: [
    '寅午戌月丙，申子辰月壬，亥卯未月甲，巳酉丑月庚。'
  ],
  sigmaBoltDictionary: {
    '子': '壬',
    '丑': '庚',
    '寅': '丙',
    '卯': '甲',
    '辰': '壬',
    '巳': '庚',
    '午': '丙',
    '未': '甲',
    '申': '壬',
    '酉': '庚',
    '戌': '丙',
    '亥': '甲'
  }
}

export const sigmaBrakeContext_08 = {
  _type:'SigmaBrakeContext',
	sigmaBrakeIndex: 8,
  sigmaBrakeName: '巳月德合',
  sigmaBrakeDescription: '凡有所占，轉凶為吉。',
  sigmaBrakeSource: 'sigma-brake-source-month-branch',
  sigmaBrakeTarget: 'sigma-brake-target-cross-trunk',
  sigmaBrakeOriginalSentence: [
    '寅午戌月辛，申子辰月丁，亥卯未月己，巳酉丑月乙。'
  ],
  sigmaBoltDictionary: {
    '子': '丁',
    '丑': '乙',
    '寅': '辛',
    '卯': '己',
    '辰': '丁',
    '巳': '乙',
    '午': '辛',
    '未': '己',
    '申': '丁',
    '酉': '乙',
    '戌': '辛',
    '亥': '己'
  }
}

export const sigmaBrakeContext_09 = {
  _type:'SigmaBrakeContext',
	sigmaBrakeIndex: 9,
  sigmaBrakeName: '巳天福貴人',
  sigmaBrakeSource: 'sigma-brake-source-day-trunk',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeDescription:
    '占身命遇之，一生福祿綿綿。',
  sigmaBrakeTopics: [
    'Life'
  ],
  sigmaBrakeOriginalSentence: [
    '甲愛金雞、乙愛猴，丁豬、丙鼠、己寅頭，',
    '戊尋玉兔、庚壬馬，辛癸逢蛇福自優。'
  ],
  sigmaBoltDictionary: {
    '甲': '酉',
    '乙': '申',
    '丙': '子',
    '丁': '亥',
    '戊': '卯',
    '己': '寅',
    '庚': '午',
    '辛': '午',
    '壬': '巳',
    '癸': '巳'
  }
}

export const sigmaBrakeContext_10 = {
  _type:'SigmaBrakeContext',
	sigmaBrakeIndex: 10,
  sigmaBrakeName: '巳天喜',
  sigmaBrakeSource: 'Sigma seaon',
  sigmaBrakeTarget: 'sigma-brake-target-cross-branch',
  sigmaBrakeTopics: [
    'Pregnant'
  ],
  sigmaBrakeDescription:
    '百事有喜，占胎，尤要看之。',
  sigmaBrakeOriginalSentence: [
    '春戌、夏丑為天喜，秋辰、',
    '冬未二三指，世上遇此必懽忻，',
    '百事得之皆有理。'
  ],
  sigmaBoltDictionary: {
    '春': '戌',
    '夏': '丑',
    '秋': '辰',
    '未': '亥'
  }
}

export const sigmaBrakeContextSubset_02 = [
  sigmaBrakeContext_06,
  sigmaBrakeContext_07,
  sigmaBrakeContext_08,
  sigmaBrakeContext_09,
  sigmaBrakeContext_10
];
