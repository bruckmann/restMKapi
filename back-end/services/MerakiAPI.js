const axios = require('axios');
const BASE_URL = 'https://api.meraki.com/api/v0'
class MerakiAPI {

  getNetwork(networkID, authKey){
    axios.get(BASE_URL + `/networks/${networkID}/devices`, {
      headers: {
        "Content-Type": "application/json",
        "X-Cisco-Meraki-API-Key": `${authKey}`
      }
    }).then((response) => {
      console.log(response);
      }).catch((error) => {
         console.log(error);
      })
  }
}

module.exports = MerakiAPI;