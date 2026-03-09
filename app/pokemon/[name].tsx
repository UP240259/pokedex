import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

interface pokemonData {
  url: string;
  habilities: any[];
}

export default function PokemonDetailsScreen() {
  const [pokemonData, setPokemonData] = useState<pokemonData | null>(null);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      } else {
        console.log("Bard Request");
      }
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  const params = useLocalSearchParams();

  return (
    <ScrollView>
      <Text>{params.name}</Text>
      <Text>{JSON.stringify(pokemonData)}</Text>
    </ScrollView>
  );
}
