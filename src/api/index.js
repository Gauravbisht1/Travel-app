const axios = require('axios')

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          // bl_latitude: '11.847676',
          // tr_latitude: '12.838442',
          // bl_longitude: '109.095887',
          // tr_longitude: '109.149359',
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-key':
            '7f4ec8099fmshaa70040158637e0p12d1d0jsn1387c5fea1e4',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
