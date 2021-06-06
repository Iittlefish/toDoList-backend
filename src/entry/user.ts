import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true
    })
    uid: number;

    @Column({
        type: 'string'
    })
    account: string;

    @Column({
        type: 'string'
    })
    pwd: string;

    @Column({
        type: 'string'
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
