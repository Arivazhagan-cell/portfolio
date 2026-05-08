import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

function Contacts({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  emailjs
    .send(
      'service_84wbssa',
      'template_ooonr4y',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'F2zsTkWZ2OvhnnDa2'
    )
    .then(
      () => {
        setSubmitted(true)

        setFormData({
          name: '',
          email: '',
          message: ''
        })

        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      },
      (error) => {
        console.log(error)
        alert('Failed to send message')
      }
    )
}

  return (
    <section
      id='contact'
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className='relative py-24'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              webkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Get In Touch
          </h2>
          <p
            className='max-w-2xl mx-auto text-base sm:text-lg'
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Have any questions or want to collaborate? Feel free to reach out to me!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          {/* Contact Info Cards */}
          <div
            data-aos='fade-up'
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #e5e7eb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className='p-6 rounded-xl border hover:border-orange-500/50 transition-all duration-300'
          >
            <div className='flex items-start gap-4'>
              <div
                style={{ backgroundColor: darkMode ? '#374151' : '#f3f4f6' }}
                className='p-3 rounded-lg'
              >
                <FaPhone
                  style={{ color: '#f97316' }}
                  className='text-xl'
                />
              </div>
              <div>
                <h3
                  className='font-bold mb-2'
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  Phone
                </h3>
                <p style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                  +91 9159573630
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='100'
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #e5e7eb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className='p-6 rounded-xl border hover:border-orange-500/50 transition-all duration-300'
          >
            <div className='flex items-start gap-4'>
              <div
                style={{ backgroundColor: darkMode ? '#374151' : '#f3f4f6' }}
                className='p-3 rounded-lg'
              >
                <FaEnvelope
                  style={{ color: '#f97316' }}
                  className='text-xl'
                />
              </div>
              <div>
                <h3
                  className='font-bold mb-2'
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  Email
                </h3>
                <p style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                  rarivazhagan781@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='200'
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #e5e7eb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
            className='p-6 rounded-xl border hover:border-orange-500/50 transition-all duration-300'
          >
            <div className='flex items-start gap-4'>
              <div
                style={{ backgroundColor: darkMode ? '#374151' : '#f3f4f6' }}
                className='p-3 rounded-lg'
              >
                <FaMapMarkerAlt
                  style={{ color: '#f97316' }}
                  className='text-xl'
                />
              </div>
              <div>
                <h3
                  className='font-bold mb-2'
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  Location
                </h3>
                <p style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          data-aos='fade-up'
          style={{
            background: darkMode
              ? 'linear-gradient(to right, #1f2937, #111827)'
              : 'linear-gradient(to right, #ffffff, #e5e7eb)',
            borderColor: darkMode ? '#374151' : '#e5e7eb'
          }}
          className='max-w-2xl mx-auto p-8 rounded-xl border'
        >
          {submitted ? (
            <div
              className='text-center py-8'
              style={{ color: darkMode ? '#86efac' : '#22c55e' }}
            >
              <h3 className='text-xl font-bold mb-2'>Thank you!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  className='block text-sm font-medium mb-2'
                  style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                    color: darkMode ? '#d1d5db' : '#1f2937'
                  }}
                  className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-orange-500 transition-colors'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label
                  className='block text-sm font-medium mb-2'
                  style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                    color: darkMode ? '#d1d5db' : '#1f2937'
                  }}
                  className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-orange-500 transition-colors'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label
                  className='block text-sm font-medium mb-2'
                  style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                >
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  style={{
                    backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                    color: darkMode ? '#d1d5db' : '#1f2937'
                  }}
                  className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-orange-500 transition-colors resize-none'
                  placeholder='Your message...'
                />
              </div>

              <button
                type='submit'
                className='w-full py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgb(249,115,22,0.5)] transition-all duration-300'
                style={{
                  backgroundColor: '#f97316',
                  color: '#ffffff'
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacts