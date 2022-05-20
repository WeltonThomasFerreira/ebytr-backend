export interface Model<Entity> {
  create(args: Entity): Promise<Entity>;
  read(args?: string): Promise<Entity[]>;
  readOne(args: string): Promise<Entity | null>;
  update(arg1: string, arg2: object): Promise<Entity | null>;
  delete(args: string): Promise<Entity | null>;
}
