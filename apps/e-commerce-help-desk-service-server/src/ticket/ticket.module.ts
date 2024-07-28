import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketModuleBase } from "./base/ticket.module.base";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { TicketResolver } from "./ticket.resolver";

@Module({
  imports: [TicketModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketController],
  providers: [TicketService, TicketResolver],
  exports: [TicketService],
})
export class TicketModule {}
