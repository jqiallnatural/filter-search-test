import { useState, useEffect } from 'react';
import { IItems } from '../types/Items';

interface IApiResponse {
    data: IItems[],
    isLoading: boolean,
    error: string | null,
}

const useApi = (endpoint: string): IApiResponse => {
    const [data, setdata] = useState<IItems[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(endpoint);
            if (!response.ok){ // check if its not between 200 - 299
                // we can check if it's 404 or 500 etc.
                throw new Error('Network response was not ok')
            }
            const jsonData = await response.json()
            setdata(jsonData);
            setError(null)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred')
            }
        } finally { // after data or error and rest network requests are done
            setIsLoading(false)
        }
      }

      fetchData()
    
    }, [endpoint]) // The hook will rerun when url changes

    return { data, error, isLoading}
}

export default useApi