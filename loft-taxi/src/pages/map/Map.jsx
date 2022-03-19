import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.css'

export class Map extends Component {
    map = null;
    mapContainer = React.createRef();
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib3p5emVybyIsImEiOiJjbDBwcm80eXIwdDdzM2RxeTJkYWhhZG1tIn0.EQtmyfOWfLd-zCRwX47Rmg';

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center:[30.1231236, 59.9874563],
            zoom: 10
        })
    }
    componentWillUnmount() {
        this.map.remove()
    }
    render() {

        return (
            <>
                <div class="container-map" className='map-wrapper'>
                    <div data-testid="map" className='map' ref={this.mapContainer}/>
                </div>
            </>)
    }
}