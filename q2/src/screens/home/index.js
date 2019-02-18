import React, { Component } from 'react';
import JsonInput from '../../components/JsonInput/JsonInput';
import UiDisplay from '../../components/UiDisplay/UiDisplay';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        type: 'box',
        message: 'Hello',
        background: '#058893',
        children: [
          {
            type: 'text',
            message: 'foo',
          },
          {
            type: 'text',
            message: 'bar',
          },
          {
            type: 'box',
            message: 'bowtie',
            background: '#FF5733',
            children: [
              {
                type: 'text',
                message: 'insurance',
              },
              {
                type: 'box',
                background: 'white',
                message: 'insurance',
                children: [
                  {
                    type: 'text',
                    message: 'insurance',
                  },
                ],
              },
            ],
          },
          {
            type: 'box',
            background: 'white',
            message: 'insurance',
          },
        ],
      },
    };

    this._onEdit = this._onEdit.bind(this);
  }

  _onEdit({updated_src: newContent}) {
    // an improvement is to do validations here,
    // but at this stage, it would better to simply ignore unknown keys

    this.setState({
      content: newContent,
    });
  }

  render() {
    const { content } = this.state;
    return (
      <div className="container">
        <div className="panel">
          <JsonInput content={content} onEdit={this._onEdit} />
        </div>
        <div className="panel">
          <UiDisplay content={content} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
