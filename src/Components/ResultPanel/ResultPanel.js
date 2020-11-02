import React from 'react';
import firestoreDB from "../../firestore";
import './ResultPanel.css';

class ResultPanel extends React.Component {
    state = {
        calculations: []
    }

    componentDidMount() {
        firestoreDB.collection('calculations').orderBy("timestamp", "desc").limit(10).onSnapshot((querySnapshot) => {
            const calculations = [];
            querySnapshot.forEach(function(doc) {
                calculations.push(doc.data());
            });

            this.setState({ calculations });
        });
    }

    render() {
        return (
            <div className='ResultPanel Panel'>
                <h4>Recent Calculations:</h4>
                {
                    this.state.calculations.map(calculation => (
                        <div className='Calculation' key={calculation.timestamp}>{calculation.result}</div>
                    ))
                }
            </div>
        )
    }
}

export default ResultPanel;