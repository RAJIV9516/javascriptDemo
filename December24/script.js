function fun(){
    let head = document.getElementsByTagName('h1')
    head[0].classList.add('head')
}

function fun1(){
    let head = document.getElementsByTagName('h1')
    head[0].classList.remove('head')

}

function fun2(){
    let head = document.getElementsByTagName('h1')
    head[0].classList.toggle('head')

}

// local storage
    // 1=setItem
    // 2=getItem
    // 3=removeItem
    // 4= clear

    localStorage.setItem("name","Js class");
    localStorage.setItem("age",19);

    let ag = localStorage.getItem('age')
    alert(ag)

    localStorage.removeItem('name');
    localStorage.clear()