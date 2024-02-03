import React, { useState  } from "react";
import MyContext from "../../MyContext";
import { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MoshinaQoshish = () => {
  const { setCars } = useContext(MyContext);
  const [rusumi, setRusumi] = useState("");
  const [raqami, setRaqami] = useState("");
  const [prisep, setPrisep] = useState("");
  const [prisepRaqami, setPrisepRaqami] = useState("");
  const [photo, setPhoto] = useState();

  const handleClick = async () => {
    // console.log(rusumi,raqami,prisep,prisepRaqami,photo);
    const info = {rusumi,raqami,prisep,prisepRaqami}

    const res = await fetch("https://Depoapi.pythonanywhere.com/api/v1/car/cars",
    {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(info),
    }
    );
    const data = await res.json();
    setCars(data);
    console.log(data);


  };

  return (
    <>
      <Header />
      <div className="moshinaqoshish">
        <form>
          {/* <input
            type="file"
            accept="image/*"
            name="file"
            id="file"
            className="inputfile"
            // onChange={(e)=> setPhoto(e.target.value)}
            required
          />
          <label htmlFor="file">Ustiga bosing va Moshinaning rasmi</label> */}
          <input type="text" 
          placeholder="Avtomobil rusumi"
          onChange={(e)=> setRusumi(e.target.value)} required />
          <input
            type="text"
            placeholder="Avtomobil raqami"
            onChange={(e)=> setRaqami(e.target.value)}
            required
            maxLength={10}
          />
          <input type="text" placeholder="Prisep rusumi"
          onChange={(e)=> setPrisep(e.target.value)} required />
          <input
            type="text"
            placeholder="Prisep raqami"
            onChange={(e)=> setPrisepRaqami(e.target.value)}
            required
            maxLength={10}
          />
          <input type="text" placeholder="Bosh haydovchi" required />
          <button onClick={handleClick}>Саклаш</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MoshinaQoshish;
