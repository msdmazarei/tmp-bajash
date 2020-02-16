import * as React from "react";
import { Component, ReactNode, Fragment } from "react";

interface FormElData {
	[key: string]: string;
}

interface IState {
	FormData: {
		[key: string]: string;
	};
}

type ICustomFormChildren = Array<null | React.ReactChild>; //  | React.ReactChildren

interface IProps {
	FormData: FormElData;
	children: ICustomFormChildren;
}

class CustomFormComp extends Component<IProps, IState> {
	state = {
		FormData: {}
	};

	constructor(props: IProps) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state.FormData = this.props.FormData;
	}

	componentDidMount() {
		this.setState({
			FormData: this.props.FormData
		});
	}

	handleInputChange(inputData: FormElData) {
		const newFormData: any = { ...this.state.FormData };
		newFormData[inputData.name] = inputData.value;

		this.setState({
			FormData: newFormData
		});
	}

	handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		console.log(this.state);
	}

	recursiveClone(children: ICustomFormChildren): ICustomFormChildren {
		return children.map((child, index: number) => {
			let value: string;

			if (React.isValidElement(child)) {
				if (
					child.props &&
					this.state.FormData &&
					(this.state.FormData as any)[child.props.name]
				) {
					value = (this.state.FormData as any)[child.props.name];

					return React.cloneElement(child, {
						onChange: this.handleInputChange.bind(this),
						key: index,
						value: value
					});
				} else if (!child.props || !Object.keys(child.props).length) {
					return <Fragment key={index}>{child}</Fragment>;
				} else {
					console.log(
						Array.isArray(child.props.children),
						child.props.children
					);
					if (!Array.isArray(child.props.children)) {
						return React.cloneElement(
							child,
							{ key: index },
							this.recursiveClone([child.props.children])
						);
					}
					return React.cloneElement(
						child,
						{ key: index },
						this.recursiveClone(child.props.children)
					);
				}
			} else {
				return <Fragment key={index}>{child}</Fragment>;
			}
		});
	}

	render() {
		const newChildren = this.recursiveClone(this.props.children);

		return (
			<form style={{ direction: "ltr" }} onSubmit={this.handleSubmit}>
				{newChildren}
			</form>
		);
	}
}

export default CustomFormComp;
