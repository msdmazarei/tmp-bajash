import React, { Component } from "react"
import InputComponent from "./FormElements/InputComponent"

interface FormElData {
    name: string,
    value: string
}

interface Istate {
    formData: {
        [key: string]: FormElData
    }
}

interface IProps {
    children: (change:any) => JSX.Element
}

class CustomFormComp extends Component<IProps, Istate> {
    state = {
        formData: {}
    }

    constructor(props: IProps) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(inputData: FormElData) {
        const newFormData:any = {...this.state.formData}
        // if(newFormData[inputData.name] === undefined) {
            newFormData[inputData.name] = inputData
        // }

        this.setState({
            formData: newFormData
        })
    }

    render() {
        return (
            <form>
                {this.props.children(this.handleInputChange)}

                {console.log(this.state)}
            </form>
        )
    }
}

export default CustomFormComp