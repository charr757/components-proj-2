import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        time="Today at 6:00PM"
        comment="I was really surprised to find that most of the food was just bologna! One star :/"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        time="Today at 2:23AM"
        comment="You know, it's like you go in and everyone is screaming!! Really fun time. Would probably go again, but not with my mother."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        time="Yesterday at 4:00PM"
        comment="Hands down favorite place in the world. They have amazing cheesecake. Better thank Dunkin Donutes!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
