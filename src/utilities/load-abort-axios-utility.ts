export const loadAbort = () => {
    const controller = new AbortController();
    return controller;
}

/*
import axios, { CancelTokenSource } from "axios";

export const loadAbort = (): CancelTokenSource => {
    return axios.CancelToken.source();
}
*/