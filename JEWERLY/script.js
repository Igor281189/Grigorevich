var cards = [
    {
        imgUrl: 'img/1.png',
        title: 'Кольцо обручальное из розового золота 104006',
        newPrice: '349.20 руб',
        oldPrice: '360.00 руб'
    },
    {
        imgUrl: 'img/1.png',
        title: 'Кольцо обручальное из розового золота 104006',
        newPrice: '349.20 руб',
        oldPrice: '360.00 руб'
    }
]
var ul = document.querySelector('.card ul');
var htmlStr = '';
for(i=0; i<cards.length; i++) {
    htmlStr += ` <li><img src="${cards[i].imgUrl}" alt=""></li>
    <li>
       <p>
       ${cards[i].title}
       </p> 
    </li>
    <li>
        <ul>
            <li>${cards[i].newPrice}</li>
            <li>${cards[i].oldPrice}</li>
        </ul>
    </li>`
    
};
ul.innerHTML=htmlStr