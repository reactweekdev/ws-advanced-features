import { Typography } from '@material-ui/core'
import { memo } from 'react'

export const Title: React.FC = memo(({ children }) => (
    <Typography variant="h2">{children}</Typography>
))

export const BodyText: React.FC = memo(({ children }) => (
    <Typography>{children}</Typography>
))
