import "./ProgressBar.css";


const ProgressBar = (props) => {
  const classes = "progressBar " + props.className;

  return (
    <div className={classes}><p>ProgressBarHere</p>{props.children}</div>
  );
};

export default ProgressBar;