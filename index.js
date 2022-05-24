const CONTACT = `<div class="contact"><h3>contactez Nous</h3><a class="bold numero" href="tel:+33567069500" class="tel"><span class="fa fa-solid fa-phone"></span>05 67 06 95 00</a><div class="livraison no-mobile"><img class="logo" src="/logo.webp" alt="logo" /><p> Livraison <strong class="bold">GRATUITE</strong></p></div></div>
<div class="full-adresse-mail"><a class="mail" href="mailto:narauto@gmail.com">narauto@gmail.com</a><div class="full-adresse"><p class="adresse">9 ter rue de Bourgogne</p><p class="adresse">31830, Plaisance du touch</p></div></div>`
let services = document.getElementById('services')
let info = document.getElementById('info')
let contact = document.getElementById('little-contact')
let tlt = document.getElementById('tlt')
let imgTitle = document.getElementById('img-fd')
console.log(window.innerWidth)
if(window.innerWidth >= 998){
    services.innerHTML+= CONTACT
    contact.remove()
}else{
    info.appendChild(contact)
}