import * as graphql from "@nestjs/graphql";
import { P2PListingResolverBase } from "./base/p2PListing.resolver.base";
import { P2PListing } from "./base/P2PListing";
import { P2PListingService } from "./p2PListing.service";

@graphql.Resolver(() => P2PListing)
export class P2PListingResolver extends P2PListingResolverBase {
  constructor(protected readonly service: P2PListingService) {
    super(service);
  }
}
