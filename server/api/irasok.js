const router = require('express').Router()
const {Gallery, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const gallery = await Gallery.findAll()
    res.json(gallery)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pic = await Gallery.findByPk(req.params.id)
    if (pic) {
      res.json(pic)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  if (req.user.adminStatus) {
    Gallery.create({
      title: req.body.title,
      description: req.body.description,
      homepage: req.body.homepage,
      imageUrl: req.body.imageUrl,
      category: req.body.category
    })
      .then(newItem => res.json(newItem))
      .catch(err => next(err))
  } else {
    res.send('not an admin')
  }
})

router.put('/:id', async (req, res, next) => {
  if (req.user.adminStatus) {
    try {
      const id = +req.params.id
      const itempic = await Gallery.findByPk(id)
      const item = await itempic.update(req.body)
      res.status(204)
      res.json(item)
    } catch (err) {
      next(err)
    }
  } else {
    res.send('not an admin')
  }
})
