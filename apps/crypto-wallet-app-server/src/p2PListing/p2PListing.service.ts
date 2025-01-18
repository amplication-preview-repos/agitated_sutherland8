import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { P2PListingServiceBase } from "./base/p2PListing.service.base";

@Injectable()
export class P2PListingService extends P2PListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
