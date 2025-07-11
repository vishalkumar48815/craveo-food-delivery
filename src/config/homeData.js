export const restaurantList = [
    {
      id: 1,
      name: "Chef Burger",
      image: "src/assets/images/restaurant1.png",
      offPercent: "40%",
      rating: 4.5,
      deliveryTime: "25-30 min",
      isVeg: false,
      location: "Mohali, sector 58",
      cuisines: {
        Burgers: [
          {
            name: "Classic Chicken Burger",
            price: 180,
            offerPrice: 120,
            isVeg: false,
          },
          {
            name: "Crispy Veg Burger",
            price: 150,
            offerPrice: 90,
            isVeg: true,
          },
        ],
        "Fast Food": [
          {
            name: "French Fries",
            price: 100,
            offerPrice: 80,
            isVeg: true,
          },
          {
            name: "Masala Nuggets",
            price: 120,
            offerPrice: 90,
            isVeg: true,
          }
        ]
      }
    },
    {
      id: 2,
      name: "Cafe Bar",
      image: "src/assets/images/restaurant2.png",
      offPercent: "20%",
      rating: 4.2,
      deliveryTime: "30-35 min",
      isVeg: true,
      location: "sector 67, SAS nagar",
      cuisines: {
        Continental: [
          {
            name: "Grilled Paneer Wrap",
            price: 220,
            offerPrice: 176,
            isVeg: true,
          },
          {
            name: "Chicken Caesar Sandwich",
            price: 250,
            offerPrice: 200,
            isVeg: false,
          },
        ],
        Healthy: [
          {
            name: "Quinoa Salad",
            price: 200,
            offerPrice: 160,
            isVeg: true,
          }
        ],
        Fusion: [
          {
            name: "Avocado Cheese Tacos",
            price: 240,
            offerPrice: 192,
            isVeg: true,
          }
        ]
      }
    },
    {
      id: 3,
      name: "Home Kitchen",
      image: "src/assets/images/restaurant3.png",
      offPercent: "30%",
      rating: 4.7,
      deliveryTime: "20-25 min",
      isVeg: false,
      location: "3b2, mohali",
      cuisines: {
        Indian: [
          {
            name: "Butter Chicken",
            price: 300,
            offerPrice: 210,
            isVeg: false,
          },
          {
            name: "Paneer Butter Masala",
            price: 240,
            offerPrice: 168,
            isVeg: true,
          }
        ],
        Tandoori: [
          {
            name: "Paneer Tikka",
            price: 220,
            offerPrice: 154,
            isVeg: true,
          },
          {
            name: "Tandoori Roti (2 pcs)",
            price: 40,
            offerPrice: 30,
            isVeg: true,
          }
        ]
      }
    }
  ];

  export const restaurantType = [
    {
        id: 1,
        type: "all",
        title: "All"
    },
    {
        id: 2,
        type: "vegan",
        title: "Vegan"
    },
    {
        id: 3,
        type: "veg",
        title: "Veg"
    },
    {
        id: 4,
        type: "non-veg",
        title: "Non-veg"
    },
    {
        id: 5,
        type: "burgers & fast food",
        title: "Burgers & Fast Food"
    }
  ]
  