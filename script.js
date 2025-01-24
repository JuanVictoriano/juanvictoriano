const photoUpload = document.getElementById('photo-upload');
const profilePic = document.getElementById('profile-pic');

photoUpload.addEventListener('change', function() {
  const reader = new FileReader();
  reader.onload = function(e) {
    profilePic.src = e.target.result;
  };
  reader.readAsDataURL(this.files[0]);
});