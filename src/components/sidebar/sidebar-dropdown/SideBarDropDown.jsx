import { useState } from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';
import { FlexCol } from '../../common/flex';
import { SidebarDropDownHeader } from './SidebarDropDownHeader';

const SidebarDropDownBodyItem = styled.button`
    max-width: 75%;
    color: ${(props) => props.theme.text.inactive};
    background: none;
    border: none;
    align-items: flex-start;
    display: flex;
    cursor: pointer;
    margin-bottom: 18px;
    &:first-child {
        margin-top: 18px;
    }
`;

export const SidebarDropDown = ({ title, options }) => {
    const [isActive, setIsActive] = useState(true);

    return (
        <FlexCol>
            <SidebarDropDownHeader
                title={title}
                onClick={() => {
                    setIsActive(!isActive);
                }}
                isActive={isActive}
            />
            {isActive ? (
                <FlexCol>
                    {options.map((option) => (
                        <SidebarDropDownBodyItem key={option.id}>{option.title}</SidebarDropDownBodyItem>
                    ))}
                </FlexCol>
            ) : null}
        </FlexCol>
    );
};

SidebarDropDown.ropsTypes = {
    title: PropsTypes.string.isRequired,
    options: PropsTypes.array.isRequired,
};
