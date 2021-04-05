import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = "https://wdjhufbambbhxllreyor.supabase.co"
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjYwMjU2MCwiZXhwIjoxOTMyMTc4NTYwfQ.yHFJg6Q_bt0fA5XaPCnlDHB0A3t7om4gmxBu_NN2AkI'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function App() {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    async function query() {
      let { data, error } = await supabase.from("Open_Mics").select("*");

      if (error) {
        console.log(error);
        return;
      }
      setEventData(data)
      console.log(data)
    }

    query()
  }, []);

  return (
    <ChakraProvider>
      <Header />
      <VStack display="flex" m={2} maxW="75%">
        {eventData.map((event, i) => (
          <Card event={event} key={i} />
        ))}
      </VStack>
    </ChakraProvider>
  );
}

export default App;
