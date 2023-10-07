import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword.trim()) {
        history.push(`/search/${keyword}`)
      } else {
        history.push('/')
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [ keyword ]);

  return (
    <Form inline> 
      <Form.Control
        type='text'
        name='search box'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Movies...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
    </Form>
  )
}

export default SearchBox
