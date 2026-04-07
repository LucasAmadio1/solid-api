import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileUseCase } from '../users/get-user-profile-use-case'

export function makeGetUserProfileUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const getUserProfileUseCase = new GetUserProfileUseCase(prismaUsersRepository)

  return getUserProfileUseCase
}
