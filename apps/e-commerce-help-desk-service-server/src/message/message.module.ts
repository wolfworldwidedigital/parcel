import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MessageModuleBase } from "./base/message.module.base";
import { MessageService } from "./message.service";
import { MessageController } from "./message.controller";
import { MessageResolver } from "./message.resolver";

@Module({
  imports: [MessageModuleBase, forwardRef(() => AuthModule)],
  controllers: [MessageController],
  providers: [MessageService, MessageResolver],
  exports: [MessageService],
})
export class MessageModule {}
