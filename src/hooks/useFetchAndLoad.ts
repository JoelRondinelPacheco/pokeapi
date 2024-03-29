import { useEffect, useState } from "react"
import { AxiosResponse } from "axios";
import { AxiosCall } from "../models";

const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(false);
    let controller: AbortController;

    const callEndpoint = async (axiosCall: AxiosCall<any>) => {
         
        controller = axiosCall.controller;
        setLoading(true);

        let result = {} as AxiosResponse<any>
        try {
            result = await axiosCall.call;
        } catch (e: any) {}

        setLoading(false);
        return result;
    };

    const cancelEndpoint = () => {
        setLoading(false);
        controller && controller.abort;
    }

    useEffect(() => {
        return () => {
            cancelEndpoint();
        }
    })

    return { loading, callEndpoint };
}

export default useFetchAndLoad;