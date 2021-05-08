import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://gatorswap.xyz/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Gator Swamp',
    icon: 'FarmIcon',
    href: 'https://gatorswap.xyz/farms'
  },
  {
    label: 'Gator Pools',
    icon: 'PoolIcon',
    href: 'https://gatorswap.xyz/nests'
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: 'https://gatorswap.xyz/referral',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/...',
      },      
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/Alligatorfarmer",
      },
      {
        label: "Blog",
        href: "https://gator-swap.medium.com/",
      },
    ],
  },
]

export default config
