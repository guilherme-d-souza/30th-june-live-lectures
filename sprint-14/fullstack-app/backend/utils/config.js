import "dotenv/config";

const CONFIG = {
  PORT: process.env.PORT || 3001,
  JWT_SECRET: process.env.JWT_SECRET || "a_horse_runs_fast",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/auth_example",
};

export default CONFIG;
