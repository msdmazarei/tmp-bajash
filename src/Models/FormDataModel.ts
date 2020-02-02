export interface IFormDataModel {
    action?: string,
    id: string,
    items: Array<IFormElementDataModel>,
    name: string,
    rquireAuthentication: boolean,
    title?: string
}

export interface IFormElementDataModel {
    id?: string,
    element: 'select' | 'input' | 'checkbox' | 'radio' | 'textarea',
    order: number, // element visual placement order in form, also could be used as a key in loop statements
    checked?: boolean, // will be used only for radios and checkboxes
    desc?: string,
    disabled?: boolean,
    label?: string,
    minlength?: string,
    maxlength?: string,
    multiple?: string, // will be used only for selects
    name: string,
    options?: Array<ISelectOptions>, // will be used only for selects
    placeholder?: string,
    readonly?: boolean,
    regex?: string,
    required?: boolean,
    type?: 'hidden' | 'text' | 'email' | 'number' | 'button' | 'submut' | 'image', // will be used for input elements
    value?: string
}

export interface ISelectOptions {
    text: string,
    value: string,
    disabled?: boolean,
    selected?: boolean
}
