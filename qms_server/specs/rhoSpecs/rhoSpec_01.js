const s_rawntos = {
  spals: 'rawntos',
  spname: 'Raw nattos',
  spdesr: [
    'It stands for the 納甲歌.'
  ],
  sploc: 'rho_01',
  sptype: 'C'
}

const s_fbbrs = {
  spals: 'fbbrs',
  spgtr: 'getFbbrs',
  spname: 'Get full bean branch series',
  spdesr: [
    'As of 乾, we will have the branches',
    'starting from the bottom cross with',
    '子寅辰午申戌, which is the [fbbrs].'
  ],
  sploc: 'rho_01',
  spprms: [
    {
      sppals: 'bbssb',
      sppna: 'Bean branch series start branch',
      sppdes: [
        'As of 乾, we will have 子 as the [bbssb].',
        'The value of [bbssb] from all 午卦宮s are',
        'parsed from the [rawntos].'
      ]
    },
    {
      sppals: 'bbscw',
      sppna: 'Bean branch series is clockwise',
      sppdes: [
        'As of 乾, we will have a clockwise one.',
        '順佈 means clockwise and 逆佈 is anticlockwise.'
      ]
    }
  ]
}

const rhoSpec_01 = [
  s_fbbrs,
  s_rawntos
]

module.exports = rhoSpec_01;
