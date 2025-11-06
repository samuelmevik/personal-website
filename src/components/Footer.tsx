function Footer() {
  return (<footer className='inset-x-0 bottom-0 p-[4vmin] sm:fixed'>
    <p className='transition-opacity hover:opacity-50'>→ samuel.mevik@outlook.com</p>
    <div className='flex justify-between'>
      <p>
        <a className='transition-opacity hover:opacity-50' href='https://www.linkedin.com/in/samuel-mevik/'>
          → LinkedIn
        </a>
      </p>
      <p className='transition-opacity hover:opacity-50'>Samuel Mevik © {new Date().getFullYear()}</p>
    </div>

  </footer>)
}

export default Footer