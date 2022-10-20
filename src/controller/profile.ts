import { controller, httpGet, httpPost } from "inversify-express-utils";
import { Request, Response } from "express";
import TYPES from "../config/types";
import { inject } from "inversify";
import { IProfile } from "../dto/profile";
import { validateRequest } from "../utils/validation";
import { ProfileSchema } from "../validation/profile";
import { ProfileRepository } from "../repository/profile";

@controller("/profile")
export class ProfileController {
  @inject(TYPES.ProfileRepository)
  private readonly _profileRepo!: ProfileRepository;

  @httpPost("/save")
  public async saveProfile(req: Request, res: Response) {
    const validationError = await validateRequest(req.body, ProfileSchema);
    if (validationError) {
      return res
        .status(422)
        .send({ status: false, message: validationError, data: {} });
    }
    const profile: IProfile = req.body;
    const { data, error } = await this._profileRepo.saveProfile(profile);
    if (error) {
      res
        .status(422)
        .json({ status: "error", message: error.message, data: {} });
    }
    if (data) {
      res.status(200).json({
        status: "success",
        message: "Profile saved successfully",
        data: data,
      });
    }
  }

  @httpGet("/all")
  public async getAllProfile(req: Request, res: Response) {
    const pageNum = req.query.page as string;
    const pageSize = req.query.size as string;
    const page = parseInt(pageNum);
    const size = parseInt(pageSize);
    const query = { page: 1, size: 10 };
    if (typeof page == "number" && page > 0) {
      query.page = page;
    }
    if (typeof size == "number" && size > 0) query.size = size;
    const { data, error } = await this._profileRepo.getAllProfile(query);
    if (error) {
      res
        .status(422)
        .json({ status: "error", message: error.message, data: {} });
    }
    if (data) {
      return res.status(200).json({
        status: "success",
        message: "Profile fetched successfully",
        data: data,
      });
    }
  }
}
