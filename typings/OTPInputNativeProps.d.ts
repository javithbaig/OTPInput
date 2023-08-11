/**
 * This file was generated from OTPInputNative.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, EditableValue } from "mendix";

export interface OTPInputNativeProps<Style> {
    name: string;
    style: Style[];
    textAttribute: EditableValue<string>;
    inputSize: number;
    focusedBorderColor: string;
    requiredMessage?: DynamicValue<string>;
}

export interface OTPInputNativePreviewProps {
    readOnly: boolean;
    textAttribute: string;
    inputSize: number | null;
    focusedBorderColor: string;
    requiredMessage: string;
    onChangeAction: {} | null;
}
