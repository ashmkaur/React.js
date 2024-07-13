function customrender(reactElement,maincontaier){
    const donelement= document.createElement(reactElement.type)
    donelement.innerHTML= reactElement.children
    // donelement.setAttribute('href',reactElement.props.href)
    // donelement.setAttribute('target',reactElement.props.href)
    // maincontaier.appendChild(donelement)

    for(const prop in reactElement.props){
        if(prop==='children') continue;
        donelement.setAttribute(prop,reactElement.props[prop])
        maincontaier.appendChild(donelement)
    }
}

const reactElement={
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}

const maincontaier= document.querySelector('#root')

customrender(reactElement,maincontaier)