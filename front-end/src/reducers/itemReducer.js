import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    {
      src: "https://picsum.photos/1080",
      text: "Rent this amazing car for cheap",
      label: "Sports car",
      path: "/renting",
    },
    {
      src: "https://picsum.photos/1080",
      text: "Rent this amazing car for cheap",
      label: "Sports car",
      path: "/renting",
    },
    {
      src: "https://picsum.photos/1080",
      text: "Rent this amazing car for cheap",
      label: "Sports car",
      path: "/renting",
    },
    {
      src: "https://picsum.photos/1080",
      text: "Rent this amazing car for cheap",
      label: "Sports car",
      path: "/renting",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
