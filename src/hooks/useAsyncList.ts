import { AxiosResponse } from "axios";
import { EntityInfo } from "../models";
import { useEffect } from "react";

const useAsyncList = (
    asyncFn: (param: string | number) => Promise<AxiosResponse<any, any>>,
    successFunction: Function,
    returnFunction: Function,
    iterable: EntityInfo[] | null | undefined,
    dependecies: any[],
    ) => {

        useEffect(() => {
            let isActive = true;
            const fetchAll = async () => {
                try {                    
                    if(iterable) {                       
                        const results = await Promise.all(iterable.map(i => asyncFn(i.name)));
                        successFunction(results);
                    } else {
                        throw new Error ("Page null")
                    }
                
                } catch (e: any) {
                    console.log(e.message)
                }
            }

            fetchAll();

            return () => {
                returnFunction && returnFunction();
                isActive = false;
            }
            
        }, dependecies)
} 

export default useAsyncList;