import React from "react";
import "./Edit.css";
class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <form>
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Full Name" />
          <label for="age">Age</label>
          <input type="text" id="age" placeholder="Age" />
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Email Address" />
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Phone number" />
          <label for="gender">Gender</label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label for="Language">Language</label>
          <select data-placeholder="Choose a Language...">
            <option value="Arabic">Arabic</option>
            <option value="Chinese">Chinese</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Edit;
