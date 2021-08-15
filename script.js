const arrayOfParagraphs = ["<p>HOME THIS IS THE HOME SECTION Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sit esse aperiam magnam aut cupiditate. Veritatis nemo nobis ad obcaecati harum, voluptate voluptatem animi laudantium, quaerat unde cupiditate inventore similique fuga? Error quo sequi nam temporibus debitis perferendis, laborum nesciunt exercitationem non ipsam itaque nemo quam odio eum? Error eligendi maxime dolores quo, cumque soluta nihil, sunt eius optio, aspernatur earum consequatur recusandae deserunt vero at sapiente facilis tempora dignissimos.</p>"
,"<p>THIS IS THE FAQ's SECTION Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sit esse aperiam magnam aut cupiditate. Veritatis nemo nobis ad obcaecati harum, voluptate voluptatem animi laudantium, quaerat unde cupiditate inventore similique fuga? Error quo sequi nam temporibus debitis perferendis, laborum nesciunt exercitationem non ipsam itaque nemo quam odio eum? Error eligendi maxime dolores quo, cumque soluta nihil, sunt eius optio, aspernatur earum consequatur recusandae deserunt vero at sapiente facilis tempora dignissimos.</p>" 
, "<p>THIS IS THE HOW? SECTION Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sit esse aperiam magnam aut cupiditate. Veritatis nemo nobis ad obcaecati harum, voluptate voluptatem animi laudantium, quaerat unde cupiditate inventore similique fuga? Error quo sequi nam temporibus debitis perferendis, laborum nesciunt exercitationem non ipsam itaque nemo quam odio eum? Error eligendi maxime dolores quo, cumque soluta nihil, sunt eius optio, aspernatur earum consequatur recusandae deserunt vero at sapiente facilis tempora dignissimos.</p>" 
, "<p>THIS IS THE NEW? SECTION Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sit esse aperiam magnam aut cupiditate. Veritatis nemo nobis ad obcaecati harum, voluptate voluptatem animi laudantium, quaerat unde cupiditate inventore similique fuga? Error quo sequi nam temporibus debitis perferendis, laborum nesciunt exercitationem non ipsam itaque nemo quam odio eum? Error eligendi maxime dolores quo, cumque soluta nihil, sunt eius optio, aspernatur earum consequatur recusandae deserunt vero at sapiente facilis tempora dignissimos.</p>"];



const routerHeads = document.querySelectorAll(".head");
const body = document.getElementById('body');
routerHeads.forEach(e=>{
    e.addEventListener('click',()=>{
        body.innerHTML = arrayOfParagraphs[e.getAttribute('data-paragraph-num')]
    })
})
