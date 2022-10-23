import Joi from "joi";

export const ProfileSchema = Joi.object({
  surname: Joi.string().required(),
  other_names: Joi.string().required(),
  phone: Joi.string().required(),
  alternative_phone: Joi.string().empty("").optional(),
  email: Joi.string().email().required(),
  date_of_birth: Joi.date().required(),
  age: Joi.number().required(),
  tertiary_institution: Joi.string().required(),
  discipline: Joi.string().required(),
  class_of_degree: Joi.string().required(),
  other_qualifications: Joi.string().empty("").optional(),
  nysc_status: Joi.string().required(),
  current_location: Joi.string().required(),
  relevant_work_experience: Joi.string().required(),
  years_of_experience: Joi.number().required(),
  preferred_location: Joi.string().required(),
  second_choice_work_location: Joi.string().required(),
  third_choice_work_location: Joi.string().required(),
  linkedin_url: Joi.string().required(),
});
