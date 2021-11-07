import { KEYS, storage } from 'lib/storage'
import { LoginResponse } from 'lib/types'

class AuthService {
    isAuthenticated(): boolean {
        return !!storage.load(KEYS.TOKEN)
    }

    login(): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const token = '232asd5765asd76fsa67df57sad6f'
                this.storeToken(token)

                resolve({
                    token,
                })
            }, 3000)
        })
    }

    private storeToken(token: string): void {
        //TODO: Add token validation before saving
        // Validation here

        //TODO: Save token
        localStorage.setItem(KEYS.TOKEN, token)
    }
}

export const authService = new AuthService()
