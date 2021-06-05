import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class ToDo {
    @PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true
    })
    tid: number;

    @Column({
        type: 'int'
    })
    uid: string;

    @Column({
        type: 'int'
    })
    gid: string;

    @Column({
        type: 'text'
    })
    description: string;

    constructor(params: ToDo = {} as ToDo) {
        const {
            tid,
            uid,
            gid,
            description,
        } = params
        this.tid = tid;
        this.uid = uid;
        this.gid = gid;
        this.description = description;
    }

}