import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  dialing_code: string;

  @Column()
  phone_number: string;

  @Column()
  password_hash: string;

  @Column()
  password_salt: string;

  @Column()
  email_verified: boolean;

}
