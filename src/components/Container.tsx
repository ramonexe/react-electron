import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
`;

const Container: React.FC<ContainerProps> = ({ children, className, style }) => (
    <StyledContainer className={className} style={style}>
        {children}
    </StyledContainer>
);

export default Container;