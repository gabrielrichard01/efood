import Background from '../../models/Background'
import Banner from '../Banner'

type Props = {
  backgrounds: Background[]
}

const BannerContent = ({ backgrounds }: Props) => (
  <div>
    <div>
      {backgrounds.map((background) => (
        <Banner
          key={background.id}
          category={background.category}
          backgroundImg={background.backgroundImg}
          name={background.name}
        />
      ))}
    </div>
  </div>
)

export default BannerContent
