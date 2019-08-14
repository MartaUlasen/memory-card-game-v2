import styled from 'styled-components';
import { lighten } from 'polished';

const COLOR = `${lighten(0.1, '#f6e6d7')}`;

export const ItemStyled = styled.li`
    margin-bottom: 12px;
    padding: 12px;
    border: 2px solid #b0a093;
    border: ${props => props.currentCardIndex === props.index ? "2px solid #4f433c" : "2px solid #b0a093"};
    background-color: ${
        props => props.currentCardIndex === props.index 
        ?  COLOR
        : "transparent"
    };
    border-radius: 10px;
    overflow: auto;
    transition: 
        border 0.2s ease-in,
        background-color 0.2s ease-in;
    &:hover {
        background-color: ${COLOR};
        border: 2px solid #4f433c;
        cursor: pointer;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;
            
export const ItemDescription = styled.div`
    text-align: justify;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
`;

export const ItemImg = styled.img`
    width: 120px;
    height: calc(120px * 4 / 3);
    margin-right: 8px;
    float: left;
    border-radius: 10px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    object-fit: cover;
`;

export const ItemTitle = styled.div`
    font-size: 1.125rem;
`;