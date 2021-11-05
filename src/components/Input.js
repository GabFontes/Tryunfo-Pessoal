import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          Nome da Carta
          <input
            id="card-name"
            name="card-name"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="card-description">
          Descrição da Carta
          <textarea
            id="card-description"
            name="card-description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            id="attr1-input"
            name="attr1-input"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            id="attr2-input"
            name="attr2-input"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            id="attr3-input"
            name="attr3-input"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            name="image-input"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="card-rarity">
          Raridade
          <select id="card-rarity" name="card-rarity" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            id="trunfo-input"
            name="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Input;
