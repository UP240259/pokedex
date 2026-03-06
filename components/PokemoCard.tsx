import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemoCard(props: PokemonCardProps) {
  const id = props.url.split("/").filter(Boolean).at(-1); //el at retorna el item localizado en
  console.log(id);

  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <Pressable
      onPress={() => router.push("/pokemonDetails")}
      style={({ pressed }) => [
        styles.Pressable,
        pressed && {
          opacity: 0.5,
        },
      ]}
    >
      <Image
        source={{ uri: pokemonImageURL }}
        style={{ width: 100, height: 100 }}
      ></Image>

      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Pressable: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#11c5c5",
  },
});
