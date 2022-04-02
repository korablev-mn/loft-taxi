import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.css'
import { FormFromTo } from '../../components/FormFromTo'
import { getCardRequest, addressRequest } from "../../actions";
import { Alert } from '../../components/Alert';
import { connect } from "react-redux";

class MapComponent extends Component {
    map = null;
    mapContainer = React.createRef();
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib3p5emVybyIsImEiOiJjbDBwcm80eXIwdDdzM2RxeTJkYWhhZG1tIn0.EQtmyfOWfLd-zCRwX47Rmg';
        const { getCardRequest, addressRequest } = this.props
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center:[30.1231236, 59.9874563],
            zoom: 10
        })
        getCardRequest()
        addressRequest()
    }
    componentWillUnmount() {
        this.map.remove()
    }

    render() {

        return (
            <>
                <div className="container-map map-wrapper">
                    <div data-testid="map" className='map' ref={this.mapContainer}/>
                </div>
                <div className='window'>
                    {this.props.card.cardName ? <FormFromTo/> : <Alert/>}
                    {this.props.card.error && <p>{this.props.card.error}</p>}
                    {/* <div className='display'>
                        <div className='block'>

                        </div>
                        <div className='block'></div>
                        <div className='block'></div>
                    </div> */}
                </div>
            </>)
    }
}

export const Map = connect((state) => ({ card: state.card }),
 {getCardRequest, addressRequest})(MapComponent)