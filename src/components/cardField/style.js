import styled from 'styled-components';

export const StyledCardFileld = styled.ul`
    display: block;
    height: calc(100vh - 70px - 1rem);
	padding: 0;
    list-style: none;
    margin: 0;
    .card {
        width: calc(100% / 6);
        height: 100%;
        margin-right: 8px;
        
    }
    &.cards--8х3 {
        max-height: calc(600px + 4px * 2);
        .card {
            width: calc((100% - 64px) / 8);
            height: calc(100% / 3);
        }
    }
    &.cards--4х6 {
        .card {
            width: calc(100% / 4);
            height: calc((100vh - 70px - 4px * 5 - 1rem) / 6);
        }
    }
    @supports (display:grid) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 4px;
        list-style: none;
        .card {
            width: 100%;
            margin-right: 0;
        }
        &.cards--8х3 {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            .card {
                width: 100%;
                height: auto;
            }
        }
        &.cards--4х6 {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            .card {
                width: 100%;
            }
        }
    }
`;
