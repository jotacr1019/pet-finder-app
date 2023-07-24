import * as dotenv from "dotenv";
dotenv.config();

const mapbox_token = process.env.MAPBOX_TOKEN;

const mapboxClient = new MapboxClient(mapbox_token);

export { initSearchForm, mapboxClient };