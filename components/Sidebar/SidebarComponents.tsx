import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: aliceblue;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen } : any) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen } : any) => (isOpen ? '0' : '-100%')};
`

export const SidebarCloseIcon = styled(CloseIcon)`
  color: aqua;
`

export const SidebarIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

