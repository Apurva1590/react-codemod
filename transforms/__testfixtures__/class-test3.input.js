'use strict';

var React = require('React');

// Comment
module.exports = React.createClass({
  propTypes: {
    foo: React.PropTypes.bool,
  },

  getInitialState: () => ({
    foo: 'bar',
  }),

  render: function() {
    return <div />;
  },
});
