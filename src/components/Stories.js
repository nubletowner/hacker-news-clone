import React from 'react';
import './Stories.css';
import Story from './Story';
import { connect } from 'react-redux';
import { getReadableStories } from '../selectors/storySelector';
import { doFetchAllStories } from '../actions/storiesActions';

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

class Stories extends React.Component {
  componentDidMount = () => {
    this.props.fetchStories();
  };

  render() {
    return (
      <div className="stories">
        <StoriesHeader columns={COLUMNS} />
        {this.props.storiesAsIds.map(id => {
          debugger;
          return <Story storyId={id} key={id} columns={COLUMNS} />;
        })}
      </div>
    );
  }
}

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
    storiesAsIds: getReadableStories(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStories: () => dispatch(doFetchAllStories())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
