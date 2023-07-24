import algoliasearch from "algoliasearch";
import * as dotenv from "dotenv";
dotenv.config();
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex("pet_finder_index");

export { index };
