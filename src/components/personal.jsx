import PropTypes from "prop-types";

const PersonalInfo = ({ person, onChange }) => {
  return (
    <fieldset className="personalBox">
      <legend>Persona Information</legend>
        {
          person.map((data, index) => (
            <input
            key={index}
            type="text"
            name={data.name}
            placeholder={data.name}
            value={data.text.charAt(0).toUpperCase() + data.text.slice(1)}
            onChange={(event) => onChange(event, index)}
          />
          ))
        }
    </fieldset>
  );
};

PersonalInfo.propTypes = {
  person: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PersonalInfo;
