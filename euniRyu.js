import inquirer from "inquirer";


function exampleOne(array) {
  let shuffledArray = [...array];

  for (let i = shuffledArray.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  return shuffledArray;
}


inquirer
  .prompt(
    exampleOne([
      {
        type: "input",
        name: "name",
        message: "당신의 이름은 무엇입니까?",
      },
      {
        type: "list",
        name: "like food",
        message: "당신이 좋아하는 우유는 무엇입니까?",
        choices: ["바나나우유", "딸기우유", "초코우유", "그냥우유"],
      },
      {
        type: "confirm",
        name: "confirm",
        message: "확실합니까?",
      },
    ])
  )
  .then((answers) => {
    console.log("Answers:", answers);
  });