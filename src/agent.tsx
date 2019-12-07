import _superagent, { Response } from 'superagent';

interface IRequest {
    get: (url: string) => Promise<any>,
    post: (url: string, body: any) => Promise<any>
}

const superagent = _superagent;

const API_ROOT = window.location.protocol + "//" + window.location.host + "/api";

export const responseBody = (res: Response) => res.body;


export const request: IRequest = {
    get: (url) => {
        return superagent.get(`${API_ROOT}${url}`).set('accept', 'json')
    },
    post: (url, body) => {
        return superagent.post(`${API_ROOT}${url}`, body);
    }
}
