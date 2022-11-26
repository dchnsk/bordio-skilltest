import styled from 'styled-components';
import { AppColors } from '../../constants';
import { FlexCol } from '../common/flex';
import { ToolTab } from './ToolTab';

const ToolsListStyled = styled(FlexCol)`
    position: absolute;
    left: 219px;
    width: 154px;
    top: 0;
    bottom: 0;
    background-color: ${AppColors.theme.backgorund.dark};
`;

const ToolsListHeader = styled.span`
    margin: 24px 16px;
    font-size: 18px;
    font-weight: 400;
`;

export const ToolsListBodyStyled = styled.ul`
    width: 138px;
`;

export const ToolsList = ({ availibleTools }) => {
    return (
        <ToolsListStyled>
            <ToolsListHeader>Tools</ToolsListHeader>
            <ToolsListBodyStyled>
                {availibleTools.map((tool) => (
                    <ToolTab isActive={tool.isActive} key={tool.id} toolData={tool.data} />
                ))}
            </ToolsListBodyStyled>
        </ToolsListStyled>
    );
};
