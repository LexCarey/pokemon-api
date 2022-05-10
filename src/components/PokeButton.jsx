import React from 'react'

const PokeButton = (props) => {

    const pokemonFetch = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then(response => {
                return response.json()
            }).then(jsonResponse => {
                props.update(jsonResponse)
                console.log(jsonResponse)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={pokemonFetch}>Fetch Pokemon</button>
        </div>
    )
}

export default PokeButton