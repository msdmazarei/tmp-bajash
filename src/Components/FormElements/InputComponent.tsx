import React, { Component } from 'react'

interface inputData {
  name: string,
  label: string,
  value?: string,
  handleChange(e:any): void
}

class InputComponent extends React.Component<inputData> {
  constructor(props:inputData) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e:any) {
    this.props.handleChange({
      name: this.props.name,
      value: e.target.value
    })
  }

  render() {
    const value:string | undefined = this.props.value
    const name:string = this.props.name

    return (
      <fieldset>
        <label>
          {this.props.label}
          <input name={name} value={value} onChange={this.handleChange} />
        </label>
      </fieldset>
    )
  }
}

export default InputComponent

