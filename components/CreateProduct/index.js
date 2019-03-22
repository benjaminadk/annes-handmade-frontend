import React from 'react'
import { Mutation } from 'react-apollo'
import axios from 'axios'
import NProgress from 'nprogress'
import { Column } from '../Inventory/styles/Table'
import AdminNav from './AdminNav'
import DisplayError from '../DisplayError'
import Image from './Image'
import Input from './Input'
import { VARIANTS, BEADS } from '../../lib/productHelpers'
import formatFilename from '../../lib/formatFilename'
import { CreateProductStyles, CreateButton } from './styles/CreateProduct'
import { CREATE_PRODUCT_MUTATION } from '../../apollo/mutation/createProduct'

const initialState = {
  title: '',
  description: '',
  price: 0,
  variant: 'NECKLACE',
  bead: 'RED_JASPER',
  image1: '',
  image2: ''
}

export default class CreateProduct extends React.Component {
  state = { ...initialState }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  onChangeImage = async (e, addImage, index) => {
    NProgress.start()
    const { files } = e.nativeEvent.target
    const filename = formatFilename('images', files[0].name)
    const filetype = files[0].type
    const res = await addImage({
      variables: { filename, filetype }
    })
    axios({
      method: 'PUT',
      url: res.data.addImage.url,
      headers: {
        'Content-Type': filetype
      },
      data: files[0],
      onUploadProgress: e => {
        const completed = Math.round((e.loaded * 100) / e.total)
        if (completed === 100) {
          setTimeout(() => {
            this.setState({ [`image${index}`]: res.data.addImage.image })
            NProgress.done()
          }, 1000)
        }
      }
    })
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
    const data = this.state
    const images = []
    if (data.image1) images.push(data.image1)
    if (data.image2) images.push(data.image2)
    delete data.image1
    delete data.image2
    data.price = Number(data.price)
    data.images = { set: images }
    await createProduct({
      variables: { data }
    })
    this.setState(initialState)
  }

  render() {
    const {
      state: { title, description, price, variant, bead, image1, image2 }
    } = this
    return (
      <Column>
        <AdminNav />
        <Mutation mutation={CREATE_PRODUCT_MUTATION}>
          {(createProduct, { loading, error }) => (
            <CreateProductStyles method="POST" onSubmit={e => this.handleSubmit(e, createProduct)}>
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
      </Column>
    )
  }
}
