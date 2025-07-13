// restaurants data 
export const restaurantList = [
    {
      id: 1,
      name: "Burger King",
      image: "src/assets/images/restaurant1.png",
      brandLogo: "src/assets/images/burger-king.png",
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
      },
      catergories: ["burgers", "fast-food"]
    },
    {
      id: 2,
      name: "Taco Bell",
      image: "src/assets/images/restaurant2.png",
      brandLogo: "src/assets/images/taco-bell.png",
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
      },
      categories: ["salads", "breakfast"]
    },
    {
      id: 3,
      name: "Pizza Hut",
      image: "src/assets/images/pizza-hut.png",
      brandLogo: "src/assets/images/pizza-hut.png",
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
      },
      categories: ["pizza", "pasta"]
    },
    {
      id: 4,
      name: "McDonald's",
      image: "src/assets/images/mcdonalds.png",
      brandLogo: "src/assets/images/mcdonalds.png",
      offPercent: "25%",
      rating: 4.3,
      deliveryTime: "20-30 min",
      isVeg: false,
      location: "Phase 7, Mohali",
      cuisines: {
        Burgers: [
          {
            name: "McChicken Burger",
            price: 150,
            offerPrice: 120,
            isVeg: false,
          },
          {
            name: "McVeggie Burger",
            price: 130,
            offerPrice: 105,
            isVeg: true,
          }
        ],
        "Fast Food": [
          {
            name: "French Fries (M)",
            price: 100,
            offerPrice: 80,
            isVeg: true,
          },
          {
            name: "McPuff",
            price: 40,
            offerPrice: 30,
            isVeg: true,
          }
        ]
      },
      categories: ["burgers", "fast food"]
    },
    {
      id: 5,
      name: "Papa John's",
      image: "src/assets/images/papa-john.png",
      brandLogo: "src/assets/images/papa-john.png",
      offPercent: "35%",
      rating: 4.4,
      deliveryTime: "25-35 min",
      isVeg: true,
      location: "Sector 62, Mohali",
      cuisines: {
        Pizza: [
          {
            name: "Garden Special Pizza",
            price: 350,
            offerPrice: 260,
            isVeg: true,
          },
          {
            name: "Chicken BBQ Pizza",
            price: 400,
            offerPrice: 300,
            isVeg: false,
          }
        ],
        Pasta: [
          {
            name: "Cheesy Alfredo Pasta",
            price: 250,
            offerPrice: 200,
            isVeg: true,
          }
        ]
      },
      categories: ["pizza", "pasta"]
    },
    {
      id: 6,
      name: "KFC",
      image: "src/assets/images/kfc.png",
      brandLogo: "src/assets/images/kfc.png",
      offPercent: "20%",
      rating: 4.6,
      deliveryTime: "20-30 min",
      isVeg: false,
      location: "Sector 70, Mohali",
      cuisines: {
        Chicken: [
          {
            name: "Zinger Burger",
            price: 190,
            offerPrice: 150,
            isVeg: false,
          },
          {
            name: "Hot Wings (6 pcs)",
            price: 250,
            offerPrice: 200,
            isVeg: false,
          }
        ],
        "Fast Food": [
          {
            name: "Peri Peri Fries",
            price: 120,
            offerPrice: 90,
            isVeg: true,
          }
        ]
      },
      categories: ["fast food", "chicken"]
    },
    {
      id: 7,
      name: "Texas Chicken",
      image: "src/assets/images/texas-chicken.png",
      brandLogo: "src/assets/images/texas-chicken.png",
      offPercent: "22%",
      rating: 4.5,
      deliveryTime: "30-40 min",
      isVeg: false,
      location: "Sector 68, Mohali",
      cuisines: {
        Chicken: [
          {
            name: "Texas Fried Chicken (3 pcs)",
            price: 270,
            offerPrice: 210,
            isVeg: false,
          },
          {
            name: "Grilled Chicken Sandwich",
            price: 200,
            offerPrice: 160,
            isVeg: false,
          }
        ],
        "Sides & Dips": [
          {
            name: "Spicy Mayo Dip",
            price: 20,
            offerPrice: 15,
            isVeg: true,
          },
          {
            name: "Onion Rings",
            price: 90,
            offerPrice: 70,
            isVeg: true,
          }
        ]
      },
      categories: ["chicken", "sides"]
    }
  ];

  // restaurant types
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
  
// cusine categories data 
  export const categoriesData = [
    {
      name: "Burgers",
      image: "src/assets/images/burgers.png",
    },
    {
      name: "Salads",
      image: "src/assets/images/salads.png",
    },
    {
      name: "Pasta",
      image: "src/assets/images/pasta.png",
    },
    {
      name: "Pizza",
      image: "src/assets/images/pizza.png",
    },
    {
      name: "Breakfast",
      image: "src/assets/images/breakfast.png",
    },
    {
      name: "Soups",
      image: "src/assets/images/soups.png",
    }
  ];
  

