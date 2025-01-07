'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

export default function Demo() {
  const [file, setFile] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleAnalyze = () => {
    setAnalyzing(true)
    // Simulating analysis delay
    setTimeout(() => {
      setResults({
        name: file.name,
        quality: 'Good',
        issues: ['Minor cracks detected', 'Slight unevenness observed']
      })
      setAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Demonstration</h2>
      {!results ? (
        <div
          {...getRootProps()}
          className={`flex-grow flex items-center justify-center border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all ${
            isDragActive ? 'border-accent bg-accent/10' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <div>
              <p className="mb-4">Selected file: {file.name}</p>
              <button
                onClick={handleAnalyze}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Analyze
              </button>
            </div>
          ) : (
            <p>Drag and drop an image here, or click to select a file</p>
          )}
        </div>
      ) : analyzing ? (
        <LoadingAnimation />
      ) : (
        <Results results={results} onBack={() => setResults(null)} />
      )}
    </div>
  )
}

const LoadingAnimation = () => (
  <div className="text-center">
    <p className="text-2xl animate-pulse">Fetching results...</p>
  </div>
)

const Results = ({ results, onBack }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">{results.name}</h3>
      <button 
        onClick={onBack} 
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Back
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Image src="/placeholder.svg" alt="Uploaded Image" width={400} height={300} className="rounded-lg" />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Analysis Results</h4>
        <p className="mb-2">Road Quality: {results.quality}</p>
        <h5 className="font-semibold mb-1">Detected Issues:</h5>
        <ul className="list-disc list-inside">
          {results.issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

