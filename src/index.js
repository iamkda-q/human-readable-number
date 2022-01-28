module.exports = function toReadable (number) {
  const l = number.toString().split("");
  let [third, second, first] = l.reverse();
  const ed = {
      "1": " one",
      "2": " two",
      "3": " three",
      "4": " four",
      "5": " five",
      "6": " six",
      "7": " seven",
      "8": " eight",
      "9": " nine",
      "0": " zero"
  };
  const dec = {
        "0": "",
        "2": " twenty",
        "3": " thirty",
        "4": " forty",
        "5": " fifty",
        "6": " sixty",
        "7": " seventy",
        "8": " eighty",
        "9": " ninety"
  };
    const edDec = {
        "10": " ten",
        "11": " eleven",
        "12": " twelve",
        "13": " thirteen",
        "14": " fourteen",
        "15": " fifteen",
        "16": " sixteen",
        "17": " seventeen",
        "18": " eighteen",
        "19": " nineteen"
    };
    first = (l.length == 3) ? `${ed[first]} hundred` : "";
    if (l.length >= 2) {
        if (second == "1") {
            second = edDec[second + third];
            third = "";
        } else {
            second = dec[second];
            third = (third == "0") ? "" : ed[third];
        }
    } else {
        second = "";
        third = ed[third];
    }

    return (first + second + third).trim();
}
