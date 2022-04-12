function isPrime() {
  let number = +document.getElementById("number").value;
  if (number <= 1 || number === 2 || number % 2 === 0) {
    document.getElementById("result").innerHTML = false;
    return;
  }
  const numberSqrt = Math.ceil(Math.sqrt(number));
  for (let index = 3; index <= numberSqrt; index += 2) {
    if (number % index === 0) {
      document.getElementById("result").innerHTML = false;
      return;
    }
  }
  document.getElementById("result").innerHTML = true;
}

function isValid() {
  let braces = document.getElementById("braces").value;
  let chars = [];
  if (braces.length % 2 !== 0) {
    document.getElementById("braces_result").innerHTML = false;
    return;
  }
  for (let index = 0; index < braces.length; index++) {
    switch (braces[index]) {
      case "{":
        chars.push("{");
        break;
      case "}":
        if (chars[(chars.length-1)] !== "{") {
          document.getElementById("braces_result").innerHTML = false;
          return;
        }
        chars.pop();
        break;
      case "(":
        chars.push("(");
        break;
      case ")":
        if (chars[(chars.length-1)] !== "(") {
          document.getElementById("braces_result").innerHTML = false;
          return;
        }
        chars.pop();
        break;
      case "[":
        chars.push("[");
        break;
      case "]":
        if (chars[(chars.length-1)] !== "[") {
          document.getElementById("braces_result").innerHTML = false;
          return;
        }
        chars.pop();
        break;

      default:
        break;
    }
  }
  document.getElementById("braces_result").innerHTML = true;
}
