import React, { Component } from 'react'
import { IFormElementDataModel } from '../../Models/FormDataModel'

interface IProps { elementData: IFormElementDataModel }

class TextareaComponent extends Component<IProps> {
  render() {
    return (
      <div>
        textarea
      </div>
    )
  }
}

export default TextareaComponent

