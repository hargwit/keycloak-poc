import { useEffect, useRef, useState } from 'react'

type UsePromiseResult<T> = {
    isLoading: boolean
    error?: Error
    result?: T
}

/**
 * Converts an async operation (promise) into a reactive hook.
 *
 * Manages the state and error of a promise allowing for components
 * to directly use async functions and manage their renders.
 *
 * @param producer Function which returns the promise
 * @returns The state, error and result of the promise
 */
const usePromise = <T>(producer: () => Promise<T>): UsePromiseResult<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error>()
    const [result, setResult] = useState<T>()

    const producerRef = useRef(producer)

    useEffect(() => {
        const triggerPromise = async (): Promise<void> => {
            try {
                const result = await producerRef.current()

                setResult(result)
                setError(undefined)
                setIsLoading(false)
            } catch (e) {
                setError(e as Error)
                setIsLoading(false)
            }
        }

        triggerPromise()
    }, [])

    return {
        isLoading,
        error,
        result,
    }
}

export { usePromise }
