import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta
          <input
            value={ cardName }
            onChange={ onInputChange }
            id="card-name"
            name="cardName"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="card-description">
          Descrição da Carta
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            id="card-description"
            name="cardDescription"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1Input"
            name="attr1Input"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2Input"
            name="attr2Input"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3Input"
            name="attr3Input"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagems
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="image-input"
            name="imageInput"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="card-rarity">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="card-rarity"
            name="cardRarity"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo-input"
            name="trunfoInput"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.defaultProps = {
  cardTrunfo: false,
  // hasTrunfo: false,
  isSaveButtonDisabled: false,
};

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
