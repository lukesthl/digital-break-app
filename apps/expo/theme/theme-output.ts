/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface Theme {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  primary6: string;
  primary7: string;
  primary8: string;
  primary9: string;
  primary10: string;
  primary11: string;
  primary12: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  text11: string;
  background1: string;
  background2: string;
  background3: string;
  background4: string;
  background5: string;
  background6: string;
  background7: string;
  background8: string;
  background9: string;
  background10: string;
  background11: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  grey8: string;
  grey9: string;
  grey10: string;
  grey11: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;
}

function t(a: number[][]) {
  const res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    res[ks[ki]] = vs[vi];
  }
  return res;
}
const vs = [
  "#fff",
  "#f8f8f8",
  "hsl(0, 0%, 96.3%)",
  "hsl(0, 0%, 94.1%)",
  "hsl(0, 0%, 92.0%)",
  "hsl(0, 0%, 90.0%)",
  "hsl(0, 0%, 88.5%)",
  "hsl(0, 0%, 81.0%)",
  "hsl(0, 0%, 56.1%)",
  "hsl(0, 0%, 50.3%)",
  "hsl(0, 0%, 42.5%)",
  "hsl(0, 0%, 9.0%)",
  "rgba(255,255,255,0)",
  "rgba(10,10,10,0)",
  "hsl(206, 100%, 99.2%)",
  "hsl(210, 100%, 98.0%)",
  "hsl(209, 100%, 96.5%)",
  "hsl(210, 98.8%, 94.0%)",
  "hsl(209, 95.0%, 90.1%)",
  "hsl(209, 81.2%, 84.5%)",
  "hsl(208, 77.5%, 76.9%)",
  "hsl(206, 81.9%, 65.3%)",
  "hsl(206, 100%, 50.0%)",
  "hsl(208, 100%, 47.3%)",
  "hsl(211, 100%, 43.2%)",
  "hsl(211, 100%, 15.0%)",
  "hsl(0, 0%, 99.0%)",
  "hsl(0, 0%, 97.3%)",
  "hsl(0, 0%, 95.1%)",
  "hsl(0, 0%, 93.0%)",
  "hsl(0, 0%, 90.9%)",
  "hsl(0, 0%, 88.7%)",
  "hsl(0, 0%, 85.8%)",
  "hsl(0, 0%, 78.0%)",
  "hsl(0, 0%, 52.3%)",
  "hsl(0, 0%, 43.5%)",
  "hsl(136, 50.0%, 98.9%)",
  "hsl(138, 62.5%, 96.9%)",
  "hsl(139, 55.2%, 94.5%)",
  "hsl(140, 48.7%, 91.0%)",
  "hsl(141, 43.7%, 86.0%)",
  "hsl(143, 40.3%, 79.0%)",
  "hsl(146, 38.5%, 69.0%)",
  "hsl(151, 40.2%, 54.1%)",
  "hsl(151, 55.0%, 41.5%)",
  "hsl(152, 57.5%, 37.6%)",
  "hsl(153, 67.0%, 28.5%)",
  "hsl(155, 40.0%, 14.0%)",
  "hsl(24, 70.0%, 99.0%)",
  "hsl(24, 83.3%, 97.6%)",
  "hsl(24, 100%, 95.3%)",
  "hsl(25, 100%, 92.2%)",
  "hsl(25, 100%, 88.2%)",
  "hsl(25, 100%, 82.8%)",
  "hsl(24, 100%, 75.3%)",
  "hsl(24, 94.5%, 64.3%)",
  "hsl(24, 94.0%, 50.0%)",
  "hsl(24, 100%, 46.5%)",
  "hsl(24, 100%, 37.0%)",
  "hsl(15, 60.0%, 17.0%)",
  "hsl(322, 100%, 99.4%)",
  "hsl(323, 100%, 98.4%)",
  "hsl(323, 86.3%, 96.5%)",
  "hsl(323, 78.7%, 94.2%)",
  "hsl(323, 72.2%, 91.1%)",
  "hsl(323, 66.3%, 86.6%)",
  "hsl(323, 62.0%, 80.1%)",
  "hsl(323, 60.3%, 72.4%)",
  "hsl(322, 65.0%, 54.5%)",
  "hsl(322, 63.9%, 50.7%)",
  "hsl(322, 75.0%, 46.0%)",
  "hsl(320, 70.0%, 13.5%)",
  "hsl(280, 65.0%, 99.4%)",
  "hsl(276, 100%, 99.0%)",
  "hsl(276, 83.1%, 97.0%)",
  "hsl(275, 76.4%, 94.7%)",
  "hsl(275, 70.8%, 91.8%)",
  "hsl(274, 65.4%, 87.8%)",
  "hsl(273, 61.0%, 81.7%)",
  "hsl(272, 60.0%, 73.5%)",
  "hsl(272, 51.0%, 54.0%)",
  "hsl(272, 46.8%, 50.3%)",
  "hsl(272, 50.0%, 45.8%)",
  "hsl(272, 66.0%, 16.0%)",
  "hsl(359, 100%, 99.4%)",
  "hsl(359, 100%, 98.6%)",
  "hsl(360, 100%, 96.8%)",
  "hsl(360, 97.9%, 94.8%)",
  "hsl(360, 90.2%, 91.9%)",
  "hsl(360, 81.7%, 87.8%)",
  "hsl(359, 74.2%, 81.7%)",
  "hsl(359, 69.5%, 74.3%)",
  "hsl(358, 75.0%, 59.0%)",
  "hsl(358, 69.4%, 55.2%)",
  "hsl(358, 65.0%, 48.7%)",
  "hsl(354, 50.0%, 14.6%)",
  "hsl(60, 54.0%, 98.5%)",
  "hsl(52, 100%, 95.5%)",
  "hsl(55, 100%, 90.9%)",
  "hsl(54, 100%, 86.6%)",
  "hsl(52, 97.9%, 82.0%)",
  "hsl(50, 89.4%, 76.1%)",
  "hsl(47, 80.4%, 68.0%)",
  "hsl(48, 100%, 46.1%)",
  "hsl(53, 92.0%, 50.0%)",
  "hsl(50, 100%, 48.5%)",
  "hsl(42, 100%, 29.0%)",
  "hsl(40, 55.0%, 13.5%)",
  "#f5f5f5",
  "#e8e8e8",
  "#d1d1d1",
  "#b0b0b0",
  "#878787",
  "#6e6e6e",
  "#5c5c5c",
  "#4f4f4f",
  "#454545",
  "#3d3d3d",
  "#212121",
  "#ffffff",
  "#efefef",
  "#dcdcdc",
  "#bdbdbd",
  "#989898",
  "#7c7c7c",
  "#656565",
  "#525252",
  "#464646",
  "#292929",
  "#f7f7f7",
  "#ededed",
  "#e3e3e3",
  "#c8c8c8",
  "#adadad",
  "#999999",
  "#888888",
  "#7b7b7b",
  "#676767",
  "#545454",
  "#363636",
  "rgba(0,0,0,0.085)",
  "rgba(0,0,0,0.04)",
  "#050505",
  "#151515",
  "#191919",
  "#232323",
  "#282828",
  "#323232",
  "#424242",
  "#494949",
  "#626262",
  "#a5a5a5",
  "hsl(212, 35.0%, 9.2%)",
  "hsl(216, 50.0%, 11.8%)",
  "hsl(214, 59.4%, 15.3%)",
  "hsl(214, 65.8%, 17.9%)",
  "hsl(213, 71.2%, 20.2%)",
  "hsl(212, 77.4%, 23.1%)",
  "hsl(211, 85.1%, 27.4%)",
  "hsl(211, 89.7%, 34.1%)",
  "hsl(209, 100%, 60.6%)",
  "hsl(210, 100%, 66.1%)",
  "hsl(206, 98.0%, 95.8%)",
  "hsl(0, 0%, 8.5%)",
  "hsl(0, 0%, 11.0%)",
  "hsl(0, 0%, 13.6%)",
  "hsl(0, 0%, 15.8%)",
  "hsl(0, 0%, 17.9%)",
  "hsl(0, 0%, 20.5%)",
  "hsl(0, 0%, 24.3%)",
  "hsl(0, 0%, 31.2%)",
  "hsl(0, 0%, 43.9%)",
  "hsl(0, 0%, 49.4%)",
  "hsl(0, 0%, 62.8%)",
  "hsl(146, 30.0%, 7.4%)",
  "hsl(155, 44.2%, 8.4%)",
  "hsl(155, 46.7%, 10.9%)",
  "hsl(154, 48.4%, 12.9%)",
  "hsl(154, 49.7%, 14.9%)",
  "hsl(154, 50.9%, 17.6%)",
  "hsl(153, 51.8%, 21.8%)",
  "hsl(151, 51.7%, 28.4%)",
  "hsl(151, 49.3%, 46.5%)",
  "hsl(151, 50.0%, 53.2%)",
  "hsl(137, 72.0%, 94.0%)",
  "hsl(30, 70.0%, 7.2%)",
  "hsl(28, 100%, 8.4%)",
  "hsl(26, 91.1%, 11.6%)",
  "hsl(25, 88.3%, 14.1%)",
  "hsl(24, 87.6%, 16.6%)",
  "hsl(24, 88.6%, 19.8%)",
  "hsl(24, 92.4%, 24.0%)",
  "hsl(25, 100%, 29.0%)",
  "hsl(24, 100%, 58.5%)",
  "hsl(24, 100%, 62.2%)",
  "hsl(24, 97.0%, 93.2%)",
  "hsl(318, 25.0%, 9.6%)",
  "hsl(319, 32.2%, 11.6%)",
  "hsl(319, 41.0%, 16.0%)",
  "hsl(320, 45.4%, 18.7%)",
  "hsl(320, 49.0%, 21.1%)",
  "hsl(321, 53.6%, 24.4%)",
  "hsl(321, 61.1%, 29.7%)",
  "hsl(322, 74.9%, 37.5%)",
  "hsl(323, 72.8%, 59.2%)",
  "hsl(325, 90.0%, 66.4%)",
  "hsl(322, 90.0%, 95.8%)",
  "hsl(284, 20.0%, 9.6%)",
  "hsl(283, 30.0%, 11.8%)",
  "hsl(281, 37.5%, 16.5%)",
  "hsl(280, 41.2%, 20.0%)",
  "hsl(279, 43.8%, 23.3%)",
  "hsl(277, 46.4%, 27.5%)",
  "hsl(275, 49.3%, 34.6%)",
  "hsl(272, 52.1%, 45.9%)",
  "hsl(273, 57.3%, 59.1%)",
  "hsl(275, 80.0%, 71.0%)",
  "hsl(279, 75.0%, 95.7%)",
  "hsl(353, 23.0%, 9.8%)",
  "hsl(357, 34.4%, 12.0%)",
  "hsl(356, 43.4%, 16.4%)",
  "hsl(356, 47.6%, 19.2%)",
  "hsl(356, 51.1%, 21.9%)",
  "hsl(356, 55.2%, 25.9%)",
  "hsl(357, 60.2%, 31.8%)",
  "hsl(358, 65.0%, 40.4%)",
  "hsl(358, 85.3%, 64.0%)",
  "hsl(358, 100%, 69.5%)",
  "hsl(351, 89.0%, 96.0%)",
  "hsl(45, 100%, 5.5%)",
  "hsl(46, 100%, 6.7%)",
  "hsl(45, 100%, 8.7%)",
  "hsl(45, 100%, 10.4%)",
  "hsl(47, 100%, 12.1%)",
  "hsl(49, 100%, 14.3%)",
  "hsl(49, 90.3%, 18.4%)",
  "hsl(50, 100%, 22.0%)",
  "hsl(54, 100%, 68.0%)",
  "hsl(48, 100%, 47.0%)",
  "hsl(53, 100%, 91.0%)",
  "#DBDBDB",
  "#141414",
  "#3B3B3B",
  "rgba(0,0,0,0.3)",
  "rgba(0,0,0,0.2)",
  "hsla(24, 70.0%, 99.0%, 0)",
  "hsla(15, 60.0%, 17.0%, 0)",
  "hsla(60, 54.0%, 98.5%, 0)",
  "hsla(40, 55.0%, 13.5%, 0)",
  "hsla(136, 50.0%, 98.9%, 0)",
  "hsla(155, 40.0%, 14.0%, 0)",
  "hsla(206, 100%, 99.2%, 0)",
  "hsla(211, 100%, 15.0%, 0)",
  "hsla(280, 65.0%, 99.4%, 0)",
  "hsla(272, 66.0%, 16.0%, 0)",
  "hsla(322, 100%, 99.4%, 0)",
  "hsla(320, 70.0%, 13.5%, 0)",
  "hsla(359, 100%, 99.4%, 0)",
  "hsla(354, 50.0%, 14.6%, 0)",
  "hsla(30, 70.0%, 7.2%, 0)",
  "hsla(24, 97.0%, 93.2%, 0)",
  "hsla(45, 100%, 5.5%, 0)",
  "hsla(53, 100%, 91.0%, 0)",
  "hsla(146, 30.0%, 7.4%, 0)",
  "hsla(137, 72.0%, 94.0%, 0)",
  "hsla(212, 35.0%, 9.2%, 0)",
  "hsla(206, 98.0%, 95.8%, 0)",
  "hsla(284, 20.0%, 9.6%, 0)",
  "hsla(279, 75.0%, 95.7%, 0)",
  "hsla(318, 25.0%, 9.6%, 0)",
  "hsla(322, 90.0%, 95.8%, 0)",
  "hsla(353, 23.0%, 9.8%, 0)",
  "hsla(351, 89.0%, 96.0%, 0)",
  "rgba(0,0,0,0.5)",
  "rgba(0,0,0,0.9)",
  "transparent",
];

const ks = [
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "color6",
  "color7",
  "color8",
  "color9",
  "color10",
  "color11",
  "color12",
  "background",
  "backgroundHover",
  "backgroundPress",
  "backgroundFocus",
  "backgroundStrong",
  "backgroundTransparent",
  "color",
  "colorHover",
  "colorPress",
  "colorFocus",
  "colorTransparent",
  "borderColor",
  "borderColorHover",
  "borderColorFocus",
  "borderColorPress",
  "placeholderColor",
  "primary1",
  "primary2",
  "primary3",
  "primary4",
  "primary5",
  "primary6",
  "primary7",
  "primary8",
  "primary9",
  "primary10",
  "primary11",
  "primary12",
  "blue1",
  "blue2",
  "blue3",
  "blue4",
  "blue5",
  "blue6",
  "blue7",
  "blue8",
  "blue9",
  "blue10",
  "blue11",
  "blue12",
  "gray1",
  "gray2",
  "gray3",
  "gray4",
  "gray5",
  "gray6",
  "gray7",
  "gray8",
  "gray9",
  "gray10",
  "gray11",
  "gray12",
  "green1",
  "green2",
  "green3",
  "green4",
  "green5",
  "green6",
  "green7",
  "green8",
  "green9",
  "green10",
  "green11",
  "green12",
  "orange1",
  "orange2",
  "orange3",
  "orange4",
  "orange5",
  "orange6",
  "orange7",
  "orange8",
  "orange9",
  "orange10",
  "orange11",
  "orange12",
  "pink1",
  "pink2",
  "pink3",
  "pink4",
  "pink5",
  "pink6",
  "pink7",
  "pink8",
  "pink9",
  "pink10",
  "pink11",
  "pink12",
  "purple1",
  "purple2",
  "purple3",
  "purple4",
  "purple5",
  "purple6",
  "purple7",
  "purple8",
  "purple9",
  "purple10",
  "purple11",
  "purple12",
  "red1",
  "red2",
  "red3",
  "red4",
  "red5",
  "red6",
  "red7",
  "red8",
  "red9",
  "red10",
  "red11",
  "red12",
  "yellow1",
  "yellow2",
  "yellow3",
  "yellow4",
  "yellow5",
  "yellow6",
  "yellow7",
  "yellow8",
  "yellow9",
  "yellow10",
  "yellow11",
  "yellow12",
  "text1",
  "text2",
  "text3",
  "text4",
  "text5",
  "text6",
  "text7",
  "text8",
  "text9",
  "text10",
  "text11",
  "background1",
  "background2",
  "background3",
  "background4",
  "background5",
  "background6",
  "background7",
  "background8",
  "background9",
  "background10",
  "background11",
  "grey1",
  "grey2",
  "grey3",
  "grey4",
  "grey5",
  "grey6",
  "grey7",
  "grey8",
  "grey9",
  "grey10",
  "grey11",
  "shadowColor",
  "shadowColorHover",
  "shadowColorPress",
  "shadowColorFocus",
];

const n1 = t([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10],
  [11, 11],
  [12, 1],
  [13, 2],
  [14, 3],
  [15, 4],
  [16, 0],
  [17, 12],
  [18, 11],
  [19, 10],
  [20, 11],
  [21, 10],
  [22, 13],
  [23, 4],
  [24, 5],
  [25, 3],
  [26, 4],
  [27, 8],
  [28, 14],
  [29, 15],
  [30, 16],
  [31, 17],
  [32, 18],
  [33, 19],
  [34, 20],
  [35, 21],
  [36, 22],
  [37, 23],
  [38, 24],
  [39, 25],
  [40, 14],
  [41, 15],
  [42, 16],
  [43, 17],
  [44, 18],
  [45, 19],
  [46, 20],
  [47, 21],
  [48, 22],
  [49, 23],
  [50, 24],
  [51, 25],
  [52, 26],
  [53, 27],
  [54, 28],
  [55, 29],
  [56, 30],
  [57, 31],
  [58, 32],
  [59, 33],
  [60, 8],
  [61, 34],
  [62, 35],
  [63, 11],
  [64, 36],
  [65, 37],
  [66, 38],
  [67, 39],
  [68, 40],
  [69, 41],
  [70, 42],
  [71, 43],
  [72, 44],
  [73, 45],
  [74, 46],
  [75, 47],
  [76, 48],
  [77, 49],
  [78, 50],
  [79, 51],
  [80, 52],
  [81, 53],
  [82, 54],
  [83, 55],
  [84, 56],
  [85, 57],
  [86, 58],
  [87, 59],
  [88, 60],
  [89, 61],
  [90, 62],
  [91, 63],
  [92, 64],
  [93, 65],
  [94, 66],
  [95, 67],
  [96, 68],
  [97, 69],
  [98, 70],
  [99, 71],
  [100, 72],
  [101, 73],
  [102, 74],
  [103, 75],
  [104, 76],
  [105, 77],
  [106, 78],
  [107, 79],
  [108, 80],
  [109, 81],
  [110, 82],
  [111, 83],
  [112, 84],
  [113, 85],
  [114, 86],
  [115, 87],
  [116, 88],
  [117, 89],
  [118, 90],
  [119, 91],
  [120, 92],
  [121, 93],
  [122, 94],
  [123, 95],
  [124, 96],
  [125, 97],
  [126, 98],
  [127, 99],
  [128, 100],
  [129, 101],
  [130, 102],
  [131, 103],
  [132, 104],
  [133, 105],
  [134, 106],
  [135, 107],
  [136, 108],
  [137, 109],
  [138, 110],
  [139, 111],
  [140, 112],
  [141, 113],
  [142, 114],
  [143, 115],
  [144, 116],
  [145, 117],
  [146, 118],
  [147, 119],
  [148, 120],
  [149, 121],
  [150, 122],
  [151, 123],
  [152, 124],
  [153, 125],
  [154, 126],
  [155, 127],
  [156, 117],
  [157, 128],
  [158, 129],
  [159, 130],
  [160, 131],
  [161, 132],
  [162, 133],
  [163, 134],
  [164, 135],
  [165, 136],
  [166, 137],
  [167, 138],
  [168, 139],
  [169, 140],
  [170, 140],
  [171, 141],
  [172, 141],
]) as unknown as Theme;

export const light = n1;
const n2 = t([
  [0, 142],
  [1, 143],
  [2, 144],
  [3, 145],
  [4, 146],
  [5, 147],
  [6, 148],
  [7, 149],
  [8, 138],
  [9, 150],
  [10, 151],
  [11, 0],
  [12, 143],
  [13, 144],
  [14, 145],
  [15, 146],
  [16, 142],
  [17, 13],
  [18, 0],
  [19, 151],
  [20, 0],
  [21, 151],
  [22, 12],
  [23, 146],
  [24, 147],
  [25, 145],
  [26, 146],
  [27, 138],
  [28, 152],
  [29, 153],
  [30, 154],
  [31, 155],
  [32, 156],
  [33, 157],
  [34, 158],
  [35, 159],
  [36, 22],
  [37, 160],
  [38, 161],
  [39, 162],
  [40, 152],
  [41, 153],
  [42, 154],
  [43, 155],
  [44, 156],
  [45, 157],
  [46, 158],
  [47, 159],
  [48, 22],
  [49, 160],
  [50, 161],
  [51, 162],
  [52, 163],
  [53, 164],
  [54, 165],
  [55, 166],
  [56, 167],
  [57, 168],
  [58, 169],
  [59, 170],
  [60, 171],
  [61, 172],
  [62, 173],
  [63, 29],
  [64, 174],
  [65, 175],
  [66, 176],
  [67, 177],
  [68, 178],
  [69, 179],
  [70, 180],
  [71, 181],
  [72, 44],
  [73, 182],
  [74, 183],
  [75, 184],
  [76, 185],
  [77, 186],
  [78, 187],
  [79, 188],
  [80, 189],
  [81, 190],
  [82, 191],
  [83, 192],
  [84, 56],
  [85, 193],
  [86, 194],
  [87, 195],
  [88, 196],
  [89, 197],
  [90, 198],
  [91, 199],
  [92, 200],
  [93, 201],
  [94, 202],
  [95, 203],
  [96, 68],
  [97, 204],
  [98, 205],
  [99, 206],
  [100, 207],
  [101, 208],
  [102, 209],
  [103, 210],
  [104, 211],
  [105, 212],
  [106, 213],
  [107, 214],
  [108, 80],
  [109, 215],
  [110, 216],
  [111, 217],
  [112, 218],
  [113, 219],
  [114, 220],
  [115, 221],
  [116, 222],
  [117, 223],
  [118, 224],
  [119, 225],
  [120, 92],
  [121, 226],
  [122, 227],
  [123, 228],
  [124, 229],
  [125, 230],
  [126, 231],
  [127, 232],
  [128, 233],
  [129, 234],
  [130, 235],
  [131, 236],
  [132, 104],
  [133, 237],
  [134, 238],
  [135, 239],
  [136, 118],
  [137, 117],
  [138, 116],
  [139, 115],
  [140, 114],
  [141, 113],
  [142, 112],
  [143, 111],
  [144, 110],
  [145, 109],
  [146, 240],
  [147, 241],
  [148, 117],
  [149, 127],
  [150, 126],
  [151, 125],
  [152, 124],
  [153, 123],
  [154, 122],
  [155, 121],
  [156, 120],
  [157, 119],
  [158, 139],
  [159, 138],
  [160, 242],
  [161, 136],
  [162, 135],
  [163, 134],
  [164, 133],
  [165, 132],
  [166, 131],
  [167, 130],
  [168, 129],
  [169, 243],
  [170, 243],
  [171, 244],
  [172, 244],
]) as unknown as Theme;

export const dark = n2;
const n3 = t([
  [0, 48],
  [1, 49],
  [2, 50],
  [3, 51],
  [4, 52],
  [5, 53],
  [6, 55],
  [7, 56],
  [8, 57],
  [9, 58],
  [10, 59],
  [11, 11],
  [12, 49],
  [13, 50],
  [14, 51],
  [15, 52],
  [16, 48],
  [17, 245],
  [18, 11],
  [19, 59],
  [20, 11],
  [21, 59],
  [22, 246],
  [23, 51],
  [24, 52],
  [25, 51],
  [26, 51],
  [27, 57],
]) as unknown as Theme;

export const light_orange = n3;
const n4 = t([
  [0, 96],
  [1, 97],
  [2, 98],
  [3, 99],
  [4, 100],
  [5, 101],
  [6, 103],
  [7, 104],
  [8, 105],
  [9, 106],
  [10, 107],
  [11, 11],
  [12, 97],
  [13, 98],
  [14, 99],
  [15, 100],
  [16, 96],
  [17, 247],
  [18, 11],
  [19, 107],
  [20, 11],
  [21, 107],
  [22, 248],
  [23, 99],
  [24, 100],
  [25, 99],
  [26, 99],
  [27, 105],
]) as unknown as Theme;

export const light_yellow = n4;
const n5 = t([
  [0, 36],
  [1, 37],
  [2, 38],
  [3, 39],
  [4, 40],
  [5, 41],
  [6, 43],
  [7, 44],
  [8, 45],
  [9, 46],
  [10, 47],
  [11, 11],
  [12, 37],
  [13, 38],
  [14, 39],
  [15, 40],
  [16, 36],
  [17, 249],
  [18, 11],
  [19, 47],
  [20, 11],
  [21, 47],
  [22, 250],
  [23, 39],
  [24, 40],
  [25, 39],
  [26, 39],
  [27, 45],
]) as unknown as Theme;

export const light_green = n5;
const n6 = t([
  [0, 14],
  [1, 15],
  [2, 16],
  [3, 17],
  [4, 18],
  [5, 19],
  [6, 21],
  [7, 22],
  [8, 23],
  [9, 24],
  [10, 25],
  [11, 11],
  [12, 15],
  [13, 16],
  [14, 17],
  [15, 18],
  [16, 14],
  [17, 251],
  [18, 11],
  [19, 25],
  [20, 11],
  [21, 25],
  [22, 252],
  [23, 17],
  [24, 18],
  [25, 17],
  [26, 17],
  [27, 23],
]) as unknown as Theme;

export const light_blue = n6;
const n7 = t([
  [0, 72],
  [1, 73],
  [2, 74],
  [3, 75],
  [4, 76],
  [5, 77],
  [6, 79],
  [7, 80],
  [8, 81],
  [9, 82],
  [10, 83],
  [11, 11],
  [12, 73],
  [13, 74],
  [14, 75],
  [15, 76],
  [16, 72],
  [17, 253],
  [18, 11],
  [19, 83],
  [20, 11],
  [21, 83],
  [22, 254],
  [23, 75],
  [24, 76],
  [25, 75],
  [26, 75],
  [27, 81],
]) as unknown as Theme;

export const light_purple = n7;
const n8 = t([
  [0, 60],
  [1, 61],
  [2, 62],
  [3, 63],
  [4, 64],
  [5, 65],
  [6, 67],
  [7, 68],
  [8, 69],
  [9, 70],
  [10, 71],
  [11, 11],
  [12, 61],
  [13, 62],
  [14, 63],
  [15, 64],
  [16, 60],
  [17, 255],
  [18, 11],
  [19, 71],
  [20, 11],
  [21, 71],
  [22, 256],
  [23, 63],
  [24, 64],
  [25, 63],
  [26, 63],
  [27, 69],
]) as unknown as Theme;

export const light_pink = n8;
const n9 = t([
  [0, 84],
  [1, 85],
  [2, 86],
  [3, 87],
  [4, 88],
  [5, 89],
  [6, 91],
  [7, 92],
  [8, 93],
  [9, 94],
  [10, 95],
  [11, 11],
  [12, 85],
  [13, 86],
  [14, 87],
  [15, 88],
  [16, 84],
  [17, 257],
  [18, 11],
  [19, 95],
  [20, 11],
  [21, 95],
  [22, 258],
  [23, 87],
  [24, 88],
  [25, 87],
  [26, 87],
  [27, 93],
]) as unknown as Theme;

export const light_red = n9;
const n10 = t([
  [0, 185],
  [1, 186],
  [2, 187],
  [3, 188],
  [4, 189],
  [5, 190],
  [6, 192],
  [7, 56],
  [8, 193],
  [9, 194],
  [10, 195],
  [11, 0],
  [12, 186],
  [13, 187],
  [14, 188],
  [15, 189],
  [16, 185],
  [17, 259],
  [18, 0],
  [19, 195],
  [20, 0],
  [21, 195],
  [22, 260],
  [23, 189],
  [24, 190],
  [25, 188],
  [26, 189],
  [27, 193],
]) as unknown as Theme;

export const dark_orange = n10;
const n11 = t([
  [0, 229],
  [1, 230],
  [2, 231],
  [3, 232],
  [4, 233],
  [5, 234],
  [6, 236],
  [7, 104],
  [8, 237],
  [9, 238],
  [10, 239],
  [11, 0],
  [12, 230],
  [13, 231],
  [14, 232],
  [15, 233],
  [16, 229],
  [17, 261],
  [18, 0],
  [19, 239],
  [20, 0],
  [21, 239],
  [22, 262],
  [23, 233],
  [24, 234],
  [25, 232],
  [26, 233],
  [27, 237],
]) as unknown as Theme;

export const dark_yellow = n11;
const n12 = t([
  [0, 174],
  [1, 175],
  [2, 176],
  [3, 177],
  [4, 178],
  [5, 179],
  [6, 181],
  [7, 44],
  [8, 182],
  [9, 183],
  [10, 184],
  [11, 0],
  [12, 175],
  [13, 176],
  [14, 177],
  [15, 178],
  [16, 174],
  [17, 263],
  [18, 0],
  [19, 184],
  [20, 0],
  [21, 184],
  [22, 264],
  [23, 178],
  [24, 179],
  [25, 177],
  [26, 178],
  [27, 182],
]) as unknown as Theme;

export const dark_green = n12;
const n13 = t([
  [0, 152],
  [1, 153],
  [2, 154],
  [3, 155],
  [4, 156],
  [5, 157],
  [6, 159],
  [7, 22],
  [8, 160],
  [9, 161],
  [10, 162],
  [11, 0],
  [12, 153],
  [13, 154],
  [14, 155],
  [15, 156],
  [16, 152],
  [17, 265],
  [18, 0],
  [19, 162],
  [20, 0],
  [21, 162],
  [22, 266],
  [23, 156],
  [24, 157],
  [25, 155],
  [26, 156],
  [27, 160],
]) as unknown as Theme;

export const dark_blue = n13;
const n14 = t([
  [0, 207],
  [1, 208],
  [2, 209],
  [3, 210],
  [4, 211],
  [5, 212],
  [6, 214],
  [7, 80],
  [8, 215],
  [9, 216],
  [10, 217],
  [11, 0],
  [12, 208],
  [13, 209],
  [14, 210],
  [15, 211],
  [16, 207],
  [17, 267],
  [18, 0],
  [19, 217],
  [20, 0],
  [21, 217],
  [22, 268],
  [23, 211],
  [24, 212],
  [25, 210],
  [26, 211],
  [27, 215],
]) as unknown as Theme;

export const dark_purple = n14;
const n15 = t([
  [0, 196],
  [1, 197],
  [2, 198],
  [3, 199],
  [4, 200],
  [5, 201],
  [6, 203],
  [7, 68],
  [8, 204],
  [9, 205],
  [10, 206],
  [11, 0],
  [12, 197],
  [13, 198],
  [14, 199],
  [15, 200],
  [16, 196],
  [17, 269],
  [18, 0],
  [19, 206],
  [20, 0],
  [21, 206],
  [22, 270],
  [23, 200],
  [24, 201],
  [25, 199],
  [26, 200],
  [27, 204],
]) as unknown as Theme;

export const dark_pink = n15;
const n16 = t([
  [0, 218],
  [1, 219],
  [2, 220],
  [3, 221],
  [4, 222],
  [5, 223],
  [6, 225],
  [7, 92],
  [8, 226],
  [9, 227],
  [10, 228],
  [11, 0],
  [12, 219],
  [13, 220],
  [14, 221],
  [15, 222],
  [16, 218],
  [17, 271],
  [18, 0],
  [19, 228],
  [20, 0],
  [21, 228],
  [22, 272],
  [23, 222],
  [24, 223],
  [25, 221],
  [26, 222],
  [27, 226],
]) as unknown as Theme;

export const dark_red = n16;
const n17 = t([[12, 273]]) as unknown as Theme;

export const light_SheetOverlay = n17;
export const light_DialogOverlay = n17;
export const light_ModalOverlay = n17;
export const light_orange_SheetOverlay = n17;
export const light_orange_DialogOverlay = n17;
export const light_orange_ModalOverlay = n17;
export const light_yellow_SheetOverlay = n17;
export const light_yellow_DialogOverlay = n17;
export const light_yellow_ModalOverlay = n17;
export const light_green_SheetOverlay = n17;
export const light_green_DialogOverlay = n17;
export const light_green_ModalOverlay = n17;
export const light_blue_SheetOverlay = n17;
export const light_blue_DialogOverlay = n17;
export const light_blue_ModalOverlay = n17;
export const light_purple_SheetOverlay = n17;
export const light_purple_DialogOverlay = n17;
export const light_purple_ModalOverlay = n17;
export const light_pink_SheetOverlay = n17;
export const light_pink_DialogOverlay = n17;
export const light_pink_ModalOverlay = n17;
export const light_red_SheetOverlay = n17;
export const light_red_DialogOverlay = n17;
export const light_red_ModalOverlay = n17;
export const light_alt1_SheetOverlay = n17;
export const light_alt1_DialogOverlay = n17;
export const light_alt1_ModalOverlay = n17;
export const light_alt2_SheetOverlay = n17;
export const light_alt2_DialogOverlay = n17;
export const light_alt2_ModalOverlay = n17;
export const light_active_SheetOverlay = n17;
export const light_active_DialogOverlay = n17;
export const light_active_ModalOverlay = n17;
export const light_orange_alt1_SheetOverlay = n17;
export const light_orange_alt1_DialogOverlay = n17;
export const light_orange_alt1_ModalOverlay = n17;
export const light_orange_alt2_SheetOverlay = n17;
export const light_orange_alt2_DialogOverlay = n17;
export const light_orange_alt2_ModalOverlay = n17;
export const light_orange_active_SheetOverlay = n17;
export const light_orange_active_DialogOverlay = n17;
export const light_orange_active_ModalOverlay = n17;
export const light_yellow_alt1_SheetOverlay = n17;
export const light_yellow_alt1_DialogOverlay = n17;
export const light_yellow_alt1_ModalOverlay = n17;
export const light_yellow_alt2_SheetOverlay = n17;
export const light_yellow_alt2_DialogOverlay = n17;
export const light_yellow_alt2_ModalOverlay = n17;
export const light_yellow_active_SheetOverlay = n17;
export const light_yellow_active_DialogOverlay = n17;
export const light_yellow_active_ModalOverlay = n17;
export const light_green_alt1_SheetOverlay = n17;
export const light_green_alt1_DialogOverlay = n17;
export const light_green_alt1_ModalOverlay = n17;
export const light_green_alt2_SheetOverlay = n17;
export const light_green_alt2_DialogOverlay = n17;
export const light_green_alt2_ModalOverlay = n17;
export const light_green_active_SheetOverlay = n17;
export const light_green_active_DialogOverlay = n17;
export const light_green_active_ModalOverlay = n17;
export const light_blue_alt1_SheetOverlay = n17;
export const light_blue_alt1_DialogOverlay = n17;
export const light_blue_alt1_ModalOverlay = n17;
export const light_blue_alt2_SheetOverlay = n17;
export const light_blue_alt2_DialogOverlay = n17;
export const light_blue_alt2_ModalOverlay = n17;
export const light_blue_active_SheetOverlay = n17;
export const light_blue_active_DialogOverlay = n17;
export const light_blue_active_ModalOverlay = n17;
export const light_purple_alt1_SheetOverlay = n17;
export const light_purple_alt1_DialogOverlay = n17;
export const light_purple_alt1_ModalOverlay = n17;
export const light_purple_alt2_SheetOverlay = n17;
export const light_purple_alt2_DialogOverlay = n17;
export const light_purple_alt2_ModalOverlay = n17;
export const light_purple_active_SheetOverlay = n17;
export const light_purple_active_DialogOverlay = n17;
export const light_purple_active_ModalOverlay = n17;
export const light_pink_alt1_SheetOverlay = n17;
export const light_pink_alt1_DialogOverlay = n17;
export const light_pink_alt1_ModalOverlay = n17;
export const light_pink_alt2_SheetOverlay = n17;
export const light_pink_alt2_DialogOverlay = n17;
export const light_pink_alt2_ModalOverlay = n17;
export const light_pink_active_SheetOverlay = n17;
export const light_pink_active_DialogOverlay = n17;
export const light_pink_active_ModalOverlay = n17;
export const light_red_alt1_SheetOverlay = n17;
export const light_red_alt1_DialogOverlay = n17;
export const light_red_alt1_ModalOverlay = n17;
export const light_red_alt2_SheetOverlay = n17;
export const light_red_alt2_DialogOverlay = n17;
export const light_red_alt2_ModalOverlay = n17;
export const light_red_active_SheetOverlay = n17;
export const light_red_active_DialogOverlay = n17;
export const light_red_active_ModalOverlay = n17;
const n18 = t([[12, 274]]) as unknown as Theme;

