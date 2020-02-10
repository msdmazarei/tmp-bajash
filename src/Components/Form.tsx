import React, { Component, ReactNode } from "react"
import { type } from "os"

interface FormElData {
    [key: string]: string
}

interface IState {
    FormData: {
        [key: string]: string
    }
}

interface IProps {
    FormData: FormElData
    children: any[]
}

class CustomFormComp extends Component<IProps, IState> {
    state = {
        FormData: {}
    }

    constructor(props: IProps) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state.FormData = this.props.FormData
    }

    componentDidMount() {
        this.setState({
            FormData: this.props.FormData
        })
    }

    handleInputChange(inputData: FormElData) {
        const newFormData: any = { ...this.state.FormData }
        newFormData[inputData.name] = inputData.value

        console.log(newFormData)
        this.setState({
            FormData: newFormData
        })
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        // console.log('state', this.state)

        const newChildren = (this.props.children || []).map((child: any, index: number) => {
            let value: string
            if(this.state.FormData && (this.state.FormData as any)[child.props.name]) {
                value = (this.state.FormData as any)[child.props.name]
            } else {
                value = ""
            }
            
            // console.log('child prop name', child.props.name)
            return React.cloneElement(child, {
                onChange: this.handleInputChange.bind(this),
                key: index,
                value: value
            })
        })

        return (
            <form style={{ direction: "ltr" }} onSubmit={this.handleSubmit}>
                {newChildren}
            </form>
        )
    }
}

export default CustomFormComp
