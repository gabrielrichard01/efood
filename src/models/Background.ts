class Background {
  id: number
  backgroundImg: string
  category: string
  name: string

  constructor(
    id: number,
    backgroundImg: string,
    category: string,
    name: string
  ) {
    this.id = id
    this.backgroundImg = backgroundImg
    this.category = category
    this.name = name
  }
}

export default Background
