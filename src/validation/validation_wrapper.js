import validation from '../validation/validation'

export default function validate(fieldName, value) {
  var formValues = {}
  formValues[fieldName] = value

  var formFields = {}
  formFields[fieldName] = validation[field]

  const result = validatejs(formValues, formFields)

  if (result) {
    return result[field][0]
  }

  return null
}