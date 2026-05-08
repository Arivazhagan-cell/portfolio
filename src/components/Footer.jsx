import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff' }}
      className='py-8 border-t'
      style={{ borderColor: darkMode ? '#374151' : '#e5e7eb' }}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Left Section - Branding */}
          <div className='flex flex-col items-center md:items-start gap-2'>
            <h3
              className='text-2xl font-bold'
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              Portfolio
            </h3>
            <p
              className='text-sm'
              style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
            >
              Full Stack Developer
            </p>
          </div>

          {/* Center Section - Social Icons */}
          <div className='flex gap-4'>
            <a
              href='https://github.com/Arivazhagan-cell'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full transition-all duration-300 hover:scale-110'
              style={{
                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                color: darkMode ? '#d1d5db' : '#1f2937'
              }}
              aria-label='GitHub'
            >
              <FaGithub className='text-lg' />
            </a>
            <a
              href='https://www.linkedin.com/in/arivazhaganr07/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full transition-all duration-300 hover:scale-110'
              style={{
                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                color: darkMode ? '#d1d5db' : '#1f2937'
              }}
              aria-label='LinkedIn'
            >
              <FaLinkedin className='text-lg' />
            </a>
            {/* <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full transition-all duration-300 hover:scale-110'
              style={{
                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                color: darkMode ? '#d1d5db' : '#1f2937'
              }}
              aria-label='Twitter'
            >
              <FaTwitter className='text-lg' />
            </a> */}
          </div>

          {/* Right Section - Copyright */}
          <p
            className='text-sm text-center md:text-right'
            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
          >
            © {currentYear} Made with{' '}
            <span style={{ color: '#ef4444' }}>❤️</span> by{' '}
            <span style={{ color: '#f97316' }} className='font-semibold'>
              Arivazhagan
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer