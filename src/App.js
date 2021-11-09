import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validationButton = this.validationButton.bind(this);
    this.saveCardAndClearForm = this.saveCardAndClearForm.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validationButton);
  }

  deleteCard(index) {
    const { cards } = this.state;
    cards.splice(index, 1);
    this.setState(() => ({
      cards,
    }));
    const trunfo = cards.some((card) => card.cardTrunfo === true);
    if (trunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  validationButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const somMaxValue = 210;
    const minLengthInput = 0;
    const maxAttrValue = 90;

    //  Idéia de fazer várias validações dentro de um só if e de usar a função 'Number' na linha 57 ao Natã Elienai;

    if (cardName.length && cardDescription.length
      && cardImage.length && cardRare.length > minLengthInput
      && cardAttr1 <= maxAttrValue && cardAttr2 <= maxAttrValue && cardAttr3
      <= maxAttrValue
      && cardAttr1 >= minLengthInput && cardAttr2 >= minLengthInput && cardAttr3
      >= minLengthInput
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= somMaxValue) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  saveCardAndClearForm() {
    //  Créditos ao Andrey de Novaes Ferreira por me ajudar no entendimento do requisito.

    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cards,
    } = this.state;

    const obj = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState({
      cards: [...cards, obj],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    });

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  render() {
    const {
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveCardAndClearForm }
        />
        <Card
          { ...this.state }
        />
        <div>
          <h3>Todas as cartas</h3>
          {
            cards.map((card, index) => (
              <div key={ index }>
                <Card { ...card } />
                <button
                  type="button"
                  onClick={ () => this.deleteCard(index) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
