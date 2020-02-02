import React, { Component } from 'react'
import { IFormElementDataModel } from '../../Models/FormDataModel'

interface IProps { elementData: IFormElementDataModel }

class RadioComponent extends Component<IProps> {
  render() {
    return (
      <div>
        radio
      </div>
    )
  }
}

export default RadioComponent

