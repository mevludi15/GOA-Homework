const ol = document.querySelectorAll("ol");
const form = document.querySelector("form");

class OrderManager {
    constructor() {
        const active = JSON.parse(localStorage.getItem("activeOrders")) || [];
        this.activeOrders = new Map(active);

        const completed = JSON.parse(localStorage.getItem("completedOrders")) || [];
        this.completedOrders = new Set(completed);
    }

    processOrder(orderId, customerName, food, callback) {
        this.activeOrders.set(orderId, [customerName, food]);
        localStorage.setItem("activeOrders", JSON.stringify([...this.activeOrders]));

        ol[0].innerHTML = this.render();

        setTimeout(() => {
            this.completedOrders.add(`${customerName}: ${food}`);
            this.activeOrders.delete(orderId);

            localStorage.setItem("completedOrders", JSON.stringify([...this.completedOrders]));
            localStorage.setItem("activeOrders", JSON.stringify([...this.activeOrders]));

            ol[0].innerHTML = this.render();
            ol[1].innerHTML = this.renderCompleted();

            
        }, 5000);
    }

    render() {
        let html = "";
        for (const [id, [customerName, food]] of this.activeOrders) {
            html += `<li>#${id}: ${customerName}  ${food}</li>`;
        }
        return html;
    }

    renderCompleted() {
        let html = "";
        for (const item of this.completedOrders) {
            html += `<li>${item}</li>`;
        }
        return html;
    }
}

const orderManager = new OrderManager();
ol[0].innerHTML = orderManager.render();
ol[1].innerHTML = orderManager.renderCompleted();

let orderId = JSON.parse(localStorage.getItem("lastOrderId")) || 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    orderId++;
    localStorage.setItem("lastOrderId", orderId);

    orderManager.processOrder(orderId, form.name.value, form.food.value, (id) => {
        console.log(`შეკვეთა #${id} დამთავრდა`);
    });

});