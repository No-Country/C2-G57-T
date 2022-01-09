export const fileUpload = async (file) => {
  const cloudURL = "https://api.cloudinary.com/v1_1/dv4vmjrui/upload";
  const formData = new FormData();

  const cloudiResp = [];

  for (let index = 0; index < file.length; index++) {
    const element = file[index];
    console.log("ele", element);

    formData.append("upload_preset", "ecommers");
    formData.append("file", element.file);

    try {
      const resp = await fetch(cloudURL, {
        method: "POST",
        body: formData,
      });

      if (resp.ok) {
        const cloudResp = await resp.json();
        cloudiResp.push(cloudResp);
        // return cloudResp;
      } else {
        throw await resp.json();
      }
    } catch (error) {
      return console.log(error);
    }
  }
  return cloudiResp;
  
};
