import React from 'react';
import { useDropzone } from 'react-dropzone';

const DropBoxSingleButton = () => {
  const [files, setFiles] = React.useState([]);

  // Called when user selects/drops file
  const handleDrop = (acceptedFiles) => {
    if (!acceptedFiles.length) return;

    // Just store file and preview — don't upload yet
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  // Called only when "Upload" button is pressed
  const handleUpload = () => {
    if (files.length === 0) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', files[0]);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('File uploaded successfully!');
          setFiles([]);
        } else {
          alert('File upload failed.');
        }
      })
      .catch((error) => console.error('Error uploading:', error));
  };

  // ✅ Correct Dropzone setup
  const { getRootProps, getInputProps, isDragActive, isDragReject, open } =
    useDropzone({
      onDrop: handleDrop,
      accept: { 'image/*': [] },
      multiple: false,
      noClick: true,     // disable built-in click
      noKeyboard: true,  // disable space/enter
    });

  const additionalClass = isDragActive
    ? 'active'
    : isDragReject
    ? 'danger'
    : '';

  return (
    <div className="main-container">
      <div {...getRootProps({ className: `drop-box ${additionalClass}` })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag and drop an image here, or click “Select File”</p>
        )}
        {isDragReject && <p className="error">Unsupported file type...</p>}
      </div>

      <div className="preview-container">
        {files.map((file) => (
          <div key={file.name}>
            <img
              src={file.preview}
              alt="preview"
              width="200"
              style={{ margin: '10px' }}
            />
          </div>
        ))}
      </div>

      {/* ✅ This now opens the file dialog */}
      <button type="button" onClick={open}>
        Select File
      </button>

      <button
        type="button"
        style={{ marginLeft: '10px' }}
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default DropBoxSingleButton;
