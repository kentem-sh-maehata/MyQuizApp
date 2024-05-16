{
  const lis = document.querySelectorAll('li')

  lis.forEach(li=>{
    li.addEventListener('click',()=>{
      if(li.classList.contains('correct'))
        li.classList.add('correct-style')
      else
        li.classList.add('incorrect-style')
    })
  })
}