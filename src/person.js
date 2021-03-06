const colors = require('colors')

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
    this.photos = []
  }
  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }
  addPhoto(photo) {
    this.photos.push(photo)
  }
  likePhoto(photo) {
    photo.likedBy.push(this)
  }
  get profile() {
    return `
# ${this.name.red.bgWhite}  (${this.age})
      BIO: ${this.bio.italic}
  
## ${'Photos'.white.bold} (${this.photos.length})
  
  ${this.photos
    .map(photo => {
      return `### ${photo.filename.rainbow}
      ${photo.likedBy.map(person => person.name).join(',') || 'no likes yet!'}
      `
    })
    .join('/n')}
      `
  }
  set profile(newValue) {
    throw new Error(`profile is only a getter. You cant override it.`)
  }
}
module.exports = Person
