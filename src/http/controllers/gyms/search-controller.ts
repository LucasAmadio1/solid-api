import { makeSearchGymsUseCase } from '@/use-cases/_factories/make-search-gyms-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'

export async function searchGymController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchGymQuerySchema = z.object({
    search: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { search, page } = searchGymQuerySchema.parse(request.query)

  const searchGymUseCase = makeSearchGymsUseCase()

  const { gyms } = await searchGymUseCase.execute({
    search,
    page,
  })

  return reply.status(200).send({
    gyms,
  })
}
