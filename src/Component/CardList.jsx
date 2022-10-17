import React from 'react'
import CardDetail from './CardDetail'
import { faker } from "@faker-js/faker"


const CardList = (props) => {
  return (
    <div>
        <CardDetail 
            title="My First Card"
            description={faker.lorem.paragraphs()}
            image={faker.image.city()}
            
        />

        <CardDetail title="Another Card" image={faker.image.fashion()}/>

        <CardDetail image={faker.image.cats()}/>

    </div>
  )
}

export default CardList