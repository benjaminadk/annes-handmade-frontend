import { Mutation, withApollo } from 'react-apollo'
import axios from 'axios'
import NProgress from 'nprogress'
import isequal from 'lodash.isequal'
import { INVENTORY_QUERY } from '../../apollo/query/inventory'
import { UPDATE_PRODUCT_MUTATION } from '../../apollo/mutation/updateProduct'
import { UpdateProductStyles, UpdateButton } from './styles/UpdateProduct'
import formatFilename from '../../lib/formatFilename'
import { VARIANTS, BEADS } from '../../lib/productHelpers'
import Input from '../CreateProduct/Input'
import Image from '../CreateProduct/Image'

class UpdateProduct extends React.Component {
  state = {
    id: '',
    title: '',
    description: '',
    variant: '',
    bead: '',
    price: 0,
    images: []
  }

  componentDidMount() {
    this.setInitialState()
  }

  componentDidUpdate(prevProps) {
    if (!isequal(prevProps.product, this.props.product)) {
      this.setInitialState()
    }
    if (NProgress.isStarted()) {
      NProgress.done()
    }
  }

  setInitialState = () => this.setState({ ...this.props.product })

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  onChangeImage = async (e, addImage) => {
    NProgress.start()
    const { id } = this.state
    const { files } = e.nativeEvent.target
    const filename = formatFilename('images', files[0].name)
    const filetype = files[0].type
    const res = await addImage({
      variables: { id, filename, filetype }
    })
    await axios({
      method: 'PUT',
      url: res.data.addImage.url,
      headers: {
        'Content-Type': filetype
      },
      data: files[0]
    })
    await this.props.client.reFetchObservableQueries({ includeStandby: true })
    NProgress.done()
  }

  onDeleteImage = async (e, deleteImage) => {
    if (confirm('Permenantly delete image?')) {
      NProgress.start()
      await deleteImage()
      await this.props.client.reFetchObservableQueries({ includeStandby: true })
      NProgress.done()
    }
  }

  handleSubmit = async (e, updateProduct) => {
    e.preventDefault()
    NProgress.start()
    const { id, title, description, variant, bead, price } = this.state
    const data = { title, description, variant, bead, price: Number(price) }
    await updateProduct({ variables: { id, data }, refetchQueries: [{ query: INVENTORY_QUERY }] })
    NProgress.done()
  }

  render() {
    const {
      state: { id, title, description, variant, bead, price, images }
    } = this
    return (
      <Mutation mutation={UPDATE_PRODUCT_MUTATION}>
        {(updateProduct, { loading }) => (
          <UpdateProductStyles method="POST" onSubmit={e => this.handleSubmit(e, updateProduct)}>
            <div>
              <Input
                type="text"
                name="title"
                label="Title"
                value={title}
                onChange={this.handleChange}
              />
              <Input
                type="textarea"
                name="description"
                label="Description"
                value={description}
                rows={4}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Input
                type="select"
                name="variant"
                label="Type"
                value={variant}
                options={VARIANTS}
                onChange={this.handleChange}
              />
              <Input
                type="select"
                name="bead"
                label="Bead"
                value={bead}
                options={BEADS}
                onChange={this.handleChange}
              />
              <Input
                type="number"
                name="price"
                label="Price"
                value={price}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Image
                id={id}
                index={1}
                image={images ? images[0] : ''}
                onChange={this.onChangeImage}
                onClick={this.onDeleteImage}
              />
              <Image
                id={id}
                index={2}
                image={images.length > 1 ? images[1] : ''}
                onChange={this.onChangeImage}
                onClick={this.onDeleteImage}
              />
            </div>
            <UpdateButton type="submit" disabled={loading}>
              Updat{loading ? 'ing' : 'e'} Product
            </UpdateButton>
          </UpdateProductStyles>
        )}
      </Mutation>
    )
  }
}

export default withApollo(UpdateProduct)
