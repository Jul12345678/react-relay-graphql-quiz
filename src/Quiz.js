import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Quiz extends React.Component {
  render() {
    return (
      <div className="post">
        <div
          className="post-header"
          style={{
            question: `(${this.props.quiz.question})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className="post-content">
          {this.props.quiz.answer}&nbsp;
          <button className="post-date" onClick={this._handleAnswer}>
            True
          </button>
          <button className="post-date" onClick={this._handleAnswer}>
            False
          </button>
        </div>
      </div>
    );
  }
  _handleAnswer = () => {
    if (this.props.quiz.answer === 'True') {
      alert('Correct!');
    } else {
      this.props.quiz.answer === 'False' && alert('Wrong!');
    }
  }; // end _handleAnswer
}

export default createFragmentContainer(
  Quiz,
  graphql`
    fragment Quiz_quiz on Quiz {
      id
      question
      answer
    }
  `,
);
