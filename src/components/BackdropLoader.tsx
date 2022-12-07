import { FC, memo, useMemo } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
)

interface Props {
    isLoading: boolean
}

const BackdropLoader: FC<Props> = ({ isLoading }) => {
    const classes = useStyles()

    const customStyle = useMemo(
        () => (isLoading ? undefined : { color: 'red' }),
        [isLoading]
    )

    return (
        <Backdrop className={classes.backdrop} open={isLoading} style={customStyle}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default memo(BackdropLoader)
