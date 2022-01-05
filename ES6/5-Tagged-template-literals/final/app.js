// Template Strings/Literals
// `` backticks above tab key left of 1 key
// tagged template

const author = "Some Author";
const statement = "Some Statement";

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

function highlight(text, ...vars) {
  let awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}

const result = document.getElementById("result");
result.innerHTML = quote;