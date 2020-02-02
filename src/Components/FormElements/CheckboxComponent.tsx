import React, { Component } from 'react'
import { IFormElementDataModel } from '../../Models/FormDataModel'

interface IProps { elementData: IFormElementDataModel }

class CheckboxComponent extends Component<IProps> {
  render() {
    return (
      <div>
        checkbox
      </div>
    )
  }
}

export default CheckboxComponent

