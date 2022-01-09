import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { fileUpload as fileforCloudi } from "../../helpers/fileUpload";

export const Dropzone = () => {
  const [fileUpload, setFileUpload] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (fileUpload.length > 4) {
      setFileUpload([]);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [fileUpload]);

  //get image
  const onDrop = useCallback((acceptedFiles) => {
    console.log("acceptedFiles", acceptedFiles);
    acceptedFiles.forEach((file) => {
      setFileUpload((current) =>
        current.concat({
          type: "image",
          file: file,
          preview: URL.createObjectURL(file),
        })
      );
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: true,
    maxFiles: 4,
    onDrop,
  });

  const handleUploadImage = async () => {
    try {
      const cloudiURL = await fileforCloudi(fileUpload);
      console.log("cloudiuRL", cloudiURL);
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <div className='container__page'>
      <div
        {...getRootProps()}
        className='dropzone '
        style={fileUpload[0] && { border: 0 }}
      >
        <input {...getInputProps()} />
        {!fileUpload.length > 0 ? (
          isDragActive ? (
            <p>Suelte la imagen aqui</p>
          ) : (
            <p>
              Arrastre la imagen aqui principal aqui, o haga click para
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
      {error && (
        <p className='banner__error'>No puedes colocar mas de 4 imagenes</p>
      )}
      {fileUpload.some((img) => img.type === "image") && (
        <button className='btn__upload' onClick={handleUploadImage}>
          Upload
        </button>
      )}
    </div>
  );
};
