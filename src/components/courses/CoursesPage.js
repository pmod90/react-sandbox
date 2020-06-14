import React from 'react';

class CoursesPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        }
    }

    handleChange(event) {
        
    }

    render() {
        return ( <form>
        <h2>Courses</h2>
        <input
        type="text"
        onChange={this.handleChange}
        value={this.state.course.title}
      />

      <input type="submit" value="Save" />
      </form>
      );
    }

    
}

export default CoursesPage;