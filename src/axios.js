import axios from "axios";

const instance=axios.create({
  baseURL: 'https://us-central1-clone-83371.cloudfunctions.net/api'
});

export default instance;

//firebase deploy --only functions in functions folder
//replace the url above
// the cd .. from functions folder
//run npm build
//firebase init like before
// firebase deploy --only hosting

//https://us-central1-clone-83371.cloudfunctions.net/api
//http://localhost:5001/clone-83371/us-central1/api
