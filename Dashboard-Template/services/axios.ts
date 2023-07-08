/* axios.ts */
import axios from 'axios';

export default axios.create({
  // NOTE: When changing env variable, you must restart the enivornment i.e. `npm run dev`
  baseURL: process.env.REACT_APP_BASE_URL,
});
