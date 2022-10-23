export interface IProfile {
  id?: string;
  surname: string;
  other_names: string;
  phone: string;
  alternative_phone?: string;
  email: string;
  date_of_birth: Date;
  age: number;
  tertiary_institution: string;
  discipline: string;
  class_of_degree: string;
  other_qualifications: string;
  nysc_status: string;
  current_location: string;
  relevant_work_experience: string;
  years_of_experience: number;
  preferred_location: string;
  second_choice_work_location: string;
  third_choice_work_location: string;
  linkedin_url: string;
}
