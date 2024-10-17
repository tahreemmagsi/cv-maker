import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p 
    className="mt-2 text-gray-700" 
    style={{ 
      wordWrap: 'break-word', 
      wordBreak: 'break-all', 
      overflowWrap: 'break-word',
      whiteSpace: 'normal'
    }}>
{resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview