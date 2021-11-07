import { FC } from 'react'
import { Box, Typography } from '@material-ui/core'

interface Props {
    title: string
}

const EmptyView: FC<Props> = ({ title, children }) => (
    <Box display="flex" justifyContent="center" p={8}>
        <Typography variant="h4">{title}</Typography>
        {children}
    </Box>
)

export default EmptyView
