import React from "react";
import * as C from "./styles";
import ResumeItem from "../ResumeItem";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa";

interface ResumeProps {
    expense: string | number;
    income: string | number;
    total: string | number;
}

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