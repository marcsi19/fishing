const Sequelize = require('sequelize')
const db = require('../db')

const Gallery = db.define('gallery', {
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: '/favicon.ico'
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Galeria', 'Irasok', 'Referencia', 'Fekhang', 'Szerviz']]
    }
  },
  homepage: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Gallery
