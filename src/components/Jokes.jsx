import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../Jokes.css';

function Jokes() {

    const [jokes, setJoke] = useState("");

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': '68daea56b9mshcf0ab303c97a958p15101ajsn912de357783f',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    const getJoke = () => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setJoke(response.data.body[0].setup + "        ........        " + response.data.body[0].punchline);
        }).catch(function (error) {
            console.error(error);
        });
    }

  return (
    <div>
        <button onClick={getJoke}>Get a random Joke</button>
        <h4>{jokes}</h4>
    </div>
  )
}

export default Jokes