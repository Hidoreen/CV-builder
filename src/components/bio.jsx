import PropTypes from "prop-types";

const Bio = ({ bio, onchange }) => {
  return (
    <>
      {bio.map((data, index) => (
        <div className= 'bio' key={index}>
          <legend>Bio</legend>
          <textarea
            key={index}
            value={data.text}
            onChange={(event) => onchange(event, index)}
            name={data.name}
            cols="30"
            rows="5"
            placeholder="Tell us about yourself"
          ></textarea>
        </div>
      ))}
    </>
  );
};

Bio.propTypes = {
  bio: PropTypes.array,
  onchange: PropTypes.func,
};

export default Bio;
