function incrementString (string) {
  let front = [], back = [];
  string = string.split("");
  for (let i = 0; i < string.length; i++){
    if (isNaN(parseInt(string[i]))) {
      front.push(string[i]);
    } else {
      back.push(string[i]);
    }
  }
  back = back.join("");
  if (back.length == parseInt(back) {
    front.push(back);
  } else {
    let diff = (back.length) - parseInt(back), count = 0;
    while (count < diff) {
      front.push("0");
      diff++;
      }
    }
    front.push(back[diff]);
  }
  return front.join("");
}

console.log(incrementString("foobar000"));
