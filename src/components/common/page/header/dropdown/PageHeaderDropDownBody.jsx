import styled from 'styled-components';
import { FlexCol } from '../../../flex';

const PageHeaderDropDownBodyElement = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    border-radius: 6px;
    text-align: start;
    padding: 12px 0px 12px 18px;
    &:hover {
        background-color: #f5f8fa;
    }
`;

const PageHeaderDropDownBodyStyled = styled(FlexCol)`
    position: absolute;
    border-radius: 8px;
    top: 120%;
    white-space: nowrap;
    width: 100%;
    padding: 6px;
    background-color: ${(props) => props.theme.backgorund.light};
    box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px, rgb(67 90 111 / 47%) 0px 8px 10px -4px;
`;

export const PageHeaderDropDownBody = ({ elements }) => (
    <PageHeaderDropDownBodyStyled>
        {elements.map((el) => (
            <PageHeaderDropDownBodyElement key={el.id}>{el.title}</PageHeaderDropDownBodyElement>
        ))}
    </PageHeaderDropDownBodyStyled>
);
