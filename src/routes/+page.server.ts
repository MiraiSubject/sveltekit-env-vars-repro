import { env } from '$env/dynamic/private'
import { env as pubEnv } from '$env/dynamic/public';

export const load = async () => {
    return {
        env,
        pubEnv
    }
}