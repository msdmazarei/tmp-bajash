import React, { Component } from "react"
import CustomFormComp from '../Form'
import InputComponent from '../FormElements/InputComponent'

interface IState { }

interface IProps {}

interface FormElData {
    [key: string]: string
}

export class CustomForm extends Component<IProps, IState> {
    render() {
        const formData:FormElData = {
            email: "homam.ghassemy@gmail.com",
            phone: "sdfsdf",
            address: "asdhf akshdfkahsdkahsdflka hsfnasdk f"
        }

        const test = {}

        return (
            <>
                <h2>filled form example</h2>
                <CustomFormComp FormData={formData}>
                    <InputComponent label='email: ' name='email' />
                    <InputComponent label='phone: ' name='phone' />
                </CustomFormComp>

                <hr/>
               
                <h2>empty form example</h2>
                <CustomFormComp FormData={test}>
                    <InputComponent label='home phone: ' name='home' />
                    <InputComponent label='work phone: ' name='work' />
                </CustomFormComp>
            </>
        )
    }
}
