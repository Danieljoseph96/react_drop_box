# 🗂️ React DropBox File Uploader

A simple and modern **drag-and-drop file uploader** built using **React** and **react-dropzone**.  
It supports multiple image uploads with live preview and backend upload via `fetch()`.

---

## 🧩 Overview

This project demonstrates how to build a drag-and-drop image uploader in React.  
It mainly includes **3 key parts**:

### 1️⃣ View (UI Design)
- Designed using **Bootstrap** or **custom CSS styles**.
- Provides a clean, responsive drag area.
- Displays image previews after dropping or selecting files.

### 2️⃣ Drop Function
- Uses the React library **[`react-dropzone`](https://react-dropzone.js.org/)**.
- Handles file selection, drag-and-drop, and preview generation.
- Supports multiple files and image filtering (`accept: { 'image/*': [] }`).

### 3️⃣ Backend Function
- Currently, the upload to backend is **not active**.  
- If you need backend upload:
  - Implement an API endpoint (Node.js, Django, Flask, etc.)
  - Enable upload using:
    ```js
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });
    ```
---

## 🚀 How to Run

1. **Clone the project**
   ```bash
   git clone https://github.com/<your-username>/react-dropbox-file-uploader.git
   cd react-dropbox-file-uploader

## 🚀 Features

✅ Drag & Drop or Click to upload files  
✅ Multiple/single file uploads supported  
✅ Image preview before uploading  
✅ FormData upload to backend (Node, Django, Flask, etc.)  
✅ Modern and responsive UI  
✅ Lightweight — built with functional components and hooks  

---

## 🛠️ Tech Stack

- **React.js** (Frontend)
- **react-dropzone** (Drag & Drop)
- **Fetch API** (File upload)
- **CSS / Tailwind / Bootstrap** (Styling — optional)

---

## 📦 Installation
 
Clone this repo and install dependencies:

```bash
git clone https://github.com/<your-username>/react-dropbox-uploader.git
cd react-dropbox-uploader
npm install
