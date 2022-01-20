const showPeople = (people) => {
    const newPeople = people.map((eachPerson) => {
        const {name, job} = eachPerson;
        return `<p>${name} <strong>${job}</strong></p>`;
    }).join("")
    
    return newPeople;
}

export default showPeople;

// export default (people) => {
//     const newPeople = people.map((eachPerson) => {
//         const {name, job} = eachPerson;
//         return `<p>${name} <strong>${job}</strong></p>`;
//     }).join("")
    
//     return newPeople;
// }

// export default [{},{}]
// export default {}