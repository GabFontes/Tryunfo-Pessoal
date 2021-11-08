import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  renderList(cards) {
    return cards.map((card) => (
      <div key={ card.name }>
        <p data-testid="name-card">{card.name}</p>
        <img src={ card.image } alt={ card.name } data-testid="image-card" />
        <span data-testid="description-card">{card.description}</span>
        <div>
          <p data-testid="attr1-card">{card.atribute1}</p>
          <p data-testid="attr2-card">{card.atribute2}</p>
          <p data-testid="attr3-card">{card.atribute3}</p>
        </div>
        <p data-testid="rare-card">{card.rarity}</p>
        {
          card.trunfo && <p data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>
    ));
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span data-testid="description-card">{cardDescription}</span>
        <div>
          <p data-testid="attr1-card">{cardAttr1}</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </div>
        <p data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
        }
        <div>
          <h3>Todas as cartas</h3>
          <div>{this.renderList(cards)}</div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  cardTrunfo: false,
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
