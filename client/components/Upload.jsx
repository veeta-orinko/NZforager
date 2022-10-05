import React, { useState } from 'react'

function Upload() {
  const [fileInputState, setFileInputState] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [previewSource, SetPreviewSource] = useState('')
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }
  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      SetPreviewSource(reader.result)
    }
  }
  const handleSubmitFile = (e) => {
    e.preventDefault()
    if (!previewSource) return
    uploadImage(previewSource)
  }

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage)
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-type': 'application/json' },
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <p>Add an identification photo to the image guide </p>
      <form onSubmit={handleSubmitFile} className="form">
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          {' '}
          Upload{' '}
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: '300px' }} />
      )}
    </div>
  )
}
export default Upload

// to do form-input & btn class in CSS
