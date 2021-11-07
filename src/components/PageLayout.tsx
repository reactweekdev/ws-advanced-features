import { memo, FC, ReactNode } from 'react'

import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'

interface Props {
    titleComponent?: ReactNode
    headerAction?: ReactNode
    children?: ReactNode
}

const PageLayout: FC<Props> = ({ titleComponent, children }) => (
    <Container maxWidth="lg">
        <Box py={4}>
            {titleComponent}
            {children}
        </Box>
    </Container>
)

export default PageLayout
