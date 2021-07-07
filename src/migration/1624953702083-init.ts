import { MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey } from "typeorm";

export class init1624953702083 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.createTables(queryRunner);
    await this.createKeyAndIndices(queryRunner)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.dropTables(queryRunner)
  }

  private async createTables(query: QueryRunner): Promise<void> {
    // Group
    await query.createTable(new Table({
      name: 'group',
      columns: [
        { name: 'gid', type: 'int', unsigned: true, isPrimary: true },
        { name: 'name', type: 'text' }
      ]
    }), true);
    // User
    await query.createTable(new Table({
      name: 'user',
      columns: [
        { name: 'uid', type: 'int', unsigned: true, isPrimary: true },
        { name: 'account', type: 'text' },
        { name: 'pwd', type: 'text' },
        { name: 'isAuth', type: 'boolean' }
      ]
    }), true);
    // ToDo
    await query.createTable(new Table({
      name: 'todo',
      columns: [
        { name: 'tid', type: 'int', unsigned: true, isPrimary: true },
        { name: 'uid', type: 'int', unsigned: true },
        { name: 'gid', type: 'int', unsigned: true  },
        { name: 'description', type: 'text' },
        { name: 'isFinish', type: 'boolean' }
      ]
    }), true);


  }

  private async createKeyAndIndices(query: QueryRunner): Promise<void> {
    // Group
    await query.createIndices('group', [
      new TableIndex({
        name: 'gid_idx', columnNames: ['gid']
      })
    ])
    // User
    await query.createIndices('user', [
      new TableIndex({
        name: 'uid_idx', columnNames: ['uid']
      })
    ])

    // Todo
    await query.createIndices('todo', [
      new TableIndex({
        name: 'tid', columnNames: ['tid']
      }),
      new TableIndex({
        name: 'todo_fk_user_idx', columnNames: ['uid']
      }),
      new TableIndex({
        name: 'todo_fk_group_idx', columnNames: ['gid']
      })
    ])
    await query.createForeignKeys('todo', [
      new TableForeignKey({
        name: 'todo_fk_user', columnNames: ['uid'], referencedTableName: 'user', referencedColumnNames: ['uid']
      }),
      new TableForeignKey({
        name: 'todo_fk_group', columnNames: ['gid'], referencedTableName: 'group', referencedColumnNames: ['gid']
      })
    ])



  }

  private async dropTables(query: QueryRunner): Promise<void> {
    await query.dropTable('query', true, true, true);
    await query.dropTable('todo', true, true, true);
    await query.dropTable('user', true, true, true);
  }

}
