import styled from 'styled-components';
import { AppButton } from '../../../input/AppButton';
import { ReactSVG } from 'react-svg';
import { FlexCol } from '../../../flex';
import { useState } from 'react';
import { useOuterClick } from '../../../../../utils/hooks/useOuterClick';
import { PageHeaderDropDownBody } from './PageHeaderDropDownBody';

const PageHeaderDropDownButtomStyled = styled(AppButton)`
    width: 120px;
    height: 40px;
    background-color: ${(props) => props.theme.backgorund.dark};
    color: ${(props) => props.theme.text.dark};
    padding: 8px 20px;
    font-size: 14px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-around;
`;

const PageHeaderDropDownStyled = styled(FlexCol)`
    position: relative;
`;

export const PageHeaderDropDown = ({ title, elements }) => {
    const [isActive, setIsActive] = useState(false);
    const innerRef = useOuterClick((event) => {
        setIsActive(false);
    });

    return (
        <PageHeaderDropDownStyled>
            <PageHeaderDropDownButtomStyled
                ref={innerRef}
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                {title}
                <ReactSVG src={'img/icons/arrow-down-gray-ic.svg'} />
            </PageHeaderDropDownButtomStyled>
            {isActive ? <PageHeaderDropDownBody elements={elements} /> : null}
        </PageHeaderDropDownStyled>
    );
};
