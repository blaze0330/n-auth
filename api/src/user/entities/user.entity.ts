import { BaseEntity, PrimaryColumn, Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({unique: true})
  email: string;

  @Column()
  dialing_code: string;

  @Column({unique: true})
  phone_number: string;

  @Column()
  password: string;

  @Column({default: false})
  email_verified: boolean;

  @Column({nullable: false})
  verification_code: string;

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

}
