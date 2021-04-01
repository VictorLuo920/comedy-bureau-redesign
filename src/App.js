import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyrTjaaPo8M0knDd" }).base(
  "appuT5XmWM7rJZWgP"
);

const data = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    base("TCB_mics_calendar")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          setEventData(records);
          records.forEach(function (record) {
            console.log("Retrieved", record);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
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
