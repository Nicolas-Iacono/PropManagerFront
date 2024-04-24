import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('usa un correo valido')
    .required('Este campo es requerido'),
  contrasenia: Yup.string()
    .required('Requerido')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export default validationSchema;
