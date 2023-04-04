import { useEffect, useRef, useState } from 'react'

type UsePromiseResult<T> = {
    isLoading: boolean
    error?: Error
    result?: T
}

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
