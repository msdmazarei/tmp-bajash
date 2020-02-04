import React, { Component } from "react"
import CustomFormComp from '../Form'
import InputComponent from '../FormElements/InputComponent'

interface IState { }

interface IProps {}

export class CustomForm extends Component<IProps, IState> {
    render() {
        return (
            <div>
                <CustomFormComp>
                    {(handleInputChange) => {
                        return (
                            <>
                                <div>
                                    <InputComponent label='email: ' name='email' handleChange={handleInputChange} />
                                    <div>
                                        <InputComponent label='phone: ' name='phone' handleChange={handleInputChange} />
                                    </div>
                                </div>
                                <button type="submit">submit</button>
                            </>
                        )
                    }}
                </CustomFormComp>
            </div>
        )
    }
}
