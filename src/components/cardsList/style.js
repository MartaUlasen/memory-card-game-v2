import styled from 'styled-components';

export const StyledcardList = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    @media only screen and (min-width: 768px) {
        padding: 1rem 2rem;
    }
`;

export const Wrapper = styled.div`
    height: calc(100vh - 35px - 3rem);
    @media only screen and (min-width: 1025px) {
        display: flex;
	}
`;

export const CardDescription = styled.div`
    position: relative;
    width: 100%;
    height: calc(70% - 1rem);
    margin: 1rem 0;
    padding: 0;
    list-style: none;
    border-bottom: 2px solid #b0a093;
    @media only screen and (min-width: 1025px) {
        height: 100%;
        width: calc(30% - 1rem);
        margin-right: 1rem;
        margin-bottom: 0;
	}
`;

export const CardSubstrate = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, 
        rgba(0,0,0,0) 0%,
        rgba(176, 160, 147, 0.1) 92%,
        rgba(176, 160, 147, 0.6) 100%);
    pointer-events: none;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 1025px) {
        margin: 0 1rem 0 0;
	}
`;


