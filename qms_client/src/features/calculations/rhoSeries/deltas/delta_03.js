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

export const smbrk_08 = {
  drbsr: 'month-branch',
  drbtt: 'cross-trunk',
  drbkd: 'tangerine',
  drbna: '巳月德合',
  dtbid: '08',
  drbor: [
    '寅午戌月辛，申子辰月丁，',
    '亥卯未月己，巳酉丑月乙。'
  ],
  drbmp: {
    '子': '辛',
    '丑': '巳',
    '寅': '丁',
    '卯': '乙',
    '辰': '辛',
    '巳': '巳',
    '午': '丁',
    '未': '乙',
    '申': '辛',
    '酉': '巳',
    '戌': '丁',
    '亥': '乙'
  }
}

export const smbrk_09 = {
  drbsr: 'day-trunk',
  drbtt: 'day-animal',
  drbkd: 'tangerine',
  drbna: '巳天福貴人',
  dtbid: '09',
  drbor: [
    '甲愛金雞、乙愛猴，丁豬、丙鼠、己寅頭，',
    '戊尋玉兔、庚壬馬，辛癸逢蛇福自優。',
  ],
  drbmp: {
    '甲': '雞',
    '乙': '猴',
    '丙': '鼠',
    '丁': '豬',
    '戊': '兔',
    '己': '虎',
    '庚': '馬',
    '辛': '蛇',
    '壬': '馬',
    '癸': '蛇'
  }
}

export const smbrk_10 = {
  drbsr: 'season',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '巳天喜',
  dtbid: '10',
  drbor: [
    '春戌、夏丑為天喜，',
    '秋辰、冬未二三指，',
    '世上遇此必懽忻，',
    '百事得之皆有理。'
  ],
  drbmd: [
    '百事有喜，占胎，尤要看之。'
  ],
  drbmp: {
    '春': '戌',
    '夏': '丑',
    '秋': '辰',
    '冬': '未'
  }
}

export const smbrk_11 = {
  drbsr: 'month-branch',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '巳天馬',
  dtbid: '11',
  drbor: [
    '寅申月在午，卯酉月在申，辰戌月在戊，',
    '巳亥月在子，子午月在寅，丑未月在辰。'
  ],
  drbmp: {
    '子': '寅',
    '丑': '辰',
    '寅': '午',
    '卯': '申',
    '辰': '戊',
    '巳': '子',
    '午': '寅',
    '未': '辰',
    '申': '午',
    '酉': '申',
    '戌': '戊',
    '亥': '子',
  }
}

export const smbrk_12 = {
  drbsr: 'year-branch',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '巳唐符國印',
  dtbid: '12',
  drbmd: [
    '唐符值年之星，國印朝廷之印，',
    '占仕宦若持身世，大吉之兆。',
    '若問文官并武職，唐符國印求端的。'
  ],
  drbor: [
    '寅申之年巳亥為，巳亥之年寅申覓，',
    '子午之年卯酉求，卯酉之年子午出，',
    '辰戌之年丑未方，丑未之年在辰戌，',
    '鬼臨符印最為隹，當作朝中資輔翼。'
  ],
  drbmp: {
    '子': '卯酉',
    '丑': '辰戌',
    '寅': '巳亥',
    '卯': '子午',
    '辰': '丑未',
    '巳': '寅申',
    '午': '卯酉',
    '未': '辰戌',
    '申': '巳亥',
    '酉': '子午',
    '戌': '丑未',
    '亥': '寅申'
  }
}

export const smbrk_13 = {
  drbsr: 'month-name',
  drbtt: 'cross-branch',
  drbkd: 'tangerine',
  drbna: '巳天醫',
  dtbid: '13',
  drbor: [
    '天醫正卯、二豬臨，三月隨丑、',
    '四未尋，五蛇、六兔、七居亥，',
    '八丑、九羊、十巳存，十一再來尋卯上，',
    '十二亥上作醫人。'
  ],
  drbmd: [
    '占病遇此爻，動雖凶有救。'
  ]
  drbmp: {
    '正': '卯',
    '二': '亥',
    '三': '丑',
    '四': '未',
    '五': '巳',
    '六': '卯',
    '七': '亥',
    '八': '丑',
    '九': '未',
    '十': '巳',
    '十一': '卯',
    '十二': '亥'
  }
}

export const smbrk_14 = {
  drbsr: 'month-name',
  drbtt: 'cross-animal',
  drbkd: 'tangerine',
  drbna: '巳天赦',
  dtbid: '14',
  drbor: [
    '正五九月在戌方，二六十月到於羊，',
    '三七十一居龍位，四八十二在牛場，',
    '卦中臨應仍搖動，獄訟勾連竟不妨。'
  ],
  drbmd: [
    '獄訟遇之，大吉。'
  ],
  drbmp: {
    '正': '狗',
    '二': '羊',
    '三': '龍',
    '四': '牛',
    '五': '狗',
    '六': '羊',
    '七': '龍',
    '八': '牛',
    '九': '狗',
    '十': '羊',
    '十一': '龍',
    '十二': '牛'
  }
}

export const smbrks_1 = [
  smbrk_01,
  smbrk_02,
  smbrk_03,
  smbrk_04,
  smbrk_05,
  smbrk_06,
  smbrk_07,
  smbrk_08,
  smbrk_09,
  smbrk_10,
  smbrk_11,
  smbrk_12,
  smbrk_13,
  smbrk_14
]
