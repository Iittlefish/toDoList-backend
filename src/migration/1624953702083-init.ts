import { MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey } from "typeorm";

export class init1624953702083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await this.createTable(queryRunner);
        await this.createKeyAndIndices(queryRunner)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await this.dropTables(queryRunner)
    }

    private async createTable(query: QueryRunner): Promise<void> {
        // Group
        await query.createTable(new Table({
            name: 'group',
            columns: [
                { name: 'gid', type: 'int', isPrimary: true },
                { name: 'name', type: 'string' }
            ]
        }), true);
        // ToDo
        await query.createTable(new Table({
            name: 'todo',
            columns: [
                { name: 'tid', type: 'int', unsigned: true, isPrimary: true },
                { name: 'uid', type: 'int' },
                { name: 'gid', type: 'string' },
                { name: 'description', type: 'text' }
            ]
        }), true);
        // User
        await query.createTable(new Table({
            name: 'user',
            columns: [
                { name: 'uid', type: 'int', unsigned: true, isPrimary: true },
                { name: 'account', type: 'string' },
                { name: 'pwd', type: 'string' },
                { name: 'isAuth', type: 'boolean' }
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

        // Todo
        await query.createIndices('todo', [
            new TableIndex({
                name: 'tid', columnNames: ['tid']
            }),
            new TableIndex({
                name: 'uid_fk_idx', columnNames: ['uid']
            }),
            new TableIndex({
                name: 'gid_fk_idx', columnNames: ['gid']
            })
        ])
        await query.createForeignKeys('todo', [
            new TableForeignKey({
                name: 'uid_fk', columnNames: ['uid'], referencedTableName: 'user', referencedColumnNames: ['uid']
            }),
            new TableForeignKey({
                name: 'gid_fk', columnNames: ['gid'], referencedTableName: 'group', referencedColumnNames: ['gid']
            })
        ])

        // User
        await query.createIndices('user', [
            new TableIndex({
                name: 'gid_idx', columnNames: ['gid']
            })
        ])

    }

    private async dropTables(query: QueryRunner): Promise<void> {
        await query.dropTable('query', true, true, true);
        await query.dropTable('todo', true, true, true);
        await query.dropTable('user', true, true, true);
    }

}
