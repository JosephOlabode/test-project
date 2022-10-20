import "reflect-metadata";
import TYPES from "./types";
import { Container } from "inversify";
import { HealthController } from "../controller/health";
import { ProfileController } from "../controller/profile";
import { ProfileRepository } from "../repository/profile";

const container = new Container();

//controller
container
  .bind<HealthController>(TYPES.HealthController)
  .to(HealthController)
  .inSingletonScope();
container
  .bind<ProfileController>(TYPES.ProfileController)
  .to(ProfileController)
  .inSingletonScope();

// repository
container
  .bind<ProfileRepository>(TYPES.ProfileRepository)
  .to(ProfileRepository)
  .inSingletonScope();

export default container;
