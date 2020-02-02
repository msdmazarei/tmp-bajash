import React, { Component } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { navbarList, INavbarModel } from "../Models/NavbarModel"
import { baseData } from "../config"
import { IFormDataModel, IFormElementDataModel } from "../Models/FormDataModel"
import InputComponent from './FormElements/InputComponent'
import SelectComponent from './FormElements/SelectComponent'
import TextareaComponent from './FormElements/TextareaComponent'
import CheckboxComponent from './FormElements/CheckboxComponent'
import RadioComponent from './FormElements/RadioComponent'

interface IProps extends IFormDataModel {}
interface IState {}

export class CustomFormComp extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
    }

    iterateFormElements = () => {
        const items = this.props.items
        const item:(Element | undefined)[] = items.map((i:IFormElementDataModel) => {
            const el:string = i.element

            switch (el) {
                case 'select':
                    return (
                        <SelectComponent elementData={i} />
                    )
            
                case 'input':
                    return (
                        <InputComponent elementData={i} />
                    )
            
                case 'checkbox':
                    return (
                        <CheckboxComponent elementData={i} />
                    )
            
                case 'radio':
                    return (
                        <RadioComponent elementData={i} />
                    )
            
                case 'textarea':
                    return (
                        <TextareaComponent elementData={i} />
                    )
            }
        })

        return item
    }


    render() {
        return (
            <form action="">
                {
                    this.iterateFormElements()
                }
            </form>
        )
    }
}