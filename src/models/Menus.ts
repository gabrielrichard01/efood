class Menus {
  id: number
  title: string
  description: string
  image: string
  button: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    button: string
  ) {
    this.id = id
    this.description = description
    this.title = title
    this.image = image
    this.button = button
  }
}

export default Menus
