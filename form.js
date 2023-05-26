
// src/components/Form.js

import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_FORM_FIELDS, SUBMIT_FORM } from '../graphql/queries';

function Form() {
    const { loading, error, data } = useQuery(GET_FORM_FIELDS);
    const [formValues, setFormValues] = useState({});
    const [submitForm] = useMutation(SUBMIT_FORM);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm({ variables: { input: formValues } });
    };

    if (loading)
        return <p>Loading...</p>;
    if (error)
        return <p>Error: {error.message}</p>;

    // Render form fields using data from the GraphQL query
    return (
        <form onSubmit={handleSubmit}>
            {/* Render form fields and handle input changes */}
        </form>
    );
}

export default Form;

// src/components/Form.js

import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_FORM_FIELDS, SUBMIT_FORM } from '../graphql/queries';
import validator from 'validator';
import { Form } from './Form.1';


