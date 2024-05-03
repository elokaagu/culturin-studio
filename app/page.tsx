'use client'
import React, {useState} from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <AppBody>
      <Title>Welcome to Culturin Admin UI</Title>
    </AppBody>
  )
}

const AppBody = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  transition: all 0.25s ease;
`

const Title = styled.div`
  margin: auto 10px;
  padding-left: auto;
  padding-top: 20px;
  padding-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  z-index: 2;

  h1 {
    margin-bottom: 20px;
  }
`
