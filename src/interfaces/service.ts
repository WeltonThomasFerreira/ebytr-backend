export interface Service<Body> {
  validateBody(body: Body): Promise<null | Error>;
  validateStatus(status: string): Promise<null | Error>;
}
