import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Field, Form, Formik} from "formik";

function SearchJob() {
    const [totalReactPackages, setTotalReactPackages] = useState('');

    useEffect(() => {
        axios.get('https://api.rabota.ua/vacancy/search?parentId=1&page=0&count=100')
            .then(response => setTotalReactPackages(response.data.documents));
    }, []);
return  (
    <div>
        <Formik
            initialValues={{term: ''}}
            /*validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}*/
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
    )
}

export default SearchJob;