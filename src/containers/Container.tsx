/*
Personalised container much like our own div
 */
import React, {useState} from "react";
import {View, ViewProps} from "react-native";

interface ContainerProps extends ViewProps {
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (<View style={props.style}>{props.children}</View>)
};

export default Container;
