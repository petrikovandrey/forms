const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const elem = document.querySelector('.popover');
  if (elem != null) {
    elem.remove();
  } else {
    btn.insertAdjacentHTML('beforebegin', '<div class="popover"><div class="arrow" style="top: 34px;"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here\'s some amazing content. It\'s very engaging. Right?</div></div>');
  }
});
