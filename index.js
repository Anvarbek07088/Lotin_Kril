const latinToCyrillicMap = {
  a: "а",
  b: "б",
  v: "в",
  g: "г",
  d: "д",
  e: "е",
  yo: "ё",
  zh: "ж",
  z: "з",
  i: "и",
  j: "й",
  k: "к",
  l: "л",
  m: "м",
  n: "н",
  o: "о",
  p: "п",
  r: "р",
  s: "с",
  t: "т",
  u: "у",
  f: "ф",
  h: "х",
  c: "ц",
  ch: "ч",
  sh: "ш",
  shch: "щ",
  y: "ы",
  e: "э",
  yu: "ю",
  ya: "я",
  A: "А",
  B: "Б",
  V: "В",
  G: "Г",
  D: "Д",
  E: "Е",
  Yo: "Ё",
  Zh: "Ж",
  Z: "З",
  I: "И",
  J: "Й",
  K: "К",
  L: "Л",
  M: "М",
  N: "Н",
  O: "О",
  P: "П",
  R: "Р",
  S: "С",
  T: "Т",
  U: "У",
  F: "Ф",
  H: "Х",
  C: "Ц",
  Ch: "Ч",
  Sh: "Ш",
  Shch: "Щ",
  Y: "Ы",
  E: "Э",
  Yu: "Ю",
  Ya: "Я",
  "'": "ь",
  "''": "ъ",
};

const cyrillicToLatinMap = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "j",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ы: "y",
  э: "e",
  ю: "yu",
  я: "ya",
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "Yo",
  Ж: "Zh",
  З: "Z",
  И: "I",
  Й: "J",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "H",
  Ц: "C",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Shch",
  Ы: "Y",
  Э: "E",
  Ю: "Yu",
  Я: "Ya",
  ь: "'",
  ъ: "''",
};

function convertToCyrillic() {
  let inputText = document.getElementById("inputText").value;
  let outputText = "";
  for (let i = 0; i < inputText.length; i++) {
    let latinChar = inputText[i];
    let cyrillicChar = latinToCyrillicMap[latinChar];
    outputText += cyrillicChar ? cyrillicChar : latinChar;
  }
  document.getElementById("outputText").value = outputText;
}

function convertToLatin() {
  let inputText = document.getElementById("inputText").value;
  let outputText = "";
  for (let i = 0; i < inputText.length; i++) {
    let cyrillicChar = inputText[i];
    let latinChar = cyrillicToLatinMap[cyrillicChar];
    outputText += latinChar ? latinChar : cyrillicChar;
  }
  document.getElementById("outputText").value = outputText;
}
function ClearFunc() {
  let inputText1 = document.getElementById("inputText");
  let inputText2 = document.getElementById("outputText");
  if (inputText1!="" || inputText2!="") {
    inputText1.value = "";
    inputText2.value = "";
  } else {
    console.error("Element topilmadi!");
  }
}
