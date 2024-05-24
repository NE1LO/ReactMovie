import { useEffect, useState } from "react";
import { SearchBar } from "../../modules/SearchBar/SearchBar";
import { searchMovies } from "../../api/searchMovies.ts";
import { SearchList } from "../../modules/SearchList/SearchList.tsx";

export type List = {
  title: string;
  backdrop_path: string;
  id: number;
  overview: string;
};

export const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      if (!query) return;
      try {
        const response = await searchMovies(query);
        setList(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, [query]);

  return (
    <main>
      <SearchBar setQuery={(query) => setQuery(query)} />
      {list.length ? <SearchList list={list} query={query} /> : <div></div>}
    </main>
  );
};
