const axios = require('axios');

exports.home = (req, res, next) => {
  axios.get('http://localhost:8080/homes')
    .then((response) => {
      res.status(200).json({
        message: response.data.message
      })
    }).catch((error) => {
    console.log(error);
  });
}
