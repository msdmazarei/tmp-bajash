import React, { Component } from 'react'
import { IFormElementDataModel } from '../../Models/FormDataModel'

interface IProps { elementData: IFormElementDataModel }

class SelectComponent extends Component<IProps> {
  render() {
    return (
      <div>
        select
      </div>
    )
  }
}

export default SelectComponent

