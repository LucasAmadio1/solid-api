import { FastifyInstance } from 'fastify'

import { verifyJWT } from '../../middlewares/verify-jwt.js'
import { createCheckInController } from './create-controller.js'
import { validateCheckInController } from './validate-controller.js'
import { historyCheckInController } from './history-controller.js'
import { metricsCheckInController } from './metrics-controller.js'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/gyms/:gymId/check-ins', createCheckInController)
  app.patch('/check-ins/:checkInId/validate', validateCheckInController)

  app.get('/check-ins/history', historyCheckInController)
  app.get('/check-ins/metrics', metricsCheckInController)
}
