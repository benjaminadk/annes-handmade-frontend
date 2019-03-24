import { ToastStyles } from './styles/Toast'

export default class Toast extends React.Component {
  state = {
    show: false
  }

  componentDidUpdate(prevProps) {
    const { show, delay } = this.props
    if (!prevProps.show && show) {
      this.setState({ show: true })
      this.timeout = setTimeout(() => this.setState({ show: false }), delay)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.setState({ show: false })
  }

  onClose = () => {
    clearTimeout(this.timeout)
    this.setState({ show: false })
  }

  render() {
    const {
      props: { message },
      state: { show }
    } = this
    return (
      <ToastStyles show={show}>
        <span>💎</span>
        <span>{message}</span>
        <span onClick={this.onClose}>❌</span>
      </ToastStyles>
    )
  }
}
