const findTheOldest = function(people) {
    let oldestPerson = people[0];

    for (let i = 0; i < people.length; i++) {
        const currentLifespan = people[i].yearOfDeath - people[i].yearOfBirth;
        const maxLifespan = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

        if (currentLifespan > maxLifespan) {
            oldestPerson = people[i];
        }
    }

    return oldestPerson
}
// Do not edit below this line
module.exports = findTheOldest;
