import React from 'react';
import firestoreDB from "../../firestore";
import './CalculatorPanel.css';

class CalculatorPanel extends React.Component {
    state = {
        input: '',
        expressionArray: [],
        result: '456'
    }

    componentDidMount() {
        document.getElementsByTagName('input')[0].focus();
    }

    updateExpressionArray = (operator) => {
        if (this.state.input)
        this.setState({ expressionArray: [...this.state.expressionArray, this.state.input, operator], input: '' }, () => document.getElementsByTagName('input')[0].focus());
    }

    calculateExpression = () => {
        if (!this.state.expressionArray.length) {
            return;
        }
        let { expressionArray } = this.state;
        let result;

        if (this.state.input) {
            result = (expressionArray.join(' ') + ' ' + this.state.input) + ' = ' + eval(expressionArray.join('') + this.state.input)
        } else {
            expressionArray.pop();
            result = expressionArray.join(' ') + ' = ' + eval(expressionArray.join(''));
        }

        this.setState({ result });

        firestoreDB.collection('calculations').add({
            result: result,
            timestamp: Date.now()
        }).then(() => {
            this.setState({ input: '', expressionArray: [], result: '' }, () => document.getElementsByTagName('input')[0].focus());
        }).catch((error) => {
            alert(error);
        })
    }

    render() {
        return (
            <div className='CalculatorPanel Panel'>
                <div className='Expression'>
                    {
                        this.state.expressionArray.map(expressionElement => (
                            expressionElement + ' '
                        ))
                    }
                    {this.state.input}
                </div>
                <input type='number' value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <div className='OperationKeys'>
                    <div className='OperationKey' onClick={this.updateExpressionArray.bind(this, '+')}>+</div>
                    <div className='OperationKey' onClick={this.updateExpressionArray.bind(this, '-')}>-</div>
                    <div className='OperationKey' onClick={this.updateExpressionArray.bind(this, '*')}>X</div>
                    <div className='OperationKey' onClick={this.updateExpressionArray.bind(this, '/')}>/</div>
                </div>
                <div className='OperationKey FullWidth' onClick={this.calculateExpression}>=</div>
                <div className='Result'>{this.state.result}</div>
            </div>
        )
    }
}

export default CalculatorPanel;