import React, { Component, PropTypes } from 'react'


class Picker extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const { onChange } = this.props
    onChange(e.target.value)
  }
  render() {
    const { value, options } = this.props
    return (
      <span>
        <h1>{value}</h1>
        <select onChange={this.handleChange} value={options}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
