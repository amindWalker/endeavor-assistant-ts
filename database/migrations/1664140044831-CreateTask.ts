import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTask1664140044831 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "uuid",
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "service",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "date",
                        type: "timestamp with time zone",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks");
    }
}
