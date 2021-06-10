-- Create Database "pet-hotel"

CREATE TABLE "pets" (
    "id" serial PRIMARY KEY,
    "name" varchar(255) NOT NULL,
	"breed" varchar(255) NOT NULL,
	"color" varchar(255) NOT NULL,
	"checked" BOOLEAN DEFAULT FALSE,
	"owner_id" integer REFERENCES "pets"
);

CREATE TABLE "owner" (
    "id" serial PRIMARY KEY,
	"owner_name" varchar(255) NOT NULL
);
