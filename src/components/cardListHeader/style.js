import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { StyledLink } from 'style';

export const BackButton = styled(StyledLink)`
    display: flex;
    align-items: center;
    max-width: 100px;
`;

export const Icon = styled(ArrowLeft)`
    stroke: #4f433c;
`;