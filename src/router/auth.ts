import express from 'express'

import { register } from '../controller/auth'
import router from 'router'

export default (router: express.Router) => {
  router.post('/auth/register', register)
}
