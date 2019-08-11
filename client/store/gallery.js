import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_GALLERY = 'GET_GALLERY'
const REMOVE_PIC = 'REMOVE_PIC'
const SELECT_PIC = 'SELECT_PIC'
const POST_ITEM = 'POST_ITEM'
const PUT_ITEM = 'PUT_ITEM'
/**
 * INITIAL STATE
 */
const defaultGallery = {
  gallery: [],
  pic: {}
}

/**
 * ACTION CREATORS
 */
const getGallery = gallery => ({type: GET_GALLERY, gallery})

const removepic = picId => ({type: REMOVE_PIC, picId})

const selectPic = pic => ({
  type: SELECT_PIC,
  pic
})

const postItem = item => ({type: POST_ITEM, item})

const putItem = item => ({
  type: PUT_ITEM,
  item
})

/**
 * THUNK CREATORS
 */
export const fetchGallery = () => async dispatch => {
  try {
    const res = await axios.get('/api/gallery')
    dispatch(getGallery(res.data || defaultGallery))
  } catch (err) {
    console.error(err)
  }
}
export const selectPicById = id => async dispatch => {
  try {
    const {data: pic} = await axios.get(`/api/gallery/${id}`)
    dispatch(selectPic(pic))
  } catch (err) {
    console.error(err)
  }
}

export const selectIrasById = id => async dispatch => {
  try {
    const {data: pic} = await axios.get(`/api/irasok/${id}`)
    dispatch(selectPic(pic))
  } catch (err) {
    console.error(err)
  }
}
export const addItem = item => async dispatch => {
  try {
    const {data: added} = await axios.post(`/api/gallery`, item)
    dispatch(postItem(added))
  } catch (err) {
    console.error(err)
  }
}

export const editItem = (id, item) => async dispatch => {
  try {
    const {data: edited} = await axios.put(`/api/gallery/${id}`, item)
    console.log('EIDTITED STORE', edited)
    dispatch(putItem(edited))
  } catch (error) {
    console.error(error)
  }
}

export const deletePic = picId => async dispatch => {
  const {data: pic} = await axios.delete(`/api/gallery/${picId}`)
  dispatch(removepic(pic))
}

/**
 * REDUCER
 */
export const galleryReducer = (state = defaultGallery, action) => {
  switch (action.type) {
    case GET_GALLERY:
      return {...state, gallery: action.gallery}
    case SELECT_PIC:
      return {...state, pic: action.pic}
    case POST_ITEM:
      return {...state, gallery: [...state.gallery, action.pic]}
    case PUT_ITEM:
      const itemUpdated = state.gallery.map(
        pic => (pic !== action.item ? gallery : {...gallery, ...action.item})
      )
    case REMOVE_PIC:
      const newGalleryArray = state.gallery.filter(
        pic => pic.id !== action.picId
      )
      return {...state, gallery: newGalleryArray}
    default:
      return state
  }
}