export const dark_SheetOverlay = n18;
export const dark_DialogOverlay = n18;
export const dark_ModalOverlay = n18;
export const dark_orange_SheetOverlay = n18;
export const dark_orange_DialogOverlay = n18;
export const dark_orange_ModalOverlay = n18;
export const dark_yellow_SheetOverlay = n18;
export const dark_yellow_DialogOverlay = n18;
export const dark_yellow_ModalOverlay = n18;
export const dark_green_SheetOverlay = n18;
export const dark_green_DialogOverlay = n18;
export const dark_green_ModalOverlay = n18;
export const dark_blue_SheetOverlay = n18;
export const dark_blue_DialogOverlay = n18;
export const dark_blue_ModalOverlay = n18;
export const dark_purple_SheetOverlay = n18;
export const dark_purple_DialogOverlay = n18;
export const dark_purple_ModalOverlay = n18;
export const dark_pink_SheetOverlay = n18;
export const dark_pink_DialogOverlay = n18;
export const dark_pink_ModalOverlay = n18;
export const dark_red_SheetOverlay = n18;
export const dark_red_DialogOverlay = n18;
export const dark_red_ModalOverlay = n18;
export const dark_alt1_SheetOverlay = n18;
export const dark_alt1_DialogOverlay = n18;
export const dark_alt1_ModalOverlay = n18;
export const dark_alt2_SheetOverlay = n18;
export const dark_alt2_DialogOverlay = n18;
export const dark_alt2_ModalOverlay = n18;
export const dark_active_SheetOverlay = n18;
export const dark_active_DialogOverlay = n18;
export const dark_active_ModalOverlay = n18;
export const dark_orange_alt1_SheetOverlay = n18;
export const dark_orange_alt1_DialogOverlay = n18;
export const dark_orange_alt1_ModalOverlay = n18;
export const dark_orange_alt2_SheetOverlay = n18;
export const dark_orange_alt2_DialogOverlay = n18;
export const dark_orange_alt2_ModalOverlay = n18;
export const dark_orange_active_SheetOverlay = n18;
export const dark_orange_active_DialogOverlay = n18;
export const dark_orange_active_ModalOverlay = n18;
export const dark_yellow_alt1_SheetOverlay = n18;
export const dark_yellow_alt1_DialogOverlay = n18;
export const dark_yellow_alt1_ModalOverlay = n18;
export const dark_yellow_alt2_SheetOverlay = n18;
export const dark_yellow_alt2_DialogOverlay = n18;
export const dark_yellow_alt2_ModalOverlay = n18;
export const dark_yellow_active_SheetOverlay = n18;
export const dark_yellow_active_DialogOverlay = n18;
export const dark_yellow_active_ModalOverlay = n18;
export const dark_green_alt1_SheetOverlay = n18;
export const dark_green_alt1_DialogOverlay = n18;
export const dark_green_alt1_ModalOverlay = n18;
export const dark_green_alt2_SheetOverlay = n18;
export const dark_green_alt2_DialogOverlay = n18;
export const dark_green_alt2_ModalOverlay = n18;
export const dark_green_active_SheetOverlay = n18;
export const dark_green_active_DialogOverlay = n18;
export const dark_green_active_ModalOverlay = n18;
export const dark_blue_alt1_SheetOverlay = n18;
export const dark_blue_alt1_DialogOverlay = n18;
export const dark_blue_alt1_ModalOverlay = n18;
export const dark_blue_alt2_SheetOverlay = n18;
export const dark_blue_alt2_DialogOverlay = n18;
export const dark_blue_alt2_ModalOverlay = n18;
export const dark_blue_active_SheetOverlay = n18;
export const dark_blue_active_DialogOverlay = n18;
export const dark_blue_active_ModalOverlay = n18;
export const dark_purple_alt1_SheetOverlay = n18;
export const dark_purple_alt1_DialogOverlay = n18;
export const dark_purple_alt1_ModalOverlay = n18;
export const dark_purple_alt2_SheetOverlay = n18;
export const dark_purple_alt2_DialogOverlay = n18;
export const dark_purple_alt2_ModalOverlay = n18;
export const dark_purple_active_SheetOverlay = n18;
export const dark_purple_active_DialogOverlay = n18;
export const dark_purple_active_ModalOverlay = n18;
export const dark_pink_alt1_SheetOverlay = n18;
export const dark_pink_alt1_DialogOverlay = n18;
export const dark_pink_alt1_ModalOverlay = n18;
export const dark_pink_alt2_SheetOverlay = n18;
export const dark_pink_alt2_DialogOverlay = n18;
export const dark_pink_alt2_ModalOverlay = n18;
export const dark_pink_active_SheetOverlay = n18;
export const dark_pink_active_DialogOverlay = n18;
export const dark_pink_active_ModalOverlay = n18;
export const dark_red_alt1_SheetOverlay = n18;
export const dark_red_alt1_DialogOverlay = n18;
export const dark_red_alt1_ModalOverlay = n18;
export const dark_red_alt2_SheetOverlay = n18;
export const dark_red_alt2_DialogOverlay = n18;
export const dark_red_alt2_ModalOverlay = n18;
export const dark_red_active_SheetOverlay = n18;
export const dark_red_active_DialogOverlay = n18;
export const dark_red_active_ModalOverlay = n18;
const n19 = t([
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 11],
  [12, 2],
  [13, 3],
  [14, 4],
  [15, 5],
  [16, 1],
  [17, 0],
  [18, 10],
  [19, 9],
  [20, 10],
  [21, 9],
  [22, 11],
  [23, 5],
  [24, 6],
  [25, 4],
  [26, 5],
  [27, 7],
]) as unknown as Theme;

export const light_alt1 = n19;
const n20 = t([
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [6, 8],
  [7, 9],
  [8, 10],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 3],
  [13, 4],
  [14, 5],
  [15, 6],
  [16, 2],
  [17, 1],
  [18, 9],
  [19, 8],
  [20, 9],
  [21, 8],
  [22, 10],
  [23, 6],
  [24, 7],
  [25, 5],
  [26, 6],
  [27, 6],
]) as unknown as Theme;

export const light_alt2 = n20;
const n21 = t([
  [0, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [4, 7],
  [5, 8],
  [6, 9],
  [7, 10],
  [8, 11],
  [9, 13],
  [10, 13],
  [11, 13],
  [12, 4],
  [13, 5],
  [14, 6],
  [15, 7],
  [16, 3],
  [17, 2],
  [19, 7],
  [20, 8],
  [21, 7],
  [22, 9],
  [23, 7],
  [24, 8],
  [25, 6],
  [26, 7],
  [27, 5],
]) as unknown as Theme;

export const light_active = n21;
const n22 = t([
  [0, 143],
  [1, 144],
  [2, 145],
  [3, 146],
  [4, 147],
  [5, 148],
  [6, 149],
  [7, 138],
  [8, 150],
  [9, 151],
  [10, 0],
  [11, 0],
  [12, 144],
  [13, 145],
  [14, 146],
  [15, 147],
  [16, 143],
  [17, 142],
  [18, 151],
  [19, 150],
  [20, 151],
  [21, 150],
  [22, 0],
  [23, 147],
  [24, 148],
  [25, 146],
  [26, 147],
  [27, 149],
]) as unknown as Theme;

export const dark_alt1 = n22;
const n23 = t([
  [0, 144],
  [1, 145],
  [2, 146],
  [3, 147],
  [4, 148],
  [5, 149],
  [6, 138],
  [7, 150],
  [8, 151],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 145],
  [13, 146],
  [14, 147],
  [15, 148],
  [16, 144],
  [17, 143],
  [18, 150],
  [19, 138],
  [20, 150],
  [21, 138],
  [22, 151],
  [23, 148],
  [24, 149],
  [25, 147],
  [26, 148],
  [27, 148],
]) as unknown as Theme;

export const dark_alt2 = n23;
const n24 = t([
  [0, 145],
  [1, 146],
  [2, 147],
  [3, 148],
  [4, 149],
  [5, 138],
  [6, 150],
  [7, 151],
  [8, 0],
  [9, 12],
  [10, 12],
  [11, 12],
  [12, 146],
  [13, 147],
  [14, 148],
  [15, 149],
  [16, 145],
  [17, 144],
  [19, 149],
  [20, 138],
  [21, 149],
  [22, 150],
  [23, 149],
  [24, 138],
  [25, 148],
  [26, 149],
  [27, 147],
]) as unknown as Theme;

export const dark_active = n24;
const n25 = t([
  [0, 49],
  [1, 50],
  [2, 51],
  [3, 52],
  [4, 53],
  [5, 55],
  [6, 56],
  [7, 57],
  [8, 58],
  [9, 59],
  [10, 11],
  [11, 11],
  [12, 50],
  [13, 51],
  [14, 52],
  [15, 53],
  [16, 49],
  [17, 48],
  [18, 59],
  [19, 58],
  [20, 59],
  [21, 58],
  [22, 11],
  [23, 52],
  [24, 53],
  [25, 52],
  [26, 52],
  [27, 56],
]) as unknown as Theme;

