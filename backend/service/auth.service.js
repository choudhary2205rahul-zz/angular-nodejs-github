const axios = require("axios");

exports.authHome = (req, res, next) => {
  const options = {
    method: 'POST',
    url: 'https://dev-y02dkqfa.us.auth0.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: {
      grant_type: 'client_credentials',
      client_id: 'XjoCleQxOV3G6iV7489kV8Qs1TidSDtM',
      client_secret: 'k0YR-F8OalBe1b-FNRKQyHemPuhl4GLb4uR-lQUX0BUrdPPGMNefNDUC5M-mHyPP'
    }
  };

  axios.request(options).then((response) => {
    console.log(response.data);
    res.status(200).json({
      response: response.data
    })
  }).catch(function (error) {
    response: error
  });
}
