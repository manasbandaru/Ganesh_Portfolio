import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiDownload, 
  FiEye, 
  FiCheck, 
  FiAlertCircle,
  FiChevronDown,
  FiFile,
  FiFileText
} from 'react-icons/fi';
import { downloadResume, previewResume, getAvailableFormats, type ResumeFormat } from '../../utils/resumeService';
import Button from './Button';

interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showPreview?: boolean;
  showFormatSelector?: boolean;
  className?: string;
}

const ResumeDownload = ({ 
  variant = 'primary',
  size = 'md',
  showPreview = true,
  showFormatSelector = true,
  className = ''
}: ResumeDownloadProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [availableFormats, setAvailableFormats] = useState<ResumeFormat[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'docx'>('pdf');

  // Load available formats on component mount
  useEffect(() => {
    const loadFormats = async () => {
      try {
        const formats = await getAvailableFormats();
        setAvailableFormats(formats);
        
        // Set default format to the first available
        if (formats.length > 0) {
          setSelectedFormat(formats[0].format);
        }
      } catch (error) {
        console.error('Failed to load resume formats:', error);
        // Fallback to PDF
        setAvailableFormats([{
          format: 'pdf',
          label: 'PDF',
          mimeType: 'application/pdf',
          extension: 'pdf'
        }]);
      }
    };

    loadFormats();
  }, []);

  // Handle resume download
  const handleDownload = async (format?: 'pdf' | 'docx') => {
    const formatToUse = format || selectedFormat;
    
    setIsDownloading(true);
    setDownloadStatus('idle');
    setErrorMessage('');

    try {
      const result = await downloadResume(formatToUse);
      
      if (result.success) {
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      } else {
        setDownloadStatus('error');
        setErrorMessage(result.error || 'Download failed');
        setTimeout(() => setDownloadStatus('idle'), 5000);
      }
    } catch (error) {
      setDownloadStatus('error');
      setErrorMessage('An unexpected error occurred');
      setTimeout(() => setDownloadStatus('idle'), 5000);
    } finally {
      setIsDownloading(false);
      setShowDropdown(false);
    }
  };

  // Handle resume preview
  const handlePreview = () => {
    previewResume(selectedFormat);
  };

  // Get format icon
  const getFormatIcon = (format: 'pdf' | 'docx') => {
    return format === 'pdf' ? FiFile : FiFileText;
  };

  // Get button text based on status
  const getButtonText = () => {
    if (isDownloading) return 'Downloading...';
    if (downloadStatus === 'success') return 'Downloaded!';
    if (downloadStatus === 'error') return 'Try Again';
    return 'Download Resume';
  };

  // Get button icon based on status
  const getButtonIcon = () => {
    if (isDownloading) {
      return (
        <motion.div
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      );
    }
    if (downloadStatus === 'success') return <FiCheck className="w-4 h-4" />;
    if (downloadStatus === 'error') return <FiAlertCircle className="w-4 h-4" />;
    return <FiDownload className="w-4 h-4" />;
  };

  const selectedFormatData = availableFormats.find(f => f.format === selectedFormat);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center space-x-2">
        {/* Main Download Button */}
        <div className="relative">
          {showFormatSelector && availableFormats.length > 1 ? (
            <div className="flex">
              <Button
                variant={variant}
                size={size}
                onClick={() => handleDownload()}
                disabled={isDownloading}
                className="rounded-r-none border-r-0"
              >
                <span className="flex items-center space-x-2">
                  {getButtonIcon()}
                  <span>{getButtonText()}</span>
                </span>
              </Button>
              
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                disabled={isDownloading}
                className={`px-3 py-2 border rounded-r-lg transition-colors ${
                  variant === 'primary'
                    ? 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-white'
                    : 'bg-transparent hover:bg-slate-700 border-slate-600 text-slate-300'
                } ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FiChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ) : (
            <Button
              variant={variant}
              size={size}
              onClick={() => handleDownload()}
              disabled={isDownloading}
            >
              <span className="flex items-center space-x-2">
                {getButtonIcon()}
                <span>{getButtonText()}</span>
              </span>
            </Button>
          )}

          {/* Format Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50 min-w-[200px]"
              >
                <div className="p-2">
                  <div className="text-xs text-slate-400 mb-2 px-2">Choose Format:</div>
                  {availableFormats.map((format) => {
                    const IconComponent = getFormatIcon(format.format);
                    return (
                      <button
                        key={format.format}
                        onClick={() => {
                          setSelectedFormat(format.format);
                          handleDownload(format.format);
                        }}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                          selectedFormat === format.format
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-slate-700 text-slate-300'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm">{format.label}</span>
                        {selectedFormat === format.format && (
                          <FiCheck className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Preview Button */}
        {showPreview && (
          <Button
            variant="secondary"
            size={size}
            onClick={handlePreview}
            className="flex items-center space-x-2"
          >
            <FiEye className="w-4 h-4" />
            <span>Preview</span>
          </Button>
        )}
      </div>

      {/* Status Messages */}
      <AnimatePresence>
        {downloadStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 p-3 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-sm flex items-center space-x-2"
          >
            <FiCheck className="w-4 h-4" />
            <span>Resume downloaded successfully!</span>
          </motion.div>
        )}

        {downloadStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 p-3 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-sm flex items-center space-x-2 max-w-xs"
          >
            <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Format Indicator */}
      {selectedFormatData && showFormatSelector && (
        <div className="mt-2 text-xs text-slate-400 flex items-center space-x-1">
          {React.createElement(getFormatIcon(selectedFormatData.format), { className: "w-3 h-3" })}
          <span>Format: {selectedFormatData.label}</span>
        </div>
      )}
    </div>
  );
};

export default ResumeDownload;