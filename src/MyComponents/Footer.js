import React from 'react'

export const Footer = () => {
let footerStyle = {
  position: "relative",
  top: "100vh",
  width: "100%",
  height: 55,
}

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center ">
        Copyright &copy; myTodosList.com
      </p>
         
    </footer>
  )
}
