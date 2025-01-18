import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { P2PListingService } from "./p2PListing.service";
import { P2PListingControllerBase } from "./base/p2PListing.controller.base";

@swagger.ApiTags("p2PListings")
@common.Controller("p2PListings")
export class P2PListingController extends P2PListingControllerBase {
  constructor(protected readonly service: P2PListingService) {
    super(service);
  }
}
