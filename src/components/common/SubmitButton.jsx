import { Spinner } from "keep-react";
const SubmitButton = (props) => {
  if (props.submit === false) {
    return (
      <button onClick={props.onClick} type="submit" className={props.className}>
        {props.text} {props.icon}
      </button>
    );
  } else {
    return (
      <button className="btn bg-sky-500 hover:bg-sky-700 border-none px-7 text-white">
        <span className="pr-2">
          <Spinner color="info" size="md" />
        </span>
        Procassing...
      </button>
    );
  }
};

export default SubmitButton;
