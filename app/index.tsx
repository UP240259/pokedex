import PokemoCard from "@/components/PokemoCard";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.results);
      } else {
        console.log("Bard Request");
      }
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  return (
    <ScrollView>
      {result.map((item) => {
        return (
          <PokemoCard
            key={item.name}
            name={item.name}
            url={item.url}
          ></PokemoCard>
        );
      })}
    </ScrollView>
  );
}
