import { Button } from "reactstrap";

const MSButton = (props) => {
  return (
    <>
      <Button
        color={props.color}
        name={props.name}
        onClick={(e) => props.handleChange(e)}
        className={props.interested === props.dataValue ? "active" : props.className}
        value={props.dataValue}
      >
        {props.dataValue}
      </Button>
    </>
  );
};

export default MSButton;
