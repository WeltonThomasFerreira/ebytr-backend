export interface Service<Body> {
  validateBody(body: Body): Promise<null | Error>;
}
