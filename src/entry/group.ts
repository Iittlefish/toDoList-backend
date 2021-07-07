import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Group {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true,
  })
  gid: number;

  @Column({
    type: 'text'
  })
  name: string;

  constructor(params: Group = {} as Group) {
    const {
      gid,
      name
    } = params
    this.gid = gid;
    this.name = name;
  }
}
