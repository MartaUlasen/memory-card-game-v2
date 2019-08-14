import { NavLink } from 'react-router-dom';
import { Loader } from 'react-feather';
import styled from 'styled-components';

export const Title = styled.div`
    padding-bottom: 20px;
`;

export const Button = styled.button`
    min-width: 100px;
    padding: 2px 8px;
    background-color: transparent;
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
    color: #4f433c;
    border: 2px dashed #b0a093;
    transition: border 0.2s ease-in;
    &:hover {
        border: 2px dashed #4f433c;
        cursor: pointer;
    }
`;

export const StyledLink = styled(NavLink)`
    min-width: 100px;
    padding: 2px 8px;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    color: #4f433c;
    font-size: 1.4rem;
    font-weight: 500;
    border: 2px dashed #b0a093;
    transition: border 0.2s ease-in;
    &:hover {
        border: 2px dashed #4f433c;
    }
`;

export const StyledLoader = styled(Loader)`
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
    width: 100%;
	margin: 80px auto 0;
	animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: #b0a093;
`;