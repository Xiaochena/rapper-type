import rapper from "./rapper";
const add = (a: number, b: number) => {
  return a + b;
};

const sum = add(1, 2);

rapper({
  type: "normal",
  apiUrl:
    "http://rap2.duomai.cn:38080/repository/get?id=32&token=9EkIocIKn1AUXzKC1zUANOEBRyqmbMWl",
  rapUrl: "http://rap2.duomai.cn",
});
