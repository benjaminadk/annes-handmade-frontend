import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Router from 'next/router'
import 'jest-styled-components'

Router.router = {
  replace() {},
  push() {},
  prefetch() {}
}

configure({ adapter: new Adapter() })
