import gql from 'graphql-tag';

export default gql`# define the query
  {
    songs {
      id
      title
    }
  }
`;
