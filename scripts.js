
window.addEventListener("load", () => {
   
    const btns = document.querySelectorAll(".btn-large");
    const hiddenElements = document.querySelectorAll('.hidden-group');
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

                const elementsClassName = ["shred-group", "field-ordernr", "field-description-q", "hidden-group-btn"];
                displayElements(elementsClassName);

            }else{
                genrateItem(elId);
            }
            
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
    // TODO: change test array and every case don't have same array.
    switch (categoryItem) {
        case "offer":
            const elementsClassName1 = ["shred-group", "field-ordernr", "field-description-q", "hidden-group-btn"];
            displayElements(elementsClassName1)
            break;
        case "cancel-order":
            const elementsClassName2 = ["shred-group", "field-ordernr", "field-description-q", "hidden-group-btn"];
            displayElements(elementsClassName2)
            break;
        case "delivery":
            const elementsClassName3= ["shred-group", "field-ordernr", "field-description-q", "hidden-group-btn"];
            displayElements(elementsClassName3)
            break;
        case "return-order":
            const elementsClassName4 = ["shred-group", "field-ordernr", "field-description-q", "hidden-group-btn"];
            displayElements(elementsClassName4)
            break;
        case "shipping-damage":
            const elementsClassName5 = ["shred-group", "field-ordernr", "field-description-q", "hidden-group-btn"];
            displayElements(elementsClassName5)
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

const displayElements = (elements) => {

    elements.forEach((className) => {
        document.querySelector(`.${className}`).style.display = "block";
    });

};