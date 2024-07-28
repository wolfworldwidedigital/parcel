import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmailModuleBase } from "./base/email.module.base";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { EmailResolver } from "./email.resolver";

@Module({
  imports: [EmailModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmailController],
  providers: [EmailService, EmailResolver],
  exports: [EmailService],
})
export class EmailModule {}
