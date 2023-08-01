import ReactLoading from "react-loading";
import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Input, DropDown } from "./styles";
import { Gray500 } from "../../colors";
import { IoCloseOutline } from "react-icons/io5";

import LogoImg from "../../assets/logo.png";

export default function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [responses, setResponses] = useState([]);

  const handleClear = () => {
    setLoading(false);
    setSearch("");
    setResponses([]);
  };

  const handleSearch = async () => {
    setLoading(true);

    try {
      const resp = await axios.get(
        `https://api.locationiq.com/v1/autocomplete?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${search}&limit=3`
      );
      setResponses(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) handleSearch();
  }, [search]);

  return (
    <Container>
      <div className="logo">
        <img src={LogoImg} alt="iWeather" />
        <p className="logo-text">iWeather</p>
      </div>
      <h1>
        Boas vindas ao <span>iWeather</span>
      </h1>
      <h4>Escolha um local para ver a previsão do tempo</h4>

      <Input>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar local"
        />
        {search && (
          <button disabled={loading} onClick={handleClear}>
            {loading ? (
              <ReactLoading
                color={Gray500}
                height={24}
                width={24}
                type="spin"
              />
            ) : (
              <IoCloseOutline size={22} />
            )}
          </button>
        )}
      </Input>

      {responses.length > 0 && (
        <DropDown>
          {responses?.map((item, index) => (
            <p
              key={index}
              className="option"
              onClick={() =>
                navigate(
                  `/previsao?lat=${item?.lat}&lon=${item?.lon}&location=${item?.address?.name}, ${item?.address?.state}`
                )
              }
            >
              {item?.address?.name}, {item?.address?.state}
            </p>
          ))}
        </DropDown>
      )}
    </Container>
  );
}
