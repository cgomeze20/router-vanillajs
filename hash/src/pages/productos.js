export function Productos(){
const html = `
<div>
<h1>Productos</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, a. Dicta ea et numquam non sunt nostrum accusamus ratione. Porro minus perferendis facilis ipsa aliquid, modi doloribus possimus laborum exercitationem quo doloremque earum quis laboriosam, commodi atque officia? Dolorem voluptate tempore, ex culpa iste veritatis reprehenderit? Illum labore vero nobis fugit quisquam! Corporis nostrum repellat temporibus, mollitia esse et aliquam ipsum, delectus impedit quaerat rerum vitae, ex ratione quia expedita libero. Tempore temporibus quidem nesciunt repudiandae in? Optio, voluptate aliquid minima molestiae voluptatibus nulla atque tempora eaque incidunt itaque rem dolor iste distinctio magnam similique repellendus ad sequi. Corporis ut eveniet cumque omnis earum fugiat nobis quaerat quia aperiam aspernatur numquam suscipit vero quas accusantium magni, doloremque fuga deleniti temporibus! Sed rem nostrum et, deserunt aliquid voluptates dolor ratione ullam quia molestiae voluptas esse repudiandae minima ipsam aliquam aperiam similique dolores animi unde officia minus voluptatibus. Earum corrupti omnis officiis labore laboriosam vel aliquam obcaecati, quidem unde ad nisi voluptas possimus cum inventore eum ullam quod iusto voluptatum iste sapiente temporibus iure explicabo atque perferendis? Rerum quia tempora unde doloribus consectetur vel deserunt. Ut dignissimos voluptatibus voluptas tempora totam cupiditate, facilis, officia aliquam, itaque facere doloribus! Nesciunt, asperiores voluptate impedit quis quod ad accusantium ipsa similique praesentium a totam laudantium. Veritatis ad ipsam amet, laudantium molestiae recusandae debitis corporis iure rerum ea perspiciatis eos enim illo illum? Voluptates voluptas eveniet nesciunt dolorum, blanditiis tempore doloremque optio, dolore autem modi quod quidem omnis, praesentium rerum provident pariatur. Dicta doloremque incidunt dolore recusandae cupiditate libero amet optio illum nemo facilis consequuntur officiis quibusdam natus esse ipsa laboriosam odio possimus harum, perferendis quisquam ea quasi dolorum? Tempora perspiciatis modi vero sequi nihil veniam vel ad obcaecati velit deleniti in adipisci sapiente iste eos enim magnam atque, id provident dolore totam nobis? Minus, illo.</p>

<a class="products-back" href="#/">Volver</a>
<button id="btn">Click me!</button>
</div>
`
return { html }
}

export function js() {
    document.getElementById("btn").addEventListener("click" , () => {
        alert("Click me!");
    })
}