import request from 'superagent'

const rootUrl = '/api/v1'

export function getDiaryComic() {
  return request.get(`${rootUrl}/diaryComics`).then((res) => res.body)
}