export const light_orange_alt1 = n25;
const n26 = t([
  [0, 50],
  [1, 51],
  [2, 52],
  [3, 53],
  [4, 55],
  [5, 56],
  [6, 57],
  [7, 58],
  [8, 59],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 51],
  [13, 52],
  [14, 53],
  [15, 55],
  [16, 50],
  [17, 49],
  [18, 58],
  [19, 57],
  [20, 58],
  [21, 57],
  [22, 59],
  [23, 53],
  [24, 55],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_alt2 = n26;
const n27 = t([
  [0, 51],
  [1, 52],
  [2, 53],
  [3, 55],
  [4, 56],
  [5, 57],
  [6, 58],
  [7, 59],
  [8, 11],
  [9, 246],
  [10, 246],
  [11, 246],
  [12, 52],
  [13, 53],
  [14, 55],
  [15, 56],
  [16, 51],
  [17, 50],
  [19, 56],
  [20, 57],
  [21, 56],
  [22, 58],
  [23, 55],
  [24, 56],
  [25, 55],
  [26, 55],
  [27, 53],
]) as unknown as Theme;

export const light_orange_active = n27;
const n28 = t([
  [0, 97],
  [1, 98],
  [2, 99],
  [3, 100],
  [4, 101],
  [5, 103],
  [6, 104],
  [7, 105],
  [8, 106],
  [9, 107],
  [10, 11],
  [11, 11],
  [12, 98],
  [13, 99],
  [14, 100],
  [15, 101],
  [16, 97],
  [17, 96],
  [18, 107],
  [19, 106],
  [20, 107],
  [21, 106],
  [22, 11],
  [23, 100],
  [24, 101],
  [25, 100],
  [26, 100],
  [27, 104],
]) as unknown as Theme;

export const light_yellow_alt1 = n28;
const n29 = t([
  [0, 98],
  [1, 99],
  [2, 100],
  [3, 101],
  [4, 103],
  [5, 104],
  [6, 105],
  [7, 106],
  [8, 107],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 99],
  [13, 100],
  [14, 101],
  [15, 103],
  [16, 98],
  [17, 97],
  [18, 106],
  [19, 105],
  [20, 106],
  [21, 105],
  [22, 107],
  [23, 101],
  [24, 103],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_alt2 = n29;
const n30 = t([
  [0, 99],
  [1, 100],
  [2, 101],
  [3, 103],
  [4, 104],
  [5, 105],
  [6, 106],
  [7, 107],
  [8, 11],
  [9, 248],
  [10, 248],
  [11, 248],
  [12, 100],
  [13, 101],
  [14, 103],
  [15, 104],
  [16, 99],
  [17, 98],
  [19, 104],
  [20, 105],
  [21, 104],
  [22, 106],
  [23, 103],
  [24, 104],
  [25, 103],
  [26, 103],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_active = n30;
const n31 = t([
  [0, 37],
  [1, 38],
  [2, 39],
  [3, 40],
  [4, 41],
  [5, 43],
  [6, 44],
  [7, 45],
  [8, 46],
  [9, 47],
  [10, 11],
  [11, 11],
  [12, 38],
  [13, 39],
  [14, 40],
  [15, 41],
  [16, 37],
  [17, 36],
  [18, 47],
  [19, 46],
  [20, 47],
  [21, 46],
  [22, 11],
  [23, 40],
  [24, 41],
  [25, 40],
  [26, 40],
  [27, 44],
]) as unknown as Theme;

export const light_green_alt1 = n31;
const n32 = t([
  [0, 38],
  [1, 39],
  [2, 40],
  [3, 41],
  [4, 43],
  [5, 44],
  [6, 45],
  [7, 46],
  [8, 47],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 39],
  [13, 40],
  [14, 41],
  [15, 43],
  [16, 38],
  [17, 37],
  [18, 46],
  [19, 45],
  [20, 46],
  [21, 45],
  [22, 47],
  [23, 41],
  [24, 43],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_alt2 = n32;
const n33 = t([
  [0, 39],
  [1, 40],
  [2, 41],
  [3, 43],
  [4, 44],
  [5, 45],
  [6, 46],
  [7, 47],
  [8, 11],
  [9, 250],
  [10, 250],
  [11, 250],
  [12, 40],
  [13, 41],
  [14, 43],
  [15, 44],
  [16, 39],
  [17, 38],
  [19, 44],
  [20, 45],
  [21, 44],
  [22, 46],
  [23, 43],
  [24, 44],
  [25, 43],
  [26, 43],
  [27, 41],
]) as unknown as Theme;

export const light_green_active = n33;
const n34 = t([
  [0, 15],
  [1, 16],
  [2, 17],
  [3, 18],
  [4, 19],
  [5, 21],
  [6, 22],
  [7, 23],
  [8, 24],
  [9, 25],
  [10, 11],
  [11, 11],
  [12, 16],
  [13, 17],
  [14, 18],
  [15, 19],
  [16, 15],
  [17, 14],
  [18, 25],
  [19, 24],
  [20, 25],
  [21, 24],
  [22, 11],
  [23, 18],
  [24, 19],
  [25, 18],
  [26, 18],
  [27, 22],
]) as unknown as Theme;

export const light_blue_alt1 = n34;
const n35 = t([
  [0, 16],
  [1, 17],
  [2, 18],
  [3, 19],
  [4, 21],
  [5, 22],
  [6, 23],
  [7, 24],
  [8, 25],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 17],
  [13, 18],
  [14, 19],
  [15, 21],
  [16, 16],
  [17, 15],
  [18, 24],
  [19, 23],
  [20, 24],
  [21, 23],
  [22, 25],
  [23, 19],
  [24, 21],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_alt2 = n35;
const n36 = t([
  [0, 17],
  [1, 18],
  [2, 19],
  [3, 21],
  [4, 22],
  [5, 23],
  [6, 24],
  [7, 25],
  [8, 11],
  [9, 252],
  [10, 252],
  [11, 252],
  [12, 18],
  [13, 19],
  [14, 21],
  [15, 22],
  [16, 17],
  [17, 16],
  [19, 22],
  [20, 23],
  [21, 22],
  [22, 24],
  [23, 21],
  [24, 22],
  [25, 21],
  [26, 21],
  [27, 19],
]) as unknown as Theme;

export const light_blue_active = n36;
const n37 = t([
  [0, 73],
  [1, 74],
  [2, 75],
  [3, 76],
  [4, 77],
  [5, 79],
  [6, 80],
  [7, 81],
  [8, 82],
  [9, 83],
  [10, 11],
  [11, 11],
  [12, 74],
  [13, 75],
  [14, 76],
  [15, 77],
  [16, 73],
  [17, 72],
  [18, 83],
  [19, 82],
  [20, 83],
  [21, 82],
  [22, 11],
  [23, 76],
  [24, 77],
  [25, 76],
  [26, 76],
  [27, 80],
]) as unknown as Theme;

export const light_purple_alt1 = n37;
const n38 = t([
  [0, 74],
  [1, 75],
  [2, 76],
  [3, 77],
  [4, 79],
  [5, 80],
  [6, 81],
  [7, 82],
  [8, 83],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 75],
  [13, 76],
  [14, 77],
  [15, 79],
  [16, 74],
  [17, 73],
  [18, 82],
  [19, 81],
  [20, 82],
  [21, 81],
  [22, 83],
  [23, 77],
  [24, 79],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_alt2 = n38;
const n39 = t([
  [0, 75],
  [1, 76],
  [2, 77],
  [3, 79],
  [4, 80],
  [5, 81],
  [6, 82],
  [7, 83],
  [8, 11],
  [9, 254],
  [10, 254],
  [11, 254],
  [12, 76],
  [13, 77],
  [14, 79],
  [15, 80],
  [16, 75],
  [17, 74],
  [19, 80],
  [20, 81],
  [21, 80],
  [22, 82],
  [23, 79],
  [24, 80],
  [25, 79],
  [26, 79],
  [27, 77],
]) as unknown as Theme;

export const light_purple_active = n39;
const n40 = t([
  [0, 61],
  [1, 62],
  [2, 63],
  [3, 64],
  [4, 65],
  [5, 67],
  [6, 68],
  [7, 69],
  [8, 70],
  [9, 71],
  [10, 11],
  [11, 11],
  [12, 62],
  [13, 63],
  [14, 64],
  [15, 65],
  [16, 61],
  [17, 60],
  [18, 71],
  [19, 70],
  [20, 71],
  [21, 70],
  [22, 11],
  [23, 64],
  [24, 65],
  [25, 64],
  [26, 64],
  [27, 68],
]) as unknown as Theme;

export const light_pink_alt1 = n40;
const n41 = t([
  [0, 62],
  [1, 63],
  [2, 64],
  [3, 65],
  [4, 67],
  [5, 68],
  [6, 69],
  [7, 70],
  [8, 71],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 63],
  [13, 64],
  [14, 65],
  [15, 67],
  [16, 62],
  [17, 61],
  [18, 70],
  [19, 69],
  [20, 70],
  [21, 69],
  [22, 71],
  [23, 65],
  [24, 67],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_alt2 = n41;
const n42 = t([
  [0, 63],
  [1, 64],
  [2, 65],
  [3, 67],
  [4, 68],
  [5, 69],
  [6, 70],
  [7, 71],
  [8, 11],
  [9, 256],
  [10, 256],
  [11, 256],
  [12, 64],
  [13, 65],
  [14, 67],
  [15, 68],
  [16, 63],
  [17, 62],
  [19, 68],
  [20, 69],
  [21, 68],
  [22, 70],
  [23, 67],
  [24, 68],
  [25, 67],
  [26, 67],
  [27, 65],
]) as unknown as Theme;

export const light_pink_active = n42;
const n43 = t([
  [0, 85],
  [1, 86],
  [2, 87],
  [3, 88],
  [4, 89],
  [5, 91],
  [6, 92],
  [7, 93],
  [8, 94],
  [9, 95],
  [10, 11],
  [11, 11],
  [12, 86],
  [13, 87],
  [14, 88],
  [15, 89],
  [16, 85],
  [17, 84],
  [18, 95],
  [19, 94],
  [20, 95],
  [21, 94],
  [22, 11],
  [23, 88],
  [24, 89],
  [25, 88],
  [26, 88],
  [27, 92],
]) as unknown as Theme;

export const light_red_alt1 = n43;
const n44 = t([
  [0, 86],
  [1, 87],
  [2, 88],
  [3, 89],
  [4, 91],
  [5, 92],
  [6, 93],
  [7, 94],
  [8, 95],
  [9, 11],
  [10, 11],
  [11, 11],
  [12, 87],
  [13, 88],
  [14, 89],
  [15, 91],
  [16, 86],
  [17, 85],
  [18, 94],
  [19, 93],
  [20, 94],
  [21, 93],
  [22, 95],
  [23, 89],
  [24, 91],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_alt2 = n44;
const n45 = t([
  [0, 87],
  [1, 88],
  [2, 89],
  [3, 91],
  [4, 92],
  [5, 93],
  [6, 94],
  [7, 95],
  [8, 11],
  [9, 258],
  [10, 258],
  [11, 258],
  [12, 88],
  [13, 89],
  [14, 91],
  [15, 92],
  [16, 87],
  [17, 86],
  [19, 92],
  [20, 93],
  [21, 92],
  [22, 94],
  [23, 91],
  [24, 92],
  [25, 91],
  [26, 91],
  [27, 89],
]) as unknown as Theme;

export const light_red_active = n45;
const n46 = t([
  [0, 186],
  [1, 187],
  [2, 188],
  [3, 189],
  [4, 190],
  [5, 192],
  [6, 56],
  [7, 193],
  [8, 194],
  [9, 195],
  [10, 0],
  [11, 0],
  [12, 187],
  [13, 188],
  [14, 189],
  [15, 190],
  [16, 186],
  [17, 185],
  [18, 195],
  [19, 194],
  [20, 195],
  [21, 194],
  [22, 0],
  [23, 190],
  [24, 192],
  [25, 189],
  [26, 190],
  [27, 56],
]) as unknown as Theme;

export const dark_orange_alt1 = n46;
const n47 = t([
  [0, 187],
  [1, 188],
  [2, 189],
  [3, 190],
  [4, 192],
  [5, 56],
  [6, 193],
  [7, 194],
  [8, 195],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 188],
  [13, 189],
  [14, 190],
  [15, 192],
  [16, 187],
  [17, 186],
  [18, 194],
  [19, 193],
  [20, 194],
  [21, 193],
  [22, 195],
  [23, 192],
  [24, 56],
  [25, 190],
  [26, 192],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_alt2 = n47;
const n48 = t([
  [0, 188],
  [1, 189],
  [2, 190],
  [3, 192],
  [4, 56],
  [5, 193],
  [6, 194],
  [7, 195],
  [8, 0],
  [9, 260],
  [10, 260],
  [11, 260],
  [12, 189],
  [13, 190],
  [14, 192],
  [15, 56],
  [16, 188],
  [17, 187],
  [19, 56],
  [20, 193],
  [21, 56],
  [22, 194],
  [23, 56],
  [24, 193],
  [25, 192],
  [26, 56],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_active = n48;
const n49 = t([
  [0, 230],
  [1, 231],
  [2, 232],
  [3, 233],
  [4, 234],
  [5, 236],
  [6, 104],
  [7, 237],
  [8, 238],
  [9, 239],
  [10, 0],
  [11, 0],
  [12, 231],
  [13, 232],
  [14, 233],
  [15, 234],
  [16, 230],
  [17, 229],
  [18, 239],
  [19, 238],
  [20, 239],
  [21, 238],
  [22, 0],
  [23, 234],
  [24, 236],
  [25, 233],
  [26, 234],
  [27, 104],
]) as unknown as Theme;

export const dark_yellow_alt1 = n49;
const n50 = t([
  [0, 231],
  [1, 232],
  [2, 233],
  [3, 234],
  [4, 236],
  [5, 104],
  [6, 237],
  [7, 238],
  [8, 239],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 232],
  [13, 233],
  [14, 234],
  [15, 236],
  [16, 231],
  [17, 230],
  [18, 238],
  [19, 237],
  [20, 238],
  [21, 237],
  [22, 239],
  [23, 236],
  [24, 104],
  [25, 234],
  [26, 236],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_alt2 = n50;
const n51 = t([
  [0, 232],
  [1, 233],
  [2, 234],
  [3, 236],
  [4, 104],
  [5, 237],
  [6, 238],
  [7, 239],
  [8, 0],
  [9, 262],
  [10, 262],
  [11, 262],
  [12, 233],
  [13, 234],
  [14, 236],
  [15, 104],
  [16, 232],
  [17, 231],
  [19, 104],
  [20, 237],
  [21, 104],
  [22, 238],
  [23, 104],
  [24, 237],
  [25, 236],
  [26, 104],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_active = n51;
const n52 = t([
  [0, 175],
  [1, 176],
  [2, 177],
  [3, 178],
  [4, 179],
  [5, 181],
  [6, 44],
  [7, 182],
  [8, 183],
  [9, 184],
  [10, 0],
  [11, 0],
  [12, 176],
  [13, 177],
  [14, 178],
  [15, 179],
  [16, 175],
  [17, 174],
  [18, 184],
  [19, 183],
  [20, 184],
  [21, 183],
  [22, 0],
  [23, 179],
  [24, 181],
  [25, 178],
  [26, 179],
  [27, 44],
]) as unknown as Theme;

export const dark_green_alt1 = n52;
const n53 = t([
  [0, 176],
  [1, 177],
  [2, 178],
  [3, 179],
  [4, 181],
  [5, 44],
  [6, 182],
  [7, 183],
  [8, 184],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 177],
  [13, 178],
  [14, 179],
  [15, 181],
  [16, 176],
  [17, 175],
  [18, 183],
  [19, 182],
  [20, 183],
  [21, 182],
  [22, 184],
  [23, 181],
  [24, 44],
  [25, 179],
  [26, 181],
  [27, 181],
]) as unknown as Theme;

export const dark_green_alt2 = n53;
const n54 = t([
  [0, 177],
  [1, 178],
  [2, 179],
  [3, 181],
  [4, 44],
  [5, 182],
  [6, 183],
  [7, 184],
  [8, 0],
  [9, 264],
  [10, 264],
  [11, 264],
  [12, 178],
  [13, 179],
  [14, 181],
  [15, 44],
  [16, 177],
  [17, 176],
  [19, 44],
  [20, 182],
  [21, 44],
  [22, 183],
  [23, 44],
  [24, 182],
  [25, 181],
  [26, 44],
  [27, 179],
]) as unknown as Theme;

export const dark_green_active = n54;
const n55 = t([
  [0, 153],
  [1, 154],
  [2, 155],
  [3, 156],
  [4, 157],
  [5, 159],
  [6, 22],
  [7, 160],
  [8, 161],
  [9, 162],
  [10, 0],
  [11, 0],
  [12, 154],
  [13, 155],
  [14, 156],
  [15, 157],
  [16, 153],
  [17, 152],
  [18, 162],
  [19, 161],
  [20, 162],
  [21, 161],
  [22, 0],
  [23, 157],
  [24, 159],
  [25, 156],
  [26, 157],
  [27, 22],
]) as unknown as Theme;

export const dark_blue_alt1 = n55;
const n56 = t([
  [0, 154],
  [1, 155],
  [2, 156],
  [3, 157],
  [4, 159],
  [5, 22],
  [6, 160],
  [7, 161],
  [8, 162],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 155],
  [13, 156],
  [14, 157],
  [15, 159],
  [16, 154],
  [17, 153],
  [18, 161],
  [19, 160],
  [20, 161],
  [21, 160],
  [22, 162],
  [23, 159],
  [24, 22],
  [25, 157],
  [26, 159],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_alt2 = n56;
const n57 = t([
  [0, 155],
  [1, 156],
  [2, 157],
  [3, 159],
  [4, 22],
  [5, 160],
  [6, 161],
  [7, 162],
  [8, 0],
  [9, 266],
  [10, 266],
  [11, 266],
  [12, 156],
  [13, 157],
  [14, 159],
  [15, 22],
  [16, 155],
  [17, 154],
  [19, 22],
  [20, 160],
  [21, 22],
  [22, 161],
  [23, 22],
  [24, 160],
  [25, 159],
  [26, 22],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_active = n57;
const n58 = t([
  [0, 208],
  [1, 209],
  [2, 210],
  [3, 211],
  [4, 212],
  [5, 214],
  [6, 80],
  [7, 215],
  [8, 216],
  [9, 217],
  [10, 0],
  [11, 0],
  [12, 209],
  [13, 210],
  [14, 211],
  [15, 212],
  [16, 208],
  [17, 207],
  [18, 217],
  [19, 216],
  [20, 217],
  [21, 216],
  [22, 0],
  [23, 212],
  [24, 214],
  [25, 211],
  [26, 212],
  [27, 80],
]) as unknown as Theme;

export const dark_purple_alt1 = n58;
const n59 = t([
  [0, 209],
  [1, 210],
  [2, 211],
  [3, 212],
  [4, 214],
  [5, 80],
  [6, 215],
  [7, 216],
  [8, 217],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 210],
  [13, 211],
  [14, 212],
  [15, 214],
  [16, 209],
  [17, 208],
  [18, 216],
  [19, 215],
  [20, 216],
  [21, 215],
  [22, 217],
  [23, 214],
  [24, 80],
  [25, 212],
  [26, 214],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_alt2 = n59;
const n60 = t([
  [0, 210],
  [1, 211],
  [2, 212],
  [3, 214],
  [4, 80],
  [5, 215],
  [6, 216],
  [7, 217],
  [8, 0],
  [9, 268],
  [10, 268],
  [11, 268],
  [12, 211],
  [13, 212],
  [14, 214],
  [15, 80],
  [16, 210],
  [17, 209],
  [19, 80],
  [20, 215],
  [21, 80],
  [22, 216],
  [23, 80],
  [24, 215],
  [25, 214],
  [26, 80],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_active = n60;
const n61 = t([
  [0, 197],
  [1, 198],
  [2, 199],
  [3, 200],
  [4, 201],
  [5, 203],
  [6, 68],
  [7, 204],
  [8, 205],
  [9, 206],
  [10, 0],
  [11, 0],
  [12, 198],
  [13, 199],
  [14, 200],
  [15, 201],
  [16, 197],
  [17, 196],
  [18, 206],
  [19, 205],
  [20, 206],
  [21, 205],
  [22, 0],
  [23, 201],
  [24, 203],
  [25, 200],
  [26, 201],
  [27, 68],
]) as unknown as Theme;

export const dark_pink_alt1 = n61;
const n62 = t([
  [0, 198],
  [1, 199],
  [2, 200],
  [3, 201],
  [4, 203],
  [5, 68],
  [6, 204],
  [7, 205],
  [8, 206],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 199],
  [13, 200],
  [14, 201],
  [15, 203],
  [16, 198],
  [17, 197],
  [18, 205],
  [19, 204],
  [20, 205],
  [21, 204],
  [22, 206],
  [23, 203],
  [24, 68],
  [25, 201],
  [26, 203],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_alt2 = n62;
const n63 = t([
  [0, 199],
  [1, 200],
  [2, 201],
  [3, 203],
  [4, 68],
  [5, 204],
  [6, 205],
  [7, 206],
  [8, 0],
  [9, 270],
  [10, 270],
  [11, 270],
  [12, 200],
  [13, 201],
  [14, 203],
  [15, 68],
  [16, 199],
  [17, 198],
  [19, 68],
  [20, 204],
  [21, 68],
  [22, 205],
  [23, 68],
  [24, 204],
  [25, 203],
  [26, 68],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_active = n63;
const n64 = t([
  [0, 219],
  [1, 220],
  [2, 221],
  [3, 222],
  [4, 223],
  [5, 225],
  [6, 92],
  [7, 226],
  [8, 227],
  [9, 228],
  [10, 0],
  [11, 0],
  [12, 220],
  [13, 221],
  [14, 222],
  [15, 223],
  [16, 219],
  [17, 218],
  [18, 228],
  [19, 227],
  [20, 228],
  [21, 227],
  [22, 0],
  [23, 223],
  [24, 225],
  [25, 222],
  [26, 223],
  [27, 92],
]) as unknown as Theme;

export const dark_red_alt1 = n64;
const n65 = t([
  [0, 220],
  [1, 221],
  [2, 222],
  [3, 223],
  [4, 225],
  [5, 92],
  [6, 226],
  [7, 227],
  [8, 228],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 221],
  [13, 222],
  [14, 223],
  [15, 225],
  [16, 220],
  [17, 219],
  [18, 227],
  [19, 226],
  [20, 227],
  [21, 226],
  [22, 228],
  [23, 225],
  [24, 92],
  [25, 223],
  [26, 225],
  [27, 225],
]) as unknown as Theme;

export const dark_red_alt2 = n65;
const n66 = t([
  [0, 221],
  [1, 222],
  [2, 223],
  [3, 225],
  [4, 92],
  [5, 226],
  [6, 227],
  [7, 228],
  [8, 0],
  [9, 272],
  [10, 272],
  [11, 272],
  [12, 222],
  [13, 223],
  [14, 225],
  [15, 92],
  [16, 221],
  [17, 220],
  [19, 92],
  [20, 226],
  [21, 92],
  [22, 227],
  [23, 92],
  [24, 226],
  [25, 225],
  [26, 92],
  [27, 223],
]) as unknown as Theme;

export const dark_red_active = n66;
const n67 = t([
  [12, 0],
  [13, 1],
  [14, 2],
  [15, 3],
  [16, 0],
  [17, 0],
  [18, 11],
  [19, 10],
  [20, 11],
  [21, 10],
  [22, 11],
  [23, 3],
  [24, 4],
  [25, 2],
  [26, 3],
  [27, 9],
]) as unknown as Theme;

export const light_ListItem = n67;
const n68 = t([
  [12, 2],
  [13, 3],
  [14, 4],
  [15, 5],
  [16, 1],
  [17, 0],
  [18, 11],
  [19, 10],
  [20, 11],
  [21, 10],
  [22, 11],
  [23, 5],
  [24, 6],
  [25, 4],
  [26, 5],
  [27, 7],
]) as unknown as Theme;

export const light_Card = n68;
export const light_DrawerFrame = n68;
export const light_Progress = n68;
export const light_TooltipArrow = n68;
const n69 = t([
  [12, 3],
  [13, 4],
  [14, 5],
  [15, 6],
  [16, 2],
  [17, 1],
  [18, 11],
  [19, 10],
  [20, 11],
  [21, 10],
  [22, 10],
  [23, 275],
  [24, 275],
  [25, 5],
  [26, 6],
  [27, 6],
]) as unknown as Theme;

export const light_Button = n69;
const n70 = t([
  [12, 1],
  [13, 2],
  [14, 3],
  [15, 4],
  [16, 0],
  [17, 12],
  [18, 11],
  [19, 10],
  [20, 11],
  [21, 10],
  [22, 13],
  [23, 6],
  [24, 7],
  [25, 5],
  [26, 6],
  [27, 8],
]) as unknown as Theme;

export const light_Checkbox = n70;
export const light_RadioGroupItem = n70;
export const light_Input = n70;
export const light_TextArea = n70;
const n71 = t([
  [12, 3],
  [13, 4],
  [14, 5],
  [15, 6],
  [16, 2],
  [17, 1],
  [18, 11],
  [19, 10],
  [20, 11],
  [21, 10],
  [22, 10],
  [23, 6],
  [24, 7],
  [25, 5],
  [26, 6],
  [27, 6],
]) as unknown as Theme;

export const light_Switch = n71;
export const light_TooltipContent = n71;
export const light_SliderTrack = n71;
const n72 = t([
  [12, 11],
  [13, 11],
  [14, 10],
  [15, 9],
  [16, 11],
  [17, 11],
  [18, 0],
  [19, 1],
  [20, 0],
  [21, 1],
  [22, 0],
  [23, 9],
  [24, 8],
  [25, 10],
  [26, 9],
  [27, 1],
]) as unknown as Theme;

export const light_SwitchThumb = n72;
const n73 = t([
  [12, 8],
  [13, 7],
  [14, 6],
  [15, 5],
  [16, 9],
  [17, 10],
  [18, 0],
  [19, 1],
  [20, 0],
  [21, 1],
  [22, 1],
  [23, 5],
  [24, 4],
  [25, 6],
  [26, 5],
  [27, 5],
]) as unknown as Theme;

export const light_SliderTrackActive = n73;
const n74 = t([
  [12, 10],
  [13, 9],
  [14, 8],
  [15, 7],
  [16, 11],
  [17, 13],
  [18, 0],
  [19, 1],
  [20, 0],
  [21, 1],
  [22, 12],
  [23, 7],
  [24, 6],
  [25, 8],
  [26, 7],
  [27, 3],
]) as unknown as Theme;

export const light_SliderThumb = n74;
export const light_Tooltip = n74;
export const light_ProgressIndicator = n74;
const n75 = t([
  [12, 143],
  [13, 144],
  [14, 145],
  [15, 146],
  [16, 142],
  [17, 13],
  [18, 0],
  [19, 151],
  [20, 0],
  [21, 151],
  [22, 12],
  [23, 146],
  [24, 147],
  [25, 145],
  [26, 146],
  [27, 138],
]) as unknown as Theme;

export const dark_ListItem = n75;
const n76 = t([
  [12, 144],
  [13, 145],
  [14, 146],
  [15, 147],
  [16, 143],
  [17, 142],
  [18, 0],
  [19, 151],
  [20, 0],
  [21, 151],
  [22, 0],
  [23, 147],
  [24, 148],
  [25, 146],
  [26, 147],
  [27, 149],
]) as unknown as Theme;

export const dark_Card = n76;
export const dark_DrawerFrame = n76;
export const dark_Progress = n76;
export const dark_TooltipArrow = n76;
const n77 = t([
  [12, 145],
  [13, 146],
  [14, 147],
  [15, 148],
  [16, 144],
  [17, 143],
  [18, 0],
  [19, 151],
  [20, 0],
  [21, 151],
  [22, 151],
  [23, 275],
  [24, 275],
  [25, 147],
  [26, 148],
  [27, 148],
]) as unknown as Theme;

export const dark_Button = n77;
const n78 = t([
  [12, 143],
  [13, 144],
  [14, 145],
  [15, 146],
  [16, 142],
  [17, 13],
  [18, 0],
  [19, 151],
  [20, 0],
  [21, 151],
  [22, 12],
  [23, 148],
  [24, 149],
  [25, 147],
  [26, 148],
  [27, 138],
]) as unknown as Theme;

export const dark_Checkbox = n78;
export const dark_RadioGroupItem = n78;
export const dark_Input = n78;
export const dark_TextArea = n78;
const n79 = t([
  [12, 145],
  [13, 146],
  [14, 147],
  [15, 148],
  [16, 144],
  [17, 143],
  [18, 0],
  [19, 151],
  [20, 0],
  [21, 151],
  [22, 151],
  [23, 148],
  [24, 149],
  [25, 147],
  [26, 148],
  [27, 148],
]) as unknown as Theme;

export const dark_Switch = n79;
export const dark_TooltipContent = n79;
export const dark_SliderTrack = n79;
const n80 = t([
  [12, 0],
  [13, 0],
  [14, 151],
  [15, 150],
  [16, 0],
  [17, 0],
  [18, 142],
  [19, 143],
  [20, 142],
  [21, 143],
  [22, 142],
  [23, 150],
  [24, 138],
  [25, 151],
  [26, 150],
  [27, 143],
]) as unknown as Theme;

export const dark_SwitchThumb = n80;
const n81 = t([
  [12, 138],
  [13, 149],
  [14, 148],
  [15, 147],
  [16, 150],
  [17, 151],
  [18, 142],
  [19, 143],
  [20, 142],
  [21, 143],
  [22, 143],
  [23, 147],
  [24, 146],
  [25, 148],
  [26, 147],
  [27, 147],
]) as unknown as Theme;

export const dark_SliderTrackActive = n81;
const n82 = t([
  [12, 151],
  [13, 150],
  [14, 138],
  [15, 149],
  [16, 0],
  [17, 12],
  [18, 142],
  [19, 143],
  [20, 142],
  [21, 143],
  [22, 13],
  [23, 149],
  [24, 148],
  [25, 138],
  [26, 149],
  [27, 145],
]) as unknown as Theme;

export const dark_SliderThumb = n82;
export const dark_Tooltip = n82;
export const dark_ProgressIndicator = n82;
const n83 = t([
  [12, 48],
  [13, 49],
  [14, 50],
  [15, 51],
  [16, 48],
  [17, 48],
  [18, 11],
  [19, 59],
  [20, 11],
  [21, 59],
  [22, 11],
  [23, 50],
  [24, 51],
  [25, 50],
  [26, 50],
  [27, 58],
]) as unknown as Theme;

export const light_orange_ListItem = n83;
const n84 = t([
  [12, 50],
  [13, 51],
  [14, 52],
  [15, 53],
  [16, 49],
  [17, 48],
  [18, 11],
  [19, 59],
  [20, 11],
  [21, 59],
  [22, 11],
  [23, 52],
  [24, 53],
  [25, 52],
  [26, 52],
  [27, 56],
]) as unknown as Theme;

export const light_orange_Card = n84;
export const light_orange_DrawerFrame = n84;
export const light_orange_Progress = n84;
export const light_orange_TooltipArrow = n84;
const n85 = t([
  [12, 51],
  [13, 52],
  [14, 53],
  [15, 55],
  [16, 50],
  [17, 49],
  [18, 11],
  [19, 59],
  [20, 11],
  [21, 59],
  [22, 59],
  [23, 275],
  [24, 275],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_Button = n85;
const n86 = t([
  [12, 49],
  [13, 50],
  [14, 51],
  [15, 52],
  [16, 48],
  [17, 245],
  [18, 11],
  [19, 59],
  [20, 11],
  [21, 59],
  [22, 246],
  [23, 53],
  [24, 55],
  [25, 53],
  [26, 53],
  [27, 57],
]) as unknown as Theme;

export const light_orange_Checkbox = n86;
export const light_orange_RadioGroupItem = n86;
export const light_orange_Input = n86;
export const light_orange_TextArea = n86;
const n87 = t([
  [12, 51],
  [13, 52],
  [14, 53],
  [15, 55],
  [16, 50],
  [17, 49],
  [18, 11],
  [19, 59],
  [20, 11],
  [21, 59],
  [22, 59],
  [23, 53],
  [24, 55],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_Switch = n87;
export const light_orange_TooltipContent = n87;
export const light_orange_SliderTrack = n87;
const n88 = t([
  [12, 11],
  [13, 11],
  [14, 59],
  [15, 58],
  [16, 11],
  [17, 11],
  [18, 48],
  [19, 49],
  [20, 48],
  [21, 49],
  [22, 48],
  [23, 59],
  [24, 58],
  [25, 59],
  [26, 59],
  [27, 49],
]) as unknown as Theme;

export const light_orange_SwitchThumb = n88;
const n89 = t([
  [12, 57],
  [13, 56],
  [14, 55],
  [15, 53],
  [16, 58],
  [17, 59],
  [18, 48],
  [19, 49],
  [20, 48],
  [21, 49],
  [22, 49],
  [23, 55],
  [24, 53],
  [25, 55],
  [26, 55],
  [27, 53],
]) as unknown as Theme;

export const light_orange_SliderTrackActive = n89;
const n90 = t([
  [12, 59],
  [13, 58],
  [14, 57],
  [15, 56],
  [16, 11],
  [17, 246],
  [18, 48],
  [19, 49],
  [20, 48],
  [21, 49],
  [22, 245],
  [23, 57],
  [24, 56],
  [25, 57],
  [26, 57],
  [27, 51],
]) as unknown as Theme;

export const light_orange_SliderThumb = n90;
export const light_orange_Tooltip = n90;
export const light_orange_ProgressIndicator = n90;
const n91 = t([
  [12, 96],
  [13, 97],
  [14, 98],
  [15, 99],
  [16, 96],
  [17, 96],
  [18, 11],
  [19, 107],
  [20, 11],
  [21, 107],
  [22, 11],
  [23, 98],
  [24, 99],
  [25, 98],
  [26, 98],
  [27, 106],
]) as unknown as Theme;

export const light_yellow_ListItem = n91;
const n92 = t([
  [12, 98],
  [13, 99],
  [14, 100],
  [15, 101],
  [16, 97],
  [17, 96],
  [18, 11],
  [19, 107],
  [20, 11],
  [21, 107],
  [22, 11],
  [23, 100],
  [24, 101],
  [25, 100],
  [26, 100],
  [27, 104],
]) as unknown as Theme;

export const light_yellow_Card = n92;
export const light_yellow_DrawerFrame = n92;
export const light_yellow_Progress = n92;
export const light_yellow_TooltipArrow = n92;
const n93 = t([
  [12, 99],
  [13, 100],
  [14, 101],
  [15, 103],
  [16, 98],
  [17, 97],
  [18, 11],
  [19, 107],
  [20, 11],
  [21, 107],
  [22, 107],
  [23, 275],
  [24, 275],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_Button = n93;
const n94 = t([
  [12, 97],
  [13, 98],
  [14, 99],
  [15, 100],
  [16, 96],
  [17, 247],
  [18, 11],
  [19, 107],
  [20, 11],
  [21, 107],
  [22, 248],
  [23, 101],
  [24, 103],
  [25, 101],
  [26, 101],
  [27, 105],
]) as unknown as Theme;

export const light_yellow_Checkbox = n94;
export const light_yellow_RadioGroupItem = n94;
export const light_yellow_Input = n94;
export const light_yellow_TextArea = n94;
const n95 = t([
  [12, 99],
  [13, 100],
  [14, 101],
  [15, 103],
  [16, 98],
  [17, 97],
  [18, 11],
  [19, 107],
  [20, 11],
  [21, 107],
  [22, 107],
  [23, 101],
  [24, 103],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_Switch = n95;
export const light_yellow_TooltipContent = n95;
export const light_yellow_SliderTrack = n95;
const n96 = t([
  [12, 11],
  [13, 11],
  [14, 107],
  [15, 106],
  [16, 11],
  [17, 11],
  [18, 96],
  [19, 97],
  [20, 96],
  [21, 97],
  [22, 96],
  [23, 107],
  [24, 106],
  [25, 107],
  [26, 107],
  [27, 97],
]) as unknown as Theme;

export const light_yellow_SwitchThumb = n96;
const n97 = t([
  [12, 105],
  [13, 104],
  [14, 103],
  [15, 101],
  [16, 106],
  [17, 107],
  [18, 96],
  [19, 97],
  [20, 96],
  [21, 97],
  [22, 97],
  [23, 103],
  [24, 101],
  [25, 103],
  [26, 103],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_SliderTrackActive = n97;
const n98 = t([
  [12, 107],
  [13, 106],
  [14, 105],
  [15, 104],
  [16, 11],
  [17, 248],
  [18, 96],
  [19, 97],
  [20, 96],
  [21, 97],
  [22, 247],
  [23, 105],
  [24, 104],
  [25, 105],
  [26, 105],
  [27, 99],
]) as unknown as Theme;

export const light_yellow_SliderThumb = n98;
export const light_yellow_Tooltip = n98;
export const light_yellow_ProgressIndicator = n98;
const n99 = t([
  [12, 36],
  [13, 37],
  [14, 38],
  [15, 39],
  [16, 36],
  [17, 36],
  [18, 11],
  [19, 47],
  [20, 11],
  [21, 47],
  [22, 11],
  [23, 38],
  [24, 39],
  [25, 38],
  [26, 38],
  [27, 46],
]) as unknown as Theme;

export const light_green_ListItem = n99;
const n100 = t([
  [12, 38],
  [13, 39],
  [14, 40],
  [15, 41],
  [16, 37],
  [17, 36],
  [18, 11],
  [19, 47],
  [20, 11],
  [21, 47],
  [22, 11],
  [23, 40],
  [24, 41],
  [25, 40],
  [26, 40],
  [27, 44],
]) as unknown as Theme;

export const light_green_Card = n100;
export const light_green_DrawerFrame = n100;
export const light_green_Progress = n100;
export const light_green_TooltipArrow = n100;
const n101 = t([
  [12, 39],
  [13, 40],
  [14, 41],
  [15, 43],
  [16, 38],
  [17, 37],
  [18, 11],
  [19, 47],
  [20, 11],
  [21, 47],
  [22, 47],
  [23, 275],
  [24, 275],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_Button = n101;
const n102 = t([
  [12, 37],
  [13, 38],
  [14, 39],
  [15, 40],
  [16, 36],
  [17, 249],
  [18, 11],
  [19, 47],
  [20, 11],
  [21, 47],
  [22, 250],
  [23, 41],
  [24, 43],
  [25, 41],
  [26, 41],
  [27, 45],
]) as unknown as Theme;

export const light_green_Checkbox = n102;
export const light_green_RadioGroupItem = n102;
export const light_green_Input = n102;
export const light_green_TextArea = n102;
const n103 = t([
  [12, 39],
  [13, 40],
  [14, 41],
  [15, 43],
  [16, 38],
  [17, 37],
  [18, 11],
  [19, 47],
  [20, 11],
  [21, 47],
  [22, 47],
  [23, 41],
  [24, 43],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_Switch = n103;
export const light_green_TooltipContent = n103;
export const light_green_SliderTrack = n103;
const n104 = t([
  [12, 11],
  [13, 11],
  [14, 47],
  [15, 46],
  [16, 11],
  [17, 11],
  [18, 36],
  [19, 37],
  [20, 36],
  [21, 37],
  [22, 36],
  [23, 47],
  [24, 46],
  [25, 47],
  [26, 47],
  [27, 37],
]) as unknown as Theme;

export const light_green_SwitchThumb = n104;
const n105 = t([
  [12, 45],
  [13, 44],
  [14, 43],
  [15, 41],
  [16, 46],
  [17, 47],
  [18, 36],
  [19, 37],
  [20, 36],
  [21, 37],
  [22, 37],
  [23, 43],
  [24, 41],
  [25, 43],
  [26, 43],
  [27, 41],
]) as unknown as Theme;

export const light_green_SliderTrackActive = n105;
const n106 = t([
  [12, 47],
  [13, 46],
  [14, 45],
  [15, 44],
  [16, 11],
  [17, 250],
  [18, 36],
  [19, 37],
  [20, 36],
  [21, 37],
  [22, 249],
  [23, 45],
  [24, 44],
  [25, 45],
  [26, 45],
  [27, 39],
]) as unknown as Theme;

export const light_green_SliderThumb = n106;
export const light_green_Tooltip = n106;
export const light_green_ProgressIndicator = n106;
const n107 = t([
  [12, 14],
  [13, 15],
  [14, 16],
  [15, 17],
  [16, 14],
  [17, 14],
  [18, 11],
  [19, 25],
  [20, 11],
  [21, 25],
  [22, 11],
  [23, 16],
  [24, 17],
  [25, 16],
  [26, 16],
  [27, 24],
]) as unknown as Theme;

export const light_blue_ListItem = n107;
const n108 = t([
  [12, 16],
  [13, 17],
  [14, 18],
  [15, 19],
  [16, 15],
  [17, 14],
  [18, 11],
  [19, 25],
  [20, 11],
  [21, 25],
  [22, 11],
  [23, 18],
  [24, 19],
  [25, 18],
  [26, 18],
  [27, 22],
]) as unknown as Theme;

export const light_blue_Card = n108;
export const light_blue_DrawerFrame = n108;
export const light_blue_Progress = n108;
export const light_blue_TooltipArrow = n108;
const n109 = t([
  [12, 17],
  [13, 18],
  [14, 19],
  [15, 21],
  [16, 16],
  [17, 15],
  [18, 11],
  [19, 25],
  [20, 11],
  [21, 25],
  [22, 25],
  [23, 275],
  [24, 275],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_Button = n109;
const n110 = t([
  [12, 15],
  [13, 16],
  [14, 17],
  [15, 18],
  [16, 14],
  [17, 251],
  [18, 11],
  [19, 25],
  [20, 11],
  [21, 25],
  [22, 252],
  [23, 19],
  [24, 21],
  [25, 19],
  [26, 19],
  [27, 23],
]) as unknown as Theme;

export const light_blue_Checkbox = n110;
export const light_blue_RadioGroupItem = n110;
export const light_blue_Input = n110;
export const light_blue_TextArea = n110;
const n111 = t([
  [12, 17],
  [13, 18],
  [14, 19],
  [15, 21],
  [16, 16],
  [17, 15],
  [18, 11],
  [19, 25],
  [20, 11],
  [21, 25],
  [22, 25],
  [23, 19],
  [24, 21],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_Switch = n111;
export const light_blue_TooltipContent = n111;
export const light_blue_SliderTrack = n111;
const n112 = t([
  [12, 11],
  [13, 11],
  [14, 25],
  [15, 24],
  [16, 11],
  [17, 11],
  [18, 14],
  [19, 15],
  [20, 14],
  [21, 15],
  [22, 14],
  [23, 25],
  [24, 24],
  [25, 25],
  [26, 25],
  [27, 15],
]) as unknown as Theme;

export const light_blue_SwitchThumb = n112;
const n113 = t([
  [12, 23],
  [13, 22],
  [14, 21],
  [15, 19],
  [16, 24],
  [17, 25],
  [18, 14],
  [19, 15],
  [20, 14],
  [21, 15],
  [22, 15],
  [23, 21],
  [24, 19],
  [25, 21],
  [26, 21],
  [27, 19],
]) as unknown as Theme;

export const light_blue_SliderTrackActive = n113;
const n114 = t([
  [12, 25],
  [13, 24],
  [14, 23],
  [15, 22],
  [16, 11],
  [17, 252],
  [18, 14],
  [19, 15],
  [20, 14],
  [21, 15],
  [22, 251],
  [23, 23],
  [24, 22],
  [25, 23],
  [26, 23],
  [27, 17],
]) as unknown as Theme;

export const light_blue_SliderThumb = n114;
export const light_blue_Tooltip = n114;
export const light_blue_ProgressIndicator = n114;
const n115 = t([
  [12, 72],
  [13, 73],
  [14, 74],
  [15, 75],
  [16, 72],
  [17, 72],
  [18, 11],
  [19, 83],
  [20, 11],
  [21, 83],
  [22, 11],
  [23, 74],
  [24, 75],
  [25, 74],
  [26, 74],
  [27, 82],
]) as unknown as Theme;

export const light_purple_ListItem = n115;
const n116 = t([
  [12, 74],
  [13, 75],
  [14, 76],
  [15, 77],
  [16, 73],
  [17, 72],
  [18, 11],
  [19, 83],
  [20, 11],
  [21, 83],
  [22, 11],
  [23, 76],
  [24, 77],
  [25, 76],
  [26, 76],
  [27, 80],
]) as unknown as Theme;

export const light_purple_Card = n116;
export const light_purple_DrawerFrame = n116;
export const light_purple_Progress = n116;
export const light_purple_TooltipArrow = n116;
const n117 = t([
  [12, 75],
  [13, 76],
  [14, 77],
  [15, 79],
  [16, 74],
  [17, 73],
  [18, 11],
  [19, 83],
  [20, 11],
  [21, 83],
  [22, 83],
  [23, 275],
  [24, 275],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_Button = n117;
const n118 = t([
  [12, 73],
  [13, 74],
  [14, 75],
  [15, 76],
  [16, 72],
  [17, 253],
  [18, 11],
  [19, 83],
  [20, 11],
  [21, 83],
  [22, 254],
  [23, 77],
  [24, 79],
  [25, 77],
  [26, 77],
  [27, 81],
]) as unknown as Theme;

export const light_purple_Checkbox = n118;
export const light_purple_RadioGroupItem = n118;
export const light_purple_Input = n118;
export const light_purple_TextArea = n118;
const n119 = t([
  [12, 75],
  [13, 76],
  [14, 77],
  [15, 79],
  [16, 74],
  [17, 73],
  [18, 11],
  [19, 83],
  [20, 11],
  [21, 83],
  [22, 83],
  [23, 77],
  [24, 79],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_Switch = n119;
export const light_purple_TooltipContent = n119;
export const light_purple_SliderTrack = n119;
const n120 = t([
  [12, 11],
  [13, 11],
  [14, 83],
  [15, 82],
  [16, 11],
  [17, 11],
  [18, 72],
  [19, 73],
  [20, 72],
  [21, 73],
  [22, 72],
  [23, 83],
  [24, 82],
  [25, 83],
  [26, 83],
  [27, 73],
]) as unknown as Theme;

export const light_purple_SwitchThumb = n120;
const n121 = t([
  [12, 81],
  [13, 80],
  [14, 79],
  [15, 77],
  [16, 82],
  [17, 83],
  [18, 72],
  [19, 73],
  [20, 72],
  [21, 73],
  [22, 73],
  [23, 79],
  [24, 77],
  [25, 79],
  [26, 79],
  [27, 77],
]) as unknown as Theme;

export const light_purple_SliderTrackActive = n121;
const n122 = t([
  [12, 83],
  [13, 82],
  [14, 81],
  [15, 80],
  [16, 11],
  [17, 254],
  [18, 72],
  [19, 73],
  [20, 72],
  [21, 73],
  [22, 253],
  [23, 81],
  [24, 80],
  [25, 81],
  [26, 81],
  [27, 75],
]) as unknown as Theme;

export const light_purple_SliderThumb = n122;
export const light_purple_Tooltip = n122;
export const light_purple_ProgressIndicator = n122;
const n123 = t([
  [12, 60],
  [13, 61],
  [14, 62],
  [15, 63],
  [16, 60],
  [17, 60],
  [18, 11],
  [19, 71],
  [20, 11],
  [21, 71],
  [22, 11],
  [23, 62],
  [24, 63],
  [25, 62],
  [26, 62],
  [27, 70],
]) as unknown as Theme;

export const light_pink_ListItem = n123;
const n124 = t([
  [12, 62],
  [13, 63],
  [14, 64],
  [15, 65],
  [16, 61],
  [17, 60],
  [18, 11],
  [19, 71],
  [20, 11],
  [21, 71],
  [22, 11],
  [23, 64],
  [24, 65],
  [25, 64],
  [26, 64],
  [27, 68],
]) as unknown as Theme;

export const light_pink_Card = n124;
export const light_pink_DrawerFrame = n124;
export const light_pink_Progress = n124;
export const light_pink_TooltipArrow = n124;
const n125 = t([
  [12, 63],
  [13, 64],
  [14, 65],
  [15, 67],
  [16, 62],
  [17, 61],
  [18, 11],
  [19, 71],
  [20, 11],
  [21, 71],
  [22, 71],
  [23, 275],
  [24, 275],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_Button = n125;
const n126 = t([
  [12, 61],
  [13, 62],
  [14, 63],
  [15, 64],
  [16, 60],
  [17, 255],
  [18, 11],
  [19, 71],
  [20, 11],
  [21, 71],
  [22, 256],
  [23, 65],
  [24, 67],
  [25, 65],
  [26, 65],
  [27, 69],
]) as unknown as Theme;

export const light_pink_Checkbox = n126;
export const light_pink_RadioGroupItem = n126;
export const light_pink_Input = n126;
export const light_pink_TextArea = n126;
const n127 = t([
  [12, 63],
  [13, 64],
  [14, 65],
  [15, 67],
  [16, 62],
  [17, 61],
  [18, 11],
  [19, 71],
  [20, 11],
  [21, 71],
  [22, 71],
  [23, 65],
  [24, 67],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_Switch = n127;
export const light_pink_TooltipContent = n127;
export const light_pink_SliderTrack = n127;
const n128 = t([
  [12, 11],
  [13, 11],
  [14, 71],
  [15, 70],
  [16, 11],
  [17, 11],
  [18, 60],
  [19, 61],
  [20, 60],
  [21, 61],
  [22, 60],
  [23, 71],
  [24, 70],
  [25, 71],
  [26, 71],
  [27, 61],
]) as unknown as Theme;

export const light_pink_SwitchThumb = n128;
const n129 = t([
  [12, 69],
  [13, 68],
  [14, 67],
  [15, 65],
  [16, 70],
  [17, 71],
  [18, 60],
  [19, 61],
  [20, 60],
  [21, 61],
  [22, 61],
  [23, 67],
  [24, 65],
  [25, 67],
  [26, 67],
  [27, 65],
]) as unknown as Theme;

export const light_pink_SliderTrackActive = n129;
const n130 = t([
  [12, 71],
  [13, 70],
  [14, 69],
  [15, 68],
  [16, 11],
  [17, 256],
  [18, 60],
  [19, 61],
  [20, 60],
  [21, 61],
  [22, 255],
  [23, 69],
  [24, 68],
  [25, 69],
  [26, 69],
  [27, 63],
]) as unknown as Theme;

export const light_pink_SliderThumb = n130;
export const light_pink_Tooltip = n130;
export const light_pink_ProgressIndicator = n130;
const n131 = t([
  [12, 84],
  [13, 85],
  [14, 86],
  [15, 87],
  [16, 84],
  [17, 84],
  [18, 11],
  [19, 95],
  [20, 11],
  [21, 95],
  [22, 11],
  [23, 86],
  [24, 87],
  [25, 86],
  [26, 86],
  [27, 94],
]) as unknown as Theme;

export const light_red_ListItem = n131;
const n132 = t([
  [12, 86],
  [13, 87],
  [14, 88],
  [15, 89],
  [16, 85],
  [17, 84],
  [18, 11],
  [19, 95],
  [20, 11],
  [21, 95],
  [22, 11],
  [23, 88],
  [24, 89],
  [25, 88],
  [26, 88],
  [27, 92],
]) as unknown as Theme;

export const light_red_Card = n132;
export const light_red_DrawerFrame = n132;
export const light_red_Progress = n132;
export const light_red_TooltipArrow = n132;
const n133 = t([
  [12, 87],
  [13, 88],
  [14, 89],
  [15, 91],
  [16, 86],
  [17, 85],
  [18, 11],
  [19, 95],
  [20, 11],
  [21, 95],
  [22, 95],
  [23, 275],
  [24, 275],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_Button = n133;
const n134 = t([
  [12, 85],
  [13, 86],
  [14, 87],
  [15, 88],
  [16, 84],
  [17, 257],
  [18, 11],
  [19, 95],
  [20, 11],
  [21, 95],
  [22, 258],
  [23, 89],
  [24, 91],
  [25, 89],
  [26, 89],
  [27, 93],
]) as unknown as Theme;

export const light_red_Checkbox = n134;
export const light_red_RadioGroupItem = n134;
export const light_red_Input = n134;
export const light_red_TextArea = n134;
const n135 = t([
  [12, 87],
  [13, 88],
  [14, 89],
  [15, 91],
  [16, 86],
  [17, 85],
  [18, 11],
  [19, 95],
  [20, 11],
  [21, 95],
  [22, 95],
  [23, 89],
  [24, 91],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_Switch = n135;
export const light_red_TooltipContent = n135;
export const light_red_SliderTrack = n135;
const n136 = t([
  [12, 11],
  [13, 11],
  [14, 95],
  [15, 94],
  [16, 11],
  [17, 11],
  [18, 84],
  [19, 85],
  [20, 84],
  [21, 85],
  [22, 84],
  [23, 95],
  [24, 94],
  [25, 95],
  [26, 95],
  [27, 85],
]) as unknown as Theme;

export const light_red_SwitchThumb = n136;
const n137 = t([
  [12, 93],
  [13, 92],
  [14, 91],
  [15, 89],
  [16, 94],
  [17, 95],
  [18, 84],
  [19, 85],
  [20, 84],
  [21, 85],
  [22, 85],
  [23, 91],
  [24, 89],
  [25, 91],
  [26, 91],
  [27, 89],
]) as unknown as Theme;

export const light_red_SliderTrackActive = n137;
const n138 = t([
  [12, 95],
  [13, 94],
  [14, 93],
  [15, 92],
  [16, 11],
  [17, 258],
  [18, 84],
  [19, 85],
  [20, 84],
  [21, 85],
  [22, 257],
  [23, 93],
  [24, 92],
  [25, 93],
  [26, 93],
  [27, 87],
]) as unknown as Theme;

export const light_red_SliderThumb = n138;
export const light_red_Tooltip = n138;
export const light_red_ProgressIndicator = n138;
const n139 = t([
  [12, 186],
  [13, 187],
  [14, 188],
  [15, 189],
  [16, 185],
  [17, 259],
  [18, 0],
  [19, 195],
  [20, 0],
  [21, 195],
  [22, 260],
  [23, 189],
  [24, 190],
  [25, 188],
  [26, 189],
  [27, 193],
]) as unknown as Theme;

export const dark_orange_ListItem = n139;
const n140 = t([
  [12, 187],
  [13, 188],
  [14, 189],
  [15, 190],
  [16, 186],
  [17, 185],
  [18, 0],
  [19, 195],
  [20, 0],
  [21, 195],
  [22, 0],
  [23, 190],
  [24, 192],
  [25, 189],
  [26, 190],
  [27, 56],
]) as unknown as Theme;

export const dark_orange_Card = n140;
export const dark_orange_DrawerFrame = n140;
export const dark_orange_Progress = n140;
export const dark_orange_TooltipArrow = n140;
const n141 = t([
  [12, 188],
  [13, 189],
  [14, 190],
  [15, 192],
  [16, 187],
  [17, 186],
  [18, 0],
  [19, 195],
  [20, 0],
  [21, 195],
  [22, 195],
  [23, 275],
  [24, 275],
  [25, 190],
  [26, 192],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_Button = n141;
const n142 = t([
  [12, 186],
  [13, 187],
  [14, 188],
  [15, 189],
  [16, 185],
  [17, 259],
  [18, 0],
  [19, 195],
  [20, 0],
  [21, 195],
  [22, 260],
  [23, 192],
  [24, 56],
  [25, 190],
  [26, 192],
  [27, 193],
]) as unknown as Theme;

export const dark_orange_Checkbox = n142;
export const dark_orange_RadioGroupItem = n142;
export const dark_orange_Input = n142;
export const dark_orange_TextArea = n142;
const n143 = t([
  [12, 188],
  [13, 189],
  [14, 190],
  [15, 192],
  [16, 187],
  [17, 186],
  [18, 0],
  [19, 195],
  [20, 0],
  [21, 195],
  [22, 195],
  [23, 192],
  [24, 56],
  [25, 190],
  [26, 192],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_Switch = n143;
export const dark_orange_TooltipContent = n143;
export const dark_orange_SliderTrack = n143;
const n144 = t([
  [12, 0],
  [13, 0],
  [14, 195],
  [15, 194],
  [16, 0],
  [17, 0],
  [18, 185],
  [19, 186],
  [20, 185],
  [21, 186],
  [22, 185],
  [23, 194],
  [24, 193],
  [25, 195],
  [26, 194],
  [27, 186],
]) as unknown as Theme;

export const dark_orange_SwitchThumb = n144;
const n145 = t([
  [12, 193],
  [13, 56],
  [14, 192],
  [15, 190],
  [16, 194],
  [17, 195],
  [18, 185],
  [19, 186],
  [20, 185],
  [21, 186],
  [22, 186],
  [23, 190],
  [24, 189],
  [25, 192],
  [26, 190],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_SliderTrackActive = n145;
const n146 = t([
  [12, 195],
  [13, 194],
  [14, 193],
  [15, 56],
  [16, 0],
  [17, 260],
  [18, 185],
  [19, 186],
  [20, 185],
  [21, 186],
  [22, 259],
  [23, 56],
  [24, 192],
  [25, 193],
  [26, 56],
  [27, 188],
]) as unknown as Theme;

export const dark_orange_SliderThumb = n146;
export const dark_orange_Tooltip = n146;
export const dark_orange_ProgressIndicator = n146;
const n147 = t([
  [12, 230],
  [13, 231],
  [14, 232],
  [15, 233],
  [16, 229],
  [17, 261],
  [18, 0],
  [19, 239],
  [20, 0],
  [21, 239],
  [22, 262],
  [23, 233],
  [24, 234],
  [25, 232],
  [26, 233],
  [27, 237],
]) as unknown as Theme;

export const dark_yellow_ListItem = n147;
const n148 = t([
  [12, 231],
  [13, 232],
  [14, 233],
  [15, 234],
  [16, 230],
  [17, 229],
  [18, 0],
  [19, 239],
  [20, 0],
  [21, 239],
  [22, 0],
  [23, 234],
  [24, 236],
  [25, 233],
  [26, 234],
  [27, 104],
]) as unknown as Theme;

export const dark_yellow_Card = n148;
export const dark_yellow_DrawerFrame = n148;
export const dark_yellow_Progress = n148;
export const dark_yellow_TooltipArrow = n148;
const n149 = t([
  [12, 232],
  [13, 233],
  [14, 234],
  [15, 236],
  [16, 231],
  [17, 230],
  [18, 0],
  [19, 239],
  [20, 0],
  [21, 239],
  [22, 239],
  [23, 275],
  [24, 275],
  [25, 234],
  [26, 236],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_Button = n149;
const n150 = t([
  [12, 230],
  [13, 231],
  [14, 232],
  [15, 233],
  [16, 229],
  [17, 261],
  [18, 0],
  [19, 239],
  [20, 0],
  [21, 239],
  [22, 262],
  [23, 236],
  [24, 104],
  [25, 234],
  [26, 236],
  [27, 237],
]) as unknown as Theme;

export const dark_yellow_Checkbox = n150;
export const dark_yellow_RadioGroupItem = n150;
export const dark_yellow_Input = n150;
export const dark_yellow_TextArea = n150;
const n151 = t([
  [12, 232],
  [13, 233],
  [14, 234],
  [15, 236],
  [16, 231],
  [17, 230],
  [18, 0],
  [19, 239],
  [20, 0],
  [21, 239],
  [22, 239],
  [23, 236],
  [24, 104],
  [25, 234],
  [26, 236],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_Switch = n151;
export const dark_yellow_TooltipContent = n151;
export const dark_yellow_SliderTrack = n151;
const n152 = t([
  [12, 0],
  [13, 0],
  [14, 239],
  [15, 238],
  [16, 0],
  [17, 0],
  [18, 229],
  [19, 230],
  [20, 229],
  [21, 230],
  [22, 229],
  [23, 238],
  [24, 237],
  [25, 239],
  [26, 238],
  [27, 230],
]) as unknown as Theme;

export const dark_yellow_SwitchThumb = n152;
const n153 = t([
  [12, 237],
  [13, 104],
  [14, 236],
  [15, 234],
  [16, 238],
  [17, 239],
  [18, 229],
  [19, 230],
  [20, 229],
  [21, 230],
  [22, 230],
  [23, 234],
  [24, 233],
  [25, 236],
  [26, 234],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_SliderTrackActive = n153;
const n154 = t([
  [12, 239],
  [13, 238],
  [14, 237],
  [15, 104],
  [16, 0],
  [17, 262],
  [18, 229],
  [19, 230],
  [20, 229],
  [21, 230],
  [22, 261],
  [23, 104],
  [24, 236],
  [25, 237],
  [26, 104],
  [27, 232],
]) as unknown as Theme;

export const dark_yellow_SliderThumb = n154;
export const dark_yellow_Tooltip = n154;
export const dark_yellow_ProgressIndicator = n154;
const n155 = t([
  [12, 175],
  [13, 176],
  [14, 177],
  [15, 178],
  [16, 174],
  [17, 263],
  [18, 0],
  [19, 184],
  [20, 0],
  [21, 184],
  [22, 264],
  [23, 178],
  [24, 179],
  [25, 177],
  [26, 178],
  [27, 182],
]) as unknown as Theme;

export const dark_green_ListItem = n155;
const n156 = t([
  [12, 176],
  [13, 177],
  [14, 178],
  [15, 179],
  [16, 175],
  [17, 174],
  [18, 0],
  [19, 184],
  [20, 0],
  [21, 184],
  [22, 0],
  [23, 179],
  [24, 181],
  [25, 178],
  [26, 179],
  [27, 44],
]) as unknown as Theme;

export const dark_green_Card = n156;
export const dark_green_DrawerFrame = n156;
export const dark_green_Progress = n156;
export const dark_green_TooltipArrow = n156;
const n157 = t([
  [12, 177],
  [13, 178],
  [14, 179],
  [15, 181],
  [16, 176],
  [17, 175],
  [18, 0],
  [19, 184],
  [20, 0],
  [21, 184],
  [22, 184],
  [23, 275],
  [24, 275],
  [25, 179],
  [26, 181],
  [27, 181],
]) as unknown as Theme;

export const dark_green_Button = n157;
const n158 = t([
  [12, 175],
  [13, 176],
  [14, 177],
  [15, 178],
  [16, 174],
  [17, 263],
  [18, 0],
  [19, 184],
  [20, 0],
  [21, 184],
  [22, 264],
  [23, 181],
  [24, 44],
  [25, 179],
  [26, 181],
  [27, 182],
]) as unknown as Theme;

export const dark_green_Checkbox = n158;
export const dark_green_RadioGroupItem = n158;
export const dark_green_Input = n158;
export const dark_green_TextArea = n158;
const n159 = t([
  [12, 177],
  [13, 178],
  [14, 179],
  [15, 181],
  [16, 176],
  [17, 175],
  [18, 0],
  [19, 184],
  [20, 0],
  [21, 184],
  [22, 184],
  [23, 181],
  [24, 44],
  [25, 179],
  [26, 181],
  [27, 181],
]) as unknown as Theme;

export const dark_green_Switch = n159;
export const dark_green_TooltipContent = n159;
export const dark_green_SliderTrack = n159;
const n160 = t([
  [12, 0],
  [13, 0],
  [14, 184],
  [15, 183],
  [16, 0],
  [17, 0],
  [18, 174],
  [19, 175],
  [20, 174],
  [21, 175],
  [22, 174],
  [23, 183],
  [24, 182],
  [25, 184],
  [26, 183],
  [27, 175],
]) as unknown as Theme;

export const dark_green_SwitchThumb = n160;
const n161 = t([
  [12, 182],
  [13, 44],
  [14, 181],
  [15, 179],
  [16, 183],
  [17, 184],
  [18, 174],
  [19, 175],
  [20, 174],
  [21, 175],
  [22, 175],
  [23, 179],
  [24, 178],
  [25, 181],
  [26, 179],
  [27, 179],
]) as unknown as Theme;

export const dark_green_SliderTrackActive = n161;
const n162 = t([
  [12, 184],
  [13, 183],
  [14, 182],
  [15, 44],
  [16, 0],
  [17, 264],
  [18, 174],
  [19, 175],
  [20, 174],
  [21, 175],
  [22, 263],
  [23, 44],
  [24, 181],
  [25, 182],
  [26, 44],
  [27, 177],
]) as unknown as Theme;

export const dark_green_SliderThumb = n162;
export const dark_green_Tooltip = n162;
export const dark_green_ProgressIndicator = n162;
const n163 = t([
  [12, 153],
  [13, 154],
  [14, 155],
  [15, 156],
  [16, 152],
  [17, 265],
  [18, 0],
  [19, 162],
  [20, 0],
  [21, 162],
  [22, 266],
  [23, 156],
  [24, 157],
  [25, 155],
  [26, 156],
  [27, 160],
]) as unknown as Theme;

export const dark_blue_ListItem = n163;
const n164 = t([
  [12, 154],
  [13, 155],
  [14, 156],
  [15, 157],
  [16, 153],
  [17, 152],
  [18, 0],
  [19, 162],
  [20, 0],
  [21, 162],
  [22, 0],
  [23, 157],
  [24, 159],
  [25, 156],
  [26, 157],
  [27, 22],
]) as unknown as Theme;

export const dark_blue_Card = n164;
export const dark_blue_DrawerFrame = n164;
export const dark_blue_Progress = n164;
export const dark_blue_TooltipArrow = n164;
const n165 = t([
  [12, 155],
  [13, 156],
  [14, 157],
  [15, 159],
  [16, 154],
  [17, 153],
  [18, 0],
  [19, 162],
  [20, 0],
  [21, 162],
  [22, 162],
  [23, 275],
  [24, 275],
  [25, 157],
  [26, 159],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_Button = n165;
const n166 = t([
  [12, 153],
  [13, 154],
  [14, 155],
  [15, 156],
  [16, 152],
  [17, 265],
  [18, 0],
  [19, 162],
  [20, 0],
  [21, 162],
  [22, 266],
  [23, 159],
  [24, 22],
  [25, 157],
  [26, 159],
  [27, 160],
]) as unknown as Theme;

export const dark_blue_Checkbox = n166;
export const dark_blue_RadioGroupItem = n166;
export const dark_blue_Input = n166;
export const dark_blue_TextArea = n166;
const n167 = t([
  [12, 155],
  [13, 156],
  [14, 157],
  [15, 159],
  [16, 154],
  [17, 153],
  [18, 0],
  [19, 162],
  [20, 0],
  [21, 162],
  [22, 162],
  [23, 159],
  [24, 22],
  [25, 157],
  [26, 159],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_Switch = n167;
export const dark_blue_TooltipContent = n167;
export const dark_blue_SliderTrack = n167;
const n168 = t([
  [12, 0],
  [13, 0],
  [14, 162],
  [15, 161],
  [16, 0],
  [17, 0],
  [18, 152],
  [19, 153],
  [20, 152],
  [21, 153],
  [22, 152],
  [23, 161],
  [24, 160],
  [25, 162],
  [26, 161],
  [27, 153],
]) as unknown as Theme;

export const dark_blue_SwitchThumb = n168;
const n169 = t([
  [12, 160],
  [13, 22],
  [14, 159],
  [15, 157],
  [16, 161],
  [17, 162],
  [18, 152],
  [19, 153],
  [20, 152],
  [21, 153],
  [22, 153],
  [23, 157],
  [24, 156],
  [25, 159],
  [26, 157],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_SliderTrackActive = n169;
const n170 = t([
  [12, 162],
  [13, 161],
  [14, 160],
  [15, 22],
  [16, 0],
  [17, 266],
  [18, 152],
  [19, 153],
  [20, 152],
  [21, 153],
  [22, 265],
  [23, 22],
  [24, 159],
  [25, 160],
  [26, 22],
  [27, 155],
]) as unknown as Theme;

export const dark_blue_SliderThumb = n170;
export const dark_blue_Tooltip = n170;
export const dark_blue_ProgressIndicator = n170;
const n171 = t([
  [12, 208],
  [13, 209],
  [14, 210],
  [15, 211],
  [16, 207],
  [17, 267],
  [18, 0],
  [19, 217],
  [20, 0],
  [21, 217],
  [22, 268],
  [23, 211],
  [24, 212],
  [25, 210],
  [26, 211],
  [27, 215],
]) as unknown as Theme;

export const dark_purple_ListItem = n171;
const n172 = t([
  [12, 209],
  [13, 210],
  [14, 211],
  [15, 212],
  [16, 208],
  [17, 207],
  [18, 0],
  [19, 217],
  [20, 0],
  [21, 217],
  [22, 0],
  [23, 212],
  [24, 214],
  [25, 211],
  [26, 212],
  [27, 80],
]) as unknown as Theme;

export const dark_purple_Card = n172;
export const dark_purple_DrawerFrame = n172;
export const dark_purple_Progress = n172;
export const dark_purple_TooltipArrow = n172;
const n173 = t([
  [12, 210],
  [13, 211],
  [14, 212],
  [15, 214],
  [16, 209],
  [17, 208],
  [18, 0],
  [19, 217],
  [20, 0],
  [21, 217],
  [22, 217],
  [23, 275],
  [24, 275],
  [25, 212],
  [26, 214],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_Button = n173;
const n174 = t([
  [12, 208],
  [13, 209],
  [14, 210],
  [15, 211],
  [16, 207],
  [17, 267],
  [18, 0],
  [19, 217],
  [20, 0],
  [21, 217],
  [22, 268],
  [23, 214],
  [24, 80],
  [25, 212],
  [26, 214],
  [27, 215],
]) as unknown as Theme;

export const dark_purple_Checkbox = n174;
export const dark_purple_RadioGroupItem = n174;
export const dark_purple_Input = n174;
export const dark_purple_TextArea = n174;
const n175 = t([
  [12, 210],
  [13, 211],
  [14, 212],
  [15, 214],
  [16, 209],
  [17, 208],
  [18, 0],
  [19, 217],
  [20, 0],
  [21, 217],
  [22, 217],
  [23, 214],
  [24, 80],
  [25, 212],
  [26, 214],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_Switch = n175;
export const dark_purple_TooltipContent = n175;
export const dark_purple_SliderTrack = n175;
const n176 = t([
  [12, 0],
  [13, 0],
  [14, 217],
  [15, 216],
  [16, 0],
  [17, 0],
  [18, 207],
  [19, 208],
  [20, 207],
  [21, 208],
  [22, 207],
  [23, 216],
  [24, 215],
  [25, 217],
  [26, 216],
  [27, 208],
]) as unknown as Theme;

export const dark_purple_SwitchThumb = n176;
const n177 = t([
  [12, 215],
  [13, 80],
  [14, 214],
  [15, 212],
  [16, 216],
  [17, 217],
  [18, 207],
  [19, 208],
  [20, 207],
  [21, 208],
  [22, 208],
  [23, 212],
  [24, 211],
  [25, 214],
  [26, 212],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_SliderTrackActive = n177;
const n178 = t([
  [12, 217],
  [13, 216],
  [14, 215],
  [15, 80],
  [16, 0],
  [17, 268],
  [18, 207],
  [19, 208],
  [20, 207],
  [21, 208],
  [22, 267],
  [23, 80],
  [24, 214],
  [25, 215],
  [26, 80],
  [27, 210],
]) as unknown as Theme;

export const dark_purple_SliderThumb = n178;
export const dark_purple_Tooltip = n178;
export const dark_purple_ProgressIndicator = n178;
const n179 = t([
  [12, 197],
  [13, 198],
  [14, 199],
  [15, 200],
  [16, 196],
  [17, 269],
  [18, 0],
  [19, 206],
  [20, 0],
  [21, 206],
  [22, 270],
  [23, 200],
  [24, 201],
  [25, 199],
  [26, 200],
  [27, 204],
]) as unknown as Theme;

export const dark_pink_ListItem = n179;
const n180 = t([
  [12, 198],
  [13, 199],
  [14, 200],
  [15, 201],
  [16, 197],
  [17, 196],
  [18, 0],
  [19, 206],
  [20, 0],
  [21, 206],
  [22, 0],
  [23, 201],
  [24, 203],
  [25, 200],
  [26, 201],
  [27, 68],
]) as unknown as Theme;

export const dark_pink_Card = n180;
export const dark_pink_DrawerFrame = n180;
export const dark_pink_Progress = n180;
export const dark_pink_TooltipArrow = n180;
const n181 = t([
  [12, 199],
  [13, 200],
  [14, 201],
  [15, 203],
  [16, 198],
  [17, 197],
  [18, 0],
  [19, 206],
  [20, 0],
  [21, 206],
  [22, 206],
  [23, 275],
  [24, 275],
  [25, 201],
  [26, 203],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_Button = n181;
const n182 = t([
  [12, 197],
  [13, 198],
  [14, 199],
  [15, 200],
  [16, 196],
  [17, 269],
  [18, 0],
  [19, 206],
  [20, 0],
  [21, 206],
  [22, 270],
  [23, 203],
  [24, 68],
  [25, 201],
  [26, 203],
  [27, 204],
]) as unknown as Theme;

export const dark_pink_Checkbox = n182;
export const dark_pink_RadioGroupItem = n182;
export const dark_pink_Input = n182;
export const dark_pink_TextArea = n182;
const n183 = t([
  [12, 199],
  [13, 200],
  [14, 201],
  [15, 203],
  [16, 198],
  [17, 197],
  [18, 0],
  [19, 206],
  [20, 0],
  [21, 206],
  [22, 206],
  [23, 203],
  [24, 68],
  [25, 201],
  [26, 203],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_Switch = n183;
export const dark_pink_TooltipContent = n183;
export const dark_pink_SliderTrack = n183;
const n184 = t([
  [12, 0],
  [13, 0],
  [14, 206],
  [15, 205],
  [16, 0],
  [17, 0],
  [18, 196],
  [19, 197],
  [20, 196],
  [21, 197],
  [22, 196],
  [23, 205],
  [24, 204],
  [25, 206],
  [26, 205],
  [27, 197],
]) as unknown as Theme;

export const dark_pink_SwitchThumb = n184;
const n185 = t([
  [12, 204],
  [13, 68],
  [14, 203],
  [15, 201],
  [16, 205],
  [17, 206],
  [18, 196],
  [19, 197],
  [20, 196],
  [21, 197],
  [22, 197],
  [23, 201],
  [24, 200],
  [25, 203],
  [26, 201],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_SliderTrackActive = n185;
const n186 = t([
  [12, 206],
  [13, 205],
  [14, 204],
  [15, 68],
  [16, 0],
  [17, 270],
  [18, 196],
  [19, 197],
  [20, 196],
  [21, 197],
  [22, 269],
  [23, 68],
  [24, 203],
  [25, 204],
  [26, 68],
  [27, 199],
]) as unknown as Theme;

export const dark_pink_SliderThumb = n186;
export const dark_pink_Tooltip = n186;
export const dark_pink_ProgressIndicator = n186;
const n187 = t([
  [12, 219],
  [13, 220],
  [14, 221],
  [15, 222],
  [16, 218],
  [17, 271],
  [18, 0],
  [19, 228],
  [20, 0],
  [21, 228],
  [22, 272],
  [23, 222],
  [24, 223],
  [25, 221],
  [26, 222],
  [27, 226],
]) as unknown as Theme;

export const dark_red_ListItem = n187;
const n188 = t([
  [12, 220],
  [13, 221],
  [14, 222],
  [15, 223],
  [16, 219],
  [17, 218],
  [18, 0],
  [19, 228],
  [20, 0],
  [21, 228],
  [22, 0],
  [23, 223],
  [24, 225],
  [25, 222],
  [26, 223],
  [27, 92],
]) as unknown as Theme;

export const dark_red_Card = n188;
export const dark_red_DrawerFrame = n188;
export const dark_red_Progress = n188;
export const dark_red_TooltipArrow = n188;
const n189 = t([
  [12, 221],
  [13, 222],
  [14, 223],
  [15, 225],
  [16, 220],
  [17, 219],
  [18, 0],
  [19, 228],
  [20, 0],
  [21, 228],
  [22, 228],
  [23, 275],
  [24, 275],
  [25, 223],
  [26, 225],
  [27, 225],
]) as unknown as Theme;

export const dark_red_Button = n189;
const n190 = t([
  [12, 219],
  [13, 220],
  [14, 221],
  [15, 222],
  [16, 218],
  [17, 271],
  [18, 0],
  [19, 228],
  [20, 0],
  [21, 228],
  [22, 272],
  [23, 225],
  [24, 92],
  [25, 223],
  [26, 225],
  [27, 226],
]) as unknown as Theme;

export const dark_red_Checkbox = n190;
export const dark_red_RadioGroupItem = n190;
export const dark_red_Input = n190;
export const dark_red_TextArea = n190;
const n191 = t([
  [12, 221],
  [13, 222],
  [14, 223],
  [15, 225],
  [16, 220],
  [17, 219],
  [18, 0],
  [19, 228],
  [20, 0],
  [21, 228],
  [22, 228],
  [23, 225],
  [24, 92],
  [25, 223],
  [26, 225],
  [27, 225],
]) as unknown as Theme;

export const dark_red_Switch = n191;
export const dark_red_TooltipContent = n191;
export const dark_red_SliderTrack = n191;
const n192 = t([
  [12, 0],
  [13, 0],
  [14, 228],
  [15, 227],
  [16, 0],
  [17, 0],
  [18, 218],
  [19, 219],
  [20, 218],
  [21, 219],
  [22, 218],
  [23, 227],
  [24, 226],
  [25, 228],
  [26, 227],
  [27, 219],
]) as unknown as Theme;

export const dark_red_SwitchThumb = n192;
const n193 = t([
  [12, 226],
  [13, 92],
  [14, 225],
  [15, 223],
  [16, 227],
  [17, 228],
  [18, 218],
  [19, 219],
  [20, 218],
  [21, 219],
  [22, 219],
  [23, 223],
  [24, 222],
  [25, 225],
  [26, 223],
  [27, 223],
]) as unknown as Theme;

export const dark_red_SliderTrackActive = n193;
const n194 = t([
  [12, 228],
  [13, 227],
  [14, 226],
  [15, 92],
  [16, 0],
  [17, 272],
  [18, 218],
  [19, 219],
  [20, 218],
  [21, 219],
  [22, 271],
  [23, 92],
  [24, 225],
  [25, 226],
  [26, 92],
  [27, 221],
]) as unknown as Theme;

export const dark_red_SliderThumb = n194;
export const dark_red_Tooltip = n194;
export const dark_red_ProgressIndicator = n194;
const n195 = t([
  [12, 1],
  [13, 2],
  [14, 3],
  [15, 4],
  [16, 0],
  [17, 0],
  [18, 10],
  [19, 9],
  [20, 10],
  [21, 9],
  [22, 11],
  [23, 4],
  [24, 5],
  [25, 3],
  [26, 4],
  [27, 8],
]) as unknown as Theme;

export const light_alt1_ListItem = n195;
const n196 = t([
  [12, 3],
  [13, 4],
  [14, 5],
  [15, 6],
  [16, 2],
  [17, 1],
  [18, 10],
  [19, 9],
  [20, 10],
  [21, 9],
  [22, 10],
  [23, 6],
  [24, 7],
  [25, 5],
  [26, 6],
  [27, 6],
]) as unknown as Theme;

export const light_alt1_Card = n196;
export const light_alt1_DrawerFrame = n196;
export const light_alt1_Progress = n196;
export const light_alt1_TooltipArrow = n196;
const n197 = t([
  [12, 4],
  [13, 5],
  [14, 6],
  [15, 7],
  [16, 3],
  [17, 2],
  [18, 10],
  [19, 9],
  [20, 10],
  [21, 9],
  [22, 9],
  [23, 275],
  [24, 275],
  [25, 6],
  [26, 7],
  [27, 5],
]) as unknown as Theme;

export const light_alt1_Button = n197;
const n198 = t([
  [12, 2],
  [13, 3],
  [14, 4],
  [15, 5],
  [16, 1],
  [17, 0],
  [18, 10],
  [19, 9],
  [20, 10],
  [21, 9],
  [22, 11],
  [23, 7],
  [24, 8],
  [25, 6],
  [26, 7],
  [27, 7],
]) as unknown as Theme;

export const light_alt1_Checkbox = n198;
export const light_alt1_RadioGroupItem = n198;
export const light_alt1_Input = n198;
export const light_alt1_TextArea = n198;
const n199 = t([
  [12, 4],
  [13, 5],
  [14, 6],
  [15, 7],
  [16, 3],
  [17, 2],
  [18, 10],
  [19, 9],
  [20, 10],
  [21, 9],
  [22, 9],
  [23, 7],
  [24, 8],
  [25, 6],
  [26, 7],
  [27, 5],
]) as unknown as Theme;

export const light_alt1_Switch = n199;
export const light_alt1_TooltipContent = n199;
export const light_alt1_SliderTrack = n199;
const n200 = t([
  [12, 11],
  [13, 10],
  [14, 9],
  [15, 8],
  [16, 11],
  [17, 11],
  [18, 1],
  [19, 2],
  [20, 1],
  [21, 2],
  [22, 0],
  [23, 8],
  [24, 7],
  [25, 9],
  [26, 8],
  [27, 2],
]) as unknown as Theme;

export const light_alt1_SwitchThumb = n200;
const n201 = t([
  [12, 7],
  [13, 6],
  [14, 5],
  [15, 4],
  [16, 8],
  [17, 9],
  [18, 1],
  [19, 2],
  [20, 1],
  [21, 2],
  [22, 2],
  [23, 4],
  [24, 3],
  [25, 5],
  [26, 4],
  [27, 6],
]) as unknown as Theme;

export const light_alt1_SliderTrackActive = n201;
const n202 = t([
  [12, 9],
  [13, 8],
  [14, 7],
  [15, 6],
  [16, 10],
  [17, 11],
  [18, 1],
  [19, 2],
  [20, 1],
  [21, 2],
  [22, 0],
  [23, 6],
  [24, 5],
  [25, 7],
  [26, 6],
  [27, 4],
]) as unknown as Theme;

export const light_alt1_SliderThumb = n202;
export const light_alt1_Tooltip = n202;
export const light_alt1_ProgressIndicator = n202;
const n203 = t([
  [12, 2],
  [13, 3],
  [14, 4],
  [15, 5],
  [16, 1],
  [17, 0],
  [18, 9],
  [19, 8],
  [20, 9],
  [21, 8],
  [22, 11],
  [23, 5],
  [24, 6],
  [25, 4],
  [26, 5],
  [27, 7],
]) as unknown as Theme;

export const light_alt2_ListItem = n203;
const n204 = t([
  [12, 4],
  [13, 5],
  [14, 6],
  [15, 7],
  [16, 3],
  [17, 2],
  [18, 9],
  [19, 8],
  [20, 9],
  [21, 8],
  [22, 9],
  [23, 7],
  [24, 8],
  [25, 6],
  [26, 7],
  [27, 5],
]) as unknown as Theme;

export const light_alt2_Card = n204;
export const light_alt2_DrawerFrame = n204;
export const light_alt2_Progress = n204;
export const light_alt2_TooltipArrow = n204;
const n205 = t([
  [12, 5],
  [13, 6],
  [14, 7],
  [15, 8],
  [16, 4],
  [17, 3],
  [18, 9],
  [19, 8],
  [20, 9],
  [21, 8],
  [22, 8],
  [23, 275],
  [24, 275],
  [25, 7],
  [26, 8],
  [27, 4],
]) as unknown as Theme;

export const light_alt2_Button = n205;
const n206 = t([
  [12, 3],
  [13, 4],
  [14, 5],
  [15, 6],
  [16, 2],
  [17, 1],
  [18, 9],
  [19, 8],
  [20, 9],
  [21, 8],
  [22, 10],
  [23, 8],
  [24, 9],
  [25, 7],
  [26, 8],
  [27, 6],
]) as unknown as Theme;

export const light_alt2_Checkbox = n206;
export const light_alt2_RadioGroupItem = n206;
export const light_alt2_Input = n206;
export const light_alt2_TextArea = n206;
const n207 = t([
  [12, 5],
  [13, 6],
  [14, 7],
  [15, 8],
  [16, 4],
  [17, 3],
  [18, 9],
  [19, 8],
  [20, 9],
  [21, 8],
  [22, 8],
  [23, 8],
  [24, 9],
  [25, 7],
  [26, 8],
  [27, 4],
]) as unknown as Theme;

export const light_alt2_Switch = n207;
export const light_alt2_TooltipContent = n207;
export const light_alt2_SliderTrack = n207;
const n208 = t([
  [12, 10],
  [13, 9],
  [14, 8],
  [15, 7],
  [16, 11],
  [17, 11],
  [18, 2],
  [19, 3],
  [20, 2],
  [21, 3],
  [22, 0],
  [23, 7],
  [24, 6],
  [25, 8],
  [26, 7],
  [27, 3],
]) as unknown as Theme;

export const light_alt2_SwitchThumb = n208;
const n209 = t([
  [12, 6],
  [13, 5],
  [14, 4],
  [15, 3],
  [16, 7],
  [17, 8],
  [18, 2],
  [19, 3],
  [20, 2],
  [21, 3],
  [22, 3],
  [23, 3],
  [24, 2],
  [25, 4],
  [26, 3],
  [27, 7],
]) as unknown as Theme;

export const light_alt2_SliderTrackActive = n209;
const n210 = t([
  [12, 8],
  [13, 7],
  [14, 6],
  [15, 5],
  [16, 9],
  [17, 10],
  [18, 2],
  [19, 3],
  [20, 2],
  [21, 3],
  [22, 1],
  [23, 5],
  [24, 4],
  [25, 6],
  [26, 5],
  [27, 5],
]) as unknown as Theme;

export const light_alt2_SliderThumb = n210;
export const light_alt2_Tooltip = n210;
export const light_alt2_ProgressIndicator = n210;
const n211 = t([
  [12, 3],
  [13, 4],
  [14, 5],
  [15, 6],
  [16, 2],
  [17, 1],
  [19, 7],
  [20, 8],
  [21, 7],
  [22, 10],
  [23, 6],
  [24, 7],
  [25, 5],
  [26, 6],
  [27, 6],
]) as unknown as Theme;

export const light_active_ListItem = n211;
const n212 = t([
  [12, 5],
  [13, 6],
  [14, 7],
  [15, 8],
  [16, 4],
  [17, 3],
  [19, 7],
  [20, 8],
  [21, 7],
  [22, 8],
  [23, 8],
  [24, 9],
  [25, 7],
  [26, 8],
  [27, 4],
]) as unknown as Theme;

export const light_active_Card = n212;
export const light_active_DrawerFrame = n212;
export const light_active_Progress = n212;
export const light_active_TooltipArrow = n212;
const n213 = t([
  [12, 6],
  [13, 7],
  [14, 8],
  [15, 9],
  [16, 5],
  [17, 4],
  [19, 7],
  [20, 8],
  [21, 7],
  [22, 7],
  [23, 275],
  [24, 275],
  [25, 8],
  [26, 9],
  [27, 3],
]) as unknown as Theme;

export const light_active_Button = n213;
const n214 = t([
  [12, 4],
  [13, 5],
  [14, 6],
  [15, 7],
  [16, 3],
  [17, 2],
  [19, 7],
  [20, 8],
  [21, 7],
  [22, 9],
  [23, 9],
  [24, 10],
  [25, 8],
  [26, 9],
  [27, 5],
]) as unknown as Theme;

export const light_active_Checkbox = n214;
export const light_active_RadioGroupItem = n214;
export const light_active_Input = n214;
export const light_active_TextArea = n214;
const n215 = t([
  [12, 6],
  [13, 7],
  [14, 8],
  [15, 9],
  [16, 5],
  [17, 4],
  [19, 7],
  [20, 8],
  [21, 7],
  [22, 7],
  [23, 9],
  [24, 10],
  [25, 8],
  [26, 9],
  [27, 3],
]) as unknown as Theme;

export const light_active_Switch = n215;
export const light_active_TooltipContent = n215;
export const light_active_SliderTrack = n215;
const n216 = t([
  [12, 9],
  [13, 8],
  [14, 7],
  [15, 6],
  [16, 10],
  [17, 11],
  [19, 4],
  [20, 3],
  [21, 4],
  [22, 0],
  [23, 6],
  [24, 5],
  [25, 7],
  [26, 6],
  [27, 4],
]) as unknown as Theme;

export const light_active_SwitchThumb = n216;
const n217 = t([
  [12, 5],
  [13, 4],
  [14, 3],
  [15, 2],
  [16, 6],
  [17, 7],
  [19, 4],
  [20, 3],
  [21, 4],
  [22, 4],
  [23, 2],
  [24, 1],
  [25, 3],
  [26, 2],
  [27, 8],
]) as unknown as Theme;

export const light_active_SliderTrackActive = n217;
const n218 = t([
  [12, 7],
  [13, 6],
  [14, 5],
  [15, 4],
  [16, 8],
  [17, 9],
  [19, 4],
  [20, 3],
  [21, 4],
  [22, 2],
  [23, 4],
  [24, 3],
  [25, 5],
  [26, 4],
  [27, 6],
]) as unknown as Theme;

export const light_active_SliderThumb = n218;
export const light_active_Tooltip = n218;
export const light_active_ProgressIndicator = n218;
const n219 = t([
  [12, 144],
  [13, 145],
  [14, 146],
  [15, 147],
  [16, 143],
  [17, 142],
  [18, 151],
  [19, 150],
  [20, 151],
  [21, 150],
  [22, 0],
  [23, 147],
  [24, 148],
  [25, 146],
  [26, 147],
  [27, 149],
]) as unknown as Theme;

export const dark_alt1_ListItem = n219;
const n220 = t([
  [12, 145],
  [13, 146],
  [14, 147],
  [15, 148],
  [16, 144],
  [17, 143],
  [18, 151],
  [19, 150],
  [20, 151],
  [21, 150],
  [22, 151],
  [23, 148],
  [24, 149],
  [25, 147],
  [26, 148],
  [27, 148],
]) as unknown as Theme;

export const dark_alt1_Card = n220;
export const dark_alt1_DrawerFrame = n220;
export const dark_alt1_Progress = n220;
export const dark_alt1_TooltipArrow = n220;
const n221 = t([
  [12, 146],
  [13, 147],
  [14, 148],
  [15, 149],
  [16, 145],
  [17, 144],
  [18, 151],
  [19, 150],
  [20, 151],
  [21, 150],
  [22, 150],
  [23, 275],
  [24, 275],
  [25, 148],
  [26, 149],
  [27, 147],
]) as unknown as Theme;

export const dark_alt1_Button = n221;
const n222 = t([
  [12, 144],
  [13, 145],
  [14, 146],
  [15, 147],
  [16, 143],
  [17, 142],
  [18, 151],
  [19, 150],
  [20, 151],
  [21, 150],
  [22, 0],
  [23, 149],
  [24, 138],
  [25, 148],
  [26, 149],
  [27, 149],
]) as unknown as Theme;

export const dark_alt1_Checkbox = n222;
export const dark_alt1_RadioGroupItem = n222;
export const dark_alt1_Input = n222;
export const dark_alt1_TextArea = n222;
const n223 = t([
  [12, 146],
  [13, 147],
  [14, 148],
  [15, 149],
  [16, 145],
  [17, 144],
  [18, 151],
  [19, 150],
  [20, 151],
  [21, 150],
  [22, 150],
  [23, 149],
  [24, 138],
  [25, 148],
  [26, 149],
  [27, 147],
]) as unknown as Theme;

export const dark_alt1_Switch = n223;
export const dark_alt1_TooltipContent = n223;
export const dark_alt1_SliderTrack = n223;
const n224 = t([
  [12, 0],
  [13, 151],
  [14, 150],
  [15, 138],
  [16, 0],
  [17, 0],
  [18, 143],
  [19, 144],
  [20, 143],
  [21, 144],
  [22, 142],
  [23, 138],
  [24, 149],
  [25, 150],
  [26, 138],
  [27, 144],
]) as unknown as Theme;

export const dark_alt1_SwitchThumb = n224;
const n225 = t([
  [12, 149],
  [13, 148],
  [14, 147],
  [15, 146],
  [16, 138],
  [17, 150],
  [18, 143],
  [19, 144],
  [20, 143],
  [21, 144],
  [22, 144],
  [23, 146],
  [24, 145],
  [25, 147],
  [26, 146],
  [27, 148],
]) as unknown as Theme;

export const dark_alt1_SliderTrackActive = n225;
const n226 = t([
  [12, 150],
  [13, 138],
  [14, 149],
  [15, 148],
  [16, 151],
  [17, 0],
  [18, 143],
  [19, 144],
  [20, 143],
  [21, 144],
  [22, 142],
  [23, 148],
  [24, 147],
  [25, 149],
  [26, 148],
  [27, 146],
]) as unknown as Theme;

export const dark_alt1_SliderThumb = n226;
export const dark_alt1_Tooltip = n226;
export const dark_alt1_ProgressIndicator = n226;
const n227 = t([
  [12, 145],
  [13, 146],
  [14, 147],
  [15, 148],
  [16, 144],
  [17, 143],
  [18, 150],
  [19, 138],
  [20, 150],
  [21, 138],
  [22, 151],
  [23, 148],
  [24, 149],
  [25, 147],
  [26, 148],
  [27, 148],
]) as unknown as Theme;

export const dark_alt2_ListItem = n227;
const n228 = t([
  [12, 146],
  [13, 147],
  [14, 148],
  [15, 149],
  [16, 145],
  [17, 144],
  [18, 150],
  [19, 138],
  [20, 150],
  [21, 138],
  [22, 150],
  [23, 149],
  [24, 138],
  [25, 148],
  [26, 149],
  [27, 147],
]) as unknown as Theme;

export const dark_alt2_Card = n228;
export const dark_alt2_DrawerFrame = n228;
export const dark_alt2_Progress = n228;
export const dark_alt2_TooltipArrow = n228;
const n229 = t([
  [12, 147],
  [13, 148],
  [14, 149],
  [15, 138],
  [16, 146],
  [17, 145],
  [18, 150],
  [19, 138],
  [20, 150],
  [21, 138],
  [22, 138],
  [23, 275],
  [24, 275],
  [25, 149],
  [26, 138],
  [27, 146],
]) as unknown as Theme;

export const dark_alt2_Button = n229;
const n230 = t([
  [12, 145],
  [13, 146],
  [14, 147],
  [15, 148],
  [16, 144],
  [17, 143],
  [18, 150],
  [19, 138],
  [20, 150],
  [21, 138],
  [22, 151],
  [23, 138],
  [24, 150],
  [25, 149],
  [26, 138],
  [27, 148],
]) as unknown as Theme;

export const dark_alt2_Checkbox = n230;
export const dark_alt2_RadioGroupItem = n230;
export const dark_alt2_Input = n230;
export const dark_alt2_TextArea = n230;
const n231 = t([
  [12, 147],
  [13, 148],
  [14, 149],
  [15, 138],
  [16, 146],
  [17, 145],
  [18, 150],
  [19, 138],
  [20, 150],
  [21, 138],
  [22, 138],
  [23, 138],
  [24, 150],
  [25, 149],
  [26, 138],
  [27, 146],
]) as unknown as Theme;

export const dark_alt2_Switch = n231;
export const dark_alt2_TooltipContent = n231;
export const dark_alt2_SliderTrack = n231;
const n232 = t([
  [12, 151],
  [13, 150],
  [14, 138],
  [15, 149],
  [16, 0],
  [17, 0],
  [18, 144],
  [19, 145],
  [20, 144],
  [21, 145],
  [22, 142],
  [23, 149],
  [24, 148],
  [25, 138],
  [26, 149],
  [27, 145],
]) as unknown as Theme;

export const dark_alt2_SwitchThumb = n232;
const n233 = t([
  [12, 148],
  [13, 147],
  [14, 146],
  [15, 145],
  [16, 149],
  [17, 138],
  [18, 144],
  [19, 145],
  [20, 144],
  [21, 145],
  [22, 145],
  [23, 145],
  [24, 144],
  [25, 146],
  [26, 145],
  [27, 149],
]) as unknown as Theme;

export const dark_alt2_SliderTrackActive = n233;
const n234 = t([
  [12, 138],
  [13, 149],
  [14, 148],
  [15, 147],
  [16, 150],
  [17, 151],
  [18, 144],
  [19, 145],
  [20, 144],
  [21, 145],
  [22, 143],
  [23, 147],
  [24, 146],
  [25, 148],
  [26, 147],
  [27, 147],
]) as unknown as Theme;

export const dark_alt2_SliderThumb = n234;
export const dark_alt2_Tooltip = n234;
export const dark_alt2_ProgressIndicator = n234;
const n235 = t([
  [12, 146],
  [13, 147],
  [14, 148],
  [15, 149],
  [16, 145],
  [17, 144],
  [19, 149],
  [20, 138],
  [21, 149],
  [22, 150],
  [23, 149],
  [24, 138],
  [25, 148],
  [26, 149],
  [27, 147],
]) as unknown as Theme;

export const dark_active_ListItem = n235;
const n236 = t([
  [12, 147],
  [13, 148],
  [14, 149],
  [15, 138],
  [16, 146],
  [17, 145],
  [19, 149],
  [20, 138],
  [21, 149],
  [22, 138],
  [23, 138],
  [24, 150],
  [25, 149],
  [26, 138],
  [27, 146],
]) as unknown as Theme;

export const dark_active_Card = n236;
export const dark_active_DrawerFrame = n236;
export const dark_active_Progress = n236;
export const dark_active_TooltipArrow = n236;
const n237 = t([
  [12, 148],
  [13, 149],
  [14, 138],
  [15, 150],
  [16, 147],
  [17, 146],
  [19, 149],
  [20, 138],
  [21, 149],
  [22, 149],
  [23, 275],
  [24, 275],
  [25, 138],
  [26, 150],
  [27, 145],
]) as unknown as Theme;

export const dark_active_Button = n237;
const n238 = t([
  [12, 146],
  [13, 147],
  [14, 148],
  [15, 149],
  [16, 145],
  [17, 144],
  [19, 149],
  [20, 138],
  [21, 149],
  [22, 150],
  [23, 150],
  [24, 151],
  [25, 138],
  [26, 150],
  [27, 147],
]) as unknown as Theme;

export const dark_active_Checkbox = n238;
export const dark_active_RadioGroupItem = n238;
export const dark_active_Input = n238;
export const dark_active_TextArea = n238;
const n239 = t([
  [12, 148],
  [13, 149],
  [14, 138],
  [15, 150],
  [16, 147],
  [17, 146],
  [19, 149],
  [20, 138],
  [21, 149],
  [22, 149],
  [23, 150],
  [24, 151],
  [25, 138],
  [26, 150],
  [27, 145],
]) as unknown as Theme;

export const dark_active_Switch = n239;
export const dark_active_TooltipContent = n239;
export const dark_active_SliderTrack = n239;
const n240 = t([
  [12, 150],
  [13, 138],
  [14, 149],
  [15, 148],
  [16, 151],
  [17, 0],
  [19, 146],
  [20, 145],
  [21, 146],
  [22, 142],
  [23, 148],
  [24, 147],
  [25, 149],
  [26, 148],
  [27, 146],
]) as unknown as Theme;

export const dark_active_SwitchThumb = n240;
const n241 = t([
  [12, 147],
  [13, 146],
  [14, 145],
  [15, 144],
  [16, 148],
  [17, 149],
  [19, 146],
  [20, 145],
  [21, 146],
  [22, 146],
  [23, 144],
  [24, 143],
  [25, 145],
  [26, 144],
  [27, 138],
]) as unknown as Theme;

export const dark_active_SliderTrackActive = n241;
const n242 = t([
  [12, 149],
  [13, 148],
  [14, 147],
  [15, 146],
  [16, 138],
  [17, 150],
  [19, 146],
  [20, 145],
  [21, 146],
  [22, 144],
  [23, 146],
  [24, 145],
  [25, 147],
  [26, 146],
  [27, 148],
]) as unknown as Theme;

export const dark_active_SliderThumb = n242;
export const dark_active_Tooltip = n242;
export const dark_active_ProgressIndicator = n242;
const n243 = t([
  [12, 49],
  [13, 50],
  [14, 51],
  [15, 52],
  [16, 48],
  [17, 48],
  [18, 59],
  [19, 58],
  [20, 59],
  [21, 58],
  [22, 11],
  [23, 51],
  [24, 52],
  [25, 51],
  [26, 51],
  [27, 57],
]) as unknown as Theme;

export const light_orange_alt1_ListItem = n243;
const n244 = t([
  [12, 51],
  [13, 52],
  [14, 53],
  [15, 55],
  [16, 50],
  [17, 49],
  [18, 59],
  [19, 58],
  [20, 59],
  [21, 58],
  [22, 59],
  [23, 53],
  [24, 55],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_alt1_Card = n244;
export const light_orange_alt1_DrawerFrame = n244;
export const light_orange_alt1_Progress = n244;
export const light_orange_alt1_TooltipArrow = n244;
const n245 = t([
  [12, 52],
  [13, 53],
  [14, 55],
  [15, 56],
  [16, 51],
  [17, 50],
  [18, 59],
  [19, 58],
  [20, 59],
  [21, 58],
  [22, 58],
  [23, 275],
  [24, 275],
  [25, 55],
  [26, 55],
  [27, 53],
]) as unknown as Theme;

export const light_orange_alt1_Button = n245;
const n246 = t([
  [12, 50],
  [13, 51],
  [14, 52],
  [15, 53],
  [16, 49],
  [17, 48],
  [18, 59],
  [19, 58],
  [20, 59],
  [21, 58],
  [22, 11],
  [23, 55],
  [24, 56],
  [25, 55],
  [26, 55],
  [27, 56],
]) as unknown as Theme;

export const light_orange_alt1_Checkbox = n246;
export const light_orange_alt1_RadioGroupItem = n246;
export const light_orange_alt1_Input = n246;
export const light_orange_alt1_TextArea = n246;
const n247 = t([
  [12, 52],
  [13, 53],
  [14, 55],
  [15, 56],
  [16, 51],
  [17, 50],
  [18, 59],
  [19, 58],
  [20, 59],
  [21, 58],
  [22, 58],
  [23, 55],
  [24, 56],
  [25, 55],
  [26, 55],
  [27, 53],
]) as unknown as Theme;

export const light_orange_alt1_Switch = n247;
export const light_orange_alt1_TooltipContent = n247;
export const light_orange_alt1_SliderTrack = n247;
const n248 = t([
  [12, 11],
  [13, 59],
  [14, 58],
  [15, 57],
  [16, 11],
  [17, 11],
  [18, 49],
  [19, 50],
  [20, 49],
  [21, 50],
  [22, 48],
  [23, 58],
  [24, 57],
  [25, 58],
  [26, 58],
  [27, 50],
]) as unknown as Theme;

export const light_orange_alt1_SwitchThumb = n248;
const n249 = t([
  [12, 56],
  [13, 55],
  [14, 53],
  [15, 52],
  [16, 57],
  [17, 58],
  [18, 49],
  [19, 50],
  [20, 49],
  [21, 50],
  [22, 50],
  [23, 53],
  [24, 52],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_alt1_SliderTrackActive = n249;
const n250 = t([
  [12, 58],
  [13, 57],
  [14, 56],
  [15, 55],
  [16, 59],
  [17, 11],
  [18, 49],
  [19, 50],
  [20, 49],
  [21, 50],
  [22, 48],
  [23, 56],
  [24, 55],
  [25, 56],
  [26, 56],
  [27, 52],
]) as unknown as Theme;

export const light_orange_alt1_SliderThumb = n250;
export const light_orange_alt1_Tooltip = n250;
export const light_orange_alt1_ProgressIndicator = n250;
const n251 = t([
  [12, 50],
  [13, 51],
  [14, 52],
  [15, 53],
  [16, 49],
  [17, 48],
  [18, 58],
  [19, 57],
  [20, 58],
  [21, 57],
  [22, 11],
  [23, 52],
  [24, 53],
  [25, 52],
  [26, 52],
  [27, 56],
]) as unknown as Theme;

export const light_orange_alt2_ListItem = n251;
const n252 = t([
  [12, 52],
  [13, 53],
  [14, 55],
  [15, 56],
  [16, 51],
  [17, 50],
  [18, 58],
  [19, 57],
  [20, 58],
  [21, 57],
  [22, 58],
  [23, 55],
  [24, 56],
  [25, 55],
  [26, 55],
  [27, 53],
]) as unknown as Theme;

export const light_orange_alt2_Card = n252;
export const light_orange_alt2_DrawerFrame = n252;
export const light_orange_alt2_Progress = n252;
export const light_orange_alt2_TooltipArrow = n252;
const n253 = t([
  [12, 53],
  [13, 55],
  [14, 56],
  [15, 57],
  [16, 52],
  [17, 51],
  [18, 58],
  [19, 57],
  [20, 58],
  [21, 57],
  [22, 57],
  [23, 275],
  [24, 275],
  [25, 56],
  [26, 56],
  [27, 52],
]) as unknown as Theme;

export const light_orange_alt2_Button = n253;
const n254 = t([
  [12, 51],
  [13, 52],
  [14, 53],
  [15, 55],
  [16, 50],
  [17, 49],
  [18, 58],
  [19, 57],
  [20, 58],
  [21, 57],
  [22, 59],
  [23, 56],
  [24, 57],
  [25, 56],
  [26, 56],
  [27, 55],
]) as unknown as Theme;

export const light_orange_alt2_Checkbox = n254;
export const light_orange_alt2_RadioGroupItem = n254;
export const light_orange_alt2_Input = n254;
export const light_orange_alt2_TextArea = n254;
const n255 = t([
  [12, 53],
  [13, 55],
  [14, 56],
  [15, 57],
  [16, 52],
  [17, 51],
  [18, 58],
  [19, 57],
  [20, 58],
  [21, 57],
  [22, 57],
  [23, 56],
  [24, 57],
  [25, 56],
  [26, 56],
  [27, 52],
]) as unknown as Theme;

export const light_orange_alt2_Switch = n255;
export const light_orange_alt2_TooltipContent = n255;
export const light_orange_alt2_SliderTrack = n255;
const n256 = t([
  [12, 59],
  [13, 58],
  [14, 57],
  [15, 56],
  [16, 11],
  [17, 11],
  [18, 50],
  [19, 51],
  [20, 50],
  [21, 51],
  [22, 48],
  [23, 57],
  [24, 56],
  [25, 57],
  [26, 57],
  [27, 51],
]) as unknown as Theme;

export const light_orange_alt2_SwitchThumb = n256;
const n257 = t([
  [12, 55],
  [13, 53],
  [14, 52],
  [15, 51],
  [16, 56],
  [17, 57],
  [18, 50],
  [19, 51],
  [20, 50],
  [21, 51],
  [22, 51],
  [23, 52],
  [24, 51],
  [25, 52],
  [26, 52],
  [27, 56],
]) as unknown as Theme;

export const light_orange_alt2_SliderTrackActive = n257;
const n258 = t([
  [12, 57],
  [13, 56],
  [14, 55],
  [15, 53],
  [16, 58],
  [17, 59],
  [18, 50],
  [19, 51],
  [20, 50],
  [21, 51],
  [22, 49],
  [23, 55],
  [24, 53],
  [25, 55],
  [26, 55],
  [27, 53],
]) as unknown as Theme;

export const light_orange_alt2_SliderThumb = n258;
export const light_orange_alt2_Tooltip = n258;
export const light_orange_alt2_ProgressIndicator = n258;
const n259 = t([
  [12, 51],
  [13, 52],
  [14, 53],
  [15, 55],
  [16, 50],
  [17, 49],
  [19, 56],
  [20, 57],
  [21, 56],
  [22, 59],
  [23, 53],
  [24, 55],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_active_ListItem = n259;
const n260 = t([
  [12, 53],
  [13, 55],
  [14, 56],
  [15, 57],
  [16, 52],
  [17, 51],
  [19, 56],
  [20, 57],
  [21, 56],
  [22, 57],
  [23, 56],
  [24, 57],
  [25, 56],
  [26, 56],
  [27, 52],
]) as unknown as Theme;

export const light_orange_active_Card = n260;
export const light_orange_active_DrawerFrame = n260;
export const light_orange_active_Progress = n260;
export const light_orange_active_TooltipArrow = n260;
const n261 = t([
  [12, 55],
  [13, 56],
  [14, 57],
  [15, 58],
  [16, 53],
  [17, 52],
  [19, 56],
  [20, 57],
  [21, 56],
  [22, 56],
  [23, 275],
  [24, 275],
  [25, 57],
  [26, 57],
  [27, 51],
]) as unknown as Theme;

export const light_orange_active_Button = n261;
const n262 = t([
  [12, 52],
  [13, 53],
  [14, 55],
  [15, 56],
  [16, 51],
  [17, 50],
  [19, 56],
  [20, 57],
  [21, 56],
  [22, 58],
  [23, 57],
  [24, 58],
  [25, 57],
  [26, 57],
  [27, 53],
]) as unknown as Theme;

export const light_orange_active_Checkbox = n262;
export const light_orange_active_RadioGroupItem = n262;
export const light_orange_active_Input = n262;
export const light_orange_active_TextArea = n262;
const n263 = t([
  [12, 55],
  [13, 56],
  [14, 57],
  [15, 58],
  [16, 53],
  [17, 52],
  [19, 56],
  [20, 57],
  [21, 56],
  [22, 56],
  [23, 57],
  [24, 58],
  [25, 57],
  [26, 57],
  [27, 51],
]) as unknown as Theme;

export const light_orange_active_Switch = n263;
export const light_orange_active_TooltipContent = n263;
export const light_orange_active_SliderTrack = n263;
const n264 = t([
  [12, 58],
  [13, 57],
  [14, 56],
  [15, 55],
  [16, 59],
  [17, 11],
  [19, 52],
  [20, 51],
  [21, 52],
  [22, 48],
  [23, 56],
  [24, 55],
  [25, 56],
  [26, 56],
  [27, 52],
]) as unknown as Theme;

export const light_orange_active_SwitchThumb = n264;
const n265 = t([
  [12, 53],
  [13, 52],
  [14, 51],
  [15, 50],
  [16, 55],
  [17, 56],
  [19, 52],
  [20, 51],
  [21, 52],
  [22, 52],
  [23, 51],
  [24, 50],
  [25, 51],
  [26, 51],
  [27, 57],
]) as unknown as Theme;

export const light_orange_active_SliderTrackActive = n265;
const n266 = t([
  [12, 56],
  [13, 55],
  [14, 53],
  [15, 52],
  [16, 57],
  [17, 58],
  [19, 52],
  [20, 51],
  [21, 52],
  [22, 50],
  [23, 53],
  [24, 52],
  [25, 53],
  [26, 53],
  [27, 55],
]) as unknown as Theme;

export const light_orange_active_SliderThumb = n266;
export const light_orange_active_Tooltip = n266;
export const light_orange_active_ProgressIndicator = n266;
const n267 = t([
  [12, 97],
  [13, 98],
  [14, 99],
  [15, 100],
  [16, 96],
  [17, 96],
  [18, 107],
  [19, 106],
  [20, 107],
  [21, 106],
  [22, 11],
  [23, 99],
  [24, 100],
  [25, 99],
  [26, 99],
  [27, 105],
]) as unknown as Theme;

export const light_yellow_alt1_ListItem = n267;
const n268 = t([
  [12, 99],
  [13, 100],
  [14, 101],
  [15, 103],
  [16, 98],
  [17, 97],
  [18, 107],
  [19, 106],
  [20, 107],
  [21, 106],
  [22, 107],
  [23, 101],
  [24, 103],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_alt1_Card = n268;
export const light_yellow_alt1_DrawerFrame = n268;
export const light_yellow_alt1_Progress = n268;
export const light_yellow_alt1_TooltipArrow = n268;
const n269 = t([
  [12, 100],
  [13, 101],
  [14, 103],
  [15, 104],
  [16, 99],
  [17, 98],
  [18, 107],
  [19, 106],
  [20, 107],
  [21, 106],
  [22, 106],
  [23, 275],
  [24, 275],
  [25, 103],
  [26, 103],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_alt1_Button = n269;
const n270 = t([
  [12, 98],
  [13, 99],
  [14, 100],
  [15, 101],
  [16, 97],
  [17, 96],
  [18, 107],
  [19, 106],
  [20, 107],
  [21, 106],
  [22, 11],
  [23, 103],
  [24, 104],
  [25, 103],
  [26, 103],
  [27, 104],
]) as unknown as Theme;

export const light_yellow_alt1_Checkbox = n270;
export const light_yellow_alt1_RadioGroupItem = n270;
export const light_yellow_alt1_Input = n270;
export const light_yellow_alt1_TextArea = n270;
const n271 = t([
  [12, 100],
  [13, 101],
  [14, 103],
  [15, 104],
  [16, 99],
  [17, 98],
  [18, 107],
  [19, 106],
  [20, 107],
  [21, 106],
  [22, 106],
  [23, 103],
  [24, 104],
  [25, 103],
  [26, 103],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_alt1_Switch = n271;
export const light_yellow_alt1_TooltipContent = n271;
export const light_yellow_alt1_SliderTrack = n271;
const n272 = t([
  [12, 11],
  [13, 107],
  [14, 106],
  [15, 105],
  [16, 11],
  [17, 11],
  [18, 97],
  [19, 98],
  [20, 97],
  [21, 98],
  [22, 96],
  [23, 106],
  [24, 105],
  [25, 106],
  [26, 106],
  [27, 98],
]) as unknown as Theme;

export const light_yellow_alt1_SwitchThumb = n272;
const n273 = t([
  [12, 104],
  [13, 103],
  [14, 101],
  [15, 100],
  [16, 105],
  [17, 106],
  [18, 97],
  [19, 98],
  [20, 97],
  [21, 98],
  [22, 98],
  [23, 101],
  [24, 100],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_alt1_SliderTrackActive = n273;
const n274 = t([
  [12, 106],
  [13, 105],
  [14, 104],
  [15, 103],
  [16, 107],
  [17, 11],
  [18, 97],
  [19, 98],
  [20, 97],
  [21, 98],
  [22, 96],
  [23, 104],
  [24, 103],
  [25, 104],
  [26, 104],
  [27, 100],
]) as unknown as Theme;

export const light_yellow_alt1_SliderThumb = n274;
export const light_yellow_alt1_Tooltip = n274;
export const light_yellow_alt1_ProgressIndicator = n274;
const n275 = t([
  [12, 98],
  [13, 99],
  [14, 100],
  [15, 101],
  [16, 97],
  [17, 96],
  [18, 106],
  [19, 105],
  [20, 106],
  [21, 105],
  [22, 11],
  [23, 100],
  [24, 101],
  [25, 100],
  [26, 100],
  [27, 104],
]) as unknown as Theme;

export const light_yellow_alt2_ListItem = n275;
const n276 = t([
  [12, 100],
  [13, 101],
  [14, 103],
  [15, 104],
  [16, 99],
  [17, 98],
  [18, 106],
  [19, 105],
  [20, 106],
  [21, 105],
  [22, 106],
  [23, 103],
  [24, 104],
  [25, 103],
  [26, 103],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_alt2_Card = n276;
export const light_yellow_alt2_DrawerFrame = n276;
export const light_yellow_alt2_Progress = n276;
export const light_yellow_alt2_TooltipArrow = n276;
const n277 = t([
  [12, 101],
  [13, 103],
  [14, 104],
  [15, 105],
  [16, 100],
  [17, 99],
  [18, 106],
  [19, 105],
  [20, 106],
  [21, 105],
  [22, 105],
  [23, 275],
  [24, 275],
  [25, 104],
  [26, 104],
  [27, 100],
]) as unknown as Theme;

export const light_yellow_alt2_Button = n277;
const n278 = t([
  [12, 99],
  [13, 100],
  [14, 101],
  [15, 103],
  [16, 98],
  [17, 97],
  [18, 106],
  [19, 105],
  [20, 106],
  [21, 105],
  [22, 107],
  [23, 104],
  [24, 105],
  [25, 104],
  [26, 104],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_alt2_Checkbox = n278;
export const light_yellow_alt2_RadioGroupItem = n278;
export const light_yellow_alt2_Input = n278;
export const light_yellow_alt2_TextArea = n278;
const n279 = t([
  [12, 101],
  [13, 103],
  [14, 104],
  [15, 105],
  [16, 100],
  [17, 99],
  [18, 106],
  [19, 105],
  [20, 106],
  [21, 105],
  [22, 105],
  [23, 104],
  [24, 105],
  [25, 104],
  [26, 104],
  [27, 100],
]) as unknown as Theme;

export const light_yellow_alt2_Switch = n279;
export const light_yellow_alt2_TooltipContent = n279;
export const light_yellow_alt2_SliderTrack = n279;
const n280 = t([
  [12, 107],
  [13, 106],
  [14, 105],
  [15, 104],
  [16, 11],
  [17, 11],
  [18, 98],
  [19, 99],
  [20, 98],
  [21, 99],
  [22, 96],
  [23, 105],
  [24, 104],
  [25, 105],
  [26, 105],
  [27, 99],
]) as unknown as Theme;

export const light_yellow_alt2_SwitchThumb = n280;
const n281 = t([
  [12, 103],
  [13, 101],
  [14, 100],
  [15, 99],
  [16, 104],
  [17, 105],
  [18, 98],
  [19, 99],
  [20, 98],
  [21, 99],
  [22, 99],
  [23, 100],
  [24, 99],
  [25, 100],
  [26, 100],
  [27, 104],
]) as unknown as Theme;

export const light_yellow_alt2_SliderTrackActive = n281;
const n282 = t([
  [12, 105],
  [13, 104],
  [14, 103],
  [15, 101],
  [16, 106],
  [17, 107],
  [18, 98],
  [19, 99],
  [20, 98],
  [21, 99],
  [22, 97],
  [23, 103],
  [24, 101],
  [25, 103],
  [26, 103],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_alt2_SliderThumb = n282;
export const light_yellow_alt2_Tooltip = n282;
export const light_yellow_alt2_ProgressIndicator = n282;
const n283 = t([
  [12, 99],
  [13, 100],
  [14, 101],
  [15, 103],
  [16, 98],
  [17, 97],
  [19, 104],
  [20, 105],
  [21, 104],
  [22, 107],
  [23, 101],
  [24, 103],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_active_ListItem = n283;
const n284 = t([
  [12, 101],
  [13, 103],
  [14, 104],
  [15, 105],
  [16, 100],
  [17, 99],
  [19, 104],
  [20, 105],
  [21, 104],
  [22, 105],
  [23, 104],
  [24, 105],
  [25, 104],
  [26, 104],
  [27, 100],
]) as unknown as Theme;

export const light_yellow_active_Card = n284;
export const light_yellow_active_DrawerFrame = n284;
export const light_yellow_active_Progress = n284;
export const light_yellow_active_TooltipArrow = n284;
const n285 = t([
  [12, 103],
  [13, 104],
  [14, 105],
  [15, 106],
  [16, 101],
  [17, 100],
  [19, 104],
  [20, 105],
  [21, 104],
  [22, 104],
  [23, 275],
  [24, 275],
  [25, 105],
  [26, 105],
  [27, 99],
]) as unknown as Theme;

export const light_yellow_active_Button = n285;
const n286 = t([
  [12, 100],
  [13, 101],
  [14, 103],
  [15, 104],
  [16, 99],
  [17, 98],
  [19, 104],
  [20, 105],
  [21, 104],
  [22, 106],
  [23, 105],
  [24, 106],
  [25, 105],
  [26, 105],
  [27, 101],
]) as unknown as Theme;

export const light_yellow_active_Checkbox = n286;
export const light_yellow_active_RadioGroupItem = n286;
export const light_yellow_active_Input = n286;
export const light_yellow_active_TextArea = n286;
const n287 = t([
  [12, 103],
  [13, 104],
  [14, 105],
  [15, 106],
  [16, 101],
  [17, 100],
  [19, 104],
  [20, 105],
  [21, 104],
  [22, 104],
  [23, 105],
  [24, 106],
  [25, 105],
  [26, 105],
  [27, 99],
]) as unknown as Theme;

export const light_yellow_active_Switch = n287;
export const light_yellow_active_TooltipContent = n287;
export const light_yellow_active_SliderTrack = n287;
const n288 = t([
  [12, 106],
  [13, 105],
  [14, 104],
  [15, 103],
  [16, 107],
  [17, 11],
  [19, 100],
  [20, 99],
  [21, 100],
  [22, 96],
  [23, 104],
  [24, 103],
  [25, 104],
  [26, 104],
  [27, 100],
]) as unknown as Theme;

export const light_yellow_active_SwitchThumb = n288;
const n289 = t([
  [12, 101],
  [13, 100],
  [14, 99],
  [15, 98],
  [16, 103],
  [17, 104],
  [19, 100],
  [20, 99],
  [21, 100],
  [22, 100],
  [23, 99],
  [24, 98],
  [25, 99],
  [26, 99],
  [27, 105],
]) as unknown as Theme;

export const light_yellow_active_SliderTrackActive = n289;
const n290 = t([
  [12, 104],
  [13, 103],
  [14, 101],
  [15, 100],
  [16, 105],
  [17, 106],
  [19, 100],
  [20, 99],
  [21, 100],
  [22, 98],
  [23, 101],
  [24, 100],
  [25, 101],
  [26, 101],
  [27, 103],
]) as unknown as Theme;

export const light_yellow_active_SliderThumb = n290;
export const light_yellow_active_Tooltip = n290;
export const light_yellow_active_ProgressIndicator = n290;
const n291 = t([
  [12, 37],
  [13, 38],
  [14, 39],
  [15, 40],
  [16, 36],
  [17, 36],
  [18, 47],
  [19, 46],
  [20, 47],
  [21, 46],
  [22, 11],
  [23, 39],
  [24, 40],
  [25, 39],
  [26, 39],
  [27, 45],
]) as unknown as Theme;

export const light_green_alt1_ListItem = n291;
const n292 = t([
  [12, 39],
  [13, 40],
  [14, 41],
  [15, 43],
  [16, 38],
  [17, 37],
  [18, 47],
  [19, 46],
  [20, 47],
  [21, 46],
  [22, 47],
  [23, 41],
  [24, 43],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_alt1_Card = n292;
export const light_green_alt1_DrawerFrame = n292;
export const light_green_alt1_Progress = n292;
export const light_green_alt1_TooltipArrow = n292;
const n293 = t([
  [12, 40],
  [13, 41],
  [14, 43],
  [15, 44],
  [16, 39],
  [17, 38],
  [18, 47],
  [19, 46],
  [20, 47],
  [21, 46],
  [22, 46],
  [23, 275],
  [24, 275],
  [25, 43],
  [26, 43],
  [27, 41],
]) as unknown as Theme;

export const light_green_alt1_Button = n293;
const n294 = t([
  [12, 38],
  [13, 39],
  [14, 40],
  [15, 41],
  [16, 37],
  [17, 36],
  [18, 47],
  [19, 46],
  [20, 47],
  [21, 46],
  [22, 11],
  [23, 43],
  [24, 44],
  [25, 43],
  [26, 43],
  [27, 44],
]) as unknown as Theme;

export const light_green_alt1_Checkbox = n294;
export const light_green_alt1_RadioGroupItem = n294;
export const light_green_alt1_Input = n294;
export const light_green_alt1_TextArea = n294;
const n295 = t([
  [12, 40],
  [13, 41],
  [14, 43],
  [15, 44],
  [16, 39],
  [17, 38],
  [18, 47],
  [19, 46],
  [20, 47],
  [21, 46],
  [22, 46],
  [23, 43],
  [24, 44],
  [25, 43],
  [26, 43],
  [27, 41],
]) as unknown as Theme;

export const light_green_alt1_Switch = n295;
export const light_green_alt1_TooltipContent = n295;
export const light_green_alt1_SliderTrack = n295;
const n296 = t([
  [12, 11],
  [13, 47],
  [14, 46],
  [15, 45],
  [16, 11],
  [17, 11],
  [18, 37],
  [19, 38],
  [20, 37],
  [21, 38],
  [22, 36],
  [23, 46],
  [24, 45],
  [25, 46],
  [26, 46],
  [27, 38],
]) as unknown as Theme;

export const light_green_alt1_SwitchThumb = n296;
const n297 = t([
  [12, 44],
  [13, 43],
  [14, 41],
  [15, 40],
  [16, 45],
  [17, 46],
  [18, 37],
  [19, 38],
  [20, 37],
  [21, 38],
  [22, 38],
  [23, 41],
  [24, 40],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_alt1_SliderTrackActive = n297;
const n298 = t([
  [12, 46],
  [13, 45],
  [14, 44],
  [15, 43],
  [16, 47],
  [17, 11],
  [18, 37],
  [19, 38],
  [20, 37],
  [21, 38],
  [22, 36],
  [23, 44],
  [24, 43],
  [25, 44],
  [26, 44],
  [27, 40],
]) as unknown as Theme;

export const light_green_alt1_SliderThumb = n298;
export const light_green_alt1_Tooltip = n298;
export const light_green_alt1_ProgressIndicator = n298;
const n299 = t([
  [12, 38],
  [13, 39],
  [14, 40],
  [15, 41],
  [16, 37],
  [17, 36],
  [18, 46],
  [19, 45],
  [20, 46],
  [21, 45],
  [22, 11],
  [23, 40],
  [24, 41],
  [25, 40],
  [26, 40],
  [27, 44],
]) as unknown as Theme;

export const light_green_alt2_ListItem = n299;
const n300 = t([
  [12, 40],
  [13, 41],
  [14, 43],
  [15, 44],
  [16, 39],
  [17, 38],
  [18, 46],
  [19, 45],
  [20, 46],
  [21, 45],
  [22, 46],
  [23, 43],
  [24, 44],
  [25, 43],
  [26, 43],
  [27, 41],
]) as unknown as Theme;

export const light_green_alt2_Card = n300;
export const light_green_alt2_DrawerFrame = n300;
export const light_green_alt2_Progress = n300;
export const light_green_alt2_TooltipArrow = n300;
const n301 = t([
  [12, 41],
  [13, 43],
  [14, 44],
  [15, 45],
  [16, 40],
  [17, 39],
  [18, 46],
  [19, 45],
  [20, 46],
  [21, 45],
  [22, 45],
  [23, 275],
  [24, 275],
  [25, 44],
  [26, 44],
  [27, 40],
]) as unknown as Theme;

export const light_green_alt2_Button = n301;
const n302 = t([
  [12, 39],
  [13, 40],
  [14, 41],
  [15, 43],
  [16, 38],
  [17, 37],
  [18, 46],
  [19, 45],
  [20, 46],
  [21, 45],
  [22, 47],
  [23, 44],
  [24, 45],
  [25, 44],
  [26, 44],
  [27, 43],
]) as unknown as Theme;

export const light_green_alt2_Checkbox = n302;
export const light_green_alt2_RadioGroupItem = n302;
export const light_green_alt2_Input = n302;
export const light_green_alt2_TextArea = n302;
const n303 = t([
  [12, 41],
  [13, 43],
  [14, 44],
  [15, 45],
  [16, 40],
  [17, 39],
  [18, 46],
  [19, 45],
  [20, 46],
  [21, 45],
  [22, 45],
  [23, 44],
  [24, 45],
  [25, 44],
  [26, 44],
  [27, 40],
]) as unknown as Theme;

export const light_green_alt2_Switch = n303;
export const light_green_alt2_TooltipContent = n303;
export const light_green_alt2_SliderTrack = n303;
const n304 = t([
  [12, 47],
  [13, 46],
  [14, 45],
  [15, 44],
  [16, 11],
  [17, 11],
  [18, 38],
  [19, 39],
  [20, 38],
  [21, 39],
  [22, 36],
  [23, 45],
  [24, 44],
  [25, 45],
  [26, 45],
  [27, 39],
]) as unknown as Theme;

export const light_green_alt2_SwitchThumb = n304;
const n305 = t([
  [12, 43],
  [13, 41],
  [14, 40],
  [15, 39],
  [16, 44],
  [17, 45],
  [18, 38],
  [19, 39],
  [20, 38],
  [21, 39],
  [22, 39],
  [23, 40],
  [24, 39],
  [25, 40],
  [26, 40],
  [27, 44],
]) as unknown as Theme;

export const light_green_alt2_SliderTrackActive = n305;
const n306 = t([
  [12, 45],
  [13, 44],
  [14, 43],
  [15, 41],
  [16, 46],
  [17, 47],
  [18, 38],
  [19, 39],
  [20, 38],
  [21, 39],
  [22, 37],
  [23, 43],
  [24, 41],
  [25, 43],
  [26, 43],
  [27, 41],
]) as unknown as Theme;

export const light_green_alt2_SliderThumb = n306;
export const light_green_alt2_Tooltip = n306;
export const light_green_alt2_ProgressIndicator = n306;
const n307 = t([
  [12, 39],
  [13, 40],
  [14, 41],
  [15, 43],
  [16, 38],
  [17, 37],
  [19, 44],
  [20, 45],
  [21, 44],
  [22, 47],
  [23, 41],
  [24, 43],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_active_ListItem = n307;
const n308 = t([
  [12, 41],
  [13, 43],
  [14, 44],
  [15, 45],
  [16, 40],
  [17, 39],
  [19, 44],
  [20, 45],
  [21, 44],
  [22, 45],
  [23, 44],
  [24, 45],
  [25, 44],
  [26, 44],
  [27, 40],
]) as unknown as Theme;

export const light_green_active_Card = n308;
export const light_green_active_DrawerFrame = n308;
export const light_green_active_Progress = n308;
export const light_green_active_TooltipArrow = n308;
const n309 = t([
  [12, 43],
  [13, 44],
  [14, 45],
  [15, 46],
  [16, 41],
  [17, 40],
  [19, 44],
  [20, 45],
  [21, 44],
  [22, 44],
  [23, 275],
  [24, 275],
  [25, 45],
  [26, 45],
  [27, 39],
]) as unknown as Theme;

export const light_green_active_Button = n309;
const n310 = t([
  [12, 40],
  [13, 41],
  [14, 43],
  [15, 44],
  [16, 39],
  [17, 38],
  [19, 44],
  [20, 45],
  [21, 44],
  [22, 46],
  [23, 45],
  [24, 46],
  [25, 45],
  [26, 45],
  [27, 41],
]) as unknown as Theme;

export const light_green_active_Checkbox = n310;
export const light_green_active_RadioGroupItem = n310;
export const light_green_active_Input = n310;
export const light_green_active_TextArea = n310;
const n311 = t([
  [12, 43],
  [13, 44],
  [14, 45],
  [15, 46],
  [16, 41],
  [17, 40],
  [19, 44],
  [20, 45],
  [21, 44],
  [22, 44],
  [23, 45],
  [24, 46],
  [25, 45],
  [26, 45],
  [27, 39],
]) as unknown as Theme;

export const light_green_active_Switch = n311;
export const light_green_active_TooltipContent = n311;
export const light_green_active_SliderTrack = n311;
const n312 = t([
  [12, 46],
  [13, 45],
  [14, 44],
  [15, 43],
  [16, 47],
  [17, 11],
  [19, 40],
  [20, 39],
  [21, 40],
  [22, 36],
  [23, 44],
  [24, 43],
  [25, 44],
  [26, 44],
  [27, 40],
]) as unknown as Theme;

export const light_green_active_SwitchThumb = n312;
const n313 = t([
  [12, 41],
  [13, 40],
  [14, 39],
  [15, 38],
  [16, 43],
  [17, 44],
  [19, 40],
  [20, 39],
  [21, 40],
  [22, 40],
  [23, 39],
  [24, 38],
  [25, 39],
  [26, 39],
  [27, 45],
]) as unknown as Theme;

export const light_green_active_SliderTrackActive = n313;
const n314 = t([
  [12, 44],
  [13, 43],
  [14, 41],
  [15, 40],
  [16, 45],
  [17, 46],
  [19, 40],
  [20, 39],
  [21, 40],
  [22, 38],
  [23, 41],
  [24, 40],
  [25, 41],
  [26, 41],
  [27, 43],
]) as unknown as Theme;

export const light_green_active_SliderThumb = n314;
export const light_green_active_Tooltip = n314;
export const light_green_active_ProgressIndicator = n314;
const n315 = t([
  [12, 15],
  [13, 16],
  [14, 17],
  [15, 18],
  [16, 14],
  [17, 14],
  [18, 25],
  [19, 24],
  [20, 25],
  [21, 24],
  [22, 11],
  [23, 17],
  [24, 18],
  [25, 17],
  [26, 17],
  [27, 23],
]) as unknown as Theme;

export const light_blue_alt1_ListItem = n315;
const n316 = t([
  [12, 17],
  [13, 18],
  [14, 19],
  [15, 21],
  [16, 16],
  [17, 15],
  [18, 25],
  [19, 24],
  [20, 25],
  [21, 24],
  [22, 25],
  [23, 19],
  [24, 21],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_alt1_Card = n316;
export const light_blue_alt1_DrawerFrame = n316;
export const light_blue_alt1_Progress = n316;
export const light_blue_alt1_TooltipArrow = n316;
const n317 = t([
  [12, 18],
  [13, 19],
  [14, 21],
  [15, 22],
  [16, 17],
  [17, 16],
  [18, 25],
  [19, 24],
  [20, 25],
  [21, 24],
  [22, 24],
  [23, 275],
  [24, 275],
  [25, 21],
  [26, 21],
  [27, 19],
]) as unknown as Theme;

export const light_blue_alt1_Button = n317;
const n318 = t([
  [12, 16],
  [13, 17],
  [14, 18],
  [15, 19],
  [16, 15],
  [17, 14],
  [18, 25],
  [19, 24],
  [20, 25],
  [21, 24],
  [22, 11],
  [23, 21],
  [24, 22],
  [25, 21],
  [26, 21],
  [27, 22],
]) as unknown as Theme;

export const light_blue_alt1_Checkbox = n318;
export const light_blue_alt1_RadioGroupItem = n318;
export const light_blue_alt1_Input = n318;
export const light_blue_alt1_TextArea = n318;
const n319 = t([
  [12, 18],
  [13, 19],
  [14, 21],
  [15, 22],
  [16, 17],
  [17, 16],
  [18, 25],
  [19, 24],
  [20, 25],
  [21, 24],
  [22, 24],
  [23, 21],
  [24, 22],
  [25, 21],
  [26, 21],
  [27, 19],
]) as unknown as Theme;

export const light_blue_alt1_Switch = n319;
export const light_blue_alt1_TooltipContent = n319;
export const light_blue_alt1_SliderTrack = n319;
const n320 = t([
  [12, 11],
  [13, 25],
  [14, 24],
  [15, 23],
  [16, 11],
  [17, 11],
  [18, 15],
  [19, 16],
  [20, 15],
  [21, 16],
  [22, 14],
  [23, 24],
  [24, 23],
  [25, 24],
  [26, 24],
  [27, 16],
]) as unknown as Theme;

export const light_blue_alt1_SwitchThumb = n320;
const n321 = t([
  [12, 22],
  [13, 21],
  [14, 19],
  [15, 18],
  [16, 23],
  [17, 24],
  [18, 15],
  [19, 16],
  [20, 15],
  [21, 16],
  [22, 16],
  [23, 19],
  [24, 18],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_alt1_SliderTrackActive = n321;
const n322 = t([
  [12, 24],
  [13, 23],
  [14, 22],
  [15, 21],
  [16, 25],
  [17, 11],
  [18, 15],
  [19, 16],
  [20, 15],
  [21, 16],
  [22, 14],
  [23, 22],
  [24, 21],
  [25, 22],
  [26, 22],
  [27, 18],
]) as unknown as Theme;

export const light_blue_alt1_SliderThumb = n322;
export const light_blue_alt1_Tooltip = n322;
export const light_blue_alt1_ProgressIndicator = n322;
const n323 = t([
  [12, 16],
  [13, 17],
  [14, 18],
  [15, 19],
  [16, 15],
  [17, 14],
  [18, 24],
  [19, 23],
  [20, 24],
  [21, 23],
  [22, 11],
  [23, 18],
  [24, 19],
  [25, 18],
  [26, 18],
  [27, 22],
]) as unknown as Theme;

export const light_blue_alt2_ListItem = n323;
const n324 = t([
  [12, 18],
  [13, 19],
  [14, 21],
  [15, 22],
  [16, 17],
  [17, 16],
  [18, 24],
  [19, 23],
  [20, 24],
  [21, 23],
  [22, 24],
  [23, 21],
  [24, 22],
  [25, 21],
  [26, 21],
  [27, 19],
]) as unknown as Theme;

export const light_blue_alt2_Card = n324;
export const light_blue_alt2_DrawerFrame = n324;
export const light_blue_alt2_Progress = n324;
export const light_blue_alt2_TooltipArrow = n324;
const n325 = t([
  [12, 19],
  [13, 21],
  [14, 22],
  [15, 23],
  [16, 18],
  [17, 17],
  [18, 24],
  [19, 23],
  [20, 24],
  [21, 23],
  [22, 23],
  [23, 275],
  [24, 275],
  [25, 22],
  [26, 22],
  [27, 18],
]) as unknown as Theme;

export const light_blue_alt2_Button = n325;
const n326 = t([
  [12, 17],
  [13, 18],
  [14, 19],
  [15, 21],
  [16, 16],
  [17, 15],
  [18, 24],
  [19, 23],
  [20, 24],
  [21, 23],
  [22, 25],
  [23, 22],
  [24, 23],
  [25, 22],
  [26, 22],
  [27, 21],
]) as unknown as Theme;

export const light_blue_alt2_Checkbox = n326;
export const light_blue_alt2_RadioGroupItem = n326;
export const light_blue_alt2_Input = n326;
export const light_blue_alt2_TextArea = n326;
const n327 = t([
  [12, 19],
  [13, 21],
  [14, 22],
  [15, 23],
  [16, 18],
  [17, 17],
  [18, 24],
  [19, 23],
  [20, 24],
  [21, 23],
  [22, 23],
  [23, 22],
  [24, 23],
  [25, 22],
  [26, 22],
  [27, 18],
]) as unknown as Theme;

export const light_blue_alt2_Switch = n327;
export const light_blue_alt2_TooltipContent = n327;
export const light_blue_alt2_SliderTrack = n327;
const n328 = t([
  [12, 25],
  [13, 24],
  [14, 23],
  [15, 22],
  [16, 11],
  [17, 11],
  [18, 16],
  [19, 17],
  [20, 16],
  [21, 17],
  [22, 14],
  [23, 23],
  [24, 22],
  [25, 23],
  [26, 23],
  [27, 17],
]) as unknown as Theme;

export const light_blue_alt2_SwitchThumb = n328;
const n329 = t([
  [12, 21],
  [13, 19],
  [14, 18],
  [15, 17],
  [16, 22],
  [17, 23],
  [18, 16],
  [19, 17],
  [20, 16],
  [21, 17],
  [22, 17],
  [23, 18],
  [24, 17],
  [25, 18],
  [26, 18],
  [27, 22],
]) as unknown as Theme;

export const light_blue_alt2_SliderTrackActive = n329;
const n330 = t([
  [12, 23],
  [13, 22],
  [14, 21],
  [15, 19],
  [16, 24],
  [17, 25],
  [18, 16],
  [19, 17],
  [20, 16],
  [21, 17],
  [22, 15],
  [23, 21],
  [24, 19],
  [25, 21],
  [26, 21],
  [27, 19],
]) as unknown as Theme;

export const light_blue_alt2_SliderThumb = n330;
export const light_blue_alt2_Tooltip = n330;
export const light_blue_alt2_ProgressIndicator = n330;
const n331 = t([
  [12, 17],
  [13, 18],
  [14, 19],
  [15, 21],
  [16, 16],
  [17, 15],
  [19, 22],
  [20, 23],
  [21, 22],
  [22, 25],
  [23, 19],
  [24, 21],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_active_ListItem = n331;
const n332 = t([
  [12, 19],
  [13, 21],
  [14, 22],
  [15, 23],
  [16, 18],
  [17, 17],
  [19, 22],
  [20, 23],
  [21, 22],
  [22, 23],
  [23, 22],
  [24, 23],
  [25, 22],
  [26, 22],
  [27, 18],
]) as unknown as Theme;

export const light_blue_active_Card = n332;
export const light_blue_active_DrawerFrame = n332;
export const light_blue_active_Progress = n332;
export const light_blue_active_TooltipArrow = n332;
const n333 = t([
  [12, 21],
  [13, 22],
  [14, 23],
  [15, 24],
  [16, 19],
  [17, 18],
  [19, 22],
  [20, 23],
  [21, 22],
  [22, 22],
  [23, 275],
  [24, 275],
  [25, 23],
  [26, 23],
  [27, 17],
]) as unknown as Theme;

export const light_blue_active_Button = n333;
const n334 = t([
  [12, 18],
  [13, 19],
  [14, 21],
  [15, 22],
  [16, 17],
  [17, 16],
  [19, 22],
  [20, 23],
  [21, 22],
  [22, 24],
  [23, 23],
  [24, 24],
  [25, 23],
  [26, 23],
  [27, 19],
]) as unknown as Theme;

export const light_blue_active_Checkbox = n334;
export const light_blue_active_RadioGroupItem = n334;
export const light_blue_active_Input = n334;
export const light_blue_active_TextArea = n334;
const n335 = t([
  [12, 21],
  [13, 22],
  [14, 23],
  [15, 24],
  [16, 19],
  [17, 18],
  [19, 22],
  [20, 23],
  [21, 22],
  [22, 22],
  [23, 23],
  [24, 24],
  [25, 23],
  [26, 23],
  [27, 17],
]) as unknown as Theme;

export const light_blue_active_Switch = n335;
export const light_blue_active_TooltipContent = n335;
export const light_blue_active_SliderTrack = n335;
const n336 = t([
  [12, 24],
  [13, 23],
  [14, 22],
  [15, 21],
  [16, 25],
  [17, 11],
  [19, 18],
  [20, 17],
  [21, 18],
  [22, 14],
  [23, 22],
  [24, 21],
  [25, 22],
  [26, 22],
  [27, 18],
]) as unknown as Theme;

export const light_blue_active_SwitchThumb = n336;
const n337 = t([
  [12, 19],
  [13, 18],
  [14, 17],
  [15, 16],
  [16, 21],
  [17, 22],
  [19, 18],
  [20, 17],
  [21, 18],
  [22, 18],
  [23, 17],
  [24, 16],
  [25, 17],
  [26, 17],
  [27, 23],
]) as unknown as Theme;

export const light_blue_active_SliderTrackActive = n337;
const n338 = t([
  [12, 22],
  [13, 21],
  [14, 19],
  [15, 18],
  [16, 23],
  [17, 24],
  [19, 18],
  [20, 17],
  [21, 18],
  [22, 16],
  [23, 19],
  [24, 18],
  [25, 19],
  [26, 19],
  [27, 21],
]) as unknown as Theme;

export const light_blue_active_SliderThumb = n338;
export const light_blue_active_Tooltip = n338;
export const light_blue_active_ProgressIndicator = n338;
const n339 = t([
  [12, 73],
  [13, 74],
  [14, 75],
  [15, 76],
  [16, 72],
  [17, 72],
  [18, 83],
  [19, 82],
  [20, 83],
  [21, 82],
  [22, 11],
  [23, 75],
  [24, 76],
  [25, 75],
  [26, 75],
  [27, 81],
]) as unknown as Theme;

export const light_purple_alt1_ListItem = n339;
const n340 = t([
  [12, 75],
  [13, 76],
  [14, 77],
  [15, 79],
  [16, 74],
  [17, 73],
  [18, 83],
  [19, 82],
  [20, 83],
  [21, 82],
  [22, 83],
  [23, 77],
  [24, 79],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_alt1_Card = n340;
export const light_purple_alt1_DrawerFrame = n340;
export const light_purple_alt1_Progress = n340;
export const light_purple_alt1_TooltipArrow = n340;
const n341 = t([
  [12, 76],
  [13, 77],
  [14, 79],
  [15, 80],
  [16, 75],
  [17, 74],
  [18, 83],
  [19, 82],
  [20, 83],
  [21, 82],
  [22, 82],
  [23, 275],
  [24, 275],
  [25, 79],
  [26, 79],
  [27, 77],
]) as unknown as Theme;

export const light_purple_alt1_Button = n341;
const n342 = t([
  [12, 74],
  [13, 75],
  [14, 76],
  [15, 77],
  [16, 73],
  [17, 72],
  [18, 83],
  [19, 82],
  [20, 83],
  [21, 82],
  [22, 11],
  [23, 79],
  [24, 80],
  [25, 79],
  [26, 79],
  [27, 80],
]) as unknown as Theme;

export const light_purple_alt1_Checkbox = n342;
export const light_purple_alt1_RadioGroupItem = n342;
export const light_purple_alt1_Input = n342;
export const light_purple_alt1_TextArea = n342;
const n343 = t([
  [12, 76],
  [13, 77],
  [14, 79],
  [15, 80],
  [16, 75],
  [17, 74],
  [18, 83],
  [19, 82],
  [20, 83],
  [21, 82],
  [22, 82],
  [23, 79],
  [24, 80],
  [25, 79],
  [26, 79],
  [27, 77],
]) as unknown as Theme;

export const light_purple_alt1_Switch = n343;
export const light_purple_alt1_TooltipContent = n343;
export const light_purple_alt1_SliderTrack = n343;
const n344 = t([
  [12, 11],
  [13, 83],
  [14, 82],
  [15, 81],
  [16, 11],
  [17, 11],
  [18, 73],
  [19, 74],
  [20, 73],
  [21, 74],
  [22, 72],
  [23, 82],
  [24, 81],
  [25, 82],
  [26, 82],
  [27, 74],
]) as unknown as Theme;

export const light_purple_alt1_SwitchThumb = n344;
const n345 = t([
  [12, 80],
  [13, 79],
  [14, 77],
  [15, 76],
  [16, 81],
  [17, 82],
  [18, 73],
  [19, 74],
  [20, 73],
  [21, 74],
  [22, 74],
  [23, 77],
  [24, 76],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_alt1_SliderTrackActive = n345;
const n346 = t([
  [12, 82],
  [13, 81],
  [14, 80],
  [15, 79],
  [16, 83],
  [17, 11],
  [18, 73],
  [19, 74],
  [20, 73],
  [21, 74],
  [22, 72],
  [23, 80],
  [24, 79],
  [25, 80],
  [26, 80],
  [27, 76],
]) as unknown as Theme;

export const light_purple_alt1_SliderThumb = n346;
export const light_purple_alt1_Tooltip = n346;
export const light_purple_alt1_ProgressIndicator = n346;
const n347 = t([
  [12, 74],
  [13, 75],
  [14, 76],
  [15, 77],
  [16, 73],
  [17, 72],
  [18, 82],
  [19, 81],
  [20, 82],
  [21, 81],
  [22, 11],
  [23, 76],
  [24, 77],
  [25, 76],
  [26, 76],
  [27, 80],
]) as unknown as Theme;

export const light_purple_alt2_ListItem = n347;
const n348 = t([
  [12, 76],
  [13, 77],
  [14, 79],
  [15, 80],
  [16, 75],
  [17, 74],
  [18, 82],
  [19, 81],
  [20, 82],
  [21, 81],
  [22, 82],
  [23, 79],
  [24, 80],
  [25, 79],
  [26, 79],
  [27, 77],
]) as unknown as Theme;

export const light_purple_alt2_Card = n348;
export const light_purple_alt2_DrawerFrame = n348;
export const light_purple_alt2_Progress = n348;
export const light_purple_alt2_TooltipArrow = n348;
const n349 = t([
  [12, 77],
  [13, 79],
  [14, 80],
  [15, 81],
  [16, 76],
  [17, 75],
  [18, 82],
  [19, 81],
  [20, 82],
  [21, 81],
  [22, 81],
  [23, 275],
  [24, 275],
  [25, 80],
  [26, 80],
  [27, 76],
]) as unknown as Theme;

export const light_purple_alt2_Button = n349;
const n350 = t([
  [12, 75],
  [13, 76],
  [14, 77],
  [15, 79],
  [16, 74],
  [17, 73],
  [18, 82],
  [19, 81],
  [20, 82],
  [21, 81],
  [22, 83],
  [23, 80],
  [24, 81],
  [25, 80],
  [26, 80],
  [27, 79],
]) as unknown as Theme;

export const light_purple_alt2_Checkbox = n350;
export const light_purple_alt2_RadioGroupItem = n350;
export const light_purple_alt2_Input = n350;
export const light_purple_alt2_TextArea = n350;
const n351 = t([
  [12, 77],
  [13, 79],
  [14, 80],
  [15, 81],
  [16, 76],
  [17, 75],
  [18, 82],
  [19, 81],
  [20, 82],
  [21, 81],
  [22, 81],
  [23, 80],
  [24, 81],
  [25, 80],
  [26, 80],
  [27, 76],
]) as unknown as Theme;

export const light_purple_alt2_Switch = n351;
export const light_purple_alt2_TooltipContent = n351;
export const light_purple_alt2_SliderTrack = n351;
const n352 = t([
  [12, 83],
  [13, 82],
  [14, 81],
  [15, 80],
  [16, 11],
  [17, 11],
  [18, 74],
  [19, 75],
  [20, 74],
  [21, 75],
  [22, 72],
  [23, 81],
  [24, 80],
  [25, 81],
  [26, 81],
  [27, 75],
]) as unknown as Theme;

export const light_purple_alt2_SwitchThumb = n352;
const n353 = t([
  [12, 79],
  [13, 77],
  [14, 76],
  [15, 75],
  [16, 80],
  [17, 81],
  [18, 74],
  [19, 75],
  [20, 74],
  [21, 75],
  [22, 75],
  [23, 76],
  [24, 75],
  [25, 76],
  [26, 76],
  [27, 80],
]) as unknown as Theme;

export const light_purple_alt2_SliderTrackActive = n353;
const n354 = t([
  [12, 81],
  [13, 80],
  [14, 79],
  [15, 77],
  [16, 82],
  [17, 83],
  [18, 74],
  [19, 75],
  [20, 74],
  [21, 75],
  [22, 73],
  [23, 79],
  [24, 77],
  [25, 79],
  [26, 79],
  [27, 77],
]) as unknown as Theme;

export const light_purple_alt2_SliderThumb = n354;
export const light_purple_alt2_Tooltip = n354;
export const light_purple_alt2_ProgressIndicator = n354;
const n355 = t([
  [12, 75],
  [13, 76],
  [14, 77],
  [15, 79],
  [16, 74],
  [17, 73],
  [19, 80],
  [20, 81],
  [21, 80],
  [22, 83],
  [23, 77],
  [24, 79],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_active_ListItem = n355;
const n356 = t([
  [12, 77],
  [13, 79],
  [14, 80],
  [15, 81],
  [16, 76],
  [17, 75],
  [19, 80],
  [20, 81],
  [21, 80],
  [22, 81],
  [23, 80],
  [24, 81],
  [25, 80],
  [26, 80],
  [27, 76],
]) as unknown as Theme;

export const light_purple_active_Card = n356;
export const light_purple_active_DrawerFrame = n356;
export const light_purple_active_Progress = n356;
export const light_purple_active_TooltipArrow = n356;
const n357 = t([
  [12, 79],
  [13, 80],
  [14, 81],
  [15, 82],
  [16, 77],
  [17, 76],
  [19, 80],
  [20, 81],
  [21, 80],
  [22, 80],
  [23, 275],
  [24, 275],
  [25, 81],
  [26, 81],
  [27, 75],
]) as unknown as Theme;

export const light_purple_active_Button = n357;
const n358 = t([
  [12, 76],
  [13, 77],
  [14, 79],
  [15, 80],
  [16, 75],
  [17, 74],
  [19, 80],
  [20, 81],
  [21, 80],
  [22, 82],
  [23, 81],
  [24, 82],
  [25, 81],
  [26, 81],
  [27, 77],
]) as unknown as Theme;

export const light_purple_active_Checkbox = n358;
export const light_purple_active_RadioGroupItem = n358;
export const light_purple_active_Input = n358;
export const light_purple_active_TextArea = n358;
const n359 = t([
  [12, 79],
  [13, 80],
  [14, 81],
  [15, 82],
  [16, 77],
  [17, 76],
  [19, 80],
  [20, 81],
  [21, 80],
  [22, 80],
  [23, 81],
  [24, 82],
  [25, 81],
  [26, 81],
  [27, 75],
]) as unknown as Theme;

export const light_purple_active_Switch = n359;
export const light_purple_active_TooltipContent = n359;
export const light_purple_active_SliderTrack = n359;
const n360 = t([
  [12, 82],
  [13, 81],
  [14, 80],
  [15, 79],
  [16, 83],
  [17, 11],
  [19, 76],
  [20, 75],
  [21, 76],
  [22, 72],
  [23, 80],
  [24, 79],
  [25, 80],
  [26, 80],
  [27, 76],
]) as unknown as Theme;

export const light_purple_active_SwitchThumb = n360;
const n361 = t([
  [12, 77],
  [13, 76],
  [14, 75],
  [15, 74],
  [16, 79],
  [17, 80],
  [19, 76],
  [20, 75],
  [21, 76],
  [22, 76],
  [23, 75],
  [24, 74],
  [25, 75],
  [26, 75],
  [27, 81],
]) as unknown as Theme;

export const light_purple_active_SliderTrackActive = n361;
const n362 = t([
  [12, 80],
  [13, 79],
  [14, 77],
  [15, 76],
  [16, 81],
  [17, 82],
  [19, 76],
  [20, 75],
  [21, 76],
  [22, 74],
  [23, 77],
  [24, 76],
  [25, 77],
  [26, 77],
  [27, 79],
]) as unknown as Theme;

export const light_purple_active_SliderThumb = n362;
export const light_purple_active_Tooltip = n362;
export const light_purple_active_ProgressIndicator = n362;
const n363 = t([
  [12, 61],
  [13, 62],
  [14, 63],
  [15, 64],
  [16, 60],
  [17, 60],
  [18, 71],
  [19, 70],
  [20, 71],
  [21, 70],
  [22, 11],
  [23, 63],
  [24, 64],
  [25, 63],
  [26, 63],
  [27, 69],
]) as unknown as Theme;

export const light_pink_alt1_ListItem = n363;
const n364 = t([
  [12, 63],
  [13, 64],
  [14, 65],
  [15, 67],
  [16, 62],
  [17, 61],
  [18, 71],
  [19, 70],
  [20, 71],
  [21, 70],
  [22, 71],
  [23, 65],
  [24, 67],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_alt1_Card = n364;
export const light_pink_alt1_DrawerFrame = n364;
export const light_pink_alt1_Progress = n364;
export const light_pink_alt1_TooltipArrow = n364;
const n365 = t([
  [12, 64],
  [13, 65],
  [14, 67],
  [15, 68],
  [16, 63],
  [17, 62],
  [18, 71],
  [19, 70],
  [20, 71],
  [21, 70],
  [22, 70],
  [23, 275],
  [24, 275],
  [25, 67],
  [26, 67],
  [27, 65],
]) as unknown as Theme;

export const light_pink_alt1_Button = n365;
const n366 = t([
  [12, 62],
  [13, 63],
  [14, 64],
  [15, 65],
  [16, 61],
  [17, 60],
  [18, 71],
  [19, 70],
  [20, 71],
  [21, 70],
  [22, 11],
  [23, 67],
  [24, 68],
  [25, 67],
  [26, 67],
  [27, 68],
]) as unknown as Theme;

export const light_pink_alt1_Checkbox = n366;
export const light_pink_alt1_RadioGroupItem = n366;
export const light_pink_alt1_Input = n366;
export const light_pink_alt1_TextArea = n366;
const n367 = t([
  [12, 64],
  [13, 65],
  [14, 67],
  [15, 68],
  [16, 63],
  [17, 62],
  [18, 71],
  [19, 70],
  [20, 71],
  [21, 70],
  [22, 70],
  [23, 67],
  [24, 68],
  [25, 67],
  [26, 67],
  [27, 65],
]) as unknown as Theme;

export const light_pink_alt1_Switch = n367;
export const light_pink_alt1_TooltipContent = n367;
export const light_pink_alt1_SliderTrack = n367;
const n368 = t([
  [12, 11],
  [13, 71],
  [14, 70],
  [15, 69],
  [16, 11],
  [17, 11],
  [18, 61],
  [19, 62],
  [20, 61],
  [21, 62],
  [22, 60],
  [23, 70],
  [24, 69],
  [25, 70],
  [26, 70],
  [27, 62],
]) as unknown as Theme;

export const light_pink_alt1_SwitchThumb = n368;
const n369 = t([
  [12, 68],
  [13, 67],
  [14, 65],
  [15, 64],
  [16, 69],
  [17, 70],
  [18, 61],
  [19, 62],
  [20, 61],
  [21, 62],
  [22, 62],
  [23, 65],
  [24, 64],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_alt1_SliderTrackActive = n369;
const n370 = t([
  [12, 70],
  [13, 69],
  [14, 68],
  [15, 67],
  [16, 71],
  [17, 11],
  [18, 61],
  [19, 62],
  [20, 61],
  [21, 62],
  [22, 60],
  [23, 68],
  [24, 67],
  [25, 68],
  [26, 68],
  [27, 64],
]) as unknown as Theme;

export const light_pink_alt1_SliderThumb = n370;
export const light_pink_alt1_Tooltip = n370;
export const light_pink_alt1_ProgressIndicator = n370;
const n371 = t([
  [12, 62],
  [13, 63],
  [14, 64],
  [15, 65],
  [16, 61],
  [17, 60],
  [18, 70],
  [19, 69],
  [20, 70],
  [21, 69],
  [22, 11],
  [23, 64],
  [24, 65],
  [25, 64],
  [26, 64],
  [27, 68],
]) as unknown as Theme;

export const light_pink_alt2_ListItem = n371;
const n372 = t([
  [12, 64],
  [13, 65],
  [14, 67],
  [15, 68],
  [16, 63],
  [17, 62],
  [18, 70],
  [19, 69],
  [20, 70],
  [21, 69],
  [22, 70],
  [23, 67],
  [24, 68],
  [25, 67],
  [26, 67],
  [27, 65],
]) as unknown as Theme;

export const light_pink_alt2_Card = n372;
export const light_pink_alt2_DrawerFrame = n372;
export const light_pink_alt2_Progress = n372;
export const light_pink_alt2_TooltipArrow = n372;
const n373 = t([
  [12, 65],
  [13, 67],
  [14, 68],
  [15, 69],
  [16, 64],
  [17, 63],
  [18, 70],
  [19, 69],
  [20, 70],
  [21, 69],
  [22, 69],
  [23, 275],
  [24, 275],
  [25, 68],
  [26, 68],
  [27, 64],
]) as unknown as Theme;

export const light_pink_alt2_Button = n373;
const n374 = t([
  [12, 63],
  [13, 64],
  [14, 65],
  [15, 67],
  [16, 62],
  [17, 61],
  [18, 70],
  [19, 69],
  [20, 70],
  [21, 69],
  [22, 71],
  [23, 68],
  [24, 69],
  [25, 68],
  [26, 68],
  [27, 67],
]) as unknown as Theme;

export const light_pink_alt2_Checkbox = n374;
export const light_pink_alt2_RadioGroupItem = n374;
export const light_pink_alt2_Input = n374;
export const light_pink_alt2_TextArea = n374;
const n375 = t([
  [12, 65],
  [13, 67],
  [14, 68],
  [15, 69],
  [16, 64],
  [17, 63],
  [18, 70],
  [19, 69],
  [20, 70],
  [21, 69],
  [22, 69],
  [23, 68],
  [24, 69],
  [25, 68],
  [26, 68],
  [27, 64],
]) as unknown as Theme;

export const light_pink_alt2_Switch = n375;
export const light_pink_alt2_TooltipContent = n375;
export const light_pink_alt2_SliderTrack = n375;
const n376 = t([
  [12, 71],
  [13, 70],
  [14, 69],
  [15, 68],
  [16, 11],
  [17, 11],
  [18, 62],
  [19, 63],
  [20, 62],
  [21, 63],
  [22, 60],
  [23, 69],
  [24, 68],
  [25, 69],
  [26, 69],
  [27, 63],
]) as unknown as Theme;

export const light_pink_alt2_SwitchThumb = n376;
const n377 = t([
  [12, 67],
  [13, 65],
  [14, 64],
  [15, 63],
  [16, 68],
  [17, 69],
  [18, 62],
  [19, 63],
  [20, 62],
  [21, 63],
  [22, 63],
  [23, 64],
  [24, 63],
  [25, 64],
  [26, 64],
  [27, 68],
]) as unknown as Theme;

export const light_pink_alt2_SliderTrackActive = n377;
const n378 = t([
  [12, 69],
  [13, 68],
  [14, 67],
  [15, 65],
  [16, 70],
  [17, 71],
  [18, 62],
  [19, 63],
  [20, 62],
  [21, 63],
  [22, 61],
  [23, 67],
  [24, 65],
  [25, 67],
  [26, 67],
  [27, 65],
]) as unknown as Theme;

export const light_pink_alt2_SliderThumb = n378;
export const light_pink_alt2_Tooltip = n378;
export const light_pink_alt2_ProgressIndicator = n378;
const n379 = t([
  [12, 63],
  [13, 64],
  [14, 65],
  [15, 67],
  [16, 62],
  [17, 61],
  [19, 68],
  [20, 69],
  [21, 68],
  [22, 71],
  [23, 65],
  [24, 67],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_active_ListItem = n379;
const n380 = t([
  [12, 65],
  [13, 67],
  [14, 68],
  [15, 69],
  [16, 64],
  [17, 63],
  [19, 68],
  [20, 69],
  [21, 68],
  [22, 69],
  [23, 68],
  [24, 69],
  [25, 68],
  [26, 68],
  [27, 64],
]) as unknown as Theme;

export const light_pink_active_Card = n380;
export const light_pink_active_DrawerFrame = n380;
export const light_pink_active_Progress = n380;
export const light_pink_active_TooltipArrow = n380;
const n381 = t([
  [12, 67],
  [13, 68],
  [14, 69],
  [15, 70],
  [16, 65],
  [17, 64],
  [19, 68],
  [20, 69],
  [21, 68],
  [22, 68],
  [23, 275],
  [24, 275],
  [25, 69],
  [26, 69],
  [27, 63],
]) as unknown as Theme;

export const light_pink_active_Button = n381;
const n382 = t([
  [12, 64],
  [13, 65],
  [14, 67],
  [15, 68],
  [16, 63],
  [17, 62],
  [19, 68],
  [20, 69],
  [21, 68],
  [22, 70],
  [23, 69],
  [24, 70],
  [25, 69],
  [26, 69],
  [27, 65],
]) as unknown as Theme;

export const light_pink_active_Checkbox = n382;
export const light_pink_active_RadioGroupItem = n382;
export const light_pink_active_Input = n382;
export const light_pink_active_TextArea = n382;
const n383 = t([
  [12, 67],
  [13, 68],
  [14, 69],
  [15, 70],
  [16, 65],
  [17, 64],
  [19, 68],
  [20, 69],
  [21, 68],
  [22, 68],
  [23, 69],
  [24, 70],
  [25, 69],
  [26, 69],
  [27, 63],
]) as unknown as Theme;

export const light_pink_active_Switch = n383;
export const light_pink_active_TooltipContent = n383;
export const light_pink_active_SliderTrack = n383;
const n384 = t([
  [12, 70],
  [13, 69],
  [14, 68],
  [15, 67],
  [16, 71],
  [17, 11],
  [19, 64],
  [20, 63],
  [21, 64],
  [22, 60],
  [23, 68],
  [24, 67],
  [25, 68],
  [26, 68],
  [27, 64],
]) as unknown as Theme;

export const light_pink_active_SwitchThumb = n384;
const n385 = t([
  [12, 65],
  [13, 64],
  [14, 63],
  [15, 62],
  [16, 67],
  [17, 68],
  [19, 64],
  [20, 63],
  [21, 64],
  [22, 64],
  [23, 63],
  [24, 62],
  [25, 63],
  [26, 63],
  [27, 69],
]) as unknown as Theme;

export const light_pink_active_SliderTrackActive = n385;
const n386 = t([
  [12, 68],
  [13, 67],
  [14, 65],
  [15, 64],
  [16, 69],
  [17, 70],
  [19, 64],
  [20, 63],
  [21, 64],
  [22, 62],
  [23, 65],
  [24, 64],
  [25, 65],
  [26, 65],
  [27, 67],
]) as unknown as Theme;

export const light_pink_active_SliderThumb = n386;
export const light_pink_active_Tooltip = n386;
export const light_pink_active_ProgressIndicator = n386;
const n387 = t([
  [12, 85],
  [13, 86],
  [14, 87],
  [15, 88],
  [16, 84],
  [17, 84],
  [18, 95],
  [19, 94],
  [20, 95],
  [21, 94],
  [22, 11],
  [23, 87],
  [24, 88],
  [25, 87],
  [26, 87],
  [27, 93],
]) as unknown as Theme;

export const light_red_alt1_ListItem = n387;
const n388 = t([
  [12, 87],
  [13, 88],
  [14, 89],
  [15, 91],
  [16, 86],
  [17, 85],
  [18, 95],
  [19, 94],
  [20, 95],
  [21, 94],
  [22, 95],
  [23, 89],
  [24, 91],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_alt1_Card = n388;
export const light_red_alt1_DrawerFrame = n388;
export const light_red_alt1_Progress = n388;
export const light_red_alt1_TooltipArrow = n388;
const n389 = t([
  [12, 88],
  [13, 89],
  [14, 91],
  [15, 92],
  [16, 87],
  [17, 86],
  [18, 95],
  [19, 94],
  [20, 95],
  [21, 94],
  [22, 94],
  [23, 275],
  [24, 275],
  [25, 91],
  [26, 91],
  [27, 89],
]) as unknown as Theme;

export const light_red_alt1_Button = n389;
const n390 = t([
  [12, 86],
  [13, 87],
  [14, 88],
  [15, 89],
  [16, 85],
  [17, 84],
  [18, 95],
  [19, 94],
  [20, 95],
  [21, 94],
  [22, 11],
  [23, 91],
  [24, 92],
  [25, 91],
  [26, 91],
  [27, 92],
]) as unknown as Theme;

export const light_red_alt1_Checkbox = n390;
export const light_red_alt1_RadioGroupItem = n390;
export const light_red_alt1_Input = n390;
export const light_red_alt1_TextArea = n390;
const n391 = t([
  [12, 88],
  [13, 89],
  [14, 91],
  [15, 92],
  [16, 87],
  [17, 86],
  [18, 95],
  [19, 94],
  [20, 95],
  [21, 94],
  [22, 94],
  [23, 91],
  [24, 92],
  [25, 91],
  [26, 91],
  [27, 89],
]) as unknown as Theme;

export const light_red_alt1_Switch = n391;
export const light_red_alt1_TooltipContent = n391;
export const light_red_alt1_SliderTrack = n391;
const n392 = t([
  [12, 11],
  [13, 95],
  [14, 94],
  [15, 93],
  [16, 11],
  [17, 11],
  [18, 85],
  [19, 86],
  [20, 85],
  [21, 86],
  [22, 84],
  [23, 94],
  [24, 93],
  [25, 94],
  [26, 94],
  [27, 86],
]) as unknown as Theme;

export const light_red_alt1_SwitchThumb = n392;
const n393 = t([
  [12, 92],
  [13, 91],
  [14, 89],
  [15, 88],
  [16, 93],
  [17, 94],
  [18, 85],
  [19, 86],
  [20, 85],
  [21, 86],
  [22, 86],
  [23, 89],
  [24, 88],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_alt1_SliderTrackActive = n393;
const n394 = t([
  [12, 94],
  [13, 93],
  [14, 92],
  [15, 91],
  [16, 95],
  [17, 11],
  [18, 85],
  [19, 86],
  [20, 85],
  [21, 86],
  [22, 84],
  [23, 92],
  [24, 91],
  [25, 92],
  [26, 92],
  [27, 88],
]) as unknown as Theme;

export const light_red_alt1_SliderThumb = n394;
export const light_red_alt1_Tooltip = n394;
export const light_red_alt1_ProgressIndicator = n394;
const n395 = t([
  [12, 86],
  [13, 87],
  [14, 88],
  [15, 89],
  [16, 85],
  [17, 84],
  [18, 94],
  [19, 93],
  [20, 94],
  [21, 93],
  [22, 11],
  [23, 88],
  [24, 89],
  [25, 88],
  [26, 88],
  [27, 92],
]) as unknown as Theme;

export const light_red_alt2_ListItem = n395;
const n396 = t([
  [12, 88],
  [13, 89],
  [14, 91],
  [15, 92],
  [16, 87],
  [17, 86],
  [18, 94],
  [19, 93],
  [20, 94],
  [21, 93],
  [22, 94],
  [23, 91],
  [24, 92],
  [25, 91],
  [26, 91],
  [27, 89],
]) as unknown as Theme;

export const light_red_alt2_Card = n396;
export const light_red_alt2_DrawerFrame = n396;
export const light_red_alt2_Progress = n396;
export const light_red_alt2_TooltipArrow = n396;
const n397 = t([
  [12, 89],
  [13, 91],
  [14, 92],
  [15, 93],
  [16, 88],
  [17, 87],
  [18, 94],
  [19, 93],
  [20, 94],
  [21, 93],
  [22, 93],
  [23, 275],
  [24, 275],
  [25, 92],
  [26, 92],
  [27, 88],
]) as unknown as Theme;

export const light_red_alt2_Button = n397;
const n398 = t([
  [12, 87],
  [13, 88],
  [14, 89],
  [15, 91],
  [16, 86],
  [17, 85],
  [18, 94],
  [19, 93],
  [20, 94],
  [21, 93],
  [22, 95],
  [23, 92],
  [24, 93],
  [25, 92],
  [26, 92],
  [27, 91],
]) as unknown as Theme;

export const light_red_alt2_Checkbox = n398;
export const light_red_alt2_RadioGroupItem = n398;
export const light_red_alt2_Input = n398;
export const light_red_alt2_TextArea = n398;
const n399 = t([
  [12, 89],
  [13, 91],
  [14, 92],
  [15, 93],
  [16, 88],
  [17, 87],
  [18, 94],
  [19, 93],
  [20, 94],
  [21, 93],
  [22, 93],
  [23, 92],
  [24, 93],
  [25, 92],
  [26, 92],
  [27, 88],
]) as unknown as Theme;

export const light_red_alt2_Switch = n399;
export const light_red_alt2_TooltipContent = n399;
export const light_red_alt2_SliderTrack = n399;
const n400 = t([
  [12, 95],
  [13, 94],
  [14, 93],
  [15, 92],
  [16, 11],
  [17, 11],
  [18, 86],
  [19, 87],
  [20, 86],
  [21, 87],
  [22, 84],
  [23, 93],
  [24, 92],
  [25, 93],
  [26, 93],
  [27, 87],
]) as unknown as Theme;

export const light_red_alt2_SwitchThumb = n400;
const n401 = t([
  [12, 91],
  [13, 89],
  [14, 88],
  [15, 87],
  [16, 92],
  [17, 93],
  [18, 86],
  [19, 87],
  [20, 86],
  [21, 87],
  [22, 87],
  [23, 88],
  [24, 87],
  [25, 88],
  [26, 88],
  [27, 92],
]) as unknown as Theme;

export const light_red_alt2_SliderTrackActive = n401;
const n402 = t([
  [12, 93],
  [13, 92],
  [14, 91],
  [15, 89],
  [16, 94],
  [17, 95],
  [18, 86],
  [19, 87],
  [20, 86],
  [21, 87],
  [22, 85],
  [23, 91],
  [24, 89],
  [25, 91],
  [26, 91],
  [27, 89],
]) as unknown as Theme;

export const light_red_alt2_SliderThumb = n402;
export const light_red_alt2_Tooltip = n402;
export const light_red_alt2_ProgressIndicator = n402;
const n403 = t([
  [12, 87],
  [13, 88],
  [14, 89],
  [15, 91],
  [16, 86],
  [17, 85],
  [19, 92],
  [20, 93],
  [21, 92],
  [22, 95],
  [23, 89],
  [24, 91],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_active_ListItem = n403;
const n404 = t([
  [12, 89],
  [13, 91],
  [14, 92],
  [15, 93],
  [16, 88],
  [17, 87],
  [19, 92],
  [20, 93],
  [21, 92],
  [22, 93],
  [23, 92],
  [24, 93],
  [25, 92],
  [26, 92],
  [27, 88],
]) as unknown as Theme;

export const light_red_active_Card = n404;
export const light_red_active_DrawerFrame = n404;
export const light_red_active_Progress = n404;
export const light_red_active_TooltipArrow = n404;
const n405 = t([
  [12, 91],
  [13, 92],
  [14, 93],
  [15, 94],
  [16, 89],
  [17, 88],
  [19, 92],
  [20, 93],
  [21, 92],
  [22, 92],
  [23, 275],
  [24, 275],
  [25, 93],
  [26, 93],
  [27, 87],
]) as unknown as Theme;

export const light_red_active_Button = n405;
const n406 = t([
  [12, 88],
  [13, 89],
  [14, 91],
  [15, 92],
  [16, 87],
  [17, 86],
  [19, 92],
  [20, 93],
  [21, 92],
  [22, 94],
  [23, 93],
  [24, 94],
  [25, 93],
  [26, 93],
  [27, 89],
]) as unknown as Theme;

export const light_red_active_Checkbox = n406;
export const light_red_active_RadioGroupItem = n406;
export const light_red_active_Input = n406;
export const light_red_active_TextArea = n406;
const n407 = t([
  [12, 91],
  [13, 92],
  [14, 93],
  [15, 94],
  [16, 89],
  [17, 88],
  [19, 92],
  [20, 93],
  [21, 92],
  [22, 92],
  [23, 93],
  [24, 94],
  [25, 93],
  [26, 93],
  [27, 87],
]) as unknown as Theme;

export const light_red_active_Switch = n407;
export const light_red_active_TooltipContent = n407;
export const light_red_active_SliderTrack = n407;
const n408 = t([
  [12, 94],
  [13, 93],
  [14, 92],
  [15, 91],
  [16, 95],
  [17, 11],
  [19, 88],
  [20, 87],
  [21, 88],
  [22, 84],
  [23, 92],
  [24, 91],
  [25, 92],
  [26, 92],
  [27, 88],
]) as unknown as Theme;

export const light_red_active_SwitchThumb = n408;
const n409 = t([
  [12, 89],
  [13, 88],
  [14, 87],
  [15, 86],
  [16, 91],
  [17, 92],
  [19, 88],
  [20, 87],
  [21, 88],
  [22, 88],
  [23, 87],
  [24, 86],
  [25, 87],
  [26, 87],
  [27, 93],
]) as unknown as Theme;

export const light_red_active_SliderTrackActive = n409;
const n410 = t([
  [12, 92],
  [13, 91],
  [14, 89],
  [15, 88],
  [16, 93],
  [17, 94],
  [19, 88],
  [20, 87],
  [21, 88],
  [22, 86],
  [23, 89],
  [24, 88],
  [25, 89],
  [26, 89],
  [27, 91],
]) as unknown as Theme;

export const light_red_active_SliderThumb = n410;
export const light_red_active_Tooltip = n410;
export const light_red_active_ProgressIndicator = n410;
const n411 = t([
  [12, 187],
  [13, 188],
  [14, 189],
  [15, 190],
  [16, 186],
  [17, 185],
  [18, 195],
  [19, 194],
  [20, 195],
  [21, 194],
  [22, 0],
  [23, 190],
  [24, 192],
  [25, 189],
  [26, 190],
  [27, 56],
]) as unknown as Theme;

export const dark_orange_alt1_ListItem = n411;
const n412 = t([
  [12, 188],
  [13, 189],
  [14, 190],
  [15, 192],
  [16, 187],
  [17, 186],
  [18, 195],
  [19, 194],
  [20, 195],
  [21, 194],
  [22, 195],
  [23, 192],
  [24, 56],
  [25, 190],
  [26, 192],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_alt1_Card = n412;
export const dark_orange_alt1_DrawerFrame = n412;
export const dark_orange_alt1_Progress = n412;
export const dark_orange_alt1_TooltipArrow = n412;
const n413 = t([
  [12, 189],
  [13, 190],
  [14, 192],
  [15, 56],
  [16, 188],
  [17, 187],
  [18, 195],
  [19, 194],
  [20, 195],
  [21, 194],
  [22, 194],
  [23, 275],
  [24, 275],
  [25, 192],
  [26, 56],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_alt1_Button = n413;
const n414 = t([
  [12, 187],
  [13, 188],
  [14, 189],
  [15, 190],
  [16, 186],
  [17, 185],
  [18, 195],
  [19, 194],
  [20, 195],
  [21, 194],
  [22, 0],
  [23, 56],
  [24, 193],
  [25, 192],
  [26, 56],
  [27, 56],
]) as unknown as Theme;

export const dark_orange_alt1_Checkbox = n414;
export const dark_orange_alt1_RadioGroupItem = n414;
export const dark_orange_alt1_Input = n414;
export const dark_orange_alt1_TextArea = n414;
const n415 = t([
  [12, 189],
  [13, 190],
  [14, 192],
  [15, 56],
  [16, 188],
  [17, 187],
  [18, 195],
  [19, 194],
  [20, 195],
  [21, 194],
  [22, 194],
  [23, 56],
  [24, 193],
  [25, 192],
  [26, 56],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_alt1_Switch = n415;
export const dark_orange_alt1_TooltipContent = n415;
export const dark_orange_alt1_SliderTrack = n415;
const n416 = t([
  [12, 0],
  [13, 195],
  [14, 194],
  [15, 193],
  [16, 0],
  [17, 0],
  [18, 186],
  [19, 187],
  [20, 186],
  [21, 187],
  [22, 185],
  [23, 193],
  [24, 56],
  [25, 194],
  [26, 193],
  [27, 187],
]) as unknown as Theme;

export const dark_orange_alt1_SwitchThumb = n416;
const n417 = t([
  [12, 56],
  [13, 192],
  [14, 190],
  [15, 189],
  [16, 193],
  [17, 194],
  [18, 186],
  [19, 187],
  [20, 186],
  [21, 187],
  [22, 187],
  [23, 189],
  [24, 188],
  [25, 190],
  [26, 189],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_alt1_SliderTrackActive = n417;
const n418 = t([
  [12, 194],
  [13, 193],
  [14, 56],
  [15, 192],
  [16, 195],
  [17, 0],
  [18, 186],
  [19, 187],
  [20, 186],
  [21, 187],
  [22, 185],
  [23, 192],
  [24, 190],
  [25, 56],
  [26, 192],
  [27, 189],
]) as unknown as Theme;

export const dark_orange_alt1_SliderThumb = n418;
export const dark_orange_alt1_Tooltip = n418;
export const dark_orange_alt1_ProgressIndicator = n418;
const n419 = t([
  [12, 188],
  [13, 189],
  [14, 190],
  [15, 192],
  [16, 187],
  [17, 186],
  [18, 194],
  [19, 193],
  [20, 194],
  [21, 193],
  [22, 195],
  [23, 192],
  [24, 56],
  [25, 190],
  [26, 192],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_alt2_ListItem = n419;
const n420 = t([
  [12, 189],
  [13, 190],
  [14, 192],
  [15, 56],
  [16, 188],
  [17, 187],
  [18, 194],
  [19, 193],
  [20, 194],
  [21, 193],
  [22, 194],
  [23, 56],
  [24, 193],
  [25, 192],
  [26, 56],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_alt2_Card = n420;
export const dark_orange_alt2_DrawerFrame = n420;
export const dark_orange_alt2_Progress = n420;
export const dark_orange_alt2_TooltipArrow = n420;
const n421 = t([
  [12, 190],
  [13, 192],
  [14, 56],
  [15, 193],
  [16, 189],
  [17, 188],
  [18, 194],
  [19, 193],
  [20, 194],
  [21, 193],
  [22, 193],
  [23, 275],
  [24, 275],
  [25, 56],
  [26, 193],
  [27, 189],
]) as unknown as Theme;

export const dark_orange_alt2_Button = n421;
const n422 = t([
  [12, 188],
  [13, 189],
  [14, 190],
  [15, 192],
  [16, 187],
  [17, 186],
  [18, 194],
  [19, 193],
  [20, 194],
  [21, 193],
  [22, 195],
  [23, 193],
  [24, 194],
  [25, 56],
  [26, 193],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_alt2_Checkbox = n422;
export const dark_orange_alt2_RadioGroupItem = n422;
export const dark_orange_alt2_Input = n422;
export const dark_orange_alt2_TextArea = n422;
const n423 = t([
  [12, 190],
  [13, 192],
  [14, 56],
  [15, 193],
  [16, 189],
  [17, 188],
  [18, 194],
  [19, 193],
  [20, 194],
  [21, 193],
  [22, 193],
  [23, 193],
  [24, 194],
  [25, 56],
  [26, 193],
  [27, 189],
]) as unknown as Theme;

export const dark_orange_alt2_Switch = n423;
export const dark_orange_alt2_TooltipContent = n423;
export const dark_orange_alt2_SliderTrack = n423;
const n424 = t([
  [12, 195],
  [13, 194],
  [14, 193],
  [15, 56],
  [16, 0],
  [17, 0],
  [18, 187],
  [19, 188],
  [20, 187],
  [21, 188],
  [22, 185],
  [23, 56],
  [24, 192],
  [25, 193],
  [26, 56],
  [27, 188],
]) as unknown as Theme;

export const dark_orange_alt2_SwitchThumb = n424;
const n425 = t([
  [12, 192],
  [13, 190],
  [14, 189],
  [15, 188],
  [16, 56],
  [17, 193],
  [18, 187],
  [19, 188],
  [20, 187],
  [21, 188],
  [22, 188],
  [23, 188],
  [24, 187],
  [25, 189],
  [26, 188],
  [27, 56],
]) as unknown as Theme;

export const dark_orange_alt2_SliderTrackActive = n425;
const n426 = t([
  [12, 193],
  [13, 56],
  [14, 192],
  [15, 190],
  [16, 194],
  [17, 195],
  [18, 187],
  [19, 188],
  [20, 187],
  [21, 188],
  [22, 186],
  [23, 190],
  [24, 189],
  [25, 192],
  [26, 190],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_alt2_SliderThumb = n426;
export const dark_orange_alt2_Tooltip = n426;
export const dark_orange_alt2_ProgressIndicator = n426;
const n427 = t([
  [12, 189],
  [13, 190],
  [14, 192],
  [15, 56],
  [16, 188],
  [17, 187],
  [19, 56],
  [20, 193],
  [21, 56],
  [22, 194],
  [23, 56],
  [24, 193],
  [25, 192],
  [26, 56],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_active_ListItem = n427;
const n428 = t([
  [12, 190],
  [13, 192],
  [14, 56],
  [15, 193],
  [16, 189],
  [17, 188],
  [19, 56],
  [20, 193],
  [21, 56],
  [22, 193],
  [23, 193],
  [24, 194],
  [25, 56],
  [26, 193],
  [27, 189],
]) as unknown as Theme;

export const dark_orange_active_Card = n428;
export const dark_orange_active_DrawerFrame = n428;
export const dark_orange_active_Progress = n428;
export const dark_orange_active_TooltipArrow = n428;
const n429 = t([
  [12, 192],
  [13, 56],
  [14, 193],
  [15, 194],
  [16, 190],
  [17, 189],
  [19, 56],
  [20, 193],
  [21, 56],
  [22, 56],
  [23, 275],
  [24, 275],
  [25, 193],
  [26, 194],
  [27, 188],
]) as unknown as Theme;

export const dark_orange_active_Button = n429;
const n430 = t([
  [12, 189],
  [13, 190],
  [14, 192],
  [15, 56],
  [16, 188],
  [17, 187],
  [19, 56],
  [20, 193],
  [21, 56],
  [22, 194],
  [23, 194],
  [24, 195],
  [25, 193],
  [26, 194],
  [27, 190],
]) as unknown as Theme;

export const dark_orange_active_Checkbox = n430;
export const dark_orange_active_RadioGroupItem = n430;
export const dark_orange_active_Input = n430;
export const dark_orange_active_TextArea = n430;
const n431 = t([
  [12, 192],
  [13, 56],
  [14, 193],
  [15, 194],
  [16, 190],
  [17, 189],
  [19, 56],
  [20, 193],
  [21, 56],
  [22, 56],
  [23, 194],
  [24, 195],
  [25, 193],
  [26, 194],
  [27, 188],
]) as unknown as Theme;

export const dark_orange_active_Switch = n431;
export const dark_orange_active_TooltipContent = n431;
export const dark_orange_active_SliderTrack = n431;
const n432 = t([
  [12, 194],
  [13, 193],
  [14, 56],
  [15, 192],
  [16, 195],
  [17, 0],
  [19, 189],
  [20, 188],
  [21, 189],
  [22, 185],
  [23, 192],
  [24, 190],
  [25, 56],
  [26, 192],
  [27, 189],
]) as unknown as Theme;

export const dark_orange_active_SwitchThumb = n432;
const n433 = t([
  [12, 190],
  [13, 189],
  [14, 188],
  [15, 187],
  [16, 192],
  [17, 56],
  [19, 189],
  [20, 188],
  [21, 189],
  [22, 189],
  [23, 187],
  [24, 186],
  [25, 188],
  [26, 187],
  [27, 193],
]) as unknown as Theme;

export const dark_orange_active_SliderTrackActive = n433;
const n434 = t([
  [12, 56],
  [13, 192],
  [14, 190],
  [15, 189],
  [16, 193],
  [17, 194],
  [19, 189],
  [20, 188],
  [21, 189],
  [22, 187],
  [23, 189],
  [24, 188],
  [25, 190],
  [26, 189],
  [27, 192],
]) as unknown as Theme;

export const dark_orange_active_SliderThumb = n434;
export const dark_orange_active_Tooltip = n434;
export const dark_orange_active_ProgressIndicator = n434;
const n435 = t([
  [12, 231],
  [13, 232],
  [14, 233],
  [15, 234],
  [16, 230],
  [17, 229],
  [18, 239],
  [19, 238],
  [20, 239],
  [21, 238],
  [22, 0],
  [23, 234],
  [24, 236],
  [25, 233],
  [26, 234],
  [27, 104],
]) as unknown as Theme;

export const dark_yellow_alt1_ListItem = n435;
const n436 = t([
  [12, 232],
  [13, 233],
  [14, 234],
  [15, 236],
  [16, 231],
  [17, 230],
  [18, 239],
  [19, 238],
  [20, 239],
  [21, 238],
  [22, 239],
  [23, 236],
  [24, 104],
  [25, 234],
  [26, 236],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_alt1_Card = n436;
export const dark_yellow_alt1_DrawerFrame = n436;
export const dark_yellow_alt1_Progress = n436;
export const dark_yellow_alt1_TooltipArrow = n436;
const n437 = t([
  [12, 233],
  [13, 234],
  [14, 236],
  [15, 104],
  [16, 232],
  [17, 231],
  [18, 239],
  [19, 238],
  [20, 239],
  [21, 238],
  [22, 238],
  [23, 275],
  [24, 275],
  [25, 236],
  [26, 104],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_alt1_Button = n437;
const n438 = t([
  [12, 231],
  [13, 232],
  [14, 233],
  [15, 234],
  [16, 230],
  [17, 229],
  [18, 239],
  [19, 238],
  [20, 239],
  [21, 238],
  [22, 0],
  [23, 104],
  [24, 237],
  [25, 236],
  [26, 104],
  [27, 104],
]) as unknown as Theme;

export const dark_yellow_alt1_Checkbox = n438;
export const dark_yellow_alt1_RadioGroupItem = n438;
export const dark_yellow_alt1_Input = n438;
export const dark_yellow_alt1_TextArea = n438;
const n439 = t([
  [12, 233],
  [13, 234],
  [14, 236],
  [15, 104],
  [16, 232],
  [17, 231],
  [18, 239],
  [19, 238],
  [20, 239],
  [21, 238],
  [22, 238],
  [23, 104],
  [24, 237],
  [25, 236],
  [26, 104],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_alt1_Switch = n439;
export const dark_yellow_alt1_TooltipContent = n439;
export const dark_yellow_alt1_SliderTrack = n439;
const n440 = t([
  [12, 0],
  [13, 239],
  [14, 238],
  [15, 237],
  [16, 0],
  [17, 0],
  [18, 230],
  [19, 231],
  [20, 230],
  [21, 231],
  [22, 229],
  [23, 237],
  [24, 104],
  [25, 238],
  [26, 237],
  [27, 231],
]) as unknown as Theme;

export const dark_yellow_alt1_SwitchThumb = n440;
const n441 = t([
  [12, 104],
  [13, 236],
  [14, 234],
  [15, 233],
  [16, 237],
  [17, 238],
  [18, 230],
  [19, 231],
  [20, 230],
  [21, 231],
  [22, 231],
  [23, 233],
  [24, 232],
  [25, 234],
  [26, 233],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_alt1_SliderTrackActive = n441;
const n442 = t([
  [12, 238],
  [13, 237],
  [14, 104],
  [15, 236],
  [16, 239],
  [17, 0],
  [18, 230],
  [19, 231],
  [20, 230],
  [21, 231],
  [22, 229],
  [23, 236],
  [24, 234],
  [25, 104],
  [26, 236],
  [27, 233],
]) as unknown as Theme;

export const dark_yellow_alt1_SliderThumb = n442;
export const dark_yellow_alt1_Tooltip = n442;
export const dark_yellow_alt1_ProgressIndicator = n442;
const n443 = t([
  [12, 232],
  [13, 233],
  [14, 234],
  [15, 236],
  [16, 231],
  [17, 230],
  [18, 238],
  [19, 237],
  [20, 238],
  [21, 237],
  [22, 239],
  [23, 236],
  [24, 104],
  [25, 234],
  [26, 236],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_alt2_ListItem = n443;
const n444 = t([
  [12, 233],
  [13, 234],
  [14, 236],
  [15, 104],
  [16, 232],
  [17, 231],
  [18, 238],
  [19, 237],
  [20, 238],
  [21, 237],
  [22, 238],
  [23, 104],
  [24, 237],
  [25, 236],
  [26, 104],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_alt2_Card = n444;
export const dark_yellow_alt2_DrawerFrame = n444;
export const dark_yellow_alt2_Progress = n444;
export const dark_yellow_alt2_TooltipArrow = n444;
const n445 = t([
  [12, 234],
  [13, 236],
  [14, 104],
  [15, 237],
  [16, 233],
  [17, 232],
  [18, 238],
  [19, 237],
  [20, 238],
  [21, 237],
  [22, 237],
  [23, 275],
  [24, 275],
  [25, 104],
  [26, 237],
  [27, 233],
]) as unknown as Theme;

export const dark_yellow_alt2_Button = n445;
const n446 = t([
  [12, 232],
  [13, 233],
  [14, 234],
  [15, 236],
  [16, 231],
  [17, 230],
  [18, 238],
  [19, 237],
  [20, 238],
  [21, 237],
  [22, 239],
  [23, 237],
  [24, 238],
  [25, 104],
  [26, 237],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_alt2_Checkbox = n446;
export const dark_yellow_alt2_RadioGroupItem = n446;
export const dark_yellow_alt2_Input = n446;
export const dark_yellow_alt2_TextArea = n446;
const n447 = t([
  [12, 234],
  [13, 236],
  [14, 104],
  [15, 237],
  [16, 233],
  [17, 232],
  [18, 238],
  [19, 237],
  [20, 238],
  [21, 237],
  [22, 237],
  [23, 237],
  [24, 238],
  [25, 104],
  [26, 237],
  [27, 233],
]) as unknown as Theme;

export const dark_yellow_alt2_Switch = n447;
export const dark_yellow_alt2_TooltipContent = n447;
export const dark_yellow_alt2_SliderTrack = n447;
const n448 = t([
  [12, 239],
  [13, 238],
  [14, 237],
  [15, 104],
  [16, 0],
  [17, 0],
  [18, 231],
  [19, 232],
  [20, 231],
  [21, 232],
  [22, 229],
  [23, 104],
  [24, 236],
  [25, 237],
  [26, 104],
  [27, 232],
]) as unknown as Theme;

export const dark_yellow_alt2_SwitchThumb = n448;
const n449 = t([
  [12, 236],
  [13, 234],
  [14, 233],
  [15, 232],
  [16, 104],
  [17, 237],
  [18, 231],
  [19, 232],
  [20, 231],
  [21, 232],
  [22, 232],
  [23, 232],
  [24, 231],
  [25, 233],
  [26, 232],
  [27, 104],
]) as unknown as Theme;

export const dark_yellow_alt2_SliderTrackActive = n449;
const n450 = t([
  [12, 237],
  [13, 104],
  [14, 236],
  [15, 234],
  [16, 238],
  [17, 239],
  [18, 231],
  [19, 232],
  [20, 231],
  [21, 232],
  [22, 230],
  [23, 234],
  [24, 233],
  [25, 236],
  [26, 234],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_alt2_SliderThumb = n450;
export const dark_yellow_alt2_Tooltip = n450;
export const dark_yellow_alt2_ProgressIndicator = n450;
const n451 = t([
  [12, 233],
  [13, 234],
  [14, 236],
  [15, 104],
  [16, 232],
  [17, 231],
  [19, 104],
  [20, 237],
  [21, 104],
  [22, 238],
  [23, 104],
  [24, 237],
  [25, 236],
  [26, 104],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_active_ListItem = n451;
const n452 = t([
  [12, 234],
  [13, 236],
  [14, 104],
  [15, 237],
  [16, 233],
  [17, 232],
  [19, 104],
  [20, 237],
  [21, 104],
  [22, 237],
  [23, 237],
  [24, 238],
  [25, 104],
  [26, 237],
  [27, 233],
]) as unknown as Theme;

export const dark_yellow_active_Card = n452;
export const dark_yellow_active_DrawerFrame = n452;
export const dark_yellow_active_Progress = n452;
export const dark_yellow_active_TooltipArrow = n452;
const n453 = t([
  [12, 236],
  [13, 104],
  [14, 237],
  [15, 238],
  [16, 234],
  [17, 233],
  [19, 104],
  [20, 237],
  [21, 104],
  [22, 104],
  [23, 275],
  [24, 275],
  [25, 237],
  [26, 238],
  [27, 232],
]) as unknown as Theme;

export const dark_yellow_active_Button = n453;
const n454 = t([
  [12, 233],
  [13, 234],
  [14, 236],
  [15, 104],
  [16, 232],
  [17, 231],
  [19, 104],
  [20, 237],
  [21, 104],
  [22, 238],
  [23, 238],
  [24, 239],
  [25, 237],
  [26, 238],
  [27, 234],
]) as unknown as Theme;

export const dark_yellow_active_Checkbox = n454;
export const dark_yellow_active_RadioGroupItem = n454;
export const dark_yellow_active_Input = n454;
export const dark_yellow_active_TextArea = n454;
const n455 = t([
  [12, 236],
  [13, 104],
  [14, 237],
  [15, 238],
  [16, 234],
  [17, 233],
  [19, 104],
  [20, 237],
  [21, 104],
  [22, 104],
  [23, 238],
  [24, 239],
  [25, 237],
  [26, 238],
  [27, 232],
]) as unknown as Theme;

export const dark_yellow_active_Switch = n455;
export const dark_yellow_active_TooltipContent = n455;
export const dark_yellow_active_SliderTrack = n455;
const n456 = t([
  [12, 238],
  [13, 237],
  [14, 104],
  [15, 236],
  [16, 239],
  [17, 0],
  [19, 233],
  [20, 232],
  [21, 233],
  [22, 229],
  [23, 236],
  [24, 234],
  [25, 104],
  [26, 236],
  [27, 233],
]) as unknown as Theme;

export const dark_yellow_active_SwitchThumb = n456;
const n457 = t([
  [12, 234],
  [13, 233],
  [14, 232],
  [15, 231],
  [16, 236],
  [17, 104],
  [19, 233],
  [20, 232],
  [21, 233],
  [22, 233],
  [23, 231],
  [24, 230],
  [25, 232],
  [26, 231],
  [27, 237],
]) as unknown as Theme;

export const dark_yellow_active_SliderTrackActive = n457;
const n458 = t([
  [12, 104],
  [13, 236],
  [14, 234],
  [15, 233],
  [16, 237],
  [17, 238],
  [19, 233],
  [20, 232],
  [21, 233],
  [22, 231],
  [23, 233],
  [24, 232],
  [25, 234],
  [26, 233],
  [27, 236],
]) as unknown as Theme;

export const dark_yellow_active_SliderThumb = n458;
export const dark_yellow_active_Tooltip = n458;
export const dark_yellow_active_ProgressIndicator = n458;
const n459 = t([
  [12, 176],
  [13, 177],
  [14, 178],
  [15, 179],
  [16, 175],
  [17, 174],
  [18, 184],
  [19, 183],
  [20, 184],
  [21, 183],
  [22, 0],
  [23, 179],
  [24, 181],
  [25, 178],
  [26, 179],
  [27, 44],
]) as unknown as Theme;

export const dark_green_alt1_ListItem = n459;
const n460 = t([
  [12, 177],
  [13, 178],
  [14, 179],
  [15, 181],
  [16, 176],
  [17, 175],
  [18, 184],
  [19, 183],
  [20, 184],
  [21, 183],
  [22, 184],
  [23, 181],
  [24, 44],
  [25, 179],
  [26, 181],
  [27, 181],
]) as unknown as Theme;

export const dark_green_alt1_Card = n460;
export const dark_green_alt1_DrawerFrame = n460;
export const dark_green_alt1_Progress = n460;
export const dark_green_alt1_TooltipArrow = n460;
const n461 = t([
  [12, 178],
  [13, 179],
  [14, 181],
  [15, 44],
  [16, 177],
  [17, 176],
  [18, 184],
  [19, 183],
  [20, 184],
  [21, 183],
  [22, 183],
  [23, 275],
  [24, 275],
  [25, 181],
  [26, 44],
  [27, 179],
]) as unknown as Theme;

export const dark_green_alt1_Button = n461;
const n462 = t([
  [12, 176],
  [13, 177],
  [14, 178],
  [15, 179],
  [16, 175],
  [17, 174],
  [18, 184],
  [19, 183],
  [20, 184],
  [21, 183],
  [22, 0],
  [23, 44],
  [24, 182],
  [25, 181],
  [26, 44],
  [27, 44],
]) as unknown as Theme;

export const dark_green_alt1_Checkbox = n462;
export const dark_green_alt1_RadioGroupItem = n462;
export const dark_green_alt1_Input = n462;
export const dark_green_alt1_TextArea = n462;
const n463 = t([
  [12, 178],
  [13, 179],
  [14, 181],
  [15, 44],
  [16, 177],
  [17, 176],
  [18, 184],
  [19, 183],
  [20, 184],
  [21, 183],
  [22, 183],
  [23, 44],
  [24, 182],
  [25, 181],
  [26, 44],
  [27, 179],
]) as unknown as Theme;

export const dark_green_alt1_Switch = n463;
export const dark_green_alt1_TooltipContent = n463;
export const dark_green_alt1_SliderTrack = n463;
const n464 = t([
  [12, 0],
  [13, 184],
  [14, 183],
  [15, 182],
  [16, 0],
  [17, 0],
  [18, 175],
  [19, 176],
  [20, 175],
  [21, 176],
  [22, 174],
  [23, 182],
  [24, 44],
  [25, 183],
  [26, 182],
  [27, 176],
]) as unknown as Theme;

export const dark_green_alt1_SwitchThumb = n464;
const n465 = t([
  [12, 44],
  [13, 181],
  [14, 179],
  [15, 178],
  [16, 182],
  [17, 183],
  [18, 175],
  [19, 176],
  [20, 175],
  [21, 176],
  [22, 176],
  [23, 178],
  [24, 177],
  [25, 179],
  [26, 178],
  [27, 181],
]) as unknown as Theme;

export const dark_green_alt1_SliderTrackActive = n465;
const n466 = t([
  [12, 183],
  [13, 182],
  [14, 44],
  [15, 181],
  [16, 184],
  [17, 0],
  [18, 175],
  [19, 176],
  [20, 175],
  [21, 176],
  [22, 174],
  [23, 181],
  [24, 179],
  [25, 44],
  [26, 181],
  [27, 178],
]) as unknown as Theme;

export const dark_green_alt1_SliderThumb = n466;
export const dark_green_alt1_Tooltip = n466;
export const dark_green_alt1_ProgressIndicator = n466;
const n467 = t([
  [12, 177],
  [13, 178],
  [14, 179],
  [15, 181],
  [16, 176],
  [17, 175],
  [18, 183],
  [19, 182],
  [20, 183],
  [21, 182],
  [22, 184],
  [23, 181],
  [24, 44],
  [25, 179],
  [26, 181],
  [27, 181],
]) as unknown as Theme;

export const dark_green_alt2_ListItem = n467;
const n468 = t([
  [12, 178],
  [13, 179],
  [14, 181],
  [15, 44],
  [16, 177],
  [17, 176],
  [18, 183],
  [19, 182],
  [20, 183],
  [21, 182],
  [22, 183],
  [23, 44],
  [24, 182],
  [25, 181],
  [26, 44],
  [27, 179],
]) as unknown as Theme;

export const dark_green_alt2_Card = n468;
export const dark_green_alt2_DrawerFrame = n468;
export const dark_green_alt2_Progress = n468;
export const dark_green_alt2_TooltipArrow = n468;
const n469 = t([
  [12, 179],
  [13, 181],
  [14, 44],
  [15, 182],
  [16, 178],
  [17, 177],
  [18, 183],
  [19, 182],
  [20, 183],
  [21, 182],
  [22, 182],
  [23, 275],
  [24, 275],
  [25, 44],
  [26, 182],
  [27, 178],
]) as unknown as Theme;

export const dark_green_alt2_Button = n469;
const n470 = t([
  [12, 177],
  [13, 178],
  [14, 179],
  [15, 181],
  [16, 176],
  [17, 175],
  [18, 183],
  [19, 182],
  [20, 183],
  [21, 182],
  [22, 184],
  [23, 182],
  [24, 183],
  [25, 44],
  [26, 182],
  [27, 181],
]) as unknown as Theme;

export const dark_green_alt2_Checkbox = n470;
export const dark_green_alt2_RadioGroupItem = n470;
export const dark_green_alt2_Input = n470;
export const dark_green_alt2_TextArea = n470;
const n471 = t([
  [12, 179],
  [13, 181],
  [14, 44],
  [15, 182],
  [16, 178],
  [17, 177],
  [18, 183],
  [19, 182],
  [20, 183],
  [21, 182],
  [22, 182],
  [23, 182],
  [24, 183],
  [25, 44],
  [26, 182],
  [27, 178],
]) as unknown as Theme;

export const dark_green_alt2_Switch = n471;
export const dark_green_alt2_TooltipContent = n471;
export const dark_green_alt2_SliderTrack = n471;
const n472 = t([
  [12, 184],
  [13, 183],
  [14, 182],
  [15, 44],
  [16, 0],
  [17, 0],
  [18, 176],
  [19, 177],
  [20, 176],
  [21, 177],
  [22, 174],
  [23, 44],
  [24, 181],
  [25, 182],
  [26, 44],
  [27, 177],
]) as unknown as Theme;

export const dark_green_alt2_SwitchThumb = n472;
const n473 = t([
  [12, 181],
  [13, 179],
  [14, 178],
  [15, 177],
  [16, 44],
  [17, 182],
  [18, 176],
  [19, 177],
  [20, 176],
  [21, 177],
  [22, 177],
  [23, 177],
  [24, 176],
  [25, 178],
  [26, 177],
  [27, 44],
]) as unknown as Theme;

export const dark_green_alt2_SliderTrackActive = n473;
const n474 = t([
  [12, 182],
  [13, 44],
  [14, 181],
  [15, 179],
  [16, 183],
  [17, 184],
  [18, 176],
  [19, 177],
  [20, 176],
  [21, 177],
  [22, 175],
  [23, 179],
  [24, 178],
  [25, 181],
  [26, 179],
  [27, 179],
]) as unknown as Theme;

export const dark_green_alt2_SliderThumb = n474;
export const dark_green_alt2_Tooltip = n474;
export const dark_green_alt2_ProgressIndicator = n474;
const n475 = t([
  [12, 178],
  [13, 179],
  [14, 181],
  [15, 44],
  [16, 177],
  [17, 176],
  [19, 44],
  [20, 182],
  [21, 44],
  [22, 183],
  [23, 44],
  [24, 182],
  [25, 181],
  [26, 44],
  [27, 179],
]) as unknown as Theme;

export const dark_green_active_ListItem = n475;
const n476 = t([
  [12, 179],
  [13, 181],
  [14, 44],
  [15, 182],
  [16, 178],
  [17, 177],
  [19, 44],
  [20, 182],
  [21, 44],
  [22, 182],
  [23, 182],
  [24, 183],
  [25, 44],
  [26, 182],
  [27, 178],
]) as unknown as Theme;

export const dark_green_active_Card = n476;
export const dark_green_active_DrawerFrame = n476;
export const dark_green_active_Progress = n476;
export const dark_green_active_TooltipArrow = n476;
const n477 = t([
  [12, 181],
  [13, 44],
  [14, 182],
  [15, 183],
  [16, 179],
  [17, 178],
  [19, 44],
  [20, 182],
  [21, 44],
  [22, 44],
  [23, 275],
  [24, 275],
  [25, 182],
  [26, 183],
  [27, 177],
]) as unknown as Theme;

export const dark_green_active_Button = n477;
const n478 = t([
  [12, 178],
  [13, 179],
  [14, 181],
  [15, 44],
  [16, 177],
  [17, 176],
  [19, 44],
  [20, 182],
  [21, 44],
  [22, 183],
  [23, 183],
  [24, 184],
  [25, 182],
  [26, 183],
  [27, 179],
]) as unknown as Theme;

export const dark_green_active_Checkbox = n478;
export const dark_green_active_RadioGroupItem = n478;
export const dark_green_active_Input = n478;
export const dark_green_active_TextArea = n478;
const n479 = t([
  [12, 181],
  [13, 44],
  [14, 182],
  [15, 183],
  [16, 179],
  [17, 178],
  [19, 44],
  [20, 182],
  [21, 44],
  [22, 44],
  [23, 183],
  [24, 184],
  [25, 182],
  [26, 183],
  [27, 177],
]) as unknown as Theme;

export const dark_green_active_Switch = n479;
export const dark_green_active_TooltipContent = n479;
export const dark_green_active_SliderTrack = n479;
const n480 = t([
  [12, 183],
  [13, 182],
  [14, 44],
  [15, 181],
  [16, 184],
  [17, 0],
  [19, 178],
  [20, 177],
  [21, 178],
  [22, 174],
  [23, 181],
  [24, 179],
  [25, 44],
  [26, 181],
  [27, 178],
]) as unknown as Theme;

export const dark_green_active_SwitchThumb = n480;
const n481 = t([
  [12, 179],
  [13, 178],
  [14, 177],
  [15, 176],
  [16, 181],
  [17, 44],
  [19, 178],
  [20, 177],
  [21, 178],
  [22, 178],
  [23, 176],
  [24, 175],
  [25, 177],
  [26, 176],
  [27, 182],
]) as unknown as Theme;

export const dark_green_active_SliderTrackActive = n481;
const n482 = t([
  [12, 44],
  [13, 181],
  [14, 179],
  [15, 178],
  [16, 182],
  [17, 183],
  [19, 178],
  [20, 177],
  [21, 178],
  [22, 176],
  [23, 178],
  [24, 177],
  [25, 179],
  [26, 178],
  [27, 181],
]) as unknown as Theme;

export const dark_green_active_SliderThumb = n482;
export const dark_green_active_Tooltip = n482;
export const dark_green_active_ProgressIndicator = n482;
const n483 = t([
  [12, 154],
  [13, 155],
  [14, 156],
  [15, 157],
  [16, 153],
  [17, 152],
  [18, 162],
  [19, 161],
  [20, 162],
  [21, 161],
  [22, 0],
  [23, 157],
  [24, 159],
  [25, 156],
  [26, 157],
  [27, 22],
]) as unknown as Theme;

export const dark_blue_alt1_ListItem = n483;
const n484 = t([
  [12, 155],
  [13, 156],
  [14, 157],
  [15, 159],
  [16, 154],
  [17, 153],
  [18, 162],
  [19, 161],
  [20, 162],
  [21, 161],
  [22, 162],
  [23, 159],
  [24, 22],
  [25, 157],
  [26, 159],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_alt1_Card = n484;
export const dark_blue_alt1_DrawerFrame = n484;
export const dark_blue_alt1_Progress = n484;
export const dark_blue_alt1_TooltipArrow = n484;
const n485 = t([
  [12, 156],
  [13, 157],
  [14, 159],
  [15, 22],
  [16, 155],
  [17, 154],
  [18, 162],
  [19, 161],
  [20, 162],
  [21, 161],
  [22, 161],
  [23, 275],
  [24, 275],
  [25, 159],
  [26, 22],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_alt1_Button = n485;
const n486 = t([
  [12, 154],
  [13, 155],
  [14, 156],
  [15, 157],
  [16, 153],
  [17, 152],
  [18, 162],
  [19, 161],
  [20, 162],
  [21, 161],
  [22, 0],
  [23, 22],
  [24, 160],
  [25, 159],
  [26, 22],
  [27, 22],
]) as unknown as Theme;

export const dark_blue_alt1_Checkbox = n486;
export const dark_blue_alt1_RadioGroupItem = n486;
export const dark_blue_alt1_Input = n486;
export const dark_blue_alt1_TextArea = n486;
const n487 = t([
  [12, 156],
  [13, 157],
  [14, 159],
  [15, 22],
  [16, 155],
  [17, 154],
  [18, 162],
  [19, 161],
  [20, 162],
  [21, 161],
  [22, 161],
  [23, 22],
  [24, 160],
  [25, 159],
  [26, 22],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_alt1_Switch = n487;
export const dark_blue_alt1_TooltipContent = n487;
export const dark_blue_alt1_SliderTrack = n487;
const n488 = t([
  [12, 0],
  [13, 162],
  [14, 161],
  [15, 160],
  [16, 0],
  [17, 0],
  [18, 153],
  [19, 154],
  [20, 153],
  [21, 154],
  [22, 152],
  [23, 160],
  [24, 22],
  [25, 161],
  [26, 160],
  [27, 154],
]) as unknown as Theme;

export const dark_blue_alt1_SwitchThumb = n488;
const n489 = t([
  [12, 22],
  [13, 159],
  [14, 157],
  [15, 156],
  [16, 160],
  [17, 161],
  [18, 153],
  [19, 154],
  [20, 153],
  [21, 154],
  [22, 154],
  [23, 156],
  [24, 155],
  [25, 157],
  [26, 156],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_alt1_SliderTrackActive = n489;
const n490 = t([
  [12, 161],
  [13, 160],
  [14, 22],
  [15, 159],
  [16, 162],
  [17, 0],
  [18, 153],
  [19, 154],
  [20, 153],
  [21, 154],
  [22, 152],
  [23, 159],
  [24, 157],
  [25, 22],
  [26, 159],
  [27, 156],
]) as unknown as Theme;

export const dark_blue_alt1_SliderThumb = n490;
export const dark_blue_alt1_Tooltip = n490;
export const dark_blue_alt1_ProgressIndicator = n490;
const n491 = t([
  [12, 155],
  [13, 156],
  [14, 157],
  [15, 159],
  [16, 154],
  [17, 153],
  [18, 161],
  [19, 160],
  [20, 161],
  [21, 160],
  [22, 162],
  [23, 159],
  [24, 22],
  [25, 157],
  [26, 159],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_alt2_ListItem = n491;
const n492 = t([
  [12, 156],
  [13, 157],
  [14, 159],
  [15, 22],
  [16, 155],
  [17, 154],
  [18, 161],
  [19, 160],
  [20, 161],
  [21, 160],
  [22, 161],
  [23, 22],
  [24, 160],
  [25, 159],
  [26, 22],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_alt2_Card = n492;
export const dark_blue_alt2_DrawerFrame = n492;
export const dark_blue_alt2_Progress = n492;
export const dark_blue_alt2_TooltipArrow = n492;
const n493 = t([
  [12, 157],
  [13, 159],
  [14, 22],
  [15, 160],
  [16, 156],
  [17, 155],
  [18, 161],
  [19, 160],
  [20, 161],
  [21, 160],
  [22, 160],
  [23, 275],
  [24, 275],
  [25, 22],
  [26, 160],
  [27, 156],
]) as unknown as Theme;

export const dark_blue_alt2_Button = n493;
const n494 = t([
  [12, 155],
  [13, 156],
  [14, 157],
  [15, 159],
  [16, 154],
  [17, 153],
  [18, 161],
  [19, 160],
  [20, 161],
  [21, 160],
  [22, 162],
  [23, 160],
  [24, 161],
  [25, 22],
  [26, 160],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_alt2_Checkbox = n494;
export const dark_blue_alt2_RadioGroupItem = n494;
export const dark_blue_alt2_Input = n494;
export const dark_blue_alt2_TextArea = n494;
const n495 = t([
  [12, 157],
  [13, 159],
  [14, 22],
  [15, 160],
  [16, 156],
  [17, 155],
  [18, 161],
  [19, 160],
  [20, 161],
  [21, 160],
  [22, 160],
  [23, 160],
  [24, 161],
  [25, 22],
  [26, 160],
  [27, 156],
]) as unknown as Theme;

export const dark_blue_alt2_Switch = n495;
export const dark_blue_alt2_TooltipContent = n495;
export const dark_blue_alt2_SliderTrack = n495;
const n496 = t([
  [12, 162],
  [13, 161],
  [14, 160],
  [15, 22],
  [16, 0],
  [17, 0],
  [18, 154],
  [19, 155],
  [20, 154],
  [21, 155],
  [22, 152],
  [23, 22],
  [24, 159],
  [25, 160],
  [26, 22],
  [27, 155],
]) as unknown as Theme;

export const dark_blue_alt2_SwitchThumb = n496;
const n497 = t([
  [12, 159],
  [13, 157],
  [14, 156],
  [15, 155],
  [16, 22],
  [17, 160],
  [18, 154],
  [19, 155],
  [20, 154],
  [21, 155],
  [22, 155],
  [23, 155],
  [24, 154],
  [25, 156],
  [26, 155],
  [27, 22],
]) as unknown as Theme;

export const dark_blue_alt2_SliderTrackActive = n497;
const n498 = t([
  [12, 160],
  [13, 22],
  [14, 159],
  [15, 157],
  [16, 161],
  [17, 162],
  [18, 154],
  [19, 155],
  [20, 154],
  [21, 155],
  [22, 153],
  [23, 157],
  [24, 156],
  [25, 159],
  [26, 157],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_alt2_SliderThumb = n498;
export const dark_blue_alt2_Tooltip = n498;
export const dark_blue_alt2_ProgressIndicator = n498;
const n499 = t([
  [12, 156],
  [13, 157],
  [14, 159],
  [15, 22],
  [16, 155],
  [17, 154],
  [19, 22],
  [20, 160],
  [21, 22],
  [22, 161],
  [23, 22],
  [24, 160],
  [25, 159],
  [26, 22],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_active_ListItem = n499;
const n500 = t([
  [12, 157],
  [13, 159],
  [14, 22],
  [15, 160],
  [16, 156],
  [17, 155],
  [19, 22],
  [20, 160],
  [21, 22],
  [22, 160],
  [23, 160],
  [24, 161],
  [25, 22],
  [26, 160],
  [27, 156],
]) as unknown as Theme;

export const dark_blue_active_Card = n500;
export const dark_blue_active_DrawerFrame = n500;
export const dark_blue_active_Progress = n500;
export const dark_blue_active_TooltipArrow = n500;
const n501 = t([
  [12, 159],
  [13, 22],
  [14, 160],
  [15, 161],
  [16, 157],
  [17, 156],
  [19, 22],
  [20, 160],
  [21, 22],
  [22, 22],
  [23, 275],
  [24, 275],
  [25, 160],
  [26, 161],
  [27, 155],
]) as unknown as Theme;

export const dark_blue_active_Button = n501;
const n502 = t([
  [12, 156],
  [13, 157],
  [14, 159],
  [15, 22],
  [16, 155],
  [17, 154],
  [19, 22],
  [20, 160],
  [21, 22],
  [22, 161],
  [23, 161],
  [24, 162],
  [25, 160],
  [26, 161],
  [27, 157],
]) as unknown as Theme;

export const dark_blue_active_Checkbox = n502;
export const dark_blue_active_RadioGroupItem = n502;
export const dark_blue_active_Input = n502;
export const dark_blue_active_TextArea = n502;
const n503 = t([
  [12, 159],
  [13, 22],
  [14, 160],
  [15, 161],
  [16, 157],
  [17, 156],
  [19, 22],
  [20, 160],
  [21, 22],
  [22, 22],
  [23, 161],
  [24, 162],
  [25, 160],
  [26, 161],
  [27, 155],
]) as unknown as Theme;

export const dark_blue_active_Switch = n503;
export const dark_blue_active_TooltipContent = n503;
export const dark_blue_active_SliderTrack = n503;
const n504 = t([
  [12, 161],
  [13, 160],
  [14, 22],
  [15, 159],
  [16, 162],
  [17, 0],
  [19, 156],
  [20, 155],
  [21, 156],
  [22, 152],
  [23, 159],
  [24, 157],
  [25, 22],
  [26, 159],
  [27, 156],
]) as unknown as Theme;

export const dark_blue_active_SwitchThumb = n504;
const n505 = t([
  [12, 157],
  [13, 156],
  [14, 155],
  [15, 154],
  [16, 159],
  [17, 22],
  [19, 156],
  [20, 155],
  [21, 156],
  [22, 156],
  [23, 154],
  [24, 153],
  [25, 155],
  [26, 154],
  [27, 160],
]) as unknown as Theme;

export const dark_blue_active_SliderTrackActive = n505;
const n506 = t([
  [12, 22],
  [13, 159],
  [14, 157],
  [15, 156],
  [16, 160],
  [17, 161],
  [19, 156],
  [20, 155],
  [21, 156],
  [22, 154],
  [23, 156],
  [24, 155],
  [25, 157],
  [26, 156],
  [27, 159],
]) as unknown as Theme;

export const dark_blue_active_SliderThumb = n506;
export const dark_blue_active_Tooltip = n506;
export const dark_blue_active_ProgressIndicator = n506;
const n507 = t([
  [12, 209],
  [13, 210],
  [14, 211],
  [15, 212],
  [16, 208],
  [17, 207],
  [18, 217],
  [19, 216],
  [20, 217],
  [21, 216],
  [22, 0],
  [23, 212],
  [24, 214],
  [25, 211],
  [26, 212],
  [27, 80],
]) as unknown as Theme;

export const dark_purple_alt1_ListItem = n507;
const n508 = t([
  [12, 210],
  [13, 211],
  [14, 212],
  [15, 214],
  [16, 209],
  [17, 208],
  [18, 217],
  [19, 216],
  [20, 217],
  [21, 216],
  [22, 217],
  [23, 214],
  [24, 80],
  [25, 212],
  [26, 214],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_alt1_Card = n508;
export const dark_purple_alt1_DrawerFrame = n508;
export const dark_purple_alt1_Progress = n508;
export const dark_purple_alt1_TooltipArrow = n508;
const n509 = t([
  [12, 211],
  [13, 212],
  [14, 214],
  [15, 80],
  [16, 210],
  [17, 209],
  [18, 217],
  [19, 216],
  [20, 217],
  [21, 216],
  [22, 216],
  [23, 275],
  [24, 275],
  [25, 214],
  [26, 80],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_alt1_Button = n509;
const n510 = t([
  [12, 209],
  [13, 210],
  [14, 211],
  [15, 212],
  [16, 208],
  [17, 207],
  [18, 217],
  [19, 216],
  [20, 217],
  [21, 216],
  [22, 0],
  [23, 80],
  [24, 215],
  [25, 214],
  [26, 80],
  [27, 80],
]) as unknown as Theme;

export const dark_purple_alt1_Checkbox = n510;
export const dark_purple_alt1_RadioGroupItem = n510;
export const dark_purple_alt1_Input = n510;
export const dark_purple_alt1_TextArea = n510;
const n511 = t([
  [12, 211],
  [13, 212],
  [14, 214],
  [15, 80],
  [16, 210],
  [17, 209],
  [18, 217],
  [19, 216],
  [20, 217],
  [21, 216],
  [22, 216],
  [23, 80],
  [24, 215],
  [25, 214],
  [26, 80],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_alt1_Switch = n511;
export const dark_purple_alt1_TooltipContent = n511;
export const dark_purple_alt1_SliderTrack = n511;
const n512 = t([
  [12, 0],
  [13, 217],
  [14, 216],
  [15, 215],
  [16, 0],
  [17, 0],
  [18, 208],
  [19, 209],
  [20, 208],
  [21, 209],
  [22, 207],
  [23, 215],
  [24, 80],
  [25, 216],
  [26, 215],
  [27, 209],
]) as unknown as Theme;

export const dark_purple_alt1_SwitchThumb = n512;
const n513 = t([
  [12, 80],
  [13, 214],
  [14, 212],
  [15, 211],
  [16, 215],
  [17, 216],
  [18, 208],
  [19, 209],
  [20, 208],
  [21, 209],
  [22, 209],
  [23, 211],
  [24, 210],
  [25, 212],
  [26, 211],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_alt1_SliderTrackActive = n513;
const n514 = t([
  [12, 216],
  [13, 215],
  [14, 80],
  [15, 214],
  [16, 217],
  [17, 0],
  [18, 208],
  [19, 209],
  [20, 208],
  [21, 209],
  [22, 207],
  [23, 214],
  [24, 212],
  [25, 80],
  [26, 214],
  [27, 211],
]) as unknown as Theme;

export const dark_purple_alt1_SliderThumb = n514;
export const dark_purple_alt1_Tooltip = n514;
export const dark_purple_alt1_ProgressIndicator = n514;
const n515 = t([
  [12, 210],
  [13, 211],
  [14, 212],
  [15, 214],
  [16, 209],
  [17, 208],
  [18, 216],
  [19, 215],
  [20, 216],
  [21, 215],
  [22, 217],
  [23, 214],
  [24, 80],
  [25, 212],
  [26, 214],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_alt2_ListItem = n515;
const n516 = t([
  [12, 211],
  [13, 212],
  [14, 214],
  [15, 80],
  [16, 210],
  [17, 209],
  [18, 216],
  [19, 215],
  [20, 216],
  [21, 215],
  [22, 216],
  [23, 80],
  [24, 215],
  [25, 214],
  [26, 80],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_alt2_Card = n516;
export const dark_purple_alt2_DrawerFrame = n516;
export const dark_purple_alt2_Progress = n516;
export const dark_purple_alt2_TooltipArrow = n516;
const n517 = t([
  [12, 212],
  [13, 214],
  [14, 80],
  [15, 215],
  [16, 211],
  [17, 210],
  [18, 216],
  [19, 215],
  [20, 216],
  [21, 215],
  [22, 215],
  [23, 275],
  [24, 275],
  [25, 80],
  [26, 215],
  [27, 211],
]) as unknown as Theme;

export const dark_purple_alt2_Button = n517;
const n518 = t([
  [12, 210],
  [13, 211],
  [14, 212],
  [15, 214],
  [16, 209],
  [17, 208],
  [18, 216],
  [19, 215],
  [20, 216],
  [21, 215],
  [22, 217],
  [23, 215],
  [24, 216],
  [25, 80],
  [26, 215],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_alt2_Checkbox = n518;
export const dark_purple_alt2_RadioGroupItem = n518;
export const dark_purple_alt2_Input = n518;
export const dark_purple_alt2_TextArea = n518;
const n519 = t([
  [12, 212],
  [13, 214],
  [14, 80],
  [15, 215],
  [16, 211],
  [17, 210],
  [18, 216],
  [19, 215],
  [20, 216],
  [21, 215],
  [22, 215],
  [23, 215],
  [24, 216],
  [25, 80],
  [26, 215],
  [27, 211],
]) as unknown as Theme;

export const dark_purple_alt2_Switch = n519;
export const dark_purple_alt2_TooltipContent = n519;
export const dark_purple_alt2_SliderTrack = n519;
const n520 = t([
  [12, 217],
  [13, 216],
  [14, 215],
  [15, 80],
  [16, 0],
  [17, 0],
  [18, 209],
  [19, 210],
  [20, 209],
  [21, 210],
  [22, 207],
  [23, 80],
  [24, 214],
  [25, 215],
  [26, 80],
  [27, 210],
]) as unknown as Theme;

export const dark_purple_alt2_SwitchThumb = n520;
const n521 = t([
  [12, 214],
  [13, 212],
  [14, 211],
  [15, 210],
  [16, 80],
  [17, 215],
  [18, 209],
  [19, 210],
  [20, 209],
  [21, 210],
  [22, 210],
  [23, 210],
  [24, 209],
  [25, 211],
  [26, 210],
  [27, 80],
]) as unknown as Theme;

export const dark_purple_alt2_SliderTrackActive = n521;
const n522 = t([
  [12, 215],
  [13, 80],
  [14, 214],
  [15, 212],
  [16, 216],
  [17, 217],
  [18, 209],
  [19, 210],
  [20, 209],
  [21, 210],
  [22, 208],
  [23, 212],
  [24, 211],
  [25, 214],
  [26, 212],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_alt2_SliderThumb = n522;
export const dark_purple_alt2_Tooltip = n522;
export const dark_purple_alt2_ProgressIndicator = n522;
const n523 = t([
  [12, 211],
  [13, 212],
  [14, 214],
  [15, 80],
  [16, 210],
  [17, 209],
  [19, 80],
  [20, 215],
  [21, 80],
  [22, 216],
  [23, 80],
  [24, 215],
  [25, 214],
  [26, 80],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_active_ListItem = n523;
const n524 = t([
  [12, 212],
  [13, 214],
  [14, 80],
  [15, 215],
  [16, 211],
  [17, 210],
  [19, 80],
  [20, 215],
  [21, 80],
  [22, 215],
  [23, 215],
  [24, 216],
  [25, 80],
  [26, 215],
  [27, 211],
]) as unknown as Theme;

export const dark_purple_active_Card = n524;
export const dark_purple_active_DrawerFrame = n524;
export const dark_purple_active_Progress = n524;
export const dark_purple_active_TooltipArrow = n524;
const n525 = t([
  [12, 214],
  [13, 80],
  [14, 215],
  [15, 216],
  [16, 212],
  [17, 211],
  [19, 80],
  [20, 215],
  [21, 80],
  [22, 80],
  [23, 275],
  [24, 275],
  [25, 215],
  [26, 216],
  [27, 210],
]) as unknown as Theme;

export const dark_purple_active_Button = n525;
const n526 = t([
  [12, 211],
  [13, 212],
  [14, 214],
  [15, 80],
  [16, 210],
  [17, 209],
  [19, 80],
  [20, 215],
  [21, 80],
  [22, 216],
  [23, 216],
  [24, 217],
  [25, 215],
  [26, 216],
  [27, 212],
]) as unknown as Theme;

export const dark_purple_active_Checkbox = n526;
export const dark_purple_active_RadioGroupItem = n526;
export const dark_purple_active_Input = n526;
export const dark_purple_active_TextArea = n526;
const n527 = t([
  [12, 214],
  [13, 80],
  [14, 215],
  [15, 216],
  [16, 212],
  [17, 211],
  [19, 80],
  [20, 215],
  [21, 80],
  [22, 80],
  [23, 216],
  [24, 217],
  [25, 215],
  [26, 216],
  [27, 210],
]) as unknown as Theme;

export const dark_purple_active_Switch = n527;
export const dark_purple_active_TooltipContent = n527;
export const dark_purple_active_SliderTrack = n527;
const n528 = t([
  [12, 216],
  [13, 215],
  [14, 80],
  [15, 214],
  [16, 217],
  [17, 0],
  [19, 211],
  [20, 210],
  [21, 211],
  [22, 207],
  [23, 214],
  [24, 212],
  [25, 80],
  [26, 214],
  [27, 211],
]) as unknown as Theme;

export const dark_purple_active_SwitchThumb = n528;
const n529 = t([
  [12, 212],
  [13, 211],
  [14, 210],
  [15, 209],
  [16, 214],
  [17, 80],
  [19, 211],
  [20, 210],
  [21, 211],
  [22, 211],
  [23, 209],
  [24, 208],
  [25, 210],
  [26, 209],
  [27, 215],
]) as unknown as Theme;

export const dark_purple_active_SliderTrackActive = n529;
const n530 = t([
  [12, 80],
  [13, 214],
  [14, 212],
  [15, 211],
  [16, 215],
  [17, 216],
  [19, 211],
  [20, 210],
  [21, 211],
  [22, 209],
  [23, 211],
  [24, 210],
  [25, 212],
  [26, 211],
  [27, 214],
]) as unknown as Theme;

export const dark_purple_active_SliderThumb = n530;
export const dark_purple_active_Tooltip = n530;
export const dark_purple_active_ProgressIndicator = n530;
const n531 = t([
  [12, 198],
  [13, 199],
  [14, 200],
  [15, 201],
  [16, 197],
  [17, 196],
  [18, 206],
  [19, 205],
  [20, 206],
  [21, 205],
  [22, 0],
  [23, 201],
  [24, 203],
  [25, 200],
  [26, 201],
  [27, 68],
]) as unknown as Theme;

export const dark_pink_alt1_ListItem = n531;
const n532 = t([
  [12, 199],
  [13, 200],
  [14, 201],
  [15, 203],
  [16, 198],
  [17, 197],
  [18, 206],
  [19, 205],
  [20, 206],
  [21, 205],
  [22, 206],
  [23, 203],
  [24, 68],
  [25, 201],
  [26, 203],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_alt1_Card = n532;
export const dark_pink_alt1_DrawerFrame = n532;
export const dark_pink_alt1_Progress = n532;
export const dark_pink_alt1_TooltipArrow = n532;
const n533 = t([
  [12, 200],
  [13, 201],
  [14, 203],
  [15, 68],
  [16, 199],
  [17, 198],
  [18, 206],
  [19, 205],
  [20, 206],
  [21, 205],
  [22, 205],
  [23, 275],
  [24, 275],
  [25, 203],
  [26, 68],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_alt1_Button = n533;
const n534 = t([
  [12, 198],
  [13, 199],
  [14, 200],
  [15, 201],
  [16, 197],
  [17, 196],
  [18, 206],
  [19, 205],
  [20, 206],
  [21, 205],
  [22, 0],
  [23, 68],
  [24, 204],
  [25, 203],
  [26, 68],
  [27, 68],
]) as unknown as Theme;

export const dark_pink_alt1_Checkbox = n534;
export const dark_pink_alt1_RadioGroupItem = n534;
export const dark_pink_alt1_Input = n534;
export const dark_pink_alt1_TextArea = n534;
const n535 = t([
  [12, 200],
  [13, 201],
  [14, 203],
  [15, 68],
  [16, 199],
  [17, 198],
  [18, 206],
  [19, 205],
  [20, 206],
  [21, 205],
  [22, 205],
  [23, 68],
  [24, 204],
  [25, 203],
  [26, 68],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_alt1_Switch = n535;
export const dark_pink_alt1_TooltipContent = n535;
export const dark_pink_alt1_SliderTrack = n535;
const n536 = t([
  [12, 0],
  [13, 206],
  [14, 205],
  [15, 204],
  [16, 0],
  [17, 0],
  [18, 197],
  [19, 198],
  [20, 197],
  [21, 198],
  [22, 196],
  [23, 204],
  [24, 68],
  [25, 205],
  [26, 204],
  [27, 198],
]) as unknown as Theme;

export const dark_pink_alt1_SwitchThumb = n536;
const n537 = t([
  [12, 68],
  [13, 203],
  [14, 201],
  [15, 200],
  [16, 204],
  [17, 205],
  [18, 197],
  [19, 198],
  [20, 197],
  [21, 198],
  [22, 198],
  [23, 200],
  [24, 199],
  [25, 201],
  [26, 200],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_alt1_SliderTrackActive = n537;
const n538 = t([
  [12, 205],
  [13, 204],
  [14, 68],
  [15, 203],
  [16, 206],
  [17, 0],
  [18, 197],
  [19, 198],
  [20, 197],
  [21, 198],
  [22, 196],
  [23, 203],
  [24, 201],
  [25, 68],
  [26, 203],
  [27, 200],
]) as unknown as Theme;

export const dark_pink_alt1_SliderThumb = n538;
export const dark_pink_alt1_Tooltip = n538;
export const dark_pink_alt1_ProgressIndicator = n538;
const n539 = t([
  [12, 199],
  [13, 200],
  [14, 201],
  [15, 203],
  [16, 198],
  [17, 197],
  [18, 205],
  [19, 204],
  [20, 205],
  [21, 204],
  [22, 206],
  [23, 203],
  [24, 68],
  [25, 201],
  [26, 203],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_alt2_ListItem = n539;
const n540 = t([
  [12, 200],
  [13, 201],
  [14, 203],
  [15, 68],
  [16, 199],
  [17, 198],
  [18, 205],
  [19, 204],
  [20, 205],
  [21, 204],
  [22, 205],
  [23, 68],
  [24, 204],
  [25, 203],
  [26, 68],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_alt2_Card = n540;
export const dark_pink_alt2_DrawerFrame = n540;
export const dark_pink_alt2_Progress = n540;
export const dark_pink_alt2_TooltipArrow = n540;
const n541 = t([
  [12, 201],
  [13, 203],
  [14, 68],
  [15, 204],
  [16, 200],
  [17, 199],
  [18, 205],
  [19, 204],
  [20, 205],
  [21, 204],
  [22, 204],
  [23, 275],
  [24, 275],
  [25, 68],
  [26, 204],
  [27, 200],
]) as unknown as Theme;

export const dark_pink_alt2_Button = n541;
const n542 = t([
  [12, 199],
  [13, 200],
  [14, 201],
  [15, 203],
  [16, 198],
  [17, 197],
  [18, 205],
  [19, 204],
  [20, 205],
  [21, 204],
  [22, 206],
  [23, 204],
  [24, 205],
  [25, 68],
  [26, 204],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_alt2_Checkbox = n542;
export const dark_pink_alt2_RadioGroupItem = n542;
export const dark_pink_alt2_Input = n542;
export const dark_pink_alt2_TextArea = n542;
const n543 = t([
  [12, 201],
  [13, 203],
  [14, 68],
  [15, 204],
  [16, 200],
  [17, 199],
  [18, 205],
  [19, 204],
  [20, 205],
  [21, 204],
  [22, 204],
  [23, 204],
  [24, 205],
  [25, 68],
  [26, 204],
  [27, 200],
]) as unknown as Theme;

export const dark_pink_alt2_Switch = n543;
export const dark_pink_alt2_TooltipContent = n543;
export const dark_pink_alt2_SliderTrack = n543;
const n544 = t([
  [12, 206],
  [13, 205],
  [14, 204],
  [15, 68],
  [16, 0],
  [17, 0],
  [18, 198],
  [19, 199],
  [20, 198],
  [21, 199],
  [22, 196],
  [23, 68],
  [24, 203],
  [25, 204],
  [26, 68],
  [27, 199],
]) as unknown as Theme;

export const dark_pink_alt2_SwitchThumb = n544;
const n545 = t([
  [12, 203],
  [13, 201],
  [14, 200],
  [15, 199],
  [16, 68],
  [17, 204],
  [18, 198],
  [19, 199],
  [20, 198],
  [21, 199],
  [22, 199],
  [23, 199],
  [24, 198],
  [25, 200],
  [26, 199],
  [27, 68],
]) as unknown as Theme;

export const dark_pink_alt2_SliderTrackActive = n545;
const n546 = t([
  [12, 204],
  [13, 68],
  [14, 203],
  [15, 201],
  [16, 205],
  [17, 206],
  [18, 198],
  [19, 199],
  [20, 198],
  [21, 199],
  [22, 197],
  [23, 201],
  [24, 200],
  [25, 203],
  [26, 201],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_alt2_SliderThumb = n546;
export const dark_pink_alt2_Tooltip = n546;
export const dark_pink_alt2_ProgressIndicator = n546;
const n547 = t([
  [12, 200],
  [13, 201],
  [14, 203],
  [15, 68],
  [16, 199],
  [17, 198],
  [19, 68],
  [20, 204],
  [21, 68],
  [22, 205],
  [23, 68],
  [24, 204],
  [25, 203],
  [26, 68],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_active_ListItem = n547;
const n548 = t([
  [12, 201],
  [13, 203],
  [14, 68],
  [15, 204],
  [16, 200],
  [17, 199],
  [19, 68],
  [20, 204],
  [21, 68],
  [22, 204],
  [23, 204],
  [24, 205],
  [25, 68],
  [26, 204],
  [27, 200],
]) as unknown as Theme;

export const dark_pink_active_Card = n548;
export const dark_pink_active_DrawerFrame = n548;
export const dark_pink_active_Progress = n548;
export const dark_pink_active_TooltipArrow = n548;
const n549 = t([
  [12, 203],
  [13, 68],
  [14, 204],
  [15, 205],
  [16, 201],
  [17, 200],
  [19, 68],
  [20, 204],
  [21, 68],
  [22, 68],
  [23, 275],
  [24, 275],
  [25, 204],
  [26, 205],
  [27, 199],
]) as unknown as Theme;

export const dark_pink_active_Button = n549;
const n550 = t([
  [12, 200],
  [13, 201],
  [14, 203],
  [15, 68],
  [16, 199],
  [17, 198],
  [19, 68],
  [20, 204],
  [21, 68],
  [22, 205],
  [23, 205],
  [24, 206],
  [25, 204],
  [26, 205],
  [27, 201],
]) as unknown as Theme;

export const dark_pink_active_Checkbox = n550;
export const dark_pink_active_RadioGroupItem = n550;
export const dark_pink_active_Input = n550;
export const dark_pink_active_TextArea = n550;
const n551 = t([
  [12, 203],
  [13, 68],
  [14, 204],
  [15, 205],
  [16, 201],
  [17, 200],
  [19, 68],
  [20, 204],
  [21, 68],
  [22, 68],
  [23, 205],
  [24, 206],
  [25, 204],
  [26, 205],
  [27, 199],
]) as unknown as Theme;

export const dark_pink_active_Switch = n551;
export const dark_pink_active_TooltipContent = n551;
export const dark_pink_active_SliderTrack = n551;
const n552 = t([
  [12, 205],
  [13, 204],
  [14, 68],
  [15, 203],
  [16, 206],
  [17, 0],
  [19, 200],
  [20, 199],
  [21, 200],
  [22, 196],
  [23, 203],
  [24, 201],
  [25, 68],
  [26, 203],
  [27, 200],
]) as unknown as Theme;

export const dark_pink_active_SwitchThumb = n552;
const n553 = t([
  [12, 201],
  [13, 200],
  [14, 199],
  [15, 198],
  [16, 203],
  [17, 68],
  [19, 200],
  [20, 199],
  [21, 200],
  [22, 200],
  [23, 198],
  [24, 197],
  [25, 199],
  [26, 198],
  [27, 204],
]) as unknown as Theme;

export const dark_pink_active_SliderTrackActive = n553;
const n554 = t([
  [12, 68],
  [13, 203],
  [14, 201],
  [15, 200],
  [16, 204],
  [17, 205],
  [19, 200],
  [20, 199],
  [21, 200],
  [22, 198],
  [23, 200],
  [24, 199],
  [25, 201],
  [26, 200],
  [27, 203],
]) as unknown as Theme;

export const dark_pink_active_SliderThumb = n554;
export const dark_pink_active_Tooltip = n554;
export const dark_pink_active_ProgressIndicator = n554;
const n555 = t([
  [12, 220],
  [13, 221],
  [14, 222],
  [15, 223],
  [16, 219],
  [17, 218],
  [18, 228],
  [19, 227],
  [20, 228],
  [21, 227],
  [22, 0],
  [23, 223],
  [24, 225],
  [25, 222],
  [26, 223],
  [27, 92],
]) as unknown as Theme;

export const dark_red_alt1_ListItem = n555;
const n556 = t([
  [12, 221],
  [13, 222],
  [14, 223],
  [15, 225],
  [16, 220],
  [17, 219],
  [18, 228],
  [19, 227],
  [20, 228],
  [21, 227],
  [22, 228],
  [23, 225],
  [24, 92],
  [25, 223],
  [26, 225],
  [27, 225],
]) as unknown as Theme;

export const dark_red_alt1_Card = n556;
export const dark_red_alt1_DrawerFrame = n556;
export const dark_red_alt1_Progress = n556;
export const dark_red_alt1_TooltipArrow = n556;
const n557 = t([
  [12, 222],
  [13, 223],
  [14, 225],
  [15, 92],
  [16, 221],
  [17, 220],
  [18, 228],
  [19, 227],
  [20, 228],
  [21, 227],
  [22, 227],
  [23, 275],
  [24, 275],
  [25, 225],
  [26, 92],
  [27, 223],
]) as unknown as Theme;

export const dark_red_alt1_Button = n557;
const n558 = t([
  [12, 220],
  [13, 221],
  [14, 222],
  [15, 223],
  [16, 219],
  [17, 218],
  [18, 228],
  [19, 227],
  [20, 228],
  [21, 227],
  [22, 0],
  [23, 92],
  [24, 226],
  [25, 225],
  [26, 92],
  [27, 92],
]) as unknown as Theme;

export const dark_red_alt1_Checkbox = n558;
export const dark_red_alt1_RadioGroupItem = n558;
export const dark_red_alt1_Input = n558;
export const dark_red_alt1_TextArea = n558;
const n559 = t([
  [12, 222],
  [13, 223],
  [14, 225],
  [15, 92],
  [16, 221],
  [17, 220],
  [18, 228],
  [19, 227],
  [20, 228],
  [21, 227],
  [22, 227],
  [23, 92],
  [24, 226],
  [25, 225],
  [26, 92],
  [27, 223],
]) as unknown as Theme;

export const dark_red_alt1_Switch = n559;
export const dark_red_alt1_TooltipContent = n559;
export const dark_red_alt1_SliderTrack = n559;
const n560 = t([
  [12, 0],
  [13, 228],
  [14, 227],
  [15, 226],
  [16, 0],
  [17, 0],
  [18, 219],
  [19, 220],
  [20, 219],
  [21, 220],
  [22, 218],
  [23, 226],
  [24, 92],
  [25, 227],
  [26, 226],
  [27, 220],
]) as unknown as Theme;

export const dark_red_alt1_SwitchThumb = n560;
const n561 = t([
  [12, 92],
  [13, 225],
  [14, 223],
  [15, 222],
  [16, 226],
  [17, 227],
  [18, 219],
  [19, 220],
  [20, 219],
  [21, 220],
  [22, 220],
  [23, 222],
  [24, 221],
  [25, 223],
  [26, 222],
  [27, 225],
]) as unknown as Theme;

export const dark_red_alt1_SliderTrackActive = n561;
const n562 = t([
  [12, 227],
  [13, 226],
  [14, 92],
  [15, 225],
  [16, 228],
  [17, 0],
  [18, 219],
  [19, 220],
  [20, 219],
  [21, 220],
  [22, 218],
  [23, 225],
  [24, 223],
  [25, 92],
  [26, 225],
  [27, 222],
]) as unknown as Theme;

export const dark_red_alt1_SliderThumb = n562;
export const dark_red_alt1_Tooltip = n562;
export const dark_red_alt1_ProgressIndicator = n562;
const n563 = t([
  [12, 221],
  [13, 222],
  [14, 223],
  [15, 225],
  [16, 220],
  [17, 219],
  [18, 227],
  [19, 226],
  [20, 227],
  [21, 226],
  [22, 228],
  [23, 225],
  [24, 92],
  [25, 223],
  [26, 225],
  [27, 225],
]) as unknown as Theme;

export const dark_red_alt2_ListItem = n563;
const n564 = t([
  [12, 222],
  [13, 223],
  [14, 225],
  [15, 92],
  [16, 221],
  [17, 220],
  [18, 227],
  [19, 226],
  [20, 227],
  [21, 226],
  [22, 227],
  [23, 92],
  [24, 226],
  [25, 225],
  [26, 92],
  [27, 223],
]) as unknown as Theme;

export const dark_red_alt2_Card = n564;
export const dark_red_alt2_DrawerFrame = n564;
export const dark_red_alt2_Progress = n564;
export const dark_red_alt2_TooltipArrow = n564;
const n565 = t([
  [12, 223],
  [13, 225],
  [14, 92],
  [15, 226],
  [16, 222],
  [17, 221],
  [18, 227],
  [19, 226],
  [20, 227],
  [21, 226],
  [22, 226],
  [23, 275],
  [24, 275],
  [25, 92],
  [26, 226],
  [27, 222],
]) as unknown as Theme;

export const dark_red_alt2_Button = n565;
const n566 = t([
  [12, 221],
  [13, 222],
  [14, 223],
  [15, 225],
  [16, 220],
  [17, 219],
  [18, 227],
  [19, 226],
  [20, 227],
  [21, 226],
  [22, 228],
  [23, 226],
  [24, 227],
  [25, 92],
  [26, 226],
  [27, 225],
]) as unknown as Theme;

export const dark_red_alt2_Checkbox = n566;
export const dark_red_alt2_RadioGroupItem = n566;
export const dark_red_alt2_Input = n566;
export const dark_red_alt2_TextArea = n566;
const n567 = t([
  [12, 223],
  [13, 225],
  [14, 92],
  [15, 226],
  [16, 222],
  [17, 221],
  [18, 227],
  [19, 226],
  [20, 227],
  [21, 226],
  [22, 226],
  [23, 226],
  [24, 227],
  [25, 92],
  [26, 226],
  [27, 222],
]) as unknown as Theme;

export const dark_red_alt2_Switch = n567;
export const dark_red_alt2_TooltipContent = n567;
export const dark_red_alt2_SliderTrack = n567;
const n568 = t([
  [12, 228],
  [13, 227],
  [14, 226],
  [15, 92],
  [16, 0],
  [17, 0],
  [18, 220],
  [19, 221],
  [20, 220],
  [21, 221],
  [22, 218],
  [23, 92],
  [24, 225],
  [25, 226],
  [26, 92],
  [27, 221],
]) as unknown as Theme;

export const dark_red_alt2_SwitchThumb = n568;
const n569 = t([
  [12, 225],
  [13, 223],
  [14, 222],
  [15, 221],
  [16, 92],
  [17, 226],
  [18, 220],
  [19, 221],
  [20, 220],
  [21, 221],
  [22, 221],
  [23, 221],
  [24, 220],
  [25, 222],
  [26, 221],
  [27, 92],
]) as unknown as Theme;

export const dark_red_alt2_SliderTrackActive = n569;
const n570 = t([
  [12, 226],
  [13, 92],
  [14, 225],
  [15, 223],
  [16, 227],
  [17, 228],
  [18, 220],
  [19, 221],
  [20, 220],
  [21, 221],
  [22, 219],
  [23, 223],
  [24, 222],
  [25, 225],
  [26, 223],
  [27, 223],
]) as unknown as Theme;

export const dark_red_alt2_SliderThumb = n570;
export const dark_red_alt2_Tooltip = n570;
export const dark_red_alt2_ProgressIndicator = n570;
const n571 = t([
  [12, 222],
  [13, 223],
  [14, 225],
  [15, 92],
  [16, 221],
  [17, 220],
  [19, 92],
  [20, 226],
  [21, 92],
  [22, 227],
  [23, 92],
  [24, 226],
  [25, 225],
  [26, 92],
  [27, 223],
]) as unknown as Theme;

export const dark_red_active_ListItem = n571;
const n572 = t([
  [12, 223],
  [13, 225],
  [14, 92],
  [15, 226],
  [16, 222],
  [17, 221],
  [19, 92],
  [20, 226],
  [21, 92],
  [22, 226],
  [23, 226],
  [24, 227],
  [25, 92],
  [26, 226],
  [27, 222],
]) as unknown as Theme;

export const dark_red_active_Card = n572;
export const dark_red_active_DrawerFrame = n572;
export const dark_red_active_Progress = n572;
export const dark_red_active_TooltipArrow = n572;
const n573 = t([
  [12, 225],
  [13, 92],
  [14, 226],
  [15, 227],
  [16, 223],
  [17, 222],
  [19, 92],
  [20, 226],
  [21, 92],
  [22, 92],
  [23, 275],
  [24, 275],
  [25, 226],
  [26, 227],
  [27, 221],
]) as unknown as Theme;

export const dark_red_active_Button = n573;
const n574 = t([
  [12, 222],
  [13, 223],
  [14, 225],
  [15, 92],
  [16, 221],
  [17, 220],
  [19, 92],
  [20, 226],
  [21, 92],
  [22, 227],
  [23, 227],
  [24, 228],
  [25, 226],
  [26, 227],
  [27, 223],
]) as unknown as Theme;

export const dark_red_active_Checkbox = n574;
export const dark_red_active_RadioGroupItem = n574;
export const dark_red_active_Input = n574;
export const dark_red_active_TextArea = n574;
const n575 = t([
  [12, 225],
  [13, 92],
  [14, 226],
  [15, 227],
  [16, 223],
  [17, 222],
  [19, 92],
  [20, 226],
  [21, 92],
  [22, 92],
  [23, 227],
  [24, 228],
  [25, 226],
  [26, 227],
  [27, 221],
]) as unknown as Theme;

export const dark_red_active_Switch = n575;
export const dark_red_active_TooltipContent = n575;
export const dark_red_active_SliderTrack = n575;
const n576 = t([
  [12, 227],
  [13, 226],
  [14, 92],
  [15, 225],
  [16, 228],
  [17, 0],
  [19, 222],
  [20, 221],
  [21, 222],
  [22, 218],
  [23, 225],
  [24, 223],
  [25, 92],
  [26, 225],
  [27, 222],
]) as unknown as Theme;

export const dark_red_active_SwitchThumb = n576;
const n577 = t([
  [12, 223],
  [13, 222],
  [14, 221],
  [15, 220],
  [16, 225],
  [17, 92],
  [19, 222],
  [20, 221],
  [21, 222],
  [22, 222],
  [23, 220],
  [24, 219],
  [25, 221],
  [26, 220],
  [27, 226],
]) as unknown as Theme;

export const dark_red_active_SliderTrackActive = n577;
const n578 = t([
  [12, 92],
  [13, 225],
  [14, 223],
  [15, 222],
  [16, 226],
  [17, 227],
  [19, 222],
  [20, 221],
  [21, 222],
  [22, 220],
  [23, 222],
  [24, 221],
  [25, 223],
  [26, 222],
  [27, 225],
]) as unknown as Theme;

export const dark_red_active_SliderThumb = n578;
export const dark_red_active_Tooltip = n578;
export const dark_red_active_ProgressIndicator = n578;
