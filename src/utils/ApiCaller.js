import * as configs from '../constants/Configs';
import axios from 'axios';

var ApiCaller = (enpoint, body = null, method = 'GET') => {
  return (
    axios({
      method: method,
      url: configs.API_DOMAIN + enpoint,
      data: body
    }).catch(error => {
      console.log(error)
    })
  )
};

export default ApiCaller;