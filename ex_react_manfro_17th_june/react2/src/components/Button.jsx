import './Button.css'

function Button(props) {
  return (
    <button className={`btn ${props.style}`} onClick={props.logic}>
      {props.content}
    </button>
  );
}

export default Button;