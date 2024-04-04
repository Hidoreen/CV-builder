import PersonalInfo from "./personal";
import Bio from "./bio";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import PropTypes from "prop-types";
import DisplayCV from "./display";
import EducationInfo from "./education";
import Contact from "./contact";
import Works from './work'

class CreateCv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [
        {
          name: "First Name",
          text: "",
        },
        {
          name: "Last Name",
          text: "",
        },
        {
          name: "Profession",
          text: "",
        },
      ],

      bio: [
        {
          name: "Bio",
          text: "",
        },
      ],

      education: [
        {
          id: uuidv4(),
          school: "",
          degree: "",
          start: "",
          end: "",
        },
      ],

      work: [
        {
          id: uuidv4(),
          company: '',
          position: '',
          responsibility: '',
          start: '',
          end: ''
        }
      ],

      contact: [
        {
          name: "phone",
          text: "",
        },
        {
          name: "email",
          text: "",
        },
        {
          name: "address",
          text: "",
        },
      ],
    };

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleRemoveEducation = this.handleRemoveEducation.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleContactInput = this.handleContactInput.bind(this);
    this.handleWork = this.handleWork.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeWork = this.removeWork.bind(this);
  }

  handleWork(event, index) {
    const {value, name} = event.target

    const newWork = [...this.state.work]

    newWork[index][name] = value

    this.setState({work: newWork});
  }

  addWork(event) {
    event.preventDefault();
    this.setState({
      work: this.state.work.concat({
        id: uuidv4(),
        company: '',
        position: '',
        responsibility: '',
        start: '',
        end: ''
      })
    })
  }

  removeWork(currentWork, event) {
    event.preventDefault();
    const newWorks = [...this.state.work]
    const filteredWork = newWorks.filter((item) => item.id !== currentWork.id);
    this.setState({work: filteredWork});
  }

  handlePersonalInfoChange(event, index) {
    const { value } = event.target;

    const newPerson = [...this.state.person];
    newPerson[index].text = value;

    this.setState({ person: newPerson });
  }

  handleBioChange(event, index) {
    const { value } = event.target;

    const newBio = [...this.state.bio];
    newBio[index].text = value;

    this.setState({ bio: newBio });
  }

  handleEducationChange(event, index) {
    const { name, value } = event.target;
    const newEducation = [...this.state.education];
    newEducation[index][name] = value;
    this.setState({ education: newEducation });
  }

  handleAddEducation(event) {
    event.preventDefault();
    this.setState({
      education: this.state.education.concat({
        id: uuidv4(),
        school: "",
        degree: "",
        start: "",
        end: "",
      }),
    });
  }

  handleRemoveEducation(currentItem) {
    const removedEducation = [...this.state.education];
    const filteredEducation = removedEducation.filter(
      (item) => item.id !== currentItem.id
    );

    this.setState({ education: filteredEducation });
  }


  handleContactInput(event, index) {
    const { value } = event.target;
    const newContact = [...this.state.contact];

    newContact[index].text = value;
    this.setState({ contact: newContact });
  }

  render() {
    const { person, bio, education, contact, work } = this.state;
    return (
      <>
        <div className="pages">
          <div className="form">
            <form>
              <div className="formFields">
                <PersonalInfo
                  person={person}
                  onChange={this.handlePersonalInfoChange}
                />
                <Bio bio={bio} onchange={this.handleBioChange} />

                <EducationInfo
                  education={education}
                  onChange={this.handleEducationChange}
                  addEducation={this.handleAddEducation}
                  removeEducation={this.handleRemoveEducation}
                />

                <Works work={work} onChange={this.handleWork} addWork={this.addWork}  removeWork={this.removeWork}/>

                <Contact contact={contact} onChange={this.handleContactInput} />
              </div>
            </form>
          </div>

          <div className="CvPaper" size="A4">
            <DisplayCV person={person} bio={bio} education={education} contact={contact} work={work}/>
          </div>
        </div>
      </>
    );
  }
}

CreateCv.propTypes = {
  person: PropTypes.array,
  onChange: PropTypes.func,
};

export default CreateCv;
