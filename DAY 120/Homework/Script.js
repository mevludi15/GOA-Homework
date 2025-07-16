class OrderManager {
  constructor() {
    this.activeOrders = new Map();
    this.completedOrders = new Set();
  }

  processOrder(orderId, customerName, callback) {
    this.activeOrders.set(orderId, customerName);
    console.log(`შეკვეთა #${orderId} მიღებულია მომხმარებლისგან: ${customerName}`);

    setTimeout(() => {
      this.activeOrders.delete(orderId);
      this.completedOrders.add(customerName);
      callback(orderId);
      this.printStatus();
    }, 3000);
  }

  printStatus() {
    console.log("აქტიური შეკვეთები:");
    if (this.activeOrders.size === 0) {
      console.log("— არ არის აქტიური შეკვეთები");
    } else {
      for (let [orderId, customerName] of this.activeOrders) {
        console.log(`- შეკვეთა #${orderId}: ${customerName}`);
      }
    }

    console.log("დასრულებული შეკვეთები:");
    if (this.completedOrders.size === 0) {
      console.log("— ჯერ არ დასრულებულა შეკვეთები");
    } else {
      for (let name of this.completedOrders) {
        console.log(`- ${name}`);
      }
    }
  }
}

// Callback ფუნქცია
function callback(orderId) {
  console.log(`შეკვეთა #${orderId} დამთავრდა`);
}

// OrderManager-ის ობიექტი
const manager = new OrderManager();

manager.processOrder(101, "გიორგი", callback);