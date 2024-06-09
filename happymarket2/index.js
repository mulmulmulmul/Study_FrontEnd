const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_modal = document.querySelector('#btn-modal');
const btn_close = document.querySelector('.btn-close');
const form = document.querySelector('form');
const submit = document.querySelector('.sign-up');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
// const input2 = document.querySelectorAll('input');
// const input2 = document.querySelector('.description-content input:nth-child(1)');
const input3 = document.querySelector("input[type='email']");

// [li 삭제 기능] -------------------------------------------------------
const deleteLi = (event) => {
  const target = event.target.parentElement;
  
  li_items = li_items.filter((item) => {
    return item.id != target.id;
  });

  storage_save();
  target.remove();
};

// [li 추가 기능] ------------------------------------------------
const addLi = (li_item) => {
  const li = document.createElement('li');
  ul.appendChild(li); 

  const span_content = document.createElement('span');
  span_content.innerText = li_item.content;

  const btn_cross = document.createElement('button');
  btn_cross.addEventListener('click', deleteLi);

  li.append(span_content, btn_cross);
  li.id = li_item.id;
}

let li_items = [];

const storage_save = () => {
  localStorage.setItem('li_items', JSON.stringify(li_items));
};

// [handler] ----------------------------------------------------
const handler = (event) => {
  event.preventDefault();

  if(input.value !== ''){ 
    const li_item = { 
      id: Date.now(), 
      content: input.value,
    };

    li_items.push(li_item); 
    addLi(li_item);
    storage_save();
  }
  input.value = '';
}

// [listener] ===================================================
submit.addEventListener('click', handler); 

// [모달] =======================================================
btn_modal.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
  /* [과제] 모달창 열면 이메일 입력창 초기화 ==================== */
  // let arr_input = Array.from(input2);
  // arr_input[1].value = '';
  // input2.value = '';
  input3.value = '';
});

const close_elements = [btn_close, overlay]

close_elements.forEach(element => {
  element.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});

// [초기화] ==========================================================
const init = () => {
  const local_storage_data = JSON.parse(localStorage.getItem('li_items'));

  if(local_storage_data){ 
    li_items = local_storage_data
    li_items.forEach(value => addLi(value)); 
  }
};

init(); 