import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { OTPInputNativeProps } from "../typings/OTPInputNativeProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class OTPInputNative extends Component<OTPInputNativeProps<CustomStyle>> {
    private readonly onLeaveHandle = this.onLeave.bind(this);
    validationFeedback = this.props.textAttribute.validation;
    componentDidMount(): void {
        this.props.textAttribute.setValidator(this.validator.bind(this));
    }
    render(): ReactNode {
        return <HelloWorld 
        textAttribute={this.props.textAttribute} 
        inputSize={this.props.inputSize}
        disabled={this.isReadOnly()}
        onLeave={this.onLeaveHandle}
        hasError={this.validationFeedback} 
        focusedBorderColor={this.props.focusedBorderColor}    
        style={this.props.style} />;
    }

    private isReadOnly(): boolean {
        return this.props.textAttribute.readOnly;
        }
    private onLeave(value: string, isChanged: boolean): void {
        if (!isChanged) {
            return;
        }
        this.props.textAttribute.setValue(value);
    }
    private validator(value: string | undefined): string | undefined {
        const { requiredMessage } = this.props;
        if (requiredMessage && requiredMessage.value && !value) {
            return requiredMessage.value;
        }
        return;
    }
}
