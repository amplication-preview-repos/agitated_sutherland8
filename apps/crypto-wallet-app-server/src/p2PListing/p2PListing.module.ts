import { Module } from "@nestjs/common";
import { P2PListingModuleBase } from "./base/p2PListing.module.base";
import { P2PListingService } from "./p2PListing.service";
import { P2PListingController } from "./p2PListing.controller";
import { P2PListingResolver } from "./p2PListing.resolver";

@Module({
  imports: [P2PListingModuleBase],
  controllers: [P2PListingController],
  providers: [P2PListingService, P2PListingResolver],
  exports: [P2PListingService],
})
export class P2PListingModule {}
