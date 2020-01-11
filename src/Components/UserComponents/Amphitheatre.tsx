import React, {Component} from "react"
import {Form, Col, Button, ButtonToolbar} from "react-bootstrap"
import {ETranslator} from "../../Constants/Translator"
import {IPlaceModel} from "../../Models/PlaceModel"
import {connect} from "react-redux";
import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
import {withRouter, RouteComponentProps} from "react-router-dom";

interface IProps extends RouteComponentProps<any> {
    cinema: IPlaceModel

    addCinema(data: IPlaceModel): void
}

interface IState {
    name: string,
    description: string,
    address: string
}

class Amphitheatre1 extends Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: this.props.cinemas.reducerEditCinema.name,
            description: this.props.cinemas.reducerEditCinema.description,
            address: this.props.cinemas.reducerEditCinema.address
        }
    }

    handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let item: string = e.target.name;
        let newValue: string = e.target.value;
        switch (item) {
            case "name":
                return this.setState({name: newValue});
            case "description":
                return this.setState({description: newValue});
            case "address":
                return this.setState({address: newValue});
            default:
                return
        }
    };

    handleChange() {
        const input = this.myinp;
        // inputElement.addEventListener("change", handleFiles, false);
        if (this.myinp === null) {
            return
        }

        const sample = this.myinp.files;

        if (sample === null) {
            return
        }
        const selectedFile = sample[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            if (!e.target || !e.target.result) {
                return
            }
            const readXml: any = e.target.result;
            const parser = new DOMParser();
            const doc = parser.parseFromString(readXml, "application/xml");
            const svgToShow = new XMLSerializer().serializeToString(doc);
            // document.querySelector('.input-preview').innerHTML = svgToShow
            if (this.previewContainer) this.previewContainer.innerHTML = svgToShow;
            console.log(svgToShow);
        }
        reader.readAsText(selectedFile);
    };

    submitForm = () => {
        const {name, description, address} = this.state;
        this.props.addCinema({name: name, description: description, address: address});
        this.props.history.replace(`/cinemas`)
        // console.log("hello")
    };
    myinp: HTMLInputElement | null = null;
    previewContainer: HTMLElement | null = null;

    render() {
        return (
            // accept="image/svg+xml"
            <div className="input-container">
                <input id="fileUpload" type="file" ref={(inp) => this.myinp = inp}
                       onChange={() => this.handleChange()}/>
                <div className="input-name">name will be here</div>
                <div className="input-preview" ref={(e) => this.previewContainer = e}>
                    preview will be here
                </div>
            </div>
        )
    }
}

export const Amphitheatre = connect(mapStateToProps, mapDispatchToProps)(withRouter(Amphitheatre1));

