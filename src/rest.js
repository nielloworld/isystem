/**
 * Only because this is a very small site with limited requests, this
 * file collects the requests and simply needs the correct parameters
 * to be handed to them when called.
 * 
 * Otherwise, one should create an axios instance with
 * 
 *   axios.create({
 *     // Default configs (base url, headers, common params such as paging, etc)
 *   })
 * 
 * And each view that needs to fetch anything can use that instance.
 */

import {
  API_URL
} from './constants';
import axios from 'axios';

export const GetEquipmentList = () => {
  return axios.get(API_URL + 'equipments').then(response => response.data);
};

export const GetOrderList = () => {
  return axios.get(API_URL + 'orders').then(response => response.data);
};

export const CreateOrder = () => {
  // TODO - What data is passed here?
  return axios.post(API_URL + 'orders', {}).then(response => response.data);
};

