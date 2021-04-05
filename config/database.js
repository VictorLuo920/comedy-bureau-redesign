require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://wdjhufbambbhxllreyor.supabase.co";

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

const query = async () => {
  let { data, error } = await supabase.from("Open_Mics").select("EVENT_NAME");

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
};

query();
