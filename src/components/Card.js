import { Box, Text, Badge } from "@chakra-ui/react";

const Card = ({ event }) => {
  const { fields } = event;
  console.log(fields);

  return (
    <Box m={2} borderWidth="1px" w="100%">
      <Text
        textTransform="uppercase"
        fontSize="lg"
        fontWeight="bold"
        color="red"
      >
        {fields['EVENT NAME']}
      </Text>
      <Text textTransform="uppercase" fontSize="sm" fontWeight="bold">
        {fields['START TIME']}
      </Text>
      <Text
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="bold"
        color="red"
      >
        {fields['VENUE']}
      </Text>
      <Badge colorScheme="red">{fields['EVENT COST MICS'] !== '$0' ? fields['EVENT COST MICS'] : 'Free'}</Badge>
      <Text>{fields['EVENT DESCRIPTION']}</Text>
    </Box>
  );
};

export default Card;
