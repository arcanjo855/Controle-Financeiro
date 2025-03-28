import styled from "styled-components";

interface TdProps {
    alignCenter?: boolean;
}

export const Tr = styled.tr``;

export const Td = styled.td<TdProps>`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`;