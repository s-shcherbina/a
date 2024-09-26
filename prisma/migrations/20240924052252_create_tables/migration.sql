-- CreateEnum
CREATE TYPE "SourceEnum" AS ENUM ('socialMedia', 'friends', 'foundMySelf');

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "event_date" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "source" "SourceEnum" NOT NULL DEFAULT 'socialMedia',
    "eventId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
