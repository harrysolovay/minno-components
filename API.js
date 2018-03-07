import faker from 'faker'


let users = []

for(var i = 0; i < 50; i++) {
  users.push({
    name : faker.name.findName(),
    handle : faker.internet.userName(),
    image : faker.image.avatar()
  })
}


let posts = []

for(var i = 0; i < 15; i++) {
  posts.push({
    author : faker.name.findName(),
    handle : faker.internet.userName(),
    avatar : faker.image.avatar(),
    type : 'Image',
    source : faker.image.image(),
    caption : faker.lorem.sentence(),
    time : faker.date.past(),
    location : faker.lorem.word(),
    comments : [{
      author : faker.name.findName(),
      body : faker.lorem.sentence()
    }, {
      author : faker.name.findName(),
      body : faker.lorem.sentence()
    }]
  })
}

export { users, posts }
