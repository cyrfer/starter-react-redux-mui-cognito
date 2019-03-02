import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const FormField = ({inputType, fieldName, value, label, onChange, autoComplete, autoFocus, error}) => {
    return (
<FormControl margin="normal" required fullWidth error={error}>
    <InputLabel htmlFor={fieldName}>{label}</InputLabel>
    <Input type={inputType} value={value} onChange={onChange} name={fieldName} autoComplete={autoComplete} autoFocus={autoFocus} />
</FormControl>
    )
}

export default FormField;
