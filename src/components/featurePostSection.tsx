import React from 'react';
import Image from 'next/image';

const FeaturePostSection = () => {
  return (
    <div>
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                  {/* Header Section */}
                  <div className="text-center mb-12 max-w-3xl mx-auto">
                    <p className="text-blue-500 text-sm font-semibold uppercase">
                      Practice Advice
                    </p>
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                      Featured Posts
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                      Problems trying to resolve the conflict between the two major
                      realms of Classical physics: Newtonian mechanics.
                    </p>
                  </div>
        
                  {/* Posts Grid Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* First Post */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative w-full h-56">
                        <Image
                          src="/images/post1.jpg"
                          alt="Post 1"
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                          New
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          Google Trending New
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Loudest &#224; la Madison #1 (L&#39;integral)
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          We focus on ergonomics and meeting you where you work.
                          It&#39;s only a keystroke away.
                        </p>
                        <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 text-gray-400 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                              </svg>
                              22 April 2021
                            </span>
                            <span>|</span>
                            <span>10 comments</span>
                          </div>
                          <a
                            href="#"
                            className="text-blue-500 font-semibold hover:underline"
                          >
                            Learn More →
                          </a>
                        </div>
                      </div>
                    </div>
        
                    {/* Second Post */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative w-full h-56">
                        <Image
                          src="/images/post2.jpg"
                          alt="Post 2"
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                          New
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          Google Trending New
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Loudest &#224; la Madison #1 (L&#39;integral)
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          We focus on ergonomics and meeting you where you work.
                          It&#39;s only a keystroke away.
                        </p>
                        <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 text-gray-400 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                              </svg>
                              22 April 2021
                            </span>
                            <span>|</span>
                            <span>10 comments</span>
                          </div>
                          <a
                            href="#"
                            className="text-blue-500 font-semibold hover:underline"
                          >
                            Learn More →
                          </a>
                        </div>
                      </div>
                    </div>
        
                    {/* Third Post */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative w-full h-56">
                        <Image
                          src="/images/post3.jpg"
                          alt="Post 3"
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                          New
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          Google Trending New
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Loudest &#224; la Madison #1 (L&#39;integral)
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          We focus on ergonomics and meeting you where you work.
                          It&#39;s only a keystroke away.
                        </p>
                        <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="flex items-center">
                              <svg
                                className="h-4 w-4 text-gray-400 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                              </svg>
                              22 April 2021
                            </span>
                            <span>|</span>
                            <span>10 comments</span>
                          </div>
                          <a
                            href="#"
                            className="text-blue-500 font-semibold hover:underline"
                          >
                            Learn More →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
      
    </div>
  )
}

export default FeaturePostSection








