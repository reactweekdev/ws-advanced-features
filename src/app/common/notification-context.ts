import React, { useContext, Dispatch } from 'react'

export enum NotificationType {
    INFO = 'info',
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
}

export enum NotificationDuration {
    SHORT = 1500,
    LONG = 3000,
}

export const toastDefaults = {
    message: '',
    type: NotificationType.INFO,
    duration: NotificationDuration.LONG,
}

type NotificationContextType = {
    isLoading: boolean // show backdrop loader
    showLoading: Dispatch<any>
    showToast: (
        message: string,
        type?: NotificationType,
        duration?: NotificationDuration
    ) => void
}

export const NotificationContext = React.createContext<NotificationContextType>({
    isLoading: true, // show backdrop loader
    showLoading: () => {
        throw new Error('setLoading() not implemented')
    },
    showToast: () => {
        throw new Error('showToast() not implemented')
    },
})

export const useNotification = (): NotificationContextType => {
    return useContext(NotificationContext)
}
