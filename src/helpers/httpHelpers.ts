import { Response } from '../interfaces'

export const ok = (data: unknown): Response => ({
  statusCode: 200,
  body: data
})

export const created = (data: unknown): Response => ({
  statusCode: 201,
  body: data
})

export const badRequest = (error: Error): Response => ({
  statusCode: 400,
  body: {
    error: error.message
  }
})

export const serverError = (error: Error): Response => ({
  statusCode: 500,
  body: {
    error: error.message
  }
})
