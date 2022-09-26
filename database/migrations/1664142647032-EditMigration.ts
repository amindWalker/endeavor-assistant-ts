import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from "typeorm";

// NOTE: use this to update or fix mistakes instead of rollback with migration:revert
export class EditMigration1664142647032 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tasks", "service");
        await queryRunner.addColumn(
            "tasks",
            new TableColumn({
                name: "service_id",
                type: "uuid",
                isNullable: true,
            })
        );

        await queryRunner.createForeignKey(
            "tasks",
            new TableForeignKey({
                name: "ServiceForeignKey",
                columnNames: ["service_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tasks", "ServiceForeignKey");
        await queryRunner.dropColumn("tasks", "service_id");
        await queryRunner.addColumn("tasks", new TableColumn({
            name: "service",
            type: "varchar"
        }));
    }
}
