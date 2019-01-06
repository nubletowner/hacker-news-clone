import React from 'react';
import './Stories.css';
import Story from './Story';
import { connect } from 'react-redux';
import { getReadableStories } from '../selectors/storySelector';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '10%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    width: '10%'
  }
};

const Stories = ({ stories }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {stories.map(story => {
        return <Story story={story} key={story.objectID} columns={COLUMNS} />;
      })}
    </div>
  );
};

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    stories: getReadableStories(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(Stories);
