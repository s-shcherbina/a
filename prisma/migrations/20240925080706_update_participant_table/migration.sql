/*
  Warnings:

  - The values [foundMySelf] on the enum `SourceEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SourceEnum_new" AS ENUM ('socialMedia', 'friends', 'foundMyself');
ALTER TABLE "participants" ALTER COLUMN "source" DROP DEFAULT;
ALTER TABLE "participants" ALTER COLUMN "source" TYPE "SourceEnum_new" USING ("source"::text::"SourceEnum_new");
ALTER TYPE "SourceEnum" RENAME TO "SourceEnum_old";
ALTER TYPE "SourceEnum_new" RENAME TO "SourceEnum";
DROP TYPE "SourceEnum_old";
ALTER TABLE "participants" ALTER COLUMN "source" SET DEFAULT 'socialMedia';
COMMIT;
