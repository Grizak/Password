document.addEventListener('DOMContentLoaded', function() {
  const password = {
    passwordInput: document.getElementById('input'),
    passwordInputValue: '',
    passwordfunc: function() {
      this.passwordInputValue = this.passwordInput.value.trim();

      if (this.passwordInputValue === 'Password') {
        document.getElementById('p').textContent = 'Password Is Incorrect';
        this.passwordInput.value = '';
      } else if (this.passwordInputValue === 'Incorrect') {
        document.getElementById('p').textContent = 'Please Try Again';
        this.passwordInput.value = '';
      } else if (this.passwordInputValue === 'Again') {
        document.getElementById('p').textContent = 'Please Try Again Later';
        this.passwordInput.value = '';
      } else if (this.passwordInputValue === 'Again Later') {
        toggleFullscreen(image);
      } 
    }
  };

  password.passwordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      password.passwordfunc();
    }
  });

  const image = document.getElementById('image');

  const toggleFullscreen = (element) => {
    if (!document.fullscreenElement) {
        document.getElementById('p').textcontent = 'Please Enter Password'
        document.getElementById('input').value = ''
      element.classList.add('fullscreen');
      element.style.visibility = 'visible';
      element.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen().then(() => {
        element.classList.remove('fullscreen');
        element.style.visibility = 'hidden';
      }).catch(err => {
        alert(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      image.classList.remove('fullscreen');
      image.style.visibility = 'hidden';
    }
  });
});
