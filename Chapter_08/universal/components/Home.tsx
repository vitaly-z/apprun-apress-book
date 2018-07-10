import app, {Component} from 'apprun';

export default class extends Component {
  state = { name: 'Home' }

  view = (state) => {
    return <div>
      {state.name} - {new Date().toLocaleTimeString()}
    </div>
  }

  update = {
    '/': (state) => ({ ...state, path:'/' }),
    '/home': (state, path) => ({ ...state, path:'/home' })
  }
}

