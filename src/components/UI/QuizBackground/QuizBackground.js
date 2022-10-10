import "./QuizBackground.css";


// QuizBackground.js
const QuizBackground = (props) => {
  const classes = "quizBackground " + props.className;

  return (
      <div className={classes}>{props.children}</div>
  );
}

export default QuizBackground;
