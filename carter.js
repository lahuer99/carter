class Items{
	constructor(name){
		this.itemname=name
		this.qty=0;
		this.isStarred=false;
	}
}

const divitems=document.querySelectorAll('.items')

const cart=[]
// const 

const inititem=new Items(divitems[0].childNodes[1].innerHTML.trim())

divitems[0].objectelement=inititem;

const ullist=document.querySelector('#ullist')

const plus=document.querySelector('.plus')
// const minus=document.querySelector('#ullist .minus')
const qty=document.querySelector('.nos')
// const starred=document.querySelector('#ullist .starred')
const addNewItem=document.querySelector('#addnewitem button')

let nos=0;

// plus.addEventListener('click',(e)=>{
// 	e.stopPropagation();
// 	console.dir(e.target)
// },true)

ullist.addEventListener('click',function(e){
	if(e.target.className=='plus'){
		console.dir(e.target)
		// console.log(e.target.parentElement.parentElement.objectelement.qty++)
		e.target.parentElement.parentElement.objectelement.qty+=1
		// nos++;
		qty.innerHTML=e.target.parentElement.parentElement.objectelement.qty;
	}
	else if(e.target.className=='minus'){
		console.dir(e.target)
		// console.log(e.target.parentElement.parentElement.objectelement.qty--)
		e.target.parentElement.parentElement.objectelement.qty=e.target.parentElement.parentElement.objectelement.qty==0?0:e.target.parentElement.parentElement.objectelement.qty-1;
		// nos++;
		qty.innerHTML=e.target.parentElement.parentElement.objectelement.qty;
	}
	else if(e.target.className=='starred'){
		e.target.childNodes[0].classList.toggle('far')
		e.target.childNodes[0].classList.toggle('fas')
		console.log(e.target.parentElement.parentElement.objectelement.isStarred)
		e.target.parentElement.parentElement.objectelement.isStarred=!(e.target.parentElement.parentElement.objectelement.isStarred);
		console.log(e.target.parentElement.parentElement.objectelement.isStarred)
	}
})

// plus.addEventListener('click',()=>{
// nos++;
// qty.innerHTML=nos;
// })
// minus.addEventListener('click',()=>{
// nos=nos===0?nos:nos-1;
// qty.innerHTML=nos;
// })

// starred.addEventListener('click',()=>{
// document.querySelector('.starred i').classList.toggle('far')
// document.querySelector('.starred i').classList.toggle('fas')
// })




// clean up below and add objectelement as well as to array



// addNewItem.addEventListener('click',()=>{
// console.log('click')

// const newli=document.createElement('li')
// const cartlist=document.querySelector('#ullist')

// let newdiv=document.createElement('div')

// let itemsdiv=document.createElement('div')
// itemsdiv.classList.add('items')

// let itemnamediv=document.createElement('div')
// itemnamediv.classList.add('itemname')
// let newitemname=document.createTextNode('New Item')
// itemnamediv.append(newitemname)


// let qtydiv=document.createElement('div')
// qtydiv.classList.add('quantitydiv')

// let minusbutton=document.createElement('button')
// minusbutton.classList.add('minus')
// let minusi=document.createElement('i')
// minusi.classList.add('fas','fa-minus')
// minusbutton.append(minusi)

// let spannos=document.createElement('span')
// let spantext=document.createTextNode('0')
// spannos.append(spantext)
// spannos.classList.add('nos')


// let plusbutton=document.createElement('button')
// plusbutton.classList.add('plus')
// let plusi=document.createElement('i')
// plusi.classList.add('fas','fa-plus')
// plusbutton.append(plusi)

// qtydiv.append(minusbutton)
// qtydiv.append(spannos)
// qtydiv.append(plusbutton)


// let removediv=document.createElement('div')
// removediv.classList.add('removediv')

// let removebutton=document.createElement('button')
// removebutton.classList.add('remove')
// let removei=document.createElement('i')
// removei.classList.add('fas','fa-trash')
// removebutton.append(removei)

// removediv.append(removebutton)


// let starrediv=document.createElement('div')
// starrediv.classList.add('starreddiv')

// let starredbutton=document.createElement('button')
// starredbutton.classList.add('starred')
// let starredi=document.createElement('i')
// starredi.classList.add('far','fa-star')
// starredbutton.append(starredi)

// starrediv.append(starredbutton)



// itemsdiv.append(itemnamediv)
// itemsdiv.append(qtydiv)
// itemsdiv.append(removediv)
// itemsdiv.append(starrediv)

// newli.append(itemsdiv)
// cartlist.append(newli)
// })
