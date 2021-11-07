import { TextField, TextFieldProps } from '@material-ui/core'

interface Props {}

export const InputField: React.FC<Props & TextFieldProps> = (props) => (
    <TextField
        id={props.name}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus
        {...props}
    />
)
