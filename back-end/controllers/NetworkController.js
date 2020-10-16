const MerakiAPI = require('../services/MerakiAPI');
const merakiApi = new MerakiAPI();

class NetworkController {

  getNetWorkData(req, res){
    const {
      networkID,
      authKEY
    } = req.body
  
    console.log(merakiApi.getNetwork(networkID, authKEY));
    return res.json(merakiApi.getNetwork(networkID, authKEY));
  }
}

module.exports = NetworkController;