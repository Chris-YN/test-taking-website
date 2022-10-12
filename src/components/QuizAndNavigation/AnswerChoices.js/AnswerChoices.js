import "./AnswerChoices.css";


// Choices.js
const AnswerChoices = (props) => {
  console.log(props.answerOptionsArray);
  
  return (
    <ul>
      <li><button>{props.answerOptionsArray[0].answerOption}</button></li>
      <li><button>{props.answerOptionsArray[1].answerOption}</button></li>
      <li><button>{props.answerOptionsArray[2].answerOption}</button></li>
      <li><button>{props.answerOptionsArray[3].answerOption}</button></li>
    </ul>
    // <ul>
    //   <li><button>11</button></li>
    //   <li><button>22</button></li>
    //   <li><button>33</button></li>
    //   <li><button>44</button></li>
    // </ul>
    // <form action="">
    //   <input type="radio" id="c1" name="choices" value="Sundance"></input>
    //   <label for="c1">Sundance</label>

    //   <input type="radio" id="c1" name="choices" value="Woodward" />
    //   <label for="c2">Woodward</label>

    //   <input type="radio" id="c1" name="choices" value="Turner" />
    //   <label for="c3">Turner</label>

    //   <input type="radio" id="c1" name="choices" value="Booker" />
    //   <label for="c4">Booker</label>
    // </form>
  );
};

export default AnswerChoices;