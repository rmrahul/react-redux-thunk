import jsonplaceholder from "../apis/jsonplaceholder"

export const fetchPosts = () => async (dispatch, getState) =>  {
    const response = await jsonplaceholder.get("/posts")

    dispatch( {
        type : "FETCH_POST",
        payload: response
    })
} 
