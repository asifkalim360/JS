const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (btn){
    console.log(btn)
    btn.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)

switch (e.target) {
    case green:
        body.style.backgroundColor = e.target.id;
        break;
    case blue:
        body.style.backgroundColor = e.target.id;
        break; 
    case red:
        body.style.backgroundColor = e.target.id;
        break;
    case grey:
        body.style.backgroundColor = e.target.id;
        break;
    case purple:
        body.style.backgroundColor = e.target.id;
        break;
    default:
    console.log("please select your right color code!!!")
    break;
}

        // if(e.target.id === 'green')
        // {
        //     // body.style.backgroundColor = "green"
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'blue')
        // {
        //     // body.style.backgroundColor = "blue"
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'red')
        // {
        //     // body.style.backgroundColor = "red"
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'grey')
        // {
        //     // body.style.backgroundColor = "grey"
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'purple')
        // {
        //     // body.style.backgroundColor = "purple"
        //     body.style.backgroundColor = e.target.id
        // }
    })
})