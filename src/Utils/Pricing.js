export const prices = {
    arcade: {
        monthly: 9,
        yearly: 90
    },
    advanced: {
        monthly: 12,
        yearly: 120
    },
    pro: {
        monthly: 15,
        yearly: 150
    },
    onlineService: {
        monthly: 1,
        yearly: 10
    },
    storage: {
        monthly: 2,
        yearly: 20
    },
    customizable: {
        monthly: 2,
        yearly: 20
    }
};

export const shortener = billing => (billing === "monthly" ? "mo" : "yr");

export const calculateBill = (plan, addOns) => {
    let total = 0;

    total += prices[plan.type][plan.billing];

    total += addOns.onlineService * prices.onlineService[plan.billing];
    total += addOns.storage * prices.storage[plan.billing];
    total += addOns.customizable * prices.customizable[plan.billing];

    return total;
};
