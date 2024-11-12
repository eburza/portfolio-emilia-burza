import { useState } from 'react'
import { X } from 'lucide-react'

export default function ProjectImageViewer({ src, alt }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="project-image-viewer">
            <div 
                className="image-container"
                onClick={() => setIsModalOpen(true)}
            >
                <img 
                    src={src} 
                    alt={alt} 
                    className="preview-image"
                />
                <div className="hover-overlay">
                    <span className="expand-text text-paragraph-s">
                        Click to expand
                    </span>
                </div>
            </div>

            {isModalOpen && (
                <div 
                    className="modal-overlay"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div 
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            className="close-button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X />
                        </button>
                        <div className="modal-image-container">
                            <img 
                                src={src} 
                                alt={alt}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}