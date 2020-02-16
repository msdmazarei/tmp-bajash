import React, { Component } from "react";
import CustomFormComp from "../Form";
import InputComponent from "../FormElements/InputComponent";

interface IState { }

interface IProps { }

interface FormElData {
  [key: string]: string;
}

export class CustomForm extends Component<IProps, IState> {
  render() {
    const formData: FormElData = {
      email: "homam.ghassemy@gmail.com",
      phone: "sdfsdf",
      address: "asdhf akshdfkahsdkahsdflka hsfnasdk f"
    };

    return (
      <CustomFormComp FormData={formData}>
        <h2>f</h2>
        asd
        <h3>asdf</h3>
        <div className="c1">
          <div className="c2">
            <div className="c3">
              <InputComponent label="email: " name="email" />
            </div>
            <div className="c33"></div>
          </div>
          <div className="c22"></div>
        </div>
        <InputComponent label="phone: " name="phone" />
      </CustomFormComp>
    );
  }
}
