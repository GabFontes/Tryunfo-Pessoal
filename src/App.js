import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validationButton = this.validationButton.bind(this);
    this.saveCardAndClearForm = this.saveCardAndClearForm.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      cardRarity: 'normal',
      trunfoInput: false,
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

  validationButton() {
    const {
      cardName,
      cardDescription,
      imageInput,
      cardRarity,
      attr1Input,
      attr2Input,
      attr3Input,
    } = this.state;

    const somMaxValue = 210;
    const minLengthInput = 0;
    const maxAttrValue = 90;

    //  Idéia de fazer várias validações dentro de um só if e de usar a função 'Number' na linha 57 ao Natã Elienai;

    if (cardName.length && cardDescription.length
      && imageInput.length && cardRarity.length > minLengthInput
      && attr1Input <= maxAttrValue && attr2Input <= maxAttrValue && attr3Input
      <= maxAttrValue
      && attr1Input >= minLengthInput && attr2Input >= minLengthInput && attr3Input
      >= minLengthInput
      && (Number(attr1Input) + Number(attr2Input) + Number(attr3Input)) <= somMaxValue) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  hasTrunfo() {
    const { trunfoInput } = this.state;
    if (trunfoInput === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  saveCardAndClearForm() {
    //  Créditos ao Andrey de Novaes Ferreira por me ajudar no entendimento do requisito.

    const {
      cardName,
      cardDescription,
      imageInput,
      cardRarity,
      attr1Input,
      attr2Input,
      attr3Input,
      trunfoInput,
      cards,
    } = this.state;

    const obj = {
      name: cardName,
      description: cardDescription,
      image: imageInput,
      rarity: cardRarity,
      atribute1: attr1Input,
      atribute2: attr2Input,
      atribute3: attr3Input,
      trunfo: trunfoInput,
    };

    this.setState({
      cards: [...cards, obj],
      cardName: '',
      cardDescription: '',
      attr1Input: '0',
      attr2Input: '0',
      attr3Input: '0',
      imageInput: '',
      cardRarity: '',
      isSaveButtonDisabled: true,
    });

    this.hasTrunfo();
  }

  render() {
    const {
      cardName,
      cardDescription,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      cardRarity,
      trunfoInput,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ cardRarity }
          cardTrunfo={ trunfoInput }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveCardAndClearForm }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ cardRarity }
          cardTrunfo={ trunfoInput }
        />
      </div>
    );
  }
}

export default App;
