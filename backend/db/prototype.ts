import { dbClient, dbConn } from "@db/client";
import { usersTable, stripsTable } from "@db/schema";

// Insert multiple users
async function insertMultipleUsers() {
  await dbClient.insert(usersTable).values([
    { u_name: "Alice Smith", u_email: "alice.smith@example.com", u_password: "password123" },
    { u_name: "Bob Johnson", u_email: "bob.johnson@example.com", u_password: "password456" },
    { u_name: "Carol Williams", u_email: "carol.williams@example.com", u_password: "password789" },
    { u_name: "David Brown", u_email: "david.brown@example.com", u_password: "password012" },
    { u_name: "Emily Davis", u_email: "emily.davis@example.com", u_password: "password345" }
  ]);
  dbConn.end();
}

// Insert multiple strips
async function insertMultipleStrips() {
  // Fetch all users to get their IDs
//   const users = await dbClient.query.usersTable.findMany();
//   if (users.length === 0) {
//     console.error("No users found. Insert users first.");
//     dbConn.end();
//     return;
//   }

  // Insert multiple strips
  await dbClient.insert(stripsTable).values([
    {
      s_url: "https://example.com/strip1",
      u_id: 1,
      s_brand: "BrandA",
      s_date: new Date(),
      s_location: "Location1",
      s_ph: 7.2,
    },
    {
      s_url: "https://example.com/strip2",
      u_id: 1,
      s_brand: "BrandB",
      s_date: new Date(),
      s_location: "Location2",
      s_ph: 6.8,
    },
    {
      s_url: "https://example.com/strip3",
      u_id: 2,
      s_brand: "BrandC",
      s_date: new Date(),
      s_location: "Location3",
      s_ph: 7.5,
    },
    {
      s_url: "https://example.com/strip4",
      u_id: 2,
      s_brand: "BrandD",
      s_date: new Date(),
      s_location: "Location4",
      s_ph: 6.9,
    },
    {
      s_url: "https://example.com/strip5",
      u_id: 2,
      s_brand: "BrandE",
      s_date: new Date(),
      s_location: "Location5",
      s_ph: 7.1,
    }
  ]);
  dbConn.end();
}

// Call the functions to insert data
// insertMultipleUsers();
insertMultipleStrips();
