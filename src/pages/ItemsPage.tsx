import React, { useState, useEffect } from "react";
import "./styles.css";
import useApi from "../apis/useApi";
import ItemList from "../components/ItemList";
import { IItems } from "../types/Items";

const ItemsPage: React.FC = () => {
  const [queryString, setqueryString] = useState<string>("");
  const [filteredItems, setfilteredItems] = useState<IItems[]>([]);
  const endPoint = "https://fakestoreapi.com/products";
  const { data, isLoading, error } = useApi(endPoint);

  useEffect(() => {
    setfilteredItems(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lowerCaseValue = queryString.toLowerCase();
    const filtered = data.filter((item) => {
      const productTitle = item.title.toLowerCase();
      const productDescription = item.description.toLowerCase();
      const combinedString = productTitle + productDescription;
      return combinedString.includes(lowerCaseValue);
    });
    setfilteredItems(filtered);
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setqueryString(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="enter a product"
          value={queryString}
          onChange={handleInputChange}
        />
        <button type="submit">search</button>
      </form>
      <div className="items__page">
        {filteredItems.map((item) => (
          <ItemList
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
