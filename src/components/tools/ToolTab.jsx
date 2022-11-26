import styled from 'styled-components';
import { AppColors } from '../../constants';

const ToolTabTitle = styled.span`
    color: ${(props) => (props.isActive ? AppColors.theme.active : AppColors.theme.text.dark)};
`;

const ToolTabStyled = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    height: 50px;
    width: 100%;
    border-radius: 0.5rem;
    padding: 5px;
    background-color: ${(props) => (props.isActive ? AppColors.theme.backgorund.light : 'transparent')};
`;

//TODO: It would be better not to use bg image, but use SVG parser
const ToolTabIcon = styled.div`
    background-image: ${(props) => `url(${props.src})`};
    margin: 0px 15px 0px 10px;
    background-repeat: no-repeat;
    height: 21px;
    width: 21px;
    background-size: contain;
`;

const ToolTabIndicator = styled.div`
    margin: auto;
    width: 5px;
    height: 100%;
    left: 0;
    border-radius: 0px 5px 5px 0px;
    background-color: ${AppColors.theme.active};
    position: absolute;
`;

export const ToolTab = ({ isActive, toolData }) => (
    <ToolTabStyled isActive={isActive}>
        {isActive ? <ToolTabIndicator /> : null}
        <ToolTabIcon src={toolData.icon} />
        <ToolTabTitle isActive={isActive}> {toolData.title}</ToolTabTitle>
    </ToolTabStyled>
);