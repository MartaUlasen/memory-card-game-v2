import styled from 'styled-components';
import { StyledLink } from 'style';

export const StyledBoard = styled.div`
    padding: 0 1rem 1rem;
    @media only screen and (min-width: 768px) {
        padding: 0 2rem;
	}
    @media only screen and (min-width: 1024px) {
        padding: 0 calc(50% - 480px);
	}
    @media only screen and (min-width: 1200px) {
        padding: 0 calc(50% - 600px);
	}
`;

export const Header = styled.div`
    display: flex;
        justify-content: space-between;
        padding: 1rem 0;
`;

export const BoardTimer = styled.div`
    min-width: 120px;
    text-align: left;
`;

export const MenuButton = styled(StyledLink)`
    margin-right: 20px;
    margin-left: auto;
`;