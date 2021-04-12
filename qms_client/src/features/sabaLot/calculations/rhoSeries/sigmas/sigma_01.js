import * as R from 'ramda';

export const smbrk_01 = {
  drbsr: 'day-trunk',
  drbtt: 'cross-branch',
  drbna: '巳天元祿',
  drbor: [
    '甲祿在寅，乙祿在卯，丙戊祿在巳，丁己祿居午，',
    '庚祿居申，辛祿在酉，壬祿在亥，癸祿在子。'
  ],
  drbmp: {
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

export const smbrk_02 = {
  drbsr: 'day-branch',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '巳驛馬',
  dtbid: '02',
  drbor: [
    '寅午戌馬居申，申子辰馬居寅，',
    '巳酉丑馬在亥，亥卯未馬在巳。'
  ],
  drbmp: {
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

export const smbrk_03 = {
  drbsr: 'day-branch',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '巳驛馬',
  dtbid: '02',
  drbor: [
    '寅午戌馬居申，申子辰馬居寅，',
    '巳酉丑馬在亥，亥卯未馬在巳。'
  ],
  drbmp: {
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

export const smbrk_04 = {
  drbsr: 'day-trunk',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '午天乙貴人',
  dtbid: '04',
  drbor: [
    '甲戊兼牛羊，乙己鼠猴鄉，丙丁豬雞位，',
    '壬癸兔蛇藏，庚辛逢馬虎，此是貴人方。'
  ],
  drbmp: {
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

export const smbrk_05 = {
  drbsr: 'day-trunk',
  drbtt: 'cross-animal',
  drbkd: 'tangerine',
  drbna: '巳福星貴人',
  dtbid: '05',
  drbor: [
    '甲虎乙豬牛，丙同犬鼠遊，丁雞戊猴走，',
    '己羊庚馬頭，辛蛇癸愛兔，壬日占龍樓。'
  ],
  drbmp: {
    '甲': '虎',
    '乙': '豬牛',
    '丙': '犬鼠',
    '丁': '雞',
    '戊': '猴',
    '己': '羊',
    '庚': '馬',
    '辛': '蛇',
    '壬': '龍',
    '癸': '兔'
  }
}

export const smbrk_06 = {
  drbsr: 'month-name',
  drbtt: 'cross-trunk',
  drbkd: 'tangerine',
  drbna: '巳天德貴人',
  dtbid: '06',
  drbor: [
    '正丁、二申宮，三壬、四辛同，五亥、',
    '六甲上，七癸、八寅逢，九丙、十歸乙，',
    '子己、丑庚中。'
  ],
  drbmp: {
    '正': '丁',
    '二': '申',
    '三': '壬',
    '四': '壬',
    '五': '亥',
    '六': '甲',
    '七': '癸',
    '八': '寅',
    '九': '丙',
    '十': '乙',
    '十一': '己',
    '十二': '庚'
  }
}

export const smbrk_07 = {
  drbsr: 'month-branch',
  drbtt: 'cross-trunk',
  drbkd: 'tangerine',
  drbna: '巳月德貴人',
  dtbid: '07',
  drbor: [
    '寅午戌月丙，申子辰月壬，',
    '亥卯未月甲，巳酉丑月庚。'
  ],
  drbmp: {
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

export const smbrks_01 = [
  smbrk_01,
  smbrk_02,
  smbrk_03,
  smbrk_04,
  smbrk_05,
  smbrk_06,
  smbrk_07
]
