import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMigrationTask1664043810197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "varchar",
                        generationStrategy: "uuid"
                    },
                    {
                        name: "service",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "date",
                        type: "timestamp with time zone",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
