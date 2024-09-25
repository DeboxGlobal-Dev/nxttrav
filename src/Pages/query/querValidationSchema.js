import * as yup from 'yup';

export const queryAddValidationSchema = yup.object().shape({
    BusinessType: yup.string().required("Required"),
    ClientType: yup.string().required("Required"),
    FromDate: yup.string().required("Required"),
    TotalNights: yup.string().required("Required"),
});
