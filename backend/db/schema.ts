import {
  pgTable,
  serial,
  timestamp,
  integer,
  varchar,
  boolean,
  doublePrecision,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  u_id: serial("u_id").primaryKey(),
  u_name: varchar("u_name", { length: 255 }).notNull(),
  u_email: varchar("u_email", { length: 255 }).notNull(),
  u_password: varchar("u_password", { length: 255 }).notNull(),
});

export const stripsTable = pgTable("strips_table", {
  s_id: serial("s_id").primaryKey(),
  s_url: varchar("s_url", { length: 1000 }).notNull(),
  u_id: integer("u_id").references(() => usersTable.u_id).notNull(),
  s_brand: varchar("s_brand", { length: 255 }).notNull(),
  s_date: timestamp("s_date").defaultNow().notNull(),
  s_location: varchar("s_location", { length: 255 }).notNull(),
  s_ph: doublePrecision("s_ph").notNull(),
});
