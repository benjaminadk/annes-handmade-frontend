import ReactImageMagnify from 'react-image-magnify'
import Hint from './Hint'

export default class LargeImage extends React.Component {
  state = {
    size: 400
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      if (window.screen.width < 575) {
        this.setState({ size: 300 })
      }
    }
  }

  render() {
    const {
      props: { image },
      state: { size }
    } = this
    return (
      <ReactImageMagnify
        {...{
          smallImage: {
            src: image,
            height: size,
            width: size
          },
          largeImage: {
            src: image,
            height: size * 2,
            width: size * 2
          },
          isHintEnabled: true,
          hintComponent: Hint,
          enlargedImagePosition: 'over',
          style: {
            outline: '2px solid lightgrey',
            boxShadow:
              '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          }
        }}
      />
    )
  }
}
