import { Frog } from './types';

export const NEARBY_FROGS: Frog[] = [
  {
    id: '1',
    name: 'Red-Eyed Tree Frog',
    scientificName: 'Agalychnis callidryas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3a4yWYyURsnuX7ap6zr7_YWFe5HCkPNM6AtW2IZb9AAeTMQJG_SiI7Dhy530-FpYr6Kv-aZaz0c2hMEYJyTarYXdFApiH8GxuPXyMy09tvTveHA7mDbVKyEi4Qul3en-xVi01K2CNSraxfNV6QAW-MZveH9X7931P914IvQfGmkFGCxZCjJPWk0V9Bjt1Uicwqt13VSCDsPbzIXh4lLkawmlyp-MxAqgLb2ffJLNm3_tM3V4MEkedZlF80rrBaeeWZahqKRgc6dc',
    verified: true,
    distance: '0.4 miles away',
    timeAgo: '2h AGO',
    location: 'Tortuguero Rainforest',
    date: 'Oct 24, 2023',
    rarity: 'Rare',
    matchScore: 98,
    stats: {
        status: 'Least Concern',
        size: '2 - 3 inches',
        active: 'Nocturnal'
    },
    description: 'These iconic amphibians inhabit lush lowland tropical rainforests near rivers and ponds across Central America. They spend most of their time in the canopy, sticking to the undersides of large leaves to stay hydrated and hidden from predators.'
  },
  {
    id: '2',
    name: 'Wood Frog',
    scientificName: 'Lithobates sylvaticus',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk-qt-pUPfN_1Qh3eYxNt7Ta6dl6BVw0qjbJxtPKSkmupyii5jbUJ8TdP7ykDIh2mNMUxWzQimZzJWxcItE1K6kiEIYwVJEVXMO7h4LFiUrbzJM58NCSNhjcnXchVLS__Tz0x2FqQBq8v7EYN34BuyIXkpe6LtJkvUwt0kbNJIuJx4D2j8alLbyjkDT6SA6OIQ0OcbcgidJgP0yiEizWaGrQ4cPkAlPWJUkABST_UMThtTg5euc_b_ay51lPJuKqVMgPjV01j4XSQ',
    verified: false,
    distance: '1.2 miles away',
    timeAgo: '2h AGO',
    location: 'North Woods',
    date: 'Oct 22, 2023',
    rarity: 'Common'
  },
  {
    id: '3',
    name: 'Leopard Frog',
    scientificName: 'Lithobates pipiens',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5C_QZX5ZXOZTVWT_f-k7fDoJujl6p_gTkL8-bePtcYA1fYDlwcGj8SZyCGzTHSWnn2i9nILp7s1Opv_ycUBu9FrSPdX7vcrrHYsGADAr2qip1L8fXh8jM4jTpuPWcG3m-GvITHzynceqHnxUEPfGFeOKrILlwORdWipYcZGHoSDEoLpZy1_63JqOEWSWsnVna2FyOfdyF461isd56dM1qszCLWDWlkyls79hY-JWO-WY0cLfjzBdaQl4BtwW0CIRZZjzB-b6Yrtg',
    verified: false,
    distance: '2.8 miles away',
    timeAgo: '5h AGO',
    location: 'Wetlands',
    date: 'Oct 21, 2023',
    rarity: 'Common'
  }
];

export const MY_LOG_FROGS: Frog[] = [
    NEARBY_FROGS[0], // Red-Eyed
    {
        id: '4',
        name: 'American Bullfrog',
        scientificName: 'Lithobates catesbeianus',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUGR6KHa7FzoD9hyJmNwm8f_djY2O-PqT6AOAq1m5WlfggRkpt2yluAUsxPOir8cWrztMeSqI5XCgcdvyLzK6ERRNOYuvuAHEwaQOYgRmgCrfmDoy8gDybQhq3jSvr9Sr25GSxbBeiDE-pwMIfv5eMbiCwLXIqvj7K9QRyj70ytKxaCg-ilpfwAPdt5TKknrKbXGqQE05LDBb2K27K1Z2V_bbzuvAS1AK1UIslxu4RjNJ7U3KujFPyPj76AiMm_6vIUDiU9YYHO6k',
        verified: false,
        location: 'Silver Lake State Park',
        date: 'Oct 20, 2023',
        rarity: 'Common'
    },
    {
        id: '5',
        name: 'Poison Dart Frog',
        scientificName: 'Dendrobatidae',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9vdR5-cAadEJyCM8GCuACkMgDR6DV5-HjnBUfCwivztyw9Ss0KifHGwLyhD3nnoMfjb_e2W7aMQjHBJUasFISIShOsA2nzToc4DImqRwwbk19-ZDHDA_qzejrULdxNB3cBmkwZ53czTFsvqZ77IYA3jSfEFin2glSrSHsSyM3GUeRM5vBV9060YjqeJvlf_p0CLrShZUm4xqcitzpKHfXPoneNkyqTmYOxPWFsIFNSceCaqClb6lqD8PZDrcPp6w3mE9Rt5_VkU0',
        verified: false,
        location: 'Amazon Basin Area',
        date: 'Sept 12, 2023',
        rarity: 'Rare'
    }
];

export const FROG_OF_THE_DAY: Frog = {
    id: '99',
    name: 'Golden Mantella',
    scientificName: 'Mantella aurantiaca',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUncIlyoFUZrROFXKQbE0heVfqa4QwsJoaNRYykpxGbu5QvKXEvc7tLryP5vU-dHRxsZIPruQFDVKIqo3nAFe6jCAbkfI-TB8Rft1i7zYCuJRjJe0jks8s-1N9J_Uhu5gmrdqWP-y5rcQEf-KV4kp67lg8ng7olJM2KXFeiWwOyqcEbZgdtPZbqeHQvgH-td9ALHfYKBFnzzQ8ixQx6TriQBX1QwABJYkz7_RQ_FKV6YQqSPtY-0s_T5Cp7LHrNzoMs1EbAdThPSY',
    verified: true,
    description: 'This critically endangered frog is native to Madagascar and known for its bright orange skin...'
}