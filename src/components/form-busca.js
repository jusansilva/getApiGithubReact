import React from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';







const validations = yup.object().shape({
    search: yup.string().required()
})


const FormBusca = ({ handleSubmit, InitialValues }) => {
    return (
        <>
            <Formik initialValues={InitialValues} onSubmit={handleSubmit} validationSchema={validations}>
                <Form className="form">
                    <Field className="search" name="search" type="text" placeholder="digite o nome do usuário" />
                    <ErrorMessage className="form-error" component="span" name="search" />
                </Form>
            </Formik>



        </>
    );
}

export default FormBusca;