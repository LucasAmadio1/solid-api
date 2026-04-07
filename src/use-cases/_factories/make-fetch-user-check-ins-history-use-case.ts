import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FecthUserCheckInsHistoryUseCase } from '../check-ins/fetch-user-check-ins-history-use-case'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const fetchUserCheckInsHistoryUseCase = new FecthUserCheckInsHistoryUseCase(
    checkInsRepository,
  )

  return fetchUserCheckInsHistoryUseCase
}
