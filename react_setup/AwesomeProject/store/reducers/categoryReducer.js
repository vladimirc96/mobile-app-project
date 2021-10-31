import { CATEGORY_ACTIONS } from "../actions/category/types";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Majstori i zanati",
      imagePath: require("../../assets/images/kat_ikonice_krug/zanati.png"),
      color: "#f4e7c5",
      imagePathSub: require("../../assets/images/kat_ikonice/zanati.png"),
    },
    {
      id: 2,
      name: "Računari, telefoni\nbela tehnika",
      imagePath: require("../../assets/images/kat_ikonice_krug/racunari.png"),
      color: "#dbc59e",
      imagePathSub: require("../../assets/images/kat_ikonice/racunari.png"),
      multiLine: true,
    },
    {
      id: 3,
      name: "Privatni časovi",
      imagePath: require("../../assets/images/kat_ikonice_krug/privatni.png"),
      color: "#dbc59e",
      imagePathSub: require("../../assets/images/kat_ikonice/privatni.png"),
    },
    {
      id: 4,
      name: "Prevodi i izrada\nradova",
      imagePath: require("../../assets/images/kat_ikonice_krug/prevodjenje.png"),
      color: "#b9a17a",
      imagePathSub: require("../../assets/images/kat_ikonice/prevodjenje.png"),
      multiLine: true,
    },
    {
      id: 5,
      name: "Prevoz",
      imagePath: require("../../assets/images/kat_ikonice_krug/transport.png"),
      color: "#faf4da",
      imagePathSub: require("../../assets/images/kat_ikonice/transport.png"),
    },
    {
      id: 6,
      name: "Muzika i oprema",
      imagePath: require("../../assets/images/kat_ikonice_krug/muzika.png"),
      color: "#eddcb2",
      imagePathSub: require("../../assets/images/kat_ikonice/muzika.png"),
    },
    {
      id: 7,
      name: "Fotografija i\nvideo",
      imagePath: require("../../assets/images/kat_ikonice_krug/foto.png"),
      color: "#faf4da",
      imagePathSub: require("../../assets/images/kat_ikonice/foto.png"),
      multiLine: true,
    },
    {
      id: 8,
      name: "Dizajn, štampa i umetnost",
      imagePath: require("../../assets/images/kat_ikonice_krug/dizajn.png"),
      color: "#dbc59e",
      imagePathSub: require("../../assets/images/kat_ikonice/dizajn.png"),
      multiLine: true
    },
    {
      id: 9,
      name: "Lepota, nega i\ntretmani",
      imagePath: require("../../assets/images/kat_ikonice_krug/lepota.png"),
      color: "#f4e7c5",
      imagePathSub: require("../../assets/images/kat_ikonice/lepota.png"),
      multiLine: true,
    },
    {
      id: 10,
      name: "Kućne usluge i\nodržavanje",
      imagePath: require("../../assets/images/kat_ikonice_krug/kucniPoslovi.png"),
      color: "#dbc59e",
      imagePathSub: require("../../assets/images/kat_ikonice/kucniPoslovi.png"),
      multiLine: true,
    },
    {
      id: 11,
      name: "Gurmanluci",
      imagePath: require("../../assets/images/kat_ikonice_krug/gurmanluci.png"),
      color: "#f4e7c5",
      imagePathSub: require("../../assets/images/kat_ikonice/gurmanluci.png"),
    },
    {
      id: 12,
      name: "Sport i zdravlje",
      imagePath: require("../../assets/images/kat_ikonice_krug/sport.png"),
      color: "#b9a17a",
      imagePathSub: require("../../assets/images/kat_ikonice/sport.png"),
    },
  ],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.GET_CATEGORIES:
      return initialState;
    default:
      return state;
  }
};

export default categoryReducer;
