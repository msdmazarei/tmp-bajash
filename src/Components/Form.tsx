import React, { Component } from "react"

interface FormElData {
    name: string,
    value: string
}

interface Istate {
    formData: {
        [key: string]: string
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(inputData: FormElData) {
        const newFormData:any = {...this.state.formData}
        newFormData[inputData.name] = inputData

        this.setState({
            formData: newFormData
        })
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form style={{direction: 'ltr'}} onSubmit={this.handleSubmit}>
                {this.props.children(this.handleInputChange)}
            </form>
        )
    }
}

export default CustomFormComp