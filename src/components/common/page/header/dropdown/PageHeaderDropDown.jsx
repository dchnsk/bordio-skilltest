import styled from 'styled-components';
import { AppColors } from '../../../../../constants';
import { AppButton } from '../../../input/AppButton';
import { ReactSVG } from 'react-svg';
import { FlexCol } from '../../../flex';
import { useState } from 'react';
import { useOuterClick } from '../../../../../utils/hooks/useOuterClick';
import { PageHeaderDropDownBody } from './PageHeaderDropDownBody';

const PageHeaderDropDownButtomStyled = styled(AppButton)`
    background-color: ${AppColors.theme.backgorund.dark};
    padding: 8px 20px;
    height: 40px;
    font-size: 14px;
    color: ${AppColors.theme.text.dark};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-around;
    width: 120px;
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
