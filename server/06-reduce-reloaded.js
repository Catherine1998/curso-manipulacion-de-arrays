const items = [1, 3, 2, 3, 3, 4, 2, 3];

const tra = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

//output
// {
//     1: 1,
//     3: 2,
//     2: 1,
// }

console.log(tra);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const tra1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(tra1);

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce(
  (obj, item) => {
    if (item <= 5) {
      obj["1-5"] += 1;
    } else if (item <= 8) {
      obj["6-8"] += 1;
    } else {
      obj["9-10"] += 1;
    }
    return obj;
  },
  {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
  }
);

console.log(result);
