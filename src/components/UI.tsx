import { Typography, TypographyProps } from '@material-ui/core'
import React, { memo } from 'react'

interface TypoTitleProps {
    /**
     * this is child
     */
    children: React.ReactNode
}

type TitleProps = TypoTitleProps & TypographyProps

export const TypoTitle = ({ children, ...typoProps }: TitleProps) => (
    <Typography variant="h2" {...typoProps}>
        {children}
    </Typography>
)

export const Title: React.FC = memo(({ children }) => (
    <Typography variant="h2">{children}</Typography>
))

export const BodyText: React.FC = memo(({ children }) => (
    <Typography>{children}</Typography>
))
