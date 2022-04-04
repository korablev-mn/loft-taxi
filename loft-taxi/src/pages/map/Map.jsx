import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.css'
import { FormFromTo } from '../../components/FormFromTo'
import { getCardRequest, addressRequest } from "../../actions";
import { Alert } from '../../components/Alert';
import { connect } from "react-redux";
import { drawRoute } from './drawRoute';

class MapComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lng: 30.1231236,
            lat: 59.9874563,
            zoom: 10
        }
        this.map = null
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib3p5emVybyIsImEiOiJjbDBwcm80eXIwdDdzM2RxeTJkYWhhZG1tIn0.EQtmyfOWfLd-zCRwX47Rmg';
        
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center:[this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
        const { getCardRequest, addressRequest } = this.props
        getCardRequest()
        addressRequest()
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            const { routeCords } = this.props
            if(this.map.getLayer('route')) {
                this.map.flyTo({
                    center: [this.state.lng, this.state.lat],
                    zoom: this.state.zoom
                })
                this.map.removeLayer('route')
                this.map.removeSource('route')
            }
            if(routeCords.lenght) {
                drawRoute(this.map, routeCords)
            }
        }
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

export const Map = connect((state) => ({ card: state.card, routeCords: state.route.data }),
 {getCardRequest, addressRequest})(MapComponent)