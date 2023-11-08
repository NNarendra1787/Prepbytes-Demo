import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import EleCart from "../Cart/EleCart";

const ElevAppl = () => {
  // const {no, title,image, description, price} = item
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2002/user/check").then((res) => {
      setData(res.data);
      console.log("This the the data", res.data);
    });
  }, [data]);

  
  return (
    <div>
      <section>
        {data
          .filter((item) => item.no === 3)
          .map((item, ind) => (
            <div>
              <EleCart 
              no = {item.no}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              />
            </div>
          ))}
      </section>
    </div>
  );
};

export default ElevAppl;
