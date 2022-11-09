import {BASE_URL} from './baseUrl';
import {currentWeatherByLocation} from './getWeatherInformation';

export const getCityRecomendations = async searchString => {
  try {
    let rawResponse = await fetch(
      `${BASE_URL}/search.json?q=${searchString}`,
      currentWeatherByLocation,
    );
    let jsonResponse = await rawResponse.json();
    // console.log(jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};
