
// src/components/Form.js

import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_FORM_FIELDS, SUBMIT_FORM } from '../graphql/queries';

import validator from 'validator';

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



const Form = () => {
  // ...

  function validate() {
        const errors = {};

        // Perform validation logic for each form field
        return errors;
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      submitForm({ variables: { input: formValues } });
    } else {
      // Handle validation errors
    }
  };

  // ...
};

// src/components/Form.js

import { useQuery, useMutation, useApolloClient } from '@apollo/client';

const Form = () => {
  const client = useApolloClient();

  // ...
};

// src/components/Form.js

const Form = () => {
    // ...
  
    const formFieldsData = client.readQuery({ query: GET_FORM_FIELDS });
    const formErrorsData = client.readFragment({
      id: 'FormErrors',
      fragment: gql`
        fragment FormErrorsFragment on Form {
          errors
        }
      `,
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    // Render form fields using formFieldsData and display formErrorsData
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Render form fields and handle input changes */}
      </form>
    );
  };
  
  
    client.writeQuery({ query: GET_FORM_FIELDS, data: updatedFormFieldsData });
  ;
  
  const updateValidationErrors = (errors) => {
    client.writeFragment({
      id: 'FormErrors',
      fragment: gql`
        fragment FormErrorsFragment on Form {
          errors
        }
      `,
      data: {
        __typename: 'Form',
        errors,
      },
    });
  };
  
 // src/components/Form.js

import { useQuery, useMutation, useApolloClient, useSubscription } from '@apollo/client';
import { FORM_SUBSCRIPTION } from '../graphql/subscriptions';

const Form = () => {
  // ...

  const { data: subscriptionData, error: subscriptionError } = useSubscription(FORM_SUBSCRIPTION);

  if (subscriptionError) {
    // Handle subscription errors
  }

  // Render form fields using formFieldsData and display formErrorsData

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields and handle input changes */}
    </form>
  );
};


