import ReactLoading from "react-loading";
import axios from "axios";
import moment from "moment";
import "moment/locale/pt-br";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Container,
  Widget,
  WeatherIcon,
  WidgetStats,
  WidgetPrevision,
  PrevisionIcon
} from "./styles";

import CloudyNight from "../../assets/icons/IconCloudyNight.svg";
import {
  PiThermometerSimpleLight,
  PiCloudRainLight,
  PiWindLight,
  PiDropLight,
  PiSunDimLight
} from "react-icons/pi";

import { Gray500 } from "../../colors";

export default function App() {
  const [loading, setLoading] = useState();
  const [currentData, setCurrentData] = useState();
  const [forecastData, setForecastData] = useState();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const lat = params.get("lat");
  const lon = params.get("lon");
  const locationData = params.get("location");

  const loadData = async () => {
    try {
      setLoading(true);
      const currentResp = await axios.get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${lat},${lon}&fields=temperature&units=metric&apikey=ru7Na28s330Ao4gv7XWFzAvvzUhvHen0`
      );
      setCurrentData(currentResp?.data);

      const forecastResp = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&fields=temperature&units=metric&timesteps=daily&apikey=ru7Na28s330Ao4gv7XWFzAvvzUhvHen0`
      );
      setForecastData(forecastResp?.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      {loading ? (
        <ReactLoading color={Gray500} height={50} width={50} type="spin" />
      ) : (
        <>
          <Widget>
            <div className="widget-header">
              <p className="city">{locationData || "Localização"}</p>
              <p className="date-time">
                {moment().format("dddd, DD [de] MMMM [de] YYYY")}
              </p>
            </div>

            <div className="widget-body">
              <div className="widget-info">
                <p className="now-temp">
                  {parseInt(currentData?.data?.values?.temperature) || 0}ºC
                </p>
                <p className="today-temp">
                  {parseInt(
                    forecastData?.timelines?.daily[0].values?.temperatureMin
                  ) || 0}
                  ºC /{" "}
                  {parseInt(
                    forecastData?.timelines?.daily[0].values?.temperatureMax
                  ) || 0}
                  ºC
                </p>
                <p className="now-state">Poucas nuvens</p>
              </div>
              <div className="widget-icon">
                <WeatherIcon image={CloudyNight} />
              </div>
            </div>
          </Widget>

          <WidgetStats>
            <div className="option">
              <div className="option-label">
                <PiThermometerSimpleLight size={26} color={Gray500} />
                <p>Sensação térmica</p>
              </div>
              <span>
                {parseInt(currentData?.data?.values?.temperatureApparent) || 0}
                ºC
              </span>
            </div>
            <div className="option">
              <div className="option-label">
                <PiCloudRainLight size={26} color={Gray500} />
                <p>Probabilidade de chuva</p>
              </div>
              <span>
                {parseInt(
                  currentData?.data?.values?.precipitationProbability
                ) || 0}
                %
              </span>
            </div>
            <div className="option">
              <div className="option-label">
                <PiWindLight size={26} color={Gray500} />
                <p>Velocidade do vento</p>
              </div>
              <span>
                {parseInt(currentData?.data?.values?.windSpeed) || 0} km/h
              </span>
            </div>
            <div className="option">
              <div className="option-label">
                <PiDropLight size={26} color={Gray500} />
                <p>Umidade do ar</p>
              </div>
              <span>{parseInt(currentData?.data?.values?.humidity) || 0}%</span>
            </div>
            <div className="option">
              <div className="option-label">
                <PiSunDimLight size={26} color={Gray500} />
                <p>Índice UV</p>
              </div>
              <span>{parseInt(currentData?.data?.values?.uvIndex) || 0}</span>
            </div>
          </WidgetStats>

          <WidgetPrevision>
            <div className="option">
              <p className="option-title">ter</p>
              <PrevisionIcon image={CloudyNight} />
              <p className="option-max">
                {parseInt(
                  forecastData?.timelines?.daily[1].values?.temperatureMin
                ) || 0}
                ºC
              </p>
              <p className="option-min">
                {parseInt(
                  forecastData?.timelines?.daily[1].values?.temperatureMax
                ) || 0}
                ºC
              </p>
            </div>
            <div className="option">
              <p className="option-title">qua</p>
              <PrevisionIcon image={CloudyNight} />
              <p className="option-max">
                {parseInt(
                  forecastData?.timelines?.daily[2].values?.temperatureMin
                ) || 0}
                ºC
              </p>
              <p className="option-min">
                {parseInt(
                  forecastData?.timelines?.daily[2].values?.temperatureMax
                ) || 0}
                ºC
              </p>
            </div>
            <div className="option">
              <p className="option-title">qui</p>
              <PrevisionIcon image={CloudyNight} />
              <p className="option-max">
                {parseInt(
                  forecastData?.timelines?.daily[3].values?.temperatureMin
                ) || 0}
                ºC
              </p>
              <p className="option-min">
                {parseInt(
                  forecastData?.timelines?.daily[3].values?.temperatureMax
                ) || 0}
                ºC
              </p>
            </div>
            <div className="option">
              <p className="option-title">sex</p>
              <PrevisionIcon image={CloudyNight} />
              <p className="option-max">
                {parseInt(
                  forecastData?.timelines?.daily[4].values?.temperatureMin
                ) || 0}
                ºC
              </p>
              <p className="option-min">
                {parseInt(
                  forecastData?.timelines?.daily[4].values?.temperatureMax
                ) || 0}
                ºC
              </p>
            </div>
            <div className="option">
              <p className="option-title">sab</p>
              <PrevisionIcon image={CloudyNight} />
              <p className="option-max">
                {parseInt(
                  forecastData?.timelines?.daily[5].values?.temperatureMin
                ) || 0}
                ºC
              </p>
              <p className="option-min">
                {parseInt(
                  forecastData?.timelines?.daily[5].values?.temperatureMax
                ) || 0}
                ºC
              </p>
            </div>
          </WidgetPrevision>
        </>
      )}
    </Container>
  );
}
