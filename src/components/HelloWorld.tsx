import {  Component, ReactNode, createElement } from "react";
import { View} from 'react-native';
import { EditableValue } from "mendix";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { CustomStyle } from "../OTPInputNative";
import OtpInputs from "react-native-otp-inputs";

export interface HelloWorldProps {
    textAttribute?: EditableValue<string>;
    inputSize: number;
    style: CustomStyle[];
    onLeave?: (value: string, changed: boolean) => void;
    disabled?: boolean;
    hasError?: string;
    focusedBorderColor?: string
}

interface InputState {
    editedValue?: string;
}

const defaultStyle: CustomStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export class HelloWorld extends Component<HelloWorldProps> {
    private readonly styles = mergeNativeStyles(defaultStyle, this.props.style);
    private readonly onLeaveHandle = this.onLeave.bind(this);
    readonly state: InputState = { editedValue: undefined };
    componentDidUpdate(prevProps: HelloWorldProps): void {
        if (this.props.textAttribute?.value !== prevProps.textAttribute?.value) {
            this.setState({ editedValue: undefined });
        }
    }
    render(): ReactNode {
        const sizevalue = this.props.inputSize;
        const focusedBorderColor = this.props.focusedBorderColor;
        return (
            <View style={this.styles.container}>
                <OtpInputs 
                handleChange={this.onLeaveHandle} 
                numberOfInputs={sizevalue} 
                containerStyles = {this.styles.input}
                focusedBorderColor = {focusedBorderColor}

                errorMessage = {this.props.hasError}/>
            </View>
        );
    }

    private onLeave(value: string): void {
     
        
            this.props.textAttribute?.setValue(value);
          
    }

}

