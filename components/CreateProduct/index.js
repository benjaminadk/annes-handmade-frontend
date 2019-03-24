import React from 'react'
import { Mutation } from 'react-apollo'
import axios from 'axios'
import NProgress from 'nprogress'
import { Column } from '../Inventory/styles/Table'
import AdminNav from './AdminNav'
import DisplayError from '../DisplayError'
import Image from './Image'
import Input from './Input'
import Toast from '../Toast'
import { VARIANTS, BEADS } from '../../lib/productHelpers'
import formatFilename from '../../lib/formatFilename'
import { CreateProductStyles, CreateButton } from './styles/CreateProduct'
import { CREATE_PRODUCT_MUTATION } from '../../apollo/mutation/createProduct'
import { ALL_PRODUCTS_QUERY } from '../../apollo/query/products'
import { INVENTORY_QUERY } from '../../apollo/query/inventory'

export default class CreateProduct extends React.Component {
  state = {
    title: '',
    description: '',
    price: 0,
    variant: 'NECKLACE',
    bead: 'RED_JASPER',
    image1: '',
    image2: '',
    showToast: false
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onChangeImage = async (e, addImage, index) => {
    NProgress.start()
    const { files } = e.nativeEvent.target
    const filename = formatFilename('images', files[0].name)
    const filetype = files[0].type
    const res = await addImage({
      variables: { filename, filetype }
    })
    await axios({
      method: 'PUT',
      url: res.data.addImage.url,
      headers: {
        'Content-Type': filetype
      },
      data: files[0]
    })
    this.setState({ [`image${index}`]: res.data.addImage.image })
    NProgress.done()
  }

  onDeleteImage = async (e, deleteImage, index) => {
    e.preventDefault()
    NProgress.start()
    if (confirm('Permenantly delete image?')) {
      await deleteImage()
      this.setState({ [`image${index}`]: '' })
    }
    NProgress.done()
  }

  handleSubmit = async (e, createProduct) => {
    e.preventDefault()
    const { title, description, variant, bead, price, image1, image2 } = this.state
    const set = []
    if (image1) set.push(image1)
    if (image2) set.push(image2)
    const data = {
      title,
      description,
      variant,
      bead,
      price: Number(price),
      images: { set }
    }
    await createProduct({
      variables: { data }
    })
    this.setState(
      {
        title: '',
        description: '',
        variant: 'NECKLACE',
        bead: 'RED_JASPER',
        price: 0,
        image1: '',
        image2: '',
        showToast: true
      },
      () => this.setState({ showToast: false })
    )
  }

  render() {
    const {
      state: { title, description, price, variant, bead, image1, image2, showToast }
    } = this
    return (
      <Column>
        <AdminNav />
        <Mutation
          mutation={CREATE_PRODUCT_MUTATION}
          refetchQueries={[{ query: ALL_PRODUCTS_QUERY }, { query: INVENTORY_QUERY }]}
        >
          {(createProduct, { loading, error }) => (
            <CreateProductStyles
              data-test="create-product"
              method="POST"
              onSubmit={e => this.handleSubmit(e, createProduct)}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <Input
                  type="text"
                  label="Title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
                <Input
                  type="textarea"
                  label="Description"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
                <Input
                  type="number"
                  label="Price"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                />
                <Input
                  type="select"
                  label="Type"
                  name="variant"
                  value={variant}
                  options={VARIANTS}
                  onChange={this.handleChange}
                />
                <Input
                  type="select"
                  label="Bead"
                  name="bead"
                  value={bead}
                  options={BEADS}
                  onChange={this.handleChange}
                />
                <Image
                  image={image1}
                  index={1}
                  onChange={this.onChangeImage}
                  onClick={this.onDeleteImage}
                />
                <Image
                  image={image2}
                  index={2}
                  onChange={this.onChangeImage}
                  onClick={this.onDeleteImage}
                />
                {error && <DisplayError error={error} />}
                <CreateButton type="submit">Creat{loading ? 'ing' : 'e'} Product</CreateButton>
              </fieldset>
            </CreateProductStyles>
          )}
        </Mutation>
        <Toast show={showToast} message="Product created successfully!" delay={8000} />
      </Column>
    )
  }
}
