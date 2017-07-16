import React from 'react'
import Markdown from 'react-markdown'
import R, {
  Provider,
  Container,
  Box,
  BlockLink,
  Link,
  Image,
  Divider,
  Pre,
} from 'rebass'
import styled from 'styled-components'
import Live from './Live'
import theme from './theme'
import colors from './colors'

const CodeBlock = ({
  language,
  literal,
  scope
}) => {
  if (/^\.\.?jsx/.test(language)) {
    const noInline = /^\.\./.test(language)
    return (
      <Box mb={3}>
        <Live
          scope={scope}
          code={literal}
          noInline={noInline}
        />
      </Box>
    )
  }

  return (
    <Pre
      mb={3}
      children={literal}
      p={3}
      bg={colors.gray}
    />
  )
}

const PageTitle = props => (
  <R.Heading
    {...props}
    is='h1'
    f={[ 5, 6, 7, 8 ]}
    mt={4}
    mb={3}
  />
)

const Heading = ({
  level,
  children
}) => level === 1
  ? <PageTitle children={children} />
  : (
    <BlockLink href={'#' + children}>
      <R.Heading
        id={children}
        children={children}
        mt={4}
        mb={3}
      />
    </BlockLink>
  )

const Code = ({
  literal,
  inline
}) => (
  <R.Code
    p='0.2em'
    f={13}
    bg={colors.gray}
    children={literal}
  />
)

const List = ({ type }) => {}

const ThematicBreak = props => (
  <Divider
    {...props}
    my={4}
    color={colors.gray2}
  />
)

const renderers = config => ({
  CodeBlock: props => CodeBlock({ ...props, ...config }),
  Heading,
  Code,
  Link,
  Image,
  ThematicBreak,
})

const Root = styled(Container)`
  line-height: 1.5;
`

export default ({ config }) => (
  <Provider theme={theme}>
    <Root pt={5} pb={6}>
      <Markdown
        {...config}
        renderers={renderers(config)}
        source={MARKDOWN}
      />
    </Root>
  </Provider>
)
