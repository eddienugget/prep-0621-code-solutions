var person = {
  firstName: 'Norman ',
  lastName: 'Silvera',
  hobby: 'Skateboarding'
};
console.log(person)
var fullName = person.firstName + person.lastName
console.log("The person's name is", fullName)
person.job = 'SWE';
console.log('The person works as a', person.job);
person.previousJob = 'Beatmaker';
console.log('The person worked as a', person.previousJob);
