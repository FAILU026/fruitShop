import React,{useState} from "react";
import Divider from "./Divider";
import VegCard from "./VegCard";

const SeasonSpecials = () => {
  const [vegtables,setVegetables] = useState([
    {
      id: 2,
      image: "f2",
      name: "Orange",
      price: 100,
    },
    {
      id: 4,
      image: "f4",
      name: "Green Grapes",
      price: 100,
    },
    {
      id: 5,
      image: "f5",
      name: "lemon",
      price: 150,
    },
  ]);
  return (
    <section className="w-5/6 mx-auto my-10">
      <Divider title={'Season Specials'}/>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10">
        {vegtables.map((veg) => {
          return <VegCard key={veg.id} veg={veg} />;
        })}
      </div>
    </section>
  );
};

export default SeasonSpecials;