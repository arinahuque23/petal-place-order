
export interface Flower {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const flowers: Flower[] = [
  {
    id: 1,
    name: "Red Roses Bouquet",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    description: "Beautiful arrangement of 12 fresh red roses, perfect for expressing love and romance.",
    category: "Roses",
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Sunflower Delight",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1597848212624-e6ec2d23adf5?w=400",
    description: "Bright and cheerful sunflowers that bring sunshine to any day.",
    category: "Sunflowers",
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Tulip Garden Mix",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400",
    description: "A colorful mix of fresh tulips in various spring colors.",
    category: "Tulips",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "White Lilies",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1516035069371-29b1c39ab872?w=400",
    description: "Elegant white lilies symbolizing purity and rebirth.",
    category: "Lilies",
    inStock: false,
    rating: 4.6,
    reviews: 73
  },
  {
    id: 5,
    name: "Pink Carnations",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400",
    description: "Soft pink carnations perfect for showing appreciation and gratitude.",
    category: "Carnations",
    inStock: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: 6,
    name: "Mixed Daisies",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400",
    description: "Cheerful white daisies that represent innocence and new beginnings.",
    category: "Daisies",
    inStock: true,
    rating: 4.4,
    reviews: 67
  },
  {
    id: 7,
    name: "Purple Orchids",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
    description: "Exotic purple orchids for those who appreciate luxury and elegance.",
    category: "Orchids",
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 8,
    name: "Yellow Chrysanthemums",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1530027644375-9c83053d392e?w=400",
    description: "Vibrant yellow chrysanthemums bringing joy and optimism.",
    category: "Chrysanthemums",
    inStock: true,
    rating: 4.3,
    reviews: 41
  }
];
