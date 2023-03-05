import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

const CarContainer = styled.div`
box-sizing: border-box;
background: #222;
color: #efefef;
padding: 15px;
border-radius: 5px;
    `;

const List = styled.div `
background: #666;
`;

const Img = styled.img `
object-fit: cover;
width: 100%;
height: 180px;
`;

const Car = ( {kep, marka, tipus, ar, uzemanyag, henger} ) => {
  return (
    <CarContainer className='container-lg container-md ontainer-sm'>
        <h1>React Autó Kártyák</h1>
        <Img className='rounded float-start img-fluid' src={kep} alt={tipus} />
        <h3>{marka}</h3>
        <h4>{tipus}</h4>
        <List className='p-3'>
            <p>Ár: {ar}</p>
            <p>Üzemanyag: {uzemanyag}</p>
            <p>Hengerűrtartalom: {henger} cm3</p>
        </List>
        <Button variant='danger m-5'>Megveszem</Button>
    </CarContainer>
  )
}

export default Car