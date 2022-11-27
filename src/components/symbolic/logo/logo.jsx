import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const LogoStyled = styled.div`
    margin-bottom: 26px;
`;

export const Logo = () => {
    return (
        <LogoStyled>
            <Link to="/">
                <ReactSVG src={'img/icons/bordio-logo-ic.svg'} />
            </Link>
        </LogoStyled>
    );
};
