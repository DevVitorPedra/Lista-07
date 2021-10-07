import React, { useState } from 'react'

import { firstExe, secondExe, forthExe, fifthExe, sixthExe, seventhExe, eighthExe,ninethExe } from './answers'
export default function Resolution() {
    const [text, setText] = useState([])
    const [text2, setText2] = useState([])
    const [text3, setText3] = useState([])
    const [text4, setText4] = useState([])
    


    const updateText = (props) => {
        setText2([])
        setText3([])
        setText4([])
        setText(props)
    }
    const exe1 = () => {
        updateText(firstExe)
    }
    const exe2 = () => {
       
        updateText(secondExe)
    }
   const thePromise1 = () => {
       return new Promise(res=>{
        
            res("Successful callback")
       })
   }
   const thePromise2 = (value) => {
        return new Promise((res, rej)=>{
            if(value===1) {
                res("Successful callback")
            }else {
                rej("unsuccessful callback")
            }
        })
   }
   const thePromise3 = () => {
       return new Promise(res=>{
           res("Hello world, after 5 seconds")
       })
   }
   const thePromise4 = (value) => {
       return new Promise((res, rej)=>{
        if (value===0) {
            res("Successul callback")
        }else {
            rej("Ops, caught on catch! 2 seconds later!")
        }
       })
        
   }
   

   const exe3 = () => {
      
       thePromise1().then(res=>{
           updateText(<div><h1>Exercício 3</h1>{res}</div>)
       })
       thePromise2(2).then().catch(erro=>{
           setText2(<div>{erro}</div>)
       })
       thePromise3().then(res=>{
           setTimeout(()=>{
               setText4(<div>{res}</div>)
           },5000)
       })
       thePromise4(3).then().catch(erro=>{
           setTimeout(()=>{
               setText3(<div>{erro}</div>)
           },2000)
       })
   }
   
   const exe4 = () =>{
       setText2([])
       setText3([])
       setText4([])
    const promise = new Promise((callbackum, callbackdois)=>{
        callbackdois("Is this value a Res or a Rej???")
   })
                promise.then(res=>{
                    setText(res)
                }).catch(erro=>{
                    setText(forthExe)
                })
            
                
   }
   const exe5 = () => {
        updateText(fifthExe)
   }
   const exe6 = () => {
       updateText("please, wait 3 seconds")
   

     new Promise((res,rej)=>{
         res(sixthExe)
     }).then((res)=>{setTimeout(()=>{
        updateText(res)
     },3000)})

   }
   const url = 'https://swapi.dev/api/people/4/'
   const exe7 = () => {
    
    fetch(url).then(res=>{
       return res.json()
    })
    .then(res=>{
      let name = res.name
        updateText(<div>{seventhExe}{name}</div>
            )
    })

}

async function exe8() {
        const text6 = await exe6()

        updateText(<div>{eighthExe}{text6}</div>)
}
async function exe9(){
    await fetch(url).then(response=>{
        return response.json()
    }).then(res=>{
        let name = res.name
        updateText(<div>{ninethExe}{name}</div>)
    })
}
const url2 = 'https://swapi.dev/api/films/'
async function exe10 (){
    let movies = []
    movies.push(<h1>Exercício 10</h1>)
    await fetch(url2).then(response=>{
        return response.json()
    })
    .then(res =>{
       movies =  res.results.map(element => {
            return <p>{element.title}</p>
         
        });
    })

    updateText(<div><h1>Exercício 10</h1>{movies}</div>)
  
}
    return (
        <div className="resolution">
            <div className="nav-menu">
                <button className="exercise-btn" onClick={exe1} >Exercício 1</button>
                <button className="exercise-btn" onClick={exe2} >Exercício 2</button>
                <button className="exercise-btn" onClick={exe3} >Exercício 3</button>
                <button className="exercise-btn" onClick={exe4}>Exercício 4</button>
                <button className="exercise-btn" onClick={exe5}>Exercício 5</button>
                <button className="exercise-btn" onClick={exe6}>Exercício 6</button>
                <button className="exercise-btn" onClick={exe7}>Exercício 7</button>
                <button className="exercise-btn" onClick={exe8}>Exercício 8</button>
                <button className="exercise-btn" onClick={exe9}>Exercício 9</button>
                <button className="exercise-btn" onClick={exe10}>Exercício 10</button>
            </div>
            <div className="text-res">
                {text} 
                <br></br>
                {text2}
                <br></br>
                {text3}
                <br></br>
                {text4}
                
                
            </div>

        </div>
    )
}
