import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true
  })
  uid: number;

  @Column({
    type: 'text'
  })
  account: string;

  @Column({
    type: 'text'
  })
  pwd: string;

  @Column({
    type: 'boolean'
  })
  isAuth: boolean;

  constructor(params: User = {} as User) {
    const {
      uid,
      account,
      pwd,
      isAuth
    } = params
    this.uid = uid;
    this.account = account;
    this.pwd = pwd;
    this.isAuth = isAuth;
  }

}
