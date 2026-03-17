const db = require("./connect");

const testConnection = async () => {
  try {
    console.log("✅ Success! Connected to Postgres.");

    const res = await db.query("SELECT NOW()");
    console.log("Server time:", res.rows[0].now);
  } catch (err) {
    console.error("❌ Connection error:", err.stack);
  } finally {
    await db.end();
    console.log("🛑 Pool closed. Process exiting...");
  }
};

testConnection();
