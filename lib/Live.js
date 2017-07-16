import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import {
  hoc,
  Flex,
  Box,
  monospace
} from 'rebass'
import colors from './colors'

const Provider = styled(LiveProvider)`
  position: relative;
`

const Preview = styled(hoc()(LivePreview))`
  position: relative;
  padding: 16px;
`

const Editor = styled(hoc()(LiveEditor))`
  box-sizing: border-box;
  font-family: ${monospace};
  font-size: 13px;
  margin: 0;
  padding: 16px;
  overflow: auto;
  outline: none;
  tab-size: 2;
  color: ${colors.black};
  background-color: ${colors.gray};

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${colors.midgray};
  }
  .token.punctuation {
    color: ${colors.black};
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    // color: hsl(350, 40%, 70%);
    color: ${colors.green};
    // color: ${colors.black};
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${colors.purple};
  }
  // .token.operator,
  // .token.entity,
  // .token.url,
  // .language-css .token.string,
  // .style .token.string,
  // .token.variable {
  //   color: hsl(40, 90%, 60%);
  // }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${colors.red};
  }
  .token.regex,
  .token.important {
    color: ${colors.red};
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.deleted {
    color: red;
  }
`

const Error = styled(LiveError)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  font-family: ${monospace};
  font-size: 13px;
  padding: 8px;
  color: white;
  background-color: red;
`

const Row = styled(Flex)`
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.gray2};
`

export default props => (
  <Provider
    mountStylesheet={false}
    {...props}>
    <Row wrap>
      <Preview w={[ 1, 1, 1/2 ]} />
      <Editor w={[ 1, 1, 1/2 ]} />
    </Row>
    <Error />
  </Provider>
)
