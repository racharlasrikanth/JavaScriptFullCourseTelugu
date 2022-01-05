// Template Strings/Literals
// `` backticks above tab key left of 1 key

const person = {
    name: "emma",
    job: "developer",
    hobbies: ["surfing", "baking", "bowling"],
  };
  
  const result = document.getElementById("result");
  
  // result.innerHTML = "<h2>" + person.name + "</h2>" + "<p>" + person.job + "</p>";
  
  result.innerHTML = `
  <h2>${person.name}</h2>
  <p>${person.job}</p>
  <ul>
  ${person.hobbies
    .map(item => {
      return `<li>${item}</li>`;
    })
    .join("")}
  </ul>
  `;