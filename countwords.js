class Description {
  constructor(word, count) {
    (this.word = word), (this.count = count);
  }
}
const user_descriptions = [];
const allDesc = {
  metadata: {},
  descriptions: []
};

// if allDesc.description includes userinput
//    iterate all descriptions
//    add to count
// else if allDesc.description does not include userinput
//    createnew Description object
//    push to allDesc.description array

user_input = "crazy";
updateDB(user_input);
user_input = "stupid";
updateDB(user_input);
user_input = "crazy";
updateDB(user_input);
user_input = "stupid";
updateDB(user_input);
user_input = "crazy";
updateDB(user_input);

function updateDB(userStringInput) {
  if (user_descriptions.includes(user_input)) {
    for (let index = 0; index < allDesc.descriptions.length; index++) {
      const element = allDesc.descriptions[index];
      if (user_input === element.word) {
        element.count++;
      }
    }
  } else if (!user_descriptions.includes(user_input)) {
    let newDescription = new Description(user_input, 1);
    allDesc.descriptions.push(newDescription);
    user_descriptions.push(userStringInput);
    console.log(`${user_input} added`);
  }
}

//+-- TEST ---
console.log(`EndOf:`);
console.log(`user_descriptions: ${user_descriptions}`);
allDesc.descriptions.forEach(description => {
  console.log(`${description.word} ${description.count}`);
});
