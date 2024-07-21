import axios from "axios";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;
    console.log(coin);

    //detay verilerinden oluşan bir dizi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24 s değişim%",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    //grafik için kullanılacak veri
    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "orange",
        },
      ],
    };
  }

  //api den hem fiyat hem detay verisini al
  static async getCoin(id) {
    // Birden fazla api isteğini aynı anda atma
    const response = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: response[0].data.data,
      history: response[1].data.data,
    };
  }
}
