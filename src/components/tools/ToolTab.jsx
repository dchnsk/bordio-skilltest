import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const ToolTabTitle = styled.span`
    color: ${(props) => (props.isActive ? props.theme.active : props.theme.text.dark)};
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
    background-color: ${(props) => (props.isActive ? props.theme.backgorund.light : 'transparent')};
`;

//TODO: It would be better not to use bg image, but use SVG parser
const ToolTabIcon = styled.div`
    margin: 0px 15px 0px 10px;
    height: 21px;
    width: 21px;
`;

const ToolTabIndicator = styled.div`
    margin: auto;
    width: 5px;
    height: 100%;
    left: 0;
    border-radius: 0px 5px 5px 0px;
    background-color: ${(props) => props.theme.active};
    position: absolute;
`;

export const ToolTab = ({ isActive, toolData }) => (
    <ToolTabStyled isActive={isActive}>
        {isActive ? <ToolTabIndicator /> : null}
        <ToolTabIcon>
            <ReactSVG src={toolData.icon} />
        </ToolTabIcon>
        <ToolTabTitle isActive={isActive}> {toolData.title}</ToolTabTitle>
    </ToolTabStyled>
);
