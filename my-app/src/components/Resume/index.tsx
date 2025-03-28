import React from "react";
import * as C from "./styles";
import ResumeItem from "../ResumeItem";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa";
import { ResumeProps } from "../types/types";



const Resume: React.FC<ResumeProps> = ({ expense, income, total }) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    );
};

export default Resume;