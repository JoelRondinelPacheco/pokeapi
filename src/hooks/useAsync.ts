import { AxiosResponse } from "axios"
import { useEffect } from "react";

const useAsync = (
    asyncFn: () => Promise<AxiosResponse<any, any>>,
    successFunction: Function,
    returnFunction: Function,
    dependecies: any[] = [],
    ) => {

        useEffect(() => {
            let isActive = true;
            asyncFn().then((response) => {
                if (isActive) successFunction(response.data);
            });

            return () => {
                returnFunction && returnFunction();
                isActive = false;
            }
    }, dependecies);
};

export default useAsync;