// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import SearchBarContainer from "../../containers/SearchBarContainer";
import LinkComponent from "../typography/LinkComponent"

const SearchPageComponent: FC = () => {
  return (
    <>
      <h1>
        <b>Find open source developers</b><br/>that are eager to contribute. All around the globe.
      </h1>
      <SearchBarContainer />
      <LinkComponent secondary onClick={() => alert('a')}>How does this work?</LinkComponent>
    </>
  )
}

export default SearchPageComponent
