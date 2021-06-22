import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
  @PrimaryColumn()
  readonly id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  admin: boolean;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
