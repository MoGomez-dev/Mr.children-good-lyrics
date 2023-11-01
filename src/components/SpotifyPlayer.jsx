import React from 'react'
import Iframe from 'react-iframe'

export const SpotifyPlayer = ({url}) => {
  return (
    <div>
        <Iframe 
            style={{borderRadius:"12px"}} 
            src={url} 
            width="100%" 
            height="82" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </Iframe>
    </div>
  )
}
