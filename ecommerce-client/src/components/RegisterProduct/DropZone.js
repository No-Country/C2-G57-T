import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export const Dropzone = ({ setFileUpload, fileUpload, handleUploadImage }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (fileUpload.length > 4) {
      setFileUpload([]);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUpload]);

  //get image
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setFileUpload((current) =>
        current.concat({
          type: "image",
          file: file,
          preview: URL.createObjectURL(file),
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png , image/webp",
    noKeyboard: true,
    multiple: true,
    maxFiles: 4,
    onDrop,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className='dropzone'
        style={fileUpload[0] && { border: 0 }}
      >
        <input {...getInputProps()} />
        {!fileUpload.length > 0 ? (
          isDragActive ? (
            <p>Suelte la imagen aqui</p>
          ) : (
            <p className="text-dropzone">
              Arrastre la imagen principal aqui, o haga click para
              seleccionar un archivo
            </p>
          )
        ) : null}

        {fileUpload.some((img) => img.type === "image") && (
          <>
            <div className='content-image'>
              {fileUpload.map((img) => (
                <div
                  style={{ backgroundImage: `url("${img.preview}")` }}
                  className='image'
                  key={img.preview}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="end-dropzone">
        {error && (
          <p className='alert alert-danger text-center'>No puedes colocar mas de 4 imagenes</p>
        )}
        {fileUpload.some((img) => img.type === "image") && (
          <button
            className='generalButton button-dropzone'
            onClick={() => handleUploadImage(fileUpload)}
          >
            Subir a la tienda
          </button>
        )}
      </div>
      
    </>
  );
};
