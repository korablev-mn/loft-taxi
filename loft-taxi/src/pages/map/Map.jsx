import React from 'react'
import { Header } from '../../components/Header'
import './map.css'

export const Map = (props) => {
    const { setPage } = props
    return (
    <>
    <Header setPage={setPage}/>
        <div class="container-map">
            <div class="map">
                <div class="map-box">
                    <canvas class="canvas-map"></canvas>
                </div>
            </div>
        </div>
    </>)
}