

/*
*********************************************
---------------------------------------------


Hello Guys! Here's a new design from me! You can find all my games here and can also enjoy playing them! Hope you'll like the design and the games! 
            Best wishes
            -- Arb
            Date : 05 - 10 - 2019


*********************************************
---------------------------------------------

*/




let information = {
    names : [
        'Infinity War',
        'Leap To Live 3.0',
        'Fighting Mania',
        'Ludo AI',
        'Space Shooter',
        'Ninja Run',
        'Leap To Live 2.0',
        'Key To Lead',
        'Won the Throne',
        'Trap the Crab',
        'Leap To Live 1.0',
        'Sky Run',
        'Crazy Car',
        'Bubble Shoot'
    ],
    
    links : [
    
        'https://code.sololearn.com/Wb5XrF1EVq2q/?ref=app',
    
        'https://code.sololearn.com/WFVvBVOTR9TY/?ref=app',
        'https://code.sololearn.com/WIrh0AVgKuyN/?ref=app',
        'https://code.sololearn.com/W7E4tmz96ak9/?ref=app',
        'https://code.sololearn.com/WXwwVAAa4aqH/?ref=app',
        'https://code.sololearn.com/WuC8F3Qyl9LC/?ref=app',
        'https://code.sololearn.com/Wn2kS53Yhwdm/?ref=app',
        'https://code.sololearn.com/W3xVN9374dSn/?ref=app',
        'https://code.sololearn.com/W3w8iJaHLl8S/?ref=app',
        'https://code.sololearn.com/W1fGU6U2Rcpd/?ref=app',
        'https://code.sololearn.com/WdY6C9t0ezdj/?ref=app',
        'https://code.sololearn.com/WzMRLkRGjmND/?ref=app',
        'https://code.sololearn.com/WQbDsfT63RYl/?ref=app',
        'https://code.sololearn.com/W6KFv9QNlkdk/?ref=app'
    ],
        

    
    imageLinks : [
        'https://i.ibb.co/KGQKv0B/Infinity-war.jpg',
        'https://i.ibb.co/C1kGn12/ltl3.jpg',
        'https://i.ibb.co/DK7ZprT/fighting-Mania.jpg',
        'https://i.ibb.co/FJkYg2H/ludo.jpg',
        'https://i.ibb.co/z75577c/spaceshooter.jpg',
        'https://i.ibb.co/Dr8jS9J/ninjarun.jpg',
        'https://i.ibb.co/8Yndtj7/ltl2.jpg',
        'https://i.ibb.co/Zx7nPsc/keytolead.jpg',
        'https://i.ibb.co/pyf0sMx/wonthethrone.jpg',
        'https://i.ibb.co/Mc2xVMt/trapthecrab.jpg',
        'https://i.ibb.co/q5vZrjB/ltl1.jpg',
        'https://i.ibb.co/7KBgxZH/skyrun.jpg',
        'https://i.ibb.co/RBMj9Ry/crazycar.jpg',
        'https://i.ibb.co/zFzHZfd/bubble.jpg'
    ],
    
    
    keywords : [
        'Fighting',
        'Racing',
        'Fighting',
        'Arcade',
        'Shooting',
        'Running',
        'Racing',
        'Arcade',
        'Running',
        'Running',
        'Racing',
        'Running',
        'Racing',
        'Shooting'
        
    ]
    
    
}

let upvotes = ['👍 224', '👍 163', '👍 422','👍 230', '👍 223', '👍 217','👍 190', '👍 165', '👍 260', '👍 216', '👍 327', '👍 339', '👍 187', '👍 14'];


let colors = ['#5CBBEB', '#FC2750', '#626EBD', '#3C4784', '#FB8443', '#04BCA4', '#916EBA', '#04947C', '#EB6C93'];


window.onload = () => {
    
    let gnElem = document.getElementsByClassName('game-name');
    let upElem = document.getElementsByClassName('upvote'); 
    let linkElem = document.getElementsByClassName('glink');
    
    let key = document.getElementsByClassName('game-img');
    
    let ginfElem = document.getElementsByClassName('g-play');
    
    
    loader_div.style.display = 'none';
    document.body.style.overflow = 'scroll';
    
    
    for (let i = 0; i < gnElem.length; i++){
        gnElem[i].innerText = information.names[i];
    }
    
    for (let i = 0; i < upElem.length; i++){
        upElem[i].innerText = upvotes[i];
    }
    
    for (let i = 0; i < key.length; i++){
        key[i].innerText = information.keywords[i];
    }
    
    for (let i = 0; i < linkElem.length; i++){
        linkElem[i].setAttribute('href', information.links[i]);
    }
    
    for (let i = 0; i < ginfElem.length; i++){
        ginfElem[i].style.background = colors[Math.floor(Math.random() * colors.length)];
    }
    
    
    open_menu.addEventListener('click', () => {
        sidebar.style.clipPath = 'circle(110vw at 100% 0%)';
        hidden_div.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        
        
        
        
        setTimeout(() => {
            
            let items = document.getElementsByClassName('item');
            let tops = ['15%', '25%', '35%', '45%', '55%'];
        
            for (let i = 0; i < items.length; i++){
                items[i].style.top = tops[i];
        }
        
        
        }, 800);
        
        
    });
    
    hidden_div.addEventListener('click', () => {
        sidebar.style.clipPath = 'circle(0vw at 100% 0%)';
        hidden_div.style.display = 'none';
        document.body.style.overflow = 'scroll';
        
        
        let items = document.getElementsByClassName('item');
        
        
            for (let i = 0; i < items.length; i++){
                items[i].style.top = '5%';
        }
        
    
        
    });
    
    
    
    
    
    
    
    
}



window.onscroll = () => {
    
    let ws = window.pageYOffset;
    
    
    let gnElem = document.getElementsByClassName('game-img');
    let gfElem = document.getElementsByClassName('game-inf');
    
    let ih = document.getElementsByClassName('icon-holder');
    let tt = document.getElementsByClassName('title-tri');
    
    
    for (let i = 0; i < gnElem.length; i++){
        if (ws > gnElem[i].offsetTop - gnElem[i].offsetHeight*3){
            gnElem[i].style.left = '0';
            gfElem[i].style.left = '0';
            
        }
        else
        {
            gnElem[i].style.left = '-50vw';
            gfElem[i].style.left = '60vw';
        }
    }
    
    
    for (let i = 0; i < ih.length; i++){
        if (ws > ih[i].offsetTop - ih[i].offsetHeight*5){
            ih[i].style.transform = 'rotate(-360deg)';
            tt[i].style.top = '35px';
        }
        else
        {
            ih[i].style.transform = 'rotate(360deg)';
            tt[i].style.top = '5px';
        }
    }
    
    
    let project = document.getElementsByClassName('project');
    let pt = document.getElementsByClassName('p-t');
    
    
    for (let i = 0; i < project.length; i++){
        if (ws > project[2].offsetTop - project[i].offsetHeight*3){
            project[i].style.clipPath = 'inset(0%)';
        }
        else
        {
            project[i].style.clipPath = 'inset(40%)';
        }
    }
    
    for (let i = 0; i < pt.length; i++){
        if (ws > pt[i].offsetTop - pt[i].offsetHeight*4){
            pt[i].style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
        }
        else
        {
            pt[i].style.clipPath = 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)';
        }
    }
    
    if (ws > web.offsetTop){
        webIcon.style.transform = 'rotate(360deg)';
    }
    else
    {
        webIcon.style.transform = 'rotate(0deg)';
    }
    
    
    
}



