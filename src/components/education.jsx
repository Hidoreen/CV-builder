import PropTypes from "prop-types";

const EducationInfo = ({
  education,
  onChange,
  addEducation,
  removeEducation,
}) => {
  const style = {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid  rgb(56, 105, 239)",
  };
  return (
    <fieldset className="edu">
      <legend>Education</legend>
      {education.map((data, index) => (
        <div key={index} style={index ? style : null} className="eduContent">
          {index  > 0 ? (
            <div onClick={(event) => removeEducation(data, event)} className="remove">
              <button>&times; Remove</button>
            </div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="school"
            placeholder="Enter SChool"
            value={data.school}
            onChange={(event) => onChange(event, index)}
          />
          <input
            type="text"
            name="degree"
            placeholder="Enter Degree"
            value={data.degree}
            onChange={(event) => onChange(event, index)}
          />
          <input
            type="date"
            name="start"
            value={data.start}
            onChange={(event) => onChange(event, index)}
          />
          <input
            type="date"
            name="end"
            value={data.end}
            onChange={(event) => onChange(event, index)}
          />
          {education.length < 3 && (
            <button onClick={addEducation}>Add More Education</button>
          )}
        </div>
      ))}
    </fieldset>
  );
};

EducationInfo.propTypes = {
  education: PropTypes.array,
  onChange: PropTypes.func,
  addEducation: PropTypes.func,
  removeEducation: PropTypes.func,
};

export default EducationInfo;
