/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
const readmoreBtn = document.querySelector('.readmore_btn');
const text = document.querySelector('.text');
readmoreBtn.addEventListener('click', e => {
  text.classList.toggle('show-more');
  if (readmoreBtn.innerHTML === '<i className="fa fa-plus"></i> Read More') {
    readmoreBtn.innerHTML = '<i className="fa fa-minus"></i> Read Less';
  } else {
    { readmoreBtn.innerHTML = '<i className="fa fa-plus"></i> Read More'; }
  }
})