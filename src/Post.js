// import React from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';
//
// class Post extends React.Component {
//   render() {
//     return (
//       <div className="post">
//         <div
//           className="post-header"
//           style={{
//             backgroundImage: `url(${this.props.post.imageUrl})`,
//             backgroundSize: 'cover',
//             paddingBottom: '100%',
//           }}
//         />
//         <div className="post-content">
//           {this.props.post.description}&nbsp;
//           <button className="post-date" onClick={this._handleDelete}>
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   }
//   _handleDelete = () => {};
// }
//
// export default createFragmentContainer(
//   Post,
//   graphql`
//     fragment Post_post on Post {
//       id
//       description
//       imageUrl
//     }
//   `,
// );
