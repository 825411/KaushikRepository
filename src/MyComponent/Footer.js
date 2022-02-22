import React from 'react'

export const Footer = () => {

  let footerStyle = {    
  position: "relative",
  width: "100%",
  
  border: "2px solid red"
  }


  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
     copyright &copy; mayankaushik.com
     </p>
    </footer>
  )
}

//export default Footer
