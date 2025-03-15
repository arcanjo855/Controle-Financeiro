import React from "react";
import * as C from "./styles";
import { IconType } from "react-icons";

interface ResumeItemProps {
    title: string;
    Icon: IconType;
    value: string | number;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, Icon, value }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    );
};

export default ResumeItem;