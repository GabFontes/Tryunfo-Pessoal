import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validationButton = this.validationButton.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      cardRarity: '',
      trunfoInput: false,
      isSaveButtonDisabled: true,
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
          hasTrunfo={ false }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => 'a' }
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
