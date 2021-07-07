import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true
  })
  tid: number;

  @Column({
    type: 'int',
    unsigned: true
  })
  uid: number;

  @Column({
    type: 'int',
    unsigned: true
  })
  gid: number;

  @Column({
    type: 'text'
  })
  description: string;

  @Column({
    type: 'boolean'
  })
  isFinish: boolean;

  constructor(params: ToDo = {} as ToDo) {
    const {
      tid,
      uid,
      gid,
      description,
      isFinish
    } = params
    this.tid = tid;
    this.uid = uid;
    this.gid = gid;
    this.description = description;
    this.isFinish = isFinish;
  }

}
