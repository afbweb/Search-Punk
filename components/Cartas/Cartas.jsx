import React, { useEffect, useState, useLayoutEffect } from "react";
import Carta from "./Carta";
import {
  Box,
  Grid,
  Flex,
  Button,
  Input,
  Wrap,
  WrapItem,
  Center,
  LinkOverlay,
  LinkBox,
  Select,
} from "@chakra-ui/react";
import JSONDATA from "/data.json";

// const cartas = JSONDATA;

const CartasNFT = () => {
  const [data, setData] = useState(JSONDATA);
  const [buscar, setBuscar] = useState("");
  const [orden, setOrden] = useState("ASC");
  const sorting = (col) => {
    if (orden === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrden("DSC");
    }
    if (orden === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrden("ASC");
    }
  };

  return (
    
    <>
      <Center paddingTop="20px">
        <Input
        
          variant="outline"
          placeholder="Buscar por numero de Cryptopunk"
          onChange={(e) => setBuscar(e.target.value)}
        />
      </Center>

      <Box display="grid" paddingTop="20px">
        <Button variant='outline'  size="lg" onClick={() => sorting("precio")}>
          Ordenar por precio
        </Button>
        <Button variant='outline' size="lg" onClick={() => sorting("titulo")}>
          Ordenar por nombre
        </Button>
      </Box>

      <Wrap spacing="5px" justify="center">
        {data
          .filter((e) => {
            if (buscar == "") {
              return e;
            } else if (
              e.titulo.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
            ) {
              return e;
            } 
          })
          .map((carta) => (
            <LinkBox key={carta.id}>
              <LinkOverlay href={carta.href}>
                <WrapItem >
                  <Center>
                    <Carta carta={carta} />
                  </Center>
                </WrapItem>
              </LinkOverlay>
            </LinkBox>
          ))}
      </Wrap>
    </>
  );
};

export default CartasNFT;



// .filter((e) => {
//   if (buscar == "") {
//     return e;
//   } else if (
//     e.titulo.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
//   ) {
//     return e;
//   } else (
//     "No"
//   )
// })