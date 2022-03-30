import React from "react";
import { Box, Badge, Img, Icon } from "@chakra-ui/react";

const Carta = ( {carta} ) => {
  return (
    <Box
      marginTop="20px"
      maxW="240"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      flex="grow"
      border="1px solid rgb(229, 232, 235)"
    >
      <Img src={carta.image} />

      <Box p="0"></Box>
      <Box
        p="2"
        border-bottom-left-radius="10px"
        border-bottom-right-radius="10px"
        background="linear-gradient(rgba(229, 232, 235, 0.392) 0%, rgb(255, 255, 255) 20%)"
        display="flex"
        alignItems="baseline"
      >
        {carta.titulo}

        <Box marginLeft="50px" >
          <Img display="inline"
            width="10px"
            height="12px"
            src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          />
          {carta.precio}
        </Box>
      </Box>
    </Box>
  );
};

export default Carta;
