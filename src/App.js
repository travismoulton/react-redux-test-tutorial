import { connect } from 'react-redux';
import { Component } from 'react';

import { fetchPosts } from './store/actions';
import Header from './components/Header';
import Headline from './components/headline/Headline';
import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';
import './app.scss';

const tempArr = [
  {
    firstName: 'Joe',
    lastName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configBtn = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    };

    return (
      <div data-test="App" className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <Button {...configBtn} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, i) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem {...configListItem} key={i} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
