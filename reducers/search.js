//액션
//people 데이터 받아오기
export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';
export const GET_SEARCH_DATA_SUCCESS = 'GET_SEARCH_DATA_SUCCESS';
export const GET_SEARCH_DATA_ERROR = 'GET_SEARCH_DATA_ERROR';

export const searchData = (category, keyword) => ({
  type: GET_SEARCH_DATA,
  category: category,
  keyword: keyword,
});

const initialState = {
  result: [
    {
      id: '12345',
      img: '이미지랑께',
      name: '건우',
      description: '건우는 천재다',
    },
    {
      id: '12346',
      img: '이미지랑께',
      name: '민찬',
      description: '건우는 천재다',
    },
  ],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_DATA_SUCCESS:
    case GET_SEARCH_DATA_ERROR:
      return { result: action.payload };

    default:
      return state;
  }
}
