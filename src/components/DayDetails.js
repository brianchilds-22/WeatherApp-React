import React from 'react';
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
    margin: 15px 0;
    border: 2px solid teal;
    text-align: center;
`

const DayDetails = ({ appHigh, appLow, day, description, high, humidity, icon, low, precip, temp, windDire, windSpd }) => {
    return (
    <DetailsWrapper>
        <CardBody>
            <h2>Weather Details for  {day}</h2>
            <h2>{temp.toFixed(0)}°</h2>
            <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description} />
            <p><strong>High:</strong> {high.toFixed(0)}° (Feels like: {appHigh.toFixed(0)}°)</p>
            <p><strong>Low:</strong> {low.toFixed(0)}° (Feels like: {appLow.toFixed(0)}°)</p>
            <p><strong>Precip:</strong> {precip}% | <strong>Humidy:</strong> {humidity}%</p>
        </CardBody>
    </DetailsWrapper>
    )
}
export default DayDetails;