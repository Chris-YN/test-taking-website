import "./QuestionNumberTrack.css"

// QuestionNumberTrack.js
const QuestionNumberTrack = (props) => {

  return(
    <p>{`Current question: ${props.currentIndex + 1}/${props.testLength}`}</p>
  );
};

export default QuestionNumberTrack;
