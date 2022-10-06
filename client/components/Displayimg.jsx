import React, { useEffect, useState } from 'react'
import { AdvancedImage } from '@cloudinary/react'

export default function Displayimg() {
  const [imageIds, setImageIds] = useState()
  const loadImages = async () => {
    try {
      const res = await fetch('/api/images')
      const data = await res.json()
      setImageIds(data)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    loadImages()
  }, [])
  return (
    <div>
      <h1 className="title">User gallery</h1>
      <div className="gallery">
        {imageIds &&
          imageIds.map((imageId, index) => (
            <AdvancedImage
              key={index}
              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
              publicId={imageId}
              width="300"
              crop="scale"
            />
          ))}
      </div>
    </div>
  )
}
