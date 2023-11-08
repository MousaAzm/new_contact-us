
window.addEventListener("load", () =>{
   
    const btns = document.querySelectorAll(".btn-large");
    const hiddenElements = document.querySelectorAll('.hidden-group');
    const categoryTitle = document.querySelector('.category-title');
    const colors = document.querySelectorAll('.color-box');

    colors.forEach((color) => {
        color.addEventListener("click", () => {
             
            const elId = color.getAttribute("id");

            if(elId == "red"){
                document.documentElement.style.setProperty('--bg-color', '#dd9494');
                document.documentElement.style.setProperty('--bg-active-color', '#DF0000');
                document.documentElement.style.setProperty('--text-color', '#fff');
            }else if(elId == "green"){
                document.documentElement.style.setProperty('--bg-color', '#6bd390');
                document.documentElement.style.setProperty('--bg-active-color', '#2ead5b');
                document.documentElement.style.setProperty('--text-color', '#313233');
            }else if(elId == "dark-blue"){
                document.documentElement.style.setProperty('--bg-color', '#385b7f');
                document.documentElement.style.setProperty('--bg-active-color', '#14365a');
                document.documentElement.style.setProperty('--text-color', '#fff');
            }else{
                document.documentElement.style.setProperty('--bg-color', '#e2e2e2');
                document.documentElement.style.setProperty('--bg-active-color', '#cecece');
                document.documentElement.style.setProperty('--text-color', '#313233');
            }
            
        });
    })

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {

            elemenstAction(hiddenElements, btns);

            btn.classList.toggle("active");

            const elId = btn.getAttribute("id");

            if(elId === "other-questions"){
                const itemsContent = document.querySelector(".category-items ul");
                itemsContent.innerHTML = "";

                document.querySelector(".shred-group").style.display = "block";
                document.querySelector(".field-ordernr").style.display = "block";
                document.querySelector(".field-description-q").style.display = "block";
                document.querySelector(".hidden-group-btn").style.display = "block";
            }
            genrateItem(elId);
        });
    })

   
})

const categoryItems = [
    {
        text: "Frågor om produkter",
        parentId: "before-purchase",
        value: "products",
    },
    {
        text: "Offert",
        parentId: "before-purchase",
        value: "offer",
    },
    {
        text: "Annullering av order",
        parentId: "cancellation-change",
        value: "cancel-order",
    },
    {
        text: "Ändring i order",
        parentId: "cancellation-change",
        value: "change-order",
    },
    {
        text: "Frågor om Leverans",
        parentId: "delivery-payment",
        value: "delivery",
    },
    {
        text: "Frågor om betalning",
        parentId: "delivery-payment",
        value: "payment",
    },
    {
        text: "Förfrågan om retur",
        parentId: "return-order",
        value: "return-order",
    },
    {
        text: "Fraktskada",
        parentId: "complaint",
        value: "shipping-damage",
    },
    {
        text: "Produktfel eller övriga skador",
        parentId: "complaint",
        value: "product-failed",
    },

];

const genrateItem = (id) => {
    const hiddenElements = document.querySelectorAll('.hidden-group');
    const itemsContent = document.querySelector(".category-items ul");
    itemsContent.innerHTML = "";

    categoryItems.filter(i => i.parentId === id).forEach((item) => {
       const li = document.createElement("li");

       li.setAttribute("class", "btn-small");
       li.innerHTML = item.text;
       li.addEventListener("click", () => { 
        elemenstAction(hiddenElements, null); 
        visableCategoryForm(item.value);  
        li.classList.toggle("active");
       });

       itemsContent.append(li);
    })
}

const visableCategoryForm = (categoryItem) => {

    switch (categoryItem) {
        case "offer":
            document.querySelector(".shred-group").style.display = "block";
            document.querySelector(".field-ordernr").style.display = "block";
            document.querySelector(".field-description-q").style.display = "block";
            document.querySelector(".hidden-group-btn").style.display = "block";
            break;
        case "cancel-order":
            document.querySelector(".shred-group").style.display = "block";
            document.querySelector(".field-ordernr").style.display = "block";
            document.querySelector(".field-description-q").style.display = "block";
            document.querySelector(".hidden-group-btn").style.display = "block";
            break;
        case "delivery":
            document.querySelector(".shred-group").style.display = "block";
            document.querySelector(".field-ordernr").style.display = "block";
            document.querySelector(".field-description-q").style.display = "block";
            document.querySelector(".hidden-group-btn").style.display = "block";
            break;
        case "return-order":
            document.querySelector(".shred-group").style.display = "block";
            document.querySelector(".field-ordernr").style.display = "block";
            document.querySelector(".field-description-q").style.display = "block";
            document.querySelector(".hidden-group-btn").style.display = "flex";
            break;
        case "shipping-damage":
            document.querySelector(".shred-group").style.display = "block";
            document.querySelector(".field-ordernr").style.display = "block";
            document.querySelector(".field-description-q").style.display = "block";
            document.querySelector(".hidden-group-btn").style.display = "block";
            break;
        default:
            break;
    }
}


const elemenstAction = (hiddenElements, btns) => {
   
    hiddenElements.forEach(element => {
        element.style.display = "none";
    });

    if(btns == null){
        btns = document.querySelectorAll(".btn-small");
    }

    for(var i=0;i<btns.length;i++){
        btns[i].classList.remove("active");
    }
}