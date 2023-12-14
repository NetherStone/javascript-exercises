const findTheOldest = function(people) {
    const currentDate = new Date();
    let oldestPerson = people[0];

    for (let i = 0; i < people.length; i++) {
        const currentLifespan = people[i].yearOfDeath || currentDate.getFullYear() - people[i].yearOfBirth;
        const maxLifespan = oldestPerson.yearOfDeath || currentDate.getFullYear() - oldestPerson.yearOfBirth;

        if (currentLifespan > maxLifespan) {
            oldestPerson = people[i];
        }
    }

    return oldestPerson;
}
// Do not edit below this line
module.exports = findTheOldest;
