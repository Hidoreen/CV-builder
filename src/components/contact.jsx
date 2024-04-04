import PropTypes from "prop-types";

const Contact = ({ contact, onChange }) => {
  return (
    <div>
      <fieldset className="contact">
        <legend>Contact</legend>
        {contact.map((item, index) => (
          <div key={index} className="contactContent">
            <input
            autoComplete="off"
              type="text"
              name={item.name}
              placeholder={item.name.toUpperCase()}
              value={item.text}
              onChange={(event) => onChange(event, index)}
            />
          </div>
        ))}
      </fieldset>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.array,
  onChange: PropTypes.func,
};

export default Contact;
