import { Mutation, withApollo } from 'react-apollo'
import NProgress from 'nprogress'
import axios from 'axios'
import { ProfileStyles, Title, Description, Content, ProfileButton } from './styles/Profile'
import { UPDATE_USER_MUTATION } from '../../apollo/mutation/updateUser'
import { CURRENT_USER_QUERY } from '../../apollo/query/me'
import Input from '../Register/Input'
import Image from './Image'
import DisplayError from '../DisplayError'
import formatFilename from '../../lib/formatFilename'

class ProfileUser extends React.Component {
  state = {
    name: '',
    email: ''
  }

  componentDidMount() {
    this.setInitialState()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.user.name !== this.props.user.name ||
      prevProps.user.email !== this.props.user.email
    ) {
      this.setInitialState()
    }
  }

  setInitialState = () => {
    const { name, email } = this.props.user
    this.setState({ name, email })
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  onChangeImage = async (e, addImageUser) => {
    const { files } = e.nativeEvent.target
    const { id } = this.props.user
    NProgress.start()
    const filename = formatFilename('avatars', files[0].name)
    const filetype = files[0].type
    const res = await addImageUser({
      variables: { id, filename, filetype }
    })
    await axios({
      method: 'PUT',
      url: res.data.addImageUser.url,
      headers: {
        'Content-Type': filetype
      },
      data: files[0]
    })
    this.props.client.reFetchObservableQueries({ includeStandby: true })
    NProgress.done()
  }

  onDeleteImage = async deleteImageUser => {
    if (confirm('Permenantly delete image?')) {
      NProgress.start()
      const { id, image } = this.props.user
      await deleteImageUser({
        variables: { id, url: image },
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
      })
      NProgress.done()
    }
  }

  onUpdateUser = async (e, updateUser) => {
    e.preventDefault()
    NProgress.start()
    await updateUser()
    NProgress.done()
  }

  render() {
    const {
      props: { user },
      state: { name, email }
    } = this
    return (
      <Mutation
        mutation={UPDATE_USER_MUTATION}
        variables={{ id: user.id, name, email }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(updateUser, { loading, error }) => (
          <ProfileStyles>
            <div>
              <Title>Profile</Title>
              <Description>Change your email address, name or image.</Description>
            </div>
            <Content>
              <Input
                type='text'
                width='90%'
                name='name'
                label='Name'
                value={name}
                onChange={this.handleChange}
              />
              <Input
                type='email'
                width='90%'
                name='email'
                label='Email'
                value={email}
                onChange={this.handleChange}
              />
              <Image
                image={user.image}
                onClick={this.onDeleteImage}
                onChange={this.onChangeImage}
              />
              <DisplayError error={error} />
              <ProfileButton type='submit' onClick={e => this.onUpdateUser(e, updateUser)}>
                Updat{loading ? 'ing' : 'e'} User
              </ProfileButton>
            </Content>
          </ProfileStyles>
        )}
      </Mutation>
    )
  }
}

export default withApollo(ProfileUser)
