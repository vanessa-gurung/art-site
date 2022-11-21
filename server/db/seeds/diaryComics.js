exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('diary_comics').del()
  await knex('diary_comics').insert([
    {id: 1, date: new Date('September 6, 2022, 12:05:00'), diary_comic: 'file:///Users/vanessagurung/Pictures/drawings/diary%20comics/19-01-25.jpeg'},
    {id: 2, date: new Date('September 6, 2022, 12:05:00'), diary_comic: 'file:///Users/vanessagurung/Pictures/drawings/diary%20comics/19-01-26-2.jpg'},
    {id: 3, date: new Date('September 6, 2022, 12:05:00'), diary_comic: 'file:///Users/vanessagurung/Pictures/drawings/diary%20comics/19-01-27-1.jpeg'}
  ]);
};
