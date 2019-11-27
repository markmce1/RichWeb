var checker = 0
start = document.getElementById('start')
Rx.Observable.fromEvent(start, 'click')
    .subscribe(e => clock())


function display(){
   
        if(seconds1.value == 0)
            {
                

                if(minutes1.value == 0)
                {
                    if(hours1.value != 0)
                    {
                        minutes1.value = 60
                        hours1.value = hours1.value - 1
                        
                    }
                }

                if(minutes1.value != 0)
                {
                seconds1.value = 59
                minutes1.value = minutes1.value - 1

                if(hours1.value != 0)
                {

                    minutes1.value = 59
                    hours1.value = hours1.value - 1
                    
                }
                }
                if(hours1.value >= 0 && minutes1.value >= 0 && seconds1.value >= 0){
                    checker = 1
                    return;
                }


            }
            seconds1.value = seconds1.value -1

    }
function clock(){
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')

    const hours1 = document.querySelector('#hours1')
    const minutes1 = document.querySelector('#minutes1')
    const seconds1 = document.querySelector('#seconds1')

    if(hours.value < 0)
    {
        hours.value = 0
    }
    if(minutes.value < 0)
    {
        minutes.value = 0
    }

    if(seconds.value < 0)
    {
        seconds.value = 0
    }



    hours1.value = hours.value
    minutes1.value = minutes.value
    seconds1.value = seconds.value

    hours.value = 0
    minutes.value = 0
    seconds.value = 0

    console.log(hours.value)
    console.log(minutes.value)
    console.log(seconds.value)



    const interval = Rx.Observable.interval(1000)
    if(checker != 1)
    {
    interval.subscribe( int => display() )
    if(checker == 1)
    {
        console.log('meme')
        interval.unsubscribe()
        console.log('meme')
    }
    }

}






function print(val){
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}