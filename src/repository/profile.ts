import { injectable } from "inversify";
import supabaseDb from "../config/db";
import { IProfile } from "../dto/profile";
import DefinedTableNames from "../utils/db-constants";
import { getPagination } from "../utils/pagination";

@injectable()
export class ProfileRepository {
  private tableName = DefinedTableNames.PROFILE;

  public async saveProfile(content: IProfile) {
    return supabaseDb.from(this.tableName).insert(content);
  }

  public async getAllProfile(query: { page: number; size: number }) {
    const { from, to } = getPagination(query.page, query.size);
    const profiles = await supabaseDb
      .from(this.tableName)
      .select(
        "id, surname, other_names, phone,alternative_phone, email, date_of_birth, age, tertiary_institution,discipline, class_of_degree, other_qualifications, nysc_status, current_location, relevant_work_experience, years_of_experience, preferred_location, second_choice_work_location, third_choice_work_location, linkedin_url, created_at"
      )
      .order("id", { ascending: true })
      .range(from, to);
    return profiles;
  }
}
