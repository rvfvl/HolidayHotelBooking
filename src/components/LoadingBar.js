import React from "react"
import Spinner from "react-spinner-material"
import styled from "styled-components"

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LoadingBar = () => {
  return (
    <SpinnerWrapper>
      <Spinner
        size={120}
        spinnerColor={"#333"}
        spinnerWidth={2}
        visible={true}
      />
    </SpinnerWrapper>
  )
}

export default LoadingBar
