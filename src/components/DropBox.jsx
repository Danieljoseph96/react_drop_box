import React from 'react';
import { useDropzone } from 'react-dropzone';

const DropBox = () => {
  const [files, setFiles] = React.useState([]);

  const handleDrop = (acceptedFiles) => {
    console.log("Dropped files: ", acceptedFiles);
    const formData = new FormData();

    // Append multiple files
    acceptedFiles.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });

    // Send to backend
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Files uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      })
      .catch((error) => console.error('Error uploading:', error));

    // Set file previews
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: handleDrop,
      accept: { 'image/*': [] }, // Accept only image files
      multiple: true,
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
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop image files here, or click to select files</p>
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
    </div>
  );
};

export default DropBox;
