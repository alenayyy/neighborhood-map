const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/api/rest_v1/page/summary/'

class WikipediaServiceAPI {

  getInfo = async (destination) => {
    try {
      const response = await fetch(WIKIPEDIA_API_URL+encodeURI(destination.name), {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
      });
      if(!response.ok) {
        // user will see a messsage like "Wikipedia not avaliable" in the InfoWindow
        // default description is provided
        console.log('wikipedia has no info on: '+destination.name);
        return '';
      }
      const wikiData = await response.json();
      return wikiData;

    } catch (e) {
      // user will see a messsage like "Wikipedia not avaliable" in the InfoWindow
      // default description is provided
      console.log('api call failed: '+e);
      return '';
    }
  }
}


export default new WikipediaServiceAPI()
