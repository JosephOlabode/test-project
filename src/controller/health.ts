import { controller, httpGet } from "inversify-express-utils";
import { Request, Response } from "express";

@controller("/health")
export class HealthController {
  @httpGet("/")
  public basicCheck(req: Request, res: Response) {
    return res.status(200).json({
      status: "success",
      message: "Basic Health Check Route Working.",
      data: {},
    });
  }
}
