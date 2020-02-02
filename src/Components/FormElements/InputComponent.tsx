import React, { Component } from 'react'
import { IFormElementDataModel } from '../../Models/FormDataModel'

interface IProps { elementData: IFormElementDataModel }

class InputComponent extends Component<IProps> {
  render() {
    return (
      <div>
        input
      </div>
    )
  }
}

export default InputComponent

