import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent,Promise);


const API_ROOT = window.location.protocol + "//" +  window.location.host + "/api";


const responseBody = res => res.body ;

const request = {
    get : url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
    post : (url, body) => superagent.post(`${API_ROOT}${url}`,body).then(responseBody)
};


const Units = {
    getAll :  () =>request.get("/units/getall"),
    create : unit => request.post("/units/create",{unit})
};

export default {
    Units
}