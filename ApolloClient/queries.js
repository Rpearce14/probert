// src/graphql/queries.js

// ...

export const SUBMIT_FORM = gqlnewFunction()

function newFunction() {
    return `
  mutation SubmitForm($input: FormInput!) {
    submitForm(input: $input) {
      success
      message
    }
  };`;
}

// src/graphql/queries.js

// ...

export const VALIDATE_FORM_INPUTS = gqlnewFunction_1()

function newFunction_1() {
    return `
  query ValidateFormInputs($input: FormInput!) {
    validateFormInputs(input: $input) {
      field
      message
    }
  }
`;
}

