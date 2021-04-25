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
    '子, so 子 is the [bbssb]. Then ~ would',
    'be 子寅辰午申戌.'
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
    },
    {
      sprpn: 'ebbrs',
      sprfn: 'External bean branch series',
      spdesr: [
        'As of 乾午卦宮, it has the [fbbrs] of '
        '子寅辰午申戌. So 子寅辰 is the ~.'
      ]
    },
    {
      sprpn: 'ibbrs',
      sprfn: 'Internal bean branch series',
      spdesr: [
        'As of 乾午卦宮, it has the [fbbrs] of '
        '子寅辰午申戌. So 午申戌 is the ~.'
      ]
    }
  ]
}

const s_rhocs_1 = {
  spals: 'rhocs_1',
  spgtr: 'getRhocs_1',
  spname: 'Rho context 1',
  sploc: 'rho_02',
  spprms: [
    {
      sprpn: 'eshalt',
      sprfn: 'External short hook alternative',
      spdesr: [
        'For example, 無妄卦 has a ~ of 天.'
      ],
      sploc: 'rho_03',
      sptype: 'C'
    },
    {
      sprpn: 'ishalt',
      sprfn: 'External short hook alternative',
      spdesr: [
        'For example, 無妄卦 has a ~ of 雷.'
      ]
    },
    {
      sprpn: 'eshidx',
      sprfn: 'External short hook index',
      spdesr: [
        'For example, 無妄卦 has a [eshalt] of 雷.',
        'And for 雷, by the '
      ]
    }
  ]
}

const rhoSpec_01 = [
  s_fbbrs,
  s_rawntos,
  s_bkntos,
  s_rhocs_1
]

module.exports = rhoSpec_01;
