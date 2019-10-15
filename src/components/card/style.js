import styled from 'styled-components';

const FLIP_TIME = "0.2s";

export const CardStyled = styled.li`
    display: inline-block;
    position: relative;
    text-align: left;
    transition: transform ${FLIP_TIME} ease-in;
    transform-style: preserve-3d;
    border-radius: 10px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
    cursor: ${props => !props.frontSide && !props.preventDefaultClick && props.isPlaying ? "pointer" : "default"};
    transform: ${props => props.frontSide ? "rotateY(180deg)" : "none"};
    visibility: ${props => props.hidden ? "hidden" : "visible "};
`;

export const CardBack = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 10px;
    background-color: white;
    background-image: repeating-linear-gradient(45deg, 
        transparent 0, transparent 10px, 
        rgba(200, 0, 0, 0.5) 5px, rgba(200, 0, 0, 0.5) 15px, 
        transparent 15px, transparent 26px, 
        rgba(200, 0, 0, 0.5) 28px, rgba(200, 0, 0, 0.5) 50px), 
        repeating-linear-gradient(-45deg, 
        transparent 0, transparent 10px, 
        rgba(200, 0, 0, 0.5) 5px, rgba(200, 0, 0, 0.5) 15px, 
        transparent 15px, transparent 35px, 
        rgba(200, 0, 0, 0.5) 35px, rgba(200, 0, 0, 0.5) 50px);
    @media only screen and (min-width: 768px) {
        background-image: repeating-linear-gradient(45deg, 
            transparent 0, transparent 15px, 
            rgba(200, 0, 0, 0.5) 15px, rgba(200, 0, 0, 0.5) 25px, 
            transparent 25px, transparent 45px,
            rgba(200, 0, 0, 0.5) 45px, rgba(200, 0, 0, 0.5) 70px),
            repeating-linear-gradient(-45deg, 
            transparent 0, transparent 15px, 
            rgba(200, 0, 0, 0.5) 15px, rgba(200, 0, 0, 0.5) 25px, 
            transparent 25px, transparent 45px,
            rgba(200, 0, 0, 0.5) 45px, rgba(200, 0, 0, 0.5) 70px);
    }
`;

export const CardFace = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    font-size: 100px;
    color: grey;
    border-radius: 10px;
    background-color: whitesmoke;
    transform: rotateY(180deg);
    overflow: hidden;
`;

export const CardImage = styled.img`
    object-fit: cover;
	font-family: 'object-fit: cover;';
    width: 100%;
    height: 100%;
`;