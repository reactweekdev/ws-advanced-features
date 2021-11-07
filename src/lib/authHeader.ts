import { storage, KEYS } from 'lib/storage'

export const authHeader = () => {
    const token = storage.load(KEYS.TOKEN)

    const commonHeaders = {
        'Content-Type': 'application/json',
    }

    return token
        ? {
              ...commonHeaders,
              Authorization: `Bearer ${token}`,
          }
        : commonHeaders
}
