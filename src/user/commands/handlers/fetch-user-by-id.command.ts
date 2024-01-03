import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FetchUserByIdCommand } from "../fetch-user-by-id.command";

@CommandHandler(FetchUserByIdCommand)
class FetchUserByIdHandler implements ICommandHandler<FetchUserByIdCommand>{
  async execute(command: FetchUserByIdCommand): Promise<any> {
    return null;
  }
}