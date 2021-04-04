import { CATEGORY_ACTIONS } from "../actions/category/types";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Majstori i zanati",
      imagePath: require("../../assets/images/kat_ikonice_krug/zanati.png"),
      color: "#f4e7c5",
    },
    {
      id: 2,
      name: "Računari, telefoni\nbela tehnika",
      imagePath: require("../../assets/images/kat_ikonice_krug/racunari.png"),
      color: "#dbc59e",
    },
    {
      id: 3,
      name: "Privatni časovi",
      imagePath: require("../../assets/images/kat_ikonice_krug/privatni.png"),
      color: "#dbc59e",
    },
    {
      id: 4,
      name: "Prevodi i izrada radova",
      imagePath: require("../../assets/images/kat_ikonice_krug/prevodjenje.png"),
      color: "#b9a17a",
    },
    {
      id: 5,
      name: "Prevoz",
      imagePath: require("../../assets/images/kat_ikonice_krug/transport.png"),
      color: "#faf4da",
    },
    {
      id: 6,
      name: "Muzika i oprema",
      imagePath: require("../../assets/images/kat_ikonice_krug/muzika.png"),
      color: "#eddcb2",
    },
    {
      id: 7,
      name: "Fotografija i\nvideo",
      imagePath: require("../../assets/images/kat_ikonice_krug/foto.png"),
      color: "#faf4da",
    },
    {
      id: 8,
      name: "Dizajn, štampa i umetnost",
      imagePath: require("../../assets/images/kat_ikonice_krug/dizajn.png"),
      color: "#dbc59e",
    },
    {
      id: 9,
      name: "Lepota, nega i tretmani",
      imagePath: require("../../assets/images/kat_ikonice_krug/lepota.png"),
      color: "#f4e7c5",
    },
    {
      id: 10,
      name: "Kućne usluge i\nodržavanje",
      imagePath: require("../../assets/images/kat_ikonice_krug/kucniPoslovi.png"),
      color: "#dbc59e",
    },
    {
      id: 11,
      name: "Gurmanluci",
      imagePath: require("../../assets/images/kat_ikonice_krug/zanati.png"),
      color: "#f4e7c5",
    },
    {
      id: 12,
      name: "Sport i zdravlje",
      imagePath: require("../../assets/images/kat_ikonice_krug/zanati.png"),
      color: "#b9a17a",
    },
  ],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.GET_CATEGORIES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default categoryReducer;
