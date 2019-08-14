import React, { Component } from 'react';
import { LEVEL_PARAMS } from 'const';
import { StyledMenu, Item } from './style';
import { Title, Button, StyledLink } from 'style';

export default class Menu extends Component {
    buttonLevelHandler = (level) => {
        const { startPlay } = this.props;
        startPlay(level);
    }

    buttonCardsDescriprionHandler = () => {
        const { watchCardsDescription } = this.props;
        watchCardsDescription();
    }

	render() {
		return (
            <div>
                <Title>Select the difficulty of the game</Title>
                <StyledMenu>
                    <Item>
                        <Button
                            type="button"
                            onClick={() => {
                                this.buttonLevelHandler(LEVEL_PARAMS.easy)
                            }}
                        >
                            Easy
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            type="button"
                            onClick={() => {
                                this.buttonLevelHandler(LEVEL_PARAMS.medium)
                            }}
                        >
                            Medium
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            type="button"
                            onClick={() => {
                                this.buttonLevelHandler(LEVEL_PARAMS.hard)
                            }}
                        >
                            Hard
                        </Button>
                    </Item>
                    <Item>
                        <StyledLink 
                            to="/cards" 
                            onClick={() => {
                                this.buttonCardsDescriprionHandler()
                            }} 
                        >
                            Watch cards description
                        </StyledLink>
                    </Item>
                </StyledMenu>
            </div>
		)
    }
}