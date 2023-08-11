const axios = require("axios");

const api_url = "https://re.jrc.ec.europa.eu/api/v5_2/SHScalc";
const parameters = {
  lat: 45,
  lon: 8,
  peakpower: 10,
  batterysize: 50,
  consumptionday: 200,
  cutoff: 40,
};

axios
  .get(api_url, { params: parameters })
  .then((response) => {
    console.log("API Response:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from the API.", error);
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const api_url_2 = "https://re.jrc.ec.europa.eu/api/PVcalc";
const parameters_2 = {
  lat: 45,
  lon: 8,
  peakpower: 1,
  loss: 14,
};

axios
  .get(api_url_2, { params: parameters_2 })
  .then((response) => {
    console.log("API Response 2:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from API 2.", error);
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const api_url_3 = "https://re.jrc.ec.europa.eu/api/MRcalc";
const parameters_3 = {
  lat: 45,
  lon: 8,
  horirrad: 1,
};

axios
  .get(api_url_3, { params: parameters_3 })
  .then((response) => {
    console.log("API Response 3:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from API 3.", error);
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const api_url_4 = "https://re.jrc.ec.europa.eu/api/DRcalc";
const parameters_4 = {
  lat: 45,
  lon: 8,
  month: 3,
  global: 1,
};

axios
  .get(api_url_4, { params: parameters_4 })
  .then((response) => {
    console.log("API Response 4:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from API 4.", error);
  });

//////////////////////////////////////////////////////Longue//////////////////////////////////////////////////////////////

const api_url_5 = "https://re.jrc.ec.europa.eu/api/seriescalc";
const parameters_5 = {
  lat: 45,
  lon: 8,
};

axios
  .get(api_url_5, { params: parameters_5 })
  .then((response) => {
    console.log("API Response 5:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from API 5.", error);
  });

/////////////////////////////////////////////////LONGUE///////////////////////////////////////////////////////////////////

const api_url_6 = "https://re.jrc.ec.europa.eu/api/tmy";
const parameters_6 = {
  lat: 45,
  lon: 8,
};

axios
  .get(api_url_6, { params: parameters_6 })
  .then((response) => {
    console.log("API Response 6:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from API 6.", error);
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const api_url_7 = "https://re.jrc.ec.europa.eu/api/printhorizon";
const parameters_7 = {
  lat: 45,
  lon: 8,
};

axios
  .get(api_url_7, { params: parameters_7 })
  .then((response) => {
    console.log("API Response 7:", response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch data from API 7.", error);
  });
