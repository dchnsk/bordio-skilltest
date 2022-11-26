import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from './bordio-logo.svg';

const LogoStyled = styled.div`
    margin-bottom: 26px;
`;

export const Logo = () => {
    return (
        <LogoStyled>
            <Link to="/">
                <LogoSvg />
            </Link>
        </LogoStyled>
    );
};
