import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();// prevent the browser to submit by themseleves

    this.props.mutate({// get the data from mutate, not props(props for query)
      variables: { title: this.state.title },
      refetchQueries: [{ query }] // re-run the query for fetchSongsList
    }).then(() => hashHistory.push('/'));// use the returned promise and redirect by then. If error use .catch(() => )
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}// update data in react
            value={this.state.title}// based on state update, refrech the date from react state
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){ # Creat a function to pass argu from react to graphql
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
