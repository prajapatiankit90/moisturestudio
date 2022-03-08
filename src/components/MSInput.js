import { Input, Label } from "reactstrap";

const MSInput = (props) => {
  return (
    <>
      {props.type === "textarea" ? (
        <Input
          type={props.type}
          className={props.className}
          name={props.name}
          id={props.id}
          cols={props.cols}
          rows={props.rows}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
        ></Input>
      ) : props.type === "select" ? (
        <div className="input-inside">
          <Input
            type={props.type}
            name={props.name}
            className={props.className}
            onChange={(e) => props.handleChange(e)}
          >
            {props.dataValue === "" ? (
              <option value="" selected>
                -- Select Type --
              </option>
            ) : (
              <option value="">-- Select Type --</option>
            )}
            {props.dataValue === "New Projects" ? (
              <option value="New Projects" selected>
                New Projects
              </option>
            ) : (
              <option value="New Projects">New Projects</option>
            )}
            {props.dataValue === "Career" ? (
              <option value="Career" selected>
                Career
              </option>
            ) : (
              <option value="Career">Career</option>  
            )}
          </Input>
          <span className="errors">{props.error}</span>
        </div>
      ) : props.page === "invoice" ? (
        <>
          <Input
            type={props.type}
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.handleChange(e)}
          />
          <span className="errors">{props.error}</span>
        </>
      ) : (
        <div className="input-inside">
          <Label>{props.labelName}</Label>
          <Input
            type={props.type}
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            value={props.dataValue}
            onChange={(e) => props.handleChange(e)}
          />
          <span className="errors">{props.error}</span>
        </div>
      )}
    </>
  );
};

export default MSInput;
