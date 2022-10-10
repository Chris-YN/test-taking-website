import "./QuestionNumberTrack.css"

// QuestionNumberTrack.js
const QuestionNumberTrack = (props) => {
  const currentQuestion = 1;
  const totalQuestion = 10;

  return(
    <p>{`${currentQuestion}/${totalQuestion}`}</p>
  );
};

export default QuestionNumberTrack;
