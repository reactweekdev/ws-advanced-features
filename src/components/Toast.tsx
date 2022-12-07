import React, { memo } from 'react'

import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar'
import Alert, { Color } from '@material-ui/lab/Alert'

interface Props {
    open: boolean
    autoHideDuration?: number
    onClose: () => void
    severity: Color
    message: string
}

const CoreToast: React.FC<Props & SnackbarProps> = ({
    open,
    autoHideDuration = 3000,
    onClose,
    severity,
    message,
    ...snackbarProps
}) => {
    return (
        <Snackbar
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            {...snackbarProps}>
            <Alert severity={severity} onClose={onClose}>
                {message}
            </Alert>
        </Snackbar>
    )
}

const Toast = memo(CoreToast, (prevProps, nextProps) => {
    return true
})

export { Toast }

export default memo(Toast)