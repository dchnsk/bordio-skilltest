import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: ${(props) => props?.alignItems};
    margin: ${(props) => props?.margin};
    padding: ${(props) => props?.padding};
    min-height: ${(props) => props?.minHeight};
`;
