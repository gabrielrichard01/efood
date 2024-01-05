class Food {
  id: number
  description: string
  imageFood: string
  imageStar: string
  infos: string[]
  title: string
  note: string
  button: string
  pages: string

  constructor(
    id: number,
    description: string,
    imageFood: string,
    imageStar: string,
    infos: string[],
    title: string,
    note: string,
    button: string,
    pages: string
  ) {
    this.id = id
    this.description = description
    this.imageFood = imageFood
    this.imageStar = imageStar
    this.infos = infos
    this.title = title
    this.note = note
    this.button = button
    this.pages = pages
  }
}

export default Food
