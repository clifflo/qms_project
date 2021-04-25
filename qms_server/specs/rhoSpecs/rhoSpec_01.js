const s_rawntos = {
  spals: 'rawntos',
  spname: 'Raw nattos',
  spdesr: [
    'It stands for the raw 納甲歌.'
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
        'The value of [bbssb] from all 卦宮 are',
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

const s_bkntos = {
  spals: 'bkntos',
  spname: 'Baked nattos',
  spdesr: [
    'It stands for the baked version of nattos.',
    'That means the starting bean branch and the',
    'trunk for the short hook in both the external',
    'and the internal case are both defined.'
  ],
  sprtps: [
    {
      sprpn: 'gshori',
      sprfn: 'Generic short hook original name',
      spdesr: [
        'It stands for the original name of a short',
        'hook, i.e. one of the 坤震坎兌艮離巽乾.'
      ]
    },
    {
      sprpn: 'gshele',
      sprfn: 'Generic short hook elemental',
      spdesr: [
        'It stands for the elemental for a short hook.',
        'For example, 乾 is 金, 離 is 火, etc. The term',
        '"generic" means that it represent the whole',
        '卦宮, rather that the external or internal',
        'short hook within a long hook.'
      ]
    },
    {
      sprpn: 'eshbt',
      sprfn: 'External short hook bean trunk',
      spdesr: [
        'It stands for the trunk for the external',
        'short hook. For example, the ~ of 乾午卦宮',
        'is 甲.'
      ]
    },
    {
      sprpn: 'ishbt',
      sprfn: 'External short hook bean trunk',
      spdesr: [
        'It stands for the trunk for the external',
        'short hook. For example, the ~ of 乾午卦宮',
        'is 壬.'
      ]
    }
  ]
}

const rhoSpec_01 = [
  s_fbbrs,
  s_rawntos
]

module.exports = rhoSpec_01;
