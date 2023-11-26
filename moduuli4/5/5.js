'use strict';
const haku = "https://api.chucknorris.io/jokes/random";

async function fetchJoke() {
  try {
    const vastaus =await fetch(haku);
    const data = await vastaus.json();
    datakasittely(data);

  }
  catch (error){
    console.log(error.message);
  }
}

function datakasittely(jsonData) {
  console.log(jsonData.value)
}

 fetchJoke();
