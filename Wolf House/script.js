var cards = [
    {
        imgUrl: 'img/bord_whit.png',
        title: ' Niche: Nightshade Snowboard - Women\'s - 2019/2020 ',
        newPrice: '398.93',
        oldPrice: '499.00'
    }
]
var ul = document.querySelector('.product_card ul');
var htmlStr = '';
for(i=0; i<cards.length; i++) {
    htmlStr += ` <li><img src="${cards[i].imgUrl}" alt="bord_blak"></li>
    <li><p> ${cards[i].title}</p></li>
    <li><p>$ ${cards[i].newPrice}</p></li>
    <li><p>$ ${cards[i].oldPrice}</p></li>
    <li>
        <ul>
            <li><img src="img/Star.png" alt="Star"></li>
            <li><img src="img/Star.png" alt="Star"></li>
            <li><img src="img/Star.png" alt="Star"></li>
            <li><img src="img/Star.png" alt="Star"></li>
            <li><img src="img/Star (1).png" alt="Star"></li>
        </ul>
    </li>`
    
};
ul.innerHTML=htmlStr

