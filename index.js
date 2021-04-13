const chalk=require('chalk');
var sample= require('readline-sync');
console.log(chalk.bgYellow(" Welcome to crazy quiz \n"));
let playername=sample.question("What is your name?");
console.log(`Hello ${chalk.greenBright(playername)} welcome to this quiz\n`);
let playerage=sample.question(`How old are you?`);
if(playerage>=18){
  console.log(`${chalk.greenBright(playername)} you are eligible to play this quiz\n`);
  console.log(chalk.bgRed(" Rules for the game: "));
  console.log("1. There will be 10 multiple choice questions with 4 options for each question.")
  console.log("2. Each question will be for 2 marks and 1 mark will be taken for wrong answer.");
  console.log("3. Price for this game is a coupon from trends but score should be greater than or equal to 18.");
  console.log("4. Screen displays the question and after entering your answer it will show you the score\n");
  if (sample.keyInYN('Are you ready to play the game?')){
    console.log(chalk.magentaBright("Ok fine then lets start the game\n"));
    for(i=5;i>0;i--){
      console.log(i);
    }
    console.log("\n");
    console.log(`Here is your first question with options\n`);
    var questionslist=[
      { 
        question:chalk.bgRedBright("1. What is the national tree of India?"),
        options: ['Oak','Ficus','Ginkgo','Mango tree'],
        answer: 1
      },
      {
        question:chalk.bgRedBright("2. What is the national game of srilanka?"),
        options:['Soccer','Tabletennis','Baseball','Volleyball'],
        answer:3
      },
      {
        question :chalk.bgRedBright("3. What is the official language of Iran?"),
        options:['Spanish','Croatian','Persian','Bamana'],
        answer:2
      },
      {
        question :chalk.bgRedBright("4.What is the capital city of finland?"),
        options:['Delhi','Helsinki','Dublin','Ottawa'],
        answer:1
      },
      {
        question :chalk.bgRedBright("5. What is the national bird of nepal?"),
        options:['Kiwis','Peacock','Red-crowned cane','Pheasant'],
        answer:3
      },
      {
        question :chalk.bgRedBright("6. What is the national animal of scotland?"),
        options:['Siberian tiger','Cow','Unicorn','Markhor'],
       answer:2
      },
      {
        question :chalk.bgRedBright("7. Who is the richest man of world?"),
        options:['Warren Buffet','Bill Gates','Ambani','Elon musk'],
        answer:3
      },
      {
        question :chalk.bgRedBright("8. Which country has the longest coastline in the world?"),
        options:['Australia','Canada','America','France'],
        answer:1
      },
      {
        question :chalk.bgRedBright("9. which country has the highest land mass in the world?"),
        options:['Russia','China','USA','Australia'],
        answer:0
      },
      {
        question :chalk.bgRedBright("10. Which country has highest gold mines?"),
        options:['South  Africa','Australia','Russia','Japan'],
        answer:1
      },
    ]
    let score=0;
    for(i=0;i<questionslist.length;i++){
      var op= questionslist[i].options;
      console.log(questionslist[i].question);
      var opt=sample.keyInSelect(op,'');
      if(opt===questionslist[i].answer){
        console.log(chalk.greenBright("your answer is correct\n"));
        console.log(`score = ${score+=2}`);
      }else{
        console.log("Your answer is wrong\n");
        console.log(`The correct answer is ${chalk.yellow(op[questionslist[i].answer])}`);
        console.log(`score = ${score-=1}`);
      }
      console.log("------------------------------");
    }
    console.log(`Your total score is ${chalk.cyan(score)}\n`);
    if(score>=18){
      console.log(chalk.bgBlue("You have crossed the cut off score,So you won the prize\n"));
    }else{
      console.log(chalk.bgRedBright("Sorry, You have lost the prize\n"));
    }
    console.log(chalk.bgCyan(" Till now top 3 high sores are as follows \n"));
    var highscore=[
      {
        name:"Durga",
        score:17
      },
      {
        name:"Dev",
        score:15
      },
      {
        name:"Damini",
        score:13
      }
    ];  
    console.log(chalk.cyan(" High Score "));
    console.table(highscore);
    var high=highscore[0].score;
    for (let i=0;i<highscore.length;i++){
      if (score>highscore[i].score){
        highscore[i].score=score;
        highscore[i].name=playername;
        break;
      }
    }
    console.log(chalk.cyan("Present High scores are:"));
    console.table(highscore);
    if(score>high){
      console.log(chalk.green("You have beaten the first high score"));
    }else{
      console.log(chalk.bgRed("Sorry you have not crossed the first high score"));
    }
  }else{
    console.log(chalk.bgRed("\nOk That's your wish!!! Try to play next time."));
  }
}else{
  console.log(chalk.bgRed("\nSorry!!! you are not eligible for this quiz"));
}
