import PropTypes from "prop-types";

const DisplayCV = ({ person, bio, education, contact, work}) => {
  return (
    <>
      <div className="cv">
        <div className="personal">
          {person.map((data, index) => (
            <div key={index} className="perData">
              <div className="label">{data.name}: </div> &nbsp;
              <div className="data">{data.text}</div>
            </div>
          ))}
        </div>

        <div className="profile">
          {
            bio.map((data,index) => (
              <div key={index} className="bioData">
                <div className="label">{data.name}:</div>
                <div className="biotext">{data.text}</div>
              </div>
            ))
          }
        </div>
        <div className="educationData">
          {
            education.map((item, index) => (
              <div key={index} className="eduData">
                <div>School:</div>
                <span>{item.school}</span>
                <div>Degree:</div>
                <span>{item.degree}</span>
                <div>
                  <span>Start: {item.start}</span>
                  <span>End: {item.end}</span>
                </div>
              </div>
            ))
          }
        </div>

        <div className="work">
          {
            work.map((work, index) => (
              <div key={index} className="workData">
                <div>Company:</div>
                <span> {work.company}</span>
                <div>Position:</div>
                <span> {work.position}</span>
                <div>Responsibility:</div>
                <span>{work.responsibility}</span>
                <div>
                  <span>Start: {work.start}</span>
                  <span>End: {work.end}</span>
                </div>
              </div>
            ))
          }
        </div>

        <div className="contact">
          {
            contact.map((item, index) => (
              <div key={index} className="contactData">
                <div>
                  <span>{item.name}</span> &nbsp;
                   <span>{item.text}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

DisplayCV.propTypes = {
  person: PropTypes.array.isRequired,
  bio: PropTypes.array,
  education: PropTypes.array,
  work: PropTypes.array,
  contact: PropTypes.array
};

export default DisplayCV;
