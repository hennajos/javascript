'use strict';
const lomake=document.querySelector('form');
const haut=document.querySelector('#haut');
lomake.addEventListener('submit', async function(event) {
  event.preventDefault();
  haut.innerHTML='';
  const haku=document.querySelector('#query').value;
  const vastaus=await fetch(`https://api.tvmaze.com/search/shows?q=${haku}`);
  const data=await vastaus.json();

  for(const ohjelma of data){
    console.log(ohjelma.show);

    const article = document.createElement('article');

    const nimi = document.createElement('h2');
    const linkki = document.createElement('a');
    linkki.target = '_blank';

    nimi.innerText=ohjelma.show.name;

    const kuva=document.createElement('img');
    kuva.src=ohjelma.show.image ? ohjelma.show.image.medium : ' https://via.placeholder.com/210x295?text=Not%20Found';
    kuva.alt=ohjelma.show.name;

    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = ohjelma.show.summary;

    article.appendChild(nimi);
    article.appendChild(linkki);
    article.appendChild(kuva);
    article.appendChild(summaryDiv);


    document.querySelector('#haut').appendChild(article);
  }
});