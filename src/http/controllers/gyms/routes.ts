import { FastifyInstance } from 'fastify'

import { verifyJWT } from '../../middlewares/verify-jwt.js'
import { searchGymController } from './search-controller.js'
import { nearbyGymController } from './nearby-controller.js'
import { createGymController } from './create-controller.js'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/gyms/search', searchGymController)
  app.get('/gyms/nearby', nearbyGymController)

  app.post('/gyms', createGymController)
}
