import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "HA2W-1ASH-3PNE-HR8F";

// eslint-disable-next-line
export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
};

