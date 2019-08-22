import styled from 'styled-components';

export const Info = styled.div`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 0 4px;
    background-color: #ffff;
    border: 2px solid #4f433c;
    border-radius: 8px;
    font-family: 'Indie Flower', cursive;
    font-size: 0.875rem;
    @media only screen and (min-width: 768px) {
        top: 8px;
        right: 8px;
        padding: 0 8px;
        font-size: 1.25rem; 
	}
`;