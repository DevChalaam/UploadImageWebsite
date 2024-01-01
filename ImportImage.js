// Function upload image profile
const imageProfile = document.getElementById("image-profile"),
inputUploadfile = document.getElementById("inputUploadfile");

inputUploadfile.addEventListener("change", () => {
    imageProfile.src = URL.createObjectURL(inputUploadfile.files[0]);
});