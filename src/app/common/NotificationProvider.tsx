import BackdropLoader from 'components/BackdropLoader'
import Toast from 'components/Toast'
import React, { useState, useCallback, useMemo } from 'react'

import {
    NotificationContext,
    NotificationType,
    NotificationDuration,
    toastDefaults,
} from './notification-context'

type ToastInfo = {
    message: string
    type: NotificationType
    duration: NotificationDuration
}

const NotificationProvider = (props: any) => {
    const [isLoading, showLoading] = useState<boolean>(false)
    const [toast, setToastInfo] = useState<ToastInfo>(toastDefaults)

    const showToast = (
        message: string,
        type: NotificationType = NotificationType.INFO,
        duration: NotificationDuration = NotificationDuration.LONG
    ) => {
        setToastInfo({ message, type, duration })

        setTimeout(() => {
            setToastInfo(toastDefaults)
        }, 3000)
    }

    const handleToastClose = useCallback(() => setToastInfo(toastDefaults), [])

    const shouldDisplayToast = !!toast.message.length

    const showToastCb = useCallback(showToast, [])

    const providerValue = useMemo(
        () => ({
            isLoading,
            showLoading,
            showToast: showToastCb,
        }),
        [isLoading, showToastCb]
    )

    return (
        <NotificationContext.Provider value={providerValue}>
            <Toast
                open={shouldDisplayToast}
                onClose={handleToastClose}
                severity={toast.type}
                message={toast.message}
            />
            {/* <ErrorBoundary>{props.children}</ErrorBoundary> */}
            {props.children}
            <BackdropLoader isLoading={isLoading} />
        </NotificationContext.Provider>
    )
}

export default NotificationProvider
