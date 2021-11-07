import { Typography } from '@material-ui/core'

export const Title: React.FC = ({ children }) => (
    <Typography variant="h2">{children}</Typography>
)

export const BodyText: React.FC = ({ children }) => <Typography>{children}</Typography>
