import React from "react";
import * as C from "./styles";
import { ResumeItemProps } from "../types/types";



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