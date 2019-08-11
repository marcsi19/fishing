'use strict'

const db = require('../server/db')
const {User, Gallery} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', adminStatus: true}),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      adminStatus: false
    })
  ])
  const gallery = await Promise.all([
    Gallery.create({
      imageUrl: '/fishing1.jpg',
      title: 'Fishing',
      description: `The best lake for fishing!`,
      category: 'Galeria',
      homepage: true
    }),
    Gallery.create({
      imageUrl: '/fishing2.jpg',
      title: 'Reel',
      description: `This is a great reel`,
      category: 'Galeria',
      homepage: true
    }),
    Gallery.create({
      imageUrl: '/fishing3.jpg',
      title: 'Sunset',
      description: `Beautiful sunset, beautiful day!`,
      category: 'Galeria',
      homepage: true
    })
  ])

  console.log(`seeded ${users.length} users and ${gallery.length} gellery`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
