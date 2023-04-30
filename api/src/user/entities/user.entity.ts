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

  @BeforeInsert()
  async hasPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    // console.log("this.password => ", this.password, " password => ", password);
    // bcrypt.compare(password, this.password).then((op) => 
    // console.log("bcrypt output => ",op));
    return bcrypt.compare(password, this.password);
  }

  // @Column()
  // password_salt: string;

}
