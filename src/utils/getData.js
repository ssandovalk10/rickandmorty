const API = 'https://rickandmortyapi.com/api/character/';

async function getData (id) {

  console.log('calling')
  const apiURl = id ? `${API}${id}` : API;
  try {
    
    const response = await fetch(apiURl);
    
    const data = await response.json();

    
    return data;

  } catch (error) {
    console.log('Fetch Error', error);
  }

}



export default getData;