import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Table from './table.jsx';
import HighlightAmens from './highlights.jsx';
import BuildingAmens from './building.jsx';
import ListingAmens from './listing.jsx';
import OutdoorAmens from './outdoor.jsx';
import showMore from './addMore.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullDescriptionBox: undefined,
            description: '',
            descriptionPreSpan: '',
            descriptionPostSpan: '',
            highlightAmens: [],
            buildingAmens: [],
            listingAmens: [],
            outdoorAmens: []
        }
        this.renderFunc = this.renderFunc.bind(this);
    }

    componentDidMount(){
        // console.log('LOVE YOU KENNNYYYY')
        this.renderFunc();
    }

    renderFunc(){
        Axios.get(`/api/description${window.location.pathname}`)
        .then((response) => {
            let data = response.data;
            this.setState({fullDescriptionBox: data, 
                description: data.description,
                descriptionPreSpan: data.description.slice(0,200), 
                descriptionPostSpan: data.description.slice(200),
                highlightAmens: data.highlightAmens, 
                buildingAmens: data.buildingAmens, 
                listingAmens: data.listingAmens, 
                outdoorAmens: data.outdoorAmens});
        })
        .catch((err) => {
            console.log(`ERROR LOADING DESCRIPTION WITH ID ${window.location.pathname}`);
            console.log('THIS WAS THE ERR: ', err);
        })
    }

    render(){
        return(
        <div id='entireDescriptionBox'>
            <div>
                <Table />
            </div>
            <div id='descriptionBox'>
                <h5 id='descriptionHead'>Description </h5>
                <p id='description'>{this.state.descriptionPreSpan}<span id='dots'>...</span><span id='moreText'>{this.state.descriptionPostSpan}</span></p>
                <button onClick={() => {showMore()}} id='readMore'>Read More</button>
            </div>
            <hr className='separator'/>
            <div>  
                <h5 id="amenitiesHead">Amenities</h5>
                <h5 id='highlightAmens' class="amens">Highlights </h5>
                <HighlightAmens highlights={this.state.highlightAmens}/>
                <h5 class="amens">Building Amenities </h5>
                <BuildingAmens buildings={this.state.buildingAmens}/>
                <h5 class="amens">Listing Amenities </h5>
                <ListingAmens listings={this.state.listingAmens}/>
                <h5 class="amens">Outdoor Amenities </h5>
                <OutdoorAmens outdoors={this.state.outdoorAmens}/>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('description-container'));