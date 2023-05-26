// src/graphql/queries.js

const newLocal = `
  mutation SubmitForm($input: FormInput!) {
    submitForm(input: $input) {
      success
      message
    }
  };

`;
// ...

export const SUBMIT_FORM = newLocal

const newLocal_1 = `
  query ValidateFormInputs($input: FormInput!) {
    validateFormInputs(input: $input) {
      field
      message
    }
  }
`;
// src/graphql/queries.js

// ...

export const VALIDATE_FORM_INPUTS = newLocal_1
