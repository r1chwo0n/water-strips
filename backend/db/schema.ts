import {
  pgTable,
  timestamp,
  uuid,
  varchar,
  boolean,
  integer,
  doublePrecision,
} from "drizzle-orm/pg-core";

// export const todoTable = pgTable("todo", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   todoText: varchar("todo_text", { length: 255 }).notNull(),
//   isDone: boolean("is_done").default(false),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
//   updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
//     () => new Date()
//   ),
// });


//ต้องแก้อยู๋
export const stripsTable = pgTable("stripsTable", {
  s_id: uuid("s_id").primaryKey().defaultRandom(),
  s_url: varchar("s_url", { length: 255 }).primaryKey().notNull(),
  u_id: integer("u_id").references(() => usersTable.u_id),
  s_brand: varchar("s_brand", { length: 255 }).notNull(),
  s_date: timestamp("s_date").defaultNow().notNull(),
  s_location: varchar("s_location", {length: 255}).notNull(),
  s_ph: doublePrecision("s_ph").notNull(),
});



export const usersTable = pgTable("usersTable", {
  u_id: uuid("u_id").primaryKey().defaultRandom(),
  u_name: varchar("u_name", { length: 255 }).notNull(),
  u_email: varchar("u_email", { length: 255 }).notNull(),
  u_password: varchar("u_password", { length: 255 }).notNull(),
});