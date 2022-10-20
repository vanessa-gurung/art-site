exports.seed = (knex) => {
  return knex('diaryComics')
    .del()
    .then(() =>
      knex('diaryComics').insert([
        {
          id: 1,
          date: new Date('October 11, 2020, 12:05:00'),
          diary_comic:
            'file:///Users/vanessagurung/Pictures/drawings/diary%20comics/20-10-11',
        },
        {
          id: 2,
          date: new Date('October 18, 2022, 12:05:00'),
          diary_comic:
            'file:///Users/vanessagurung/Pictures/drawings/diary%20comics/20-10-18.jpg',
        },
        {
          id: 3,
          date: new Date('October 20, 2022, 12:05:00'),
          diary_comic:
            'file:///Users/vanessagurung/Pictures/drawings/diary%20comics/20-10-19%202.jpg',
        },
      ])
    )
}
