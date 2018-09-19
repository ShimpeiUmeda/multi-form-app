import React, { Component } from 'react';

class MultiForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      hobby: ""
    }
  }

  handleChange = e => {
    const userValue = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: userValue })
  }

  handleSubmit = e => {
    const content = JSON.stringify(this.state)
    window.alert("送信：" + content)
    e.preventDefault()
  }

  render() {
    const handleChange = (e) => this.handleChange(e);
    const handleSubmit = (e) => this.handleSubmit(e);
    return (
      <form onSubmit={handleSubmit} >
        <div>
          名前： <br />
          <input name='name' type='text' onChange={handleChange} value={this.state.name} />
        </div>
        <div>
          年齢： <br />
          <input name='age' type='text' onChange={handleChange} value={this.state.age} />
        </div>
        <div>
          趣味： <br />
          <input name='hobby' type='text' onChange={handleChange} value={this.state.hobby} />
        </div>
        <input type='submit' value='送信' />
      </form>
    );
  }
}

export default MultiForm;
