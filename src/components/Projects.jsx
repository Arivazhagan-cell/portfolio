import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'

function Projects({ darkMode }) {
    const projects = [
        {
            id: 1,
            title: 'Instagram Clone',
            desc: 'A responsive Instagram-inspired social media UI built using React with modern components and clean user interface design.',
            image: project1,
            tags: ['React', 'CSS', 'JavaScript']
        },
        {
            id: 2,
            title: 'Online Course Webpage',
            desc: 'A responsive online learning platform webpage designed with modern layouts, course sections, and user-friendly interface.',
            image: project2,
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 3,
            title: 'Google Landing Page',
            desc: 'A clean and responsive Google homepage clone focused on layout accuracy and responsive web design.',
            image: project3,
            tags: ['HTML', 'Tailwind CSS']
        },
        {
            id: 4,
            title: 'Jobify',
            desc: 'A job portal web application interface for browsing and managing job listings with responsive modern UI components.',
            image: project4,
            tags: ['React', 'Css', 'Node.js', 'MongoDB']
        },
        {
            id: 5,
            title: 'Hospital Management',
            desc: 'A responsive hospital management web application designed to manage patient details, appointments, and hospital-related records with a user-friendly interface.',
            image: project5,
            tags: ['React', 'JavaScript', 'CSS', 'MongoDb']
        }

    ];
    return (
        <section
            id='projects'
            style={{ backgroundColor: darkMode ? 'bg-gray-800' : '#f9fafb' }}
            className='relative py-24'
        >
            <div className='text-center mb-10 ' data-aos='fade-up'>
                <h2
                    className='sm:text-3xl font-bold mb-3'
                    style={{ color: darkMode ? 'white' : '#1f2937' }}
                >My <span
                    style={{
                        background: 'linear-gradient(to right, #f97316,#f59e0b)',
                        webkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Projects

                    </span></h2>
                <p
                    className='max-w-xl mx-auto'
                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                    A showcase of my work
                </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((projects, index) => (
                    <div key={projects.id}
                        style={{
                            background: darkMode ? 'linear-gradient(to right, #1f2937,#111827)'
                                : 'linear-gradient(to right, #ffffff,#e5e7eb)'
                        }}
                        className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all '
                        data-aos='fade-up'
                        data-aos-delay={index * 100}>
                        <div
                            className='h-36 overflow-hidden rounded-t-xl '>
                            <img
                                src={projects.image}
                                alt={projects.title}
                                className='w-full h-full object-cover
                            group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>
                        <div className='p-4'>
                            <h3
                                className='text-lg font-bold mb-2'
                                style={{ color: darkMode ? 'white' : '#1f2937' }}
                            >
                                {projects.title}
                            </h3>
                            <p
                                className='text-sm mb-3'
                                style={{
                                    color: darkMode ? '#d1d5db' : '#6b7280'
                                }}
                            >
                                {projects.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {projects.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? '#d1d5db' : '#4b5563'
                                        }}
                                        className='px-2 py-1 text-xs rounded-full'
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>
                            <div className='flex gap-2'>
                                <a
                                    href='https://github.com/Arivazhagan-cell'
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? '#f9fafb' : '#1f2937'
                                    }}
                                    className='flex-1 flex items-center
                                justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                                transition-colors
                                ' data-aos='zoom-in'
                                    data-aos-delay='300'
                                >
                                    <FaGithub className='text-sm' />
                                    <span>Code</span>
                                </a>

                            </div>
                        </div>


                    </div>
                ))}
                 <div
                 className='text-center mt-10'>
                    <a
                                    href='https://github.com/Arivazhagan-cell'
                                    className='inline-flex items-center font-semibold
                                 gap-2 px-7 py-4 text-white text-sm rounded-full hover:opacity-90
                                transition-colors bg-amber-500 '
                                data-aos='zoom-in'
                                    data-aos-delay='400'
                                >
                                    <FaGithub className='text-sm' />
                                    <span>View All Projects</span>
                                    <FaExternalLinkAlt className='texxt-sm' />
                                </a>

                 </div>
            </div>
        </section>
    )
}

export default Projects