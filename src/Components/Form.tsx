import React, { Component, ReactNode } from "react"

interface FormElData {
    [key: string]: string
}

interface Istate {
    formData: {
        [key: string]: string
    }
}

interface IProps {
    FormData: FormElData
    //   children: React.ReactNode[]
    children: any[]
}

class CustomFormComp extends Component<IProps, Istate> {
    state = {
        formData: {},
        VDOM: []
    }

    constructor(props: IProps) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    log_all_recursive_func(c: Array<any>) {
        // this goes down virtual dom tree recursivly to do any thing you would like
        // debugger
        for (let item of c) {
            if (item && item.type && item.type.name) {
                // console.log(item, item.type)
            }

            if (item.props && item.props.children && item.props.children.length > 0) {
                this.log_all_recursive_func(item.props.children)
            }
            // console.log(item?.type?.name)
        }
    }

    addChangeHandler(children: Array<any>, propToIterate: Array<any>) {
        console.log(children)

        for (let child of children) {
            // console.log(child)
            if (child.props && child.props.children && child.props.children.length) {
                // console.log(child)
                this.addChangeHandler(child.props.children, [])
            }

            if (child?.type?.name) {
                // console.log(child)
                // child.props.handleChange = this.handleInputChange
            }
        }
    }

    componentDidMount() {
        this.setState({
            formData: this.props.FormData
        })
    }

    handleInputChange(inputData: FormElData) {
        const newFormData: any = { ...this.state.formData }
        newFormData[inputData.name] = inputData.value

        console.log(newFormData)
        this.setState({
            formData: newFormData
        })
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        const newChildren = (this.props.children || []).map((child: any, index: number) => {
            return React.cloneElement(child, {
                onChange: this.handleInputChange.bind(this),
                key: index
            })
        })

        return (
            <form style={{ direction: "ltr" }} onSubmit={this.handleSubmit}>
                {/* {this.props.children} */}
                {newChildren}
            </form>
        )
    }
}

export default CustomFormComp
