import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            description: '',
            highlightAmens: [],
            buildingAmens: [],
            listingAmens: [],
            outdoorAmens: []
        }
    }

    render(){
        <div>
        return(
            <div>
                <table>
                    <tr id='tableRow0'>
                        <th id='table0x0'>DAYS ON MARKET</th>
                        <th id='table1x0'>LAST PRICE CHANGE</th>
                        <th id='table2x0'>ESTIMATED PAYMENT</th>
                    </tr>
                    <tr id='tableRow1'>
                        <th id='table0x1'>MONTHLY TAXES</th>
                        <th id='table1x1'>MONTHLY MAINTENANCE</th>
                        <th id='table2x1'>TAX ABATEMENT</th>
                    </tr>
                </table>
            </div>
            <div>
                <p id='description'>Howdy Ho</p>
            </div>
            <div>   
                <div id='amenities'>Howdy Doo</div>
            </div>
        )
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))