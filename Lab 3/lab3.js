const observable1 = Rx.Observable.create( observer => {
    observer.next( 'hello')
    observer.next('world')


})

observable1.subscribe (val => print(val))


const clicks = Rx.Observable.fromEvent(document, 'click')
clicks.subscribe(click => console.log(click))


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('resolved!')
    }, 1000)

}); 


const obsvPromise = Rx.Observable.fromPromise(promise)

obsvPromise.subscribe(result => print(result))

//use for countdown timer in Question part 2

//const interval = Rx.Observable.interval(1000)
//
//interval.subscribe( int => print( new Date().getSeconds() ))


//nice bitta cyode there

const cold = Rx.Observable.create( observer => {
    observer.next( Math.random() )

});


cold.subscribe(a => print(`Subscriber A: ${a}`))
cold.subscribe(b => print(`Subscriber B: ${b}`))


const hot = cold.publish()

hot.subscribe(c => print(`Subscriber C: ${c}`))
hot.subscribe(d => print(`Subscriber d: ${d}`))
hot.connect()



//const x = Math.random()

//const hot = Rx.Observable.create( observer => {
//    observer.next( x )
//
//});

//hot.subscribe(c => print(`Subscriber C: ${c}`))

//filter for postive numbers

const numbers = Rx.Observable.of(-3, 5, 7, 2, 9, -2)

numbers
        //.filter(n => n >= 0)
        .first( )// first element
       // .last( )//last element 
        .subscribe(n => print(n))

let mouseEvents = Rx.Observable.fromEvent(document,'mousemove')

mouseEvents
           // .throttleTime(1000) //first event
            .debounceTime(1000) //last event
            .subscribe(e => print(e.type))


clicks
        .map(e => parseInt(Math.random() * 10))
        .do(score => print(`Click scored +${score}`))
        .scan((highScore, score) => highScore + score)
        .subscribe(highScore => print(`High score ${highScore}`))


//seems like good code

const names = Rx.Observable.of('Bob', 'Jeff', 'Doug', 'Steve')

names  
        .takeWhile(name => name != 'Doug')
        .finally(()=> print(`Complete! I found Doug`))
        .subscribe(i => print(i))



const yin = Rx.Observable.of('Peanut butter', 'Wine', 'Rainbows')

const yang = Rx.Observable.of('Jelly', 'Cheese', 'Unicorns')

const combo = Rx.Observable.zip(yin, yang)
combo.subscribe(arr=> print(arr))


const yim = Rx.Observable.of('Peanut butter', 'Wine', 'Rainbows')

const yam = Rx.Observable.of('Jelly', 'Cheese', 'Unicorns').delay(2000)

const combo1 = Rx.Observable.forkJoin(yim, yam)
combo1.subscribe(arr1=> print(arr1))

const goodtimes = Rx.Observable.create( observer => {
    observer.next('good')
    observer.next('great')
    observer.next('grand')
//throw('catch me!')
    observer.next('wonderful')

})

goodtimes
        .catch(err => print(`Error Caught: ${err}`))
        .retry(2)
        .subscribe( val => print(val))

const subject1 = new Rx.Subject()

const subf = subject1.subscribe( val => print(`Sub f ${val}`))
const subg = subject1.subscribe( val => print(`Sub g ${val}`))

subject1.next('Hello')

setTimeout(()=> {
    subject1.next('World')
}, 1000)


///helper

function print(val){
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}