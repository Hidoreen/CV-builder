import PropTypes from "prop-types";

const Works = ({ work, onChange, addWork, removeWork}) => {
  const style = {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid  rgb(56, 105, 239)",
  };
  return (
    <fieldset className="work">
      <legend>Works</legend>
      {work.map((item, index) => (
        <div key={index} style={index? style : null} className="workContent">
          {index > 0 ? <button onClick={(event) => removeWork(item, event)}>&times; Remove</button> : null}

          <input
            autoComplete="off"
            type="text"
            name="company"
            placeholder="Company Name"
            value={item.company}
            onChange={(event) => onChange(event, index)}
          />

          <input
            autoComplete="off"
            type="text"
            name="position"
            placeholder="Position"
            value={item.position}
            onChange={(event) => onChange(event, index)}
          />

          <input
            autoComplete="off"
            type="text"
            name="responsibility"
            placeholder="Enter Role"
            value={item.responsibility}
            onChange={(event) => onChange(event, index)}
          />

          <input
            type="date"
            name="start"
            value={item.start}
            onChange={(event) => onChange(event, index)}
          />
          <input
            type="date"
            name="end"
            value={item.end}
            onChange={(event) => onChange(event, index)}
          />
          <div></div>
        </div>
      ))}
      {work.length < 3 && (<button onClick={addWork}>Add More Work</button>)}
    </fieldset>
  );
};

Works.propTypes = {
  work: PropTypes.array,
  onChange: PropTypes.func,
  addWork: PropTypes.func,
  removeWork: PropTypes.func
};

export default Works;
