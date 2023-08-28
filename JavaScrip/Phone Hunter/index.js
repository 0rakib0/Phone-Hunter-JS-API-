// function phoneHunting(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     .then(res => res.json())
//     .then(data => displayData(data))
// }


// function displayData(phone){
//     const data = phone.data
//     for(const user of data){
//         console.log(user['brand']);
//     }

const loadPhone = async (searchText, isLoad) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isLoad)
}

const displayPhones = (phones, isLoad) => {
    const phoneConatiner = document.getElementById('phone-container')
    phoneConatiner.textContent = '';
    
    const loadData = document.getElementById('load-more')
    if(phones.length > 6 && !isLoad){
        loadData.classList.remove('hidden')
    }else{
        loadData.classList.add('hidden')
    }

    console.log('Is ShowALl', isLoad)
    if(!isLoad){
        phones = phones.slice(0, 6)
    }
    phones.forEach(phon => {

    const phneCard = document.createElement('div')
    phneCard.classList = `card bg-base-100 shadow-xl`
    phneCard.innerHTML = `
    <figure><img src="${phon.image}" alt="Shoes" /></figure>
    <div class="card-body">
    <h2 class="card-title">${phon.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>
    `
    phoneConatiner.appendChild(phneCard)
    })

    handleSpiner(false)


    // for(const phn of phones){
    //     console.log(phn)
    // }
}

function searPhone(isLoad){
    handleSpiner(true)
    const searValue = document.getElementById('search-field').value
    loadPhone(searValue, isLoad)
}


const handleSpiner = (isLoading) => {
    const loadingSpiner = document.getElementById('loading-spiner')
    if(isLoading){
        loadingSpiner.classList.remove('hidden')
    }else{
        loadingSpiner.classList.add('hidden')
    }
}



const loadAllData = () =>{
    console.log('Hello bangladesh')
    searPhone(true)
}