import { env } from '$env/dynamic/private'

export const load = async () => {
    return {
        env
    }
}