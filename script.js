const choices=document.querySelectorAll(".choice");
const msgP=document.querySelector("#msg")
// console.log(msgP);
const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");

let compScore=0;
let userScore=0;


const compChoice=()=>{
    const opt=["rock","paper","scissors"];
    const r_idx=Math.floor(Math.random()*3);
    return opt[r_idx];
}

const drawGame=()=>{
    msgP.innerText="Game was draw"
    msgP.style.backgroundColor="grey";
    console.log("game declared draw");
}

const showWinner=(userWin,user_choice,comp_choice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=`${userScore}`;
        msgP.innerText=`User Win, ${user_choice} beats ${comp_choice}`;
        msgP.style.backgroundColor="green";
        console.log("win");
    }
    else{
        compScore++;
        compScoreP.innerText=`${compScore}`;
        msgP.innerText=`You lost, ${user_choice} beats ${comp_choice}`;
        msgP.style.backgroundColor="red";
        console.log("loose");
    }
}

const playGame=(user_choice)=>{
    console.log("user choice= ", user_choice);
    //comp choice
    const comp_choice=compChoice();
    console.log("comp choice= ", comp_choice);

    if(user_choice===comp_choice){
        drawGame(); //draw game
    }
    else{
        let userWin=true; //track win posi
        if(user_choice==="rock"){
            //scissor, paper
            userWin=comp_choice==="paper"?false:true;
        }
        else if(user_choice==="paper"){
            //rock, scissors
            userWin=comp_choice==="scissors"? false: true;
        }
        else{
            //rock,paper
            userWin=comp_choice==="rock"?false:true;
        }
        showWinner(userWin,user_choice,comp_choice);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const user_choice=choice.id;
        // console.log("choice was clicked",user_id); 
        playGame(user_choice);
    })
})