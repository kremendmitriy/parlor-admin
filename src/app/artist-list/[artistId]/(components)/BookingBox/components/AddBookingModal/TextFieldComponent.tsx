import { TextFieldStyled } from './styles/modalStyled';

export const TextFieldComponent = ({ label, register, name, errors }: any) => (
  <TextFieldStyled
    label={label}
    variant="outlined"
    fullWidth
    {...register(name)}
    error={!!errors[name]}
    helperText={errors[name]?.message}
  />
);
