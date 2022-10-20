import Joi from "joi";

export async function validateRequest(
  requestBody: any,
  validationSchema: Joi.Schema
) {
  const error = validationSchema.validate(requestBody);

  if (error?.error) {
    return Promise.resolve(error.error?.details[0].message);
  }
}
