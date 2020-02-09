import React, { Component } from 'react'

interface inputData {
  name: string,
  label: string,
  value?: string,
  onChange?(e:any): void
}

class InputComponent extends React.Component<inputData> {
  constructor(props:inputData) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e:any) {
    this.props.onChange && this.props.onChange({
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
          <input name={name} value={value} onChange={this.onChange} />
        </label>
      </fieldset>
    )
  }
}

export default InputComponent

