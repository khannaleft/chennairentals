import { Category } from './types';

export const CONTACT_INFO = {
  address: 'Nazarathpettai, Chennai 600123',
  phone: ['9543779778', '9600004587'],
};

export const RENTAL_CATEGORIES: Category[] = [
  {
    id: 'party-rentals',
    name: 'Party Rentals',
    description: 'Everything you need for an unforgettable event.',
    imageUrl: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1770&q=80',
    items: [
      { id: 101, name: 'Large Event Tent', price: { from: 5000, to: 8000 }, imageUrl: 'https://images.unsplash.com/photo-1568625436858-a45a33b60094?auto=format&fit=crop&w=800&q=80', categoryName: 'Party Rentals' },
      { id: 102, name: 'Round Banquet Tables', price: { from: 500, to: 700 }, imageUrl: 'https://images.unsplash.com/photo-1530024411129-9b9358357a8c?auto=format&fit=crop&w=800&q=80', categoryName: 'Party Rentals' },
      { id: 103, name: 'Chiavari Chairs', price: { from: 500 }, imageUrl: 'https://images.unsplash.com/photo-1549488344-cbb6c144a034?auto=format&fit=crop&w=800&q=80', categoryName: 'Party Rentals' },
      { id: 104, name: 'Professional Sound System', price: { from: 3500, to: 6000 }, imageUrl: 'https://images.unsplash.com/photo-1581452949575-c995914902c3?auto=format&fit=crop&w=800&q=80', categoryName: 'Party Rentals' },
      { id: 105, name: 'LED Dance Floor', price: { from: 8000, to: 15000 }, imageUrl: 'https://images.unsplash.com/photo-1623126848825-fb3c3a9f07a2?auto=format&fit=crop&w=800&q=80', categoryName: 'Party Rentals' },
      { id: 106, name: 'Fog Machine', price: { from: 1200 }, imageUrl: 'https://images.unsplash.com/photo-1598194478830-1b250de25a81?auto=format&fit=crop&w=800&q=80', categoryName: 'Party Rentals' },
    ],
  },
  {
    id: 'camera-rentals',
    name: 'Camera Rentals',
    description: 'Capture your moments with professional-grade equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1770&q=80',
    items: [
      { id: 201, name: 'Sony A7S III', price: { from: 4000 }, imageUrl: 'https://images.unsplash.com/photo-1616421392928-3a45c4794116?auto=format&fit=crop&w=800&q=80', categoryName: 'Camera' },
      { id: 202, name: 'Canon EOS R5', price: { from: 4500 }, imageUrl: 'https://images.unsplash.com/photo-1600295123547-8d761848c028?auto=format&fit=crop&w=800&q=80', categoryName: 'Camera' },
      { id: 203, name: 'GoPro HERO12 Black', price: { from: 1500 }, imageUrl: 'https://images.unsplash.com/photo-1695425621649-7d313cc0451a?auto=format&fit=crop&w=800&q=80', categoryName: 'Camera' },
      { id: 204, name: 'DJI Ronin-S Gimbal', price: { from: 2000, to: 3000 }, imageUrl: 'https://images.unsplash.com/photo-1589128527339-32219e59d04f?auto=format&fit=crop&w=800&q=80', categoryName: 'Camera' },
      { id: 205, name: 'Sigma 24-70mm f/2.8 Lens', price: { from: 1800 }, imageUrl: 'https://images.unsplash.com/photo-1599846430584-1748280a323a?auto=format&fit=crop&w=800&q=80', categoryName: 'Camera' },
      { id: 206, name: 'Aputure 120D II Light Kit', price: { from: 2500, to: 4000 }, imageUrl: 'https://images.unsplash.com/photo-1598160980590-58359b38f883?auto=format&fit=crop&w=800&q=80', categoryName: 'Camera' },
    ],
  },
  {
    id: 'car-rentals',
    name: 'Car Rentals',
    description: 'Travel in style and comfort with our fleet of cars, including fun options for kids!',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1770&q=80',
    items: [
      { id: 301, name: 'Mahindra Thar', price: { from: 3000, to: 4500 }, imageUrl: 'https://images.unsplash.com/photo-1632184134101-75891409a826?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 302, name: 'Toyota Fortuner', price: { from: 5000, to: 7500 }, imageUrl: 'https://images.unsplash.com/photo-1628177581514-4a27361c4c79?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 303, name: 'Maruti Suzuki Swift', price: { from: 1800, to: 2200 }, imageUrl: 'https://images.unsplash.com/photo-1619769862358-33519c6c52a0?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 304, name: 'Hyundai Creta', price: { from: 2200, to: 2800 }, imageUrl: 'https://images.unsplash.com/photo-1631128330756-34c442a84f34?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 305, name: 'Luxury Sedan (Audi A4)', price: { from: 9000, to: 12000 }, imageUrl: 'https://images.unsplash.com/photo-1541348263662-e5227204b311?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 306, name: 'Vintage Ambassador', price: { from: 7000 }, imageUrl: 'https://images.unsplash.com/photo-1629088628328-705595995709?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 307, name: 'Kids Electric Ride-On Jeep', price: { from: 1500 }, imageUrl: 'https://images.unsplash.com/photo-1581291523490-643f821bda97?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
      { id: 308, name: 'Battery-Powered Kids Car', price: { from: 1200 }, imageUrl: 'https://images.unsplash.com/photo-1630132371901-443b07977413?auto=format&fit=crop&w=800&q=80', categoryName: 'Car' },
    ],
  },
  {
    id: 'entertainment-rentals',
    name: 'Entertainment Rentals',
    description: 'Bring the cinema, gaming, and stage experience to you.',
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1770&q=80',
    items: [
      { id: 401, name: 'Epson 4K Projector', price: { from: 3000, to: 5000 }, imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 409, name: 'Anker Nebula Capsule Projector', price: { from: 2200 }, imageUrl: 'https://images.unsplash.com/photo-1631947429188-34842b4d1d91?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 402, name: '120-inch Projector Screen', price: { from: 1000, to: 1500 }, imageUrl: 'https://images.unsplash.com/photo-1593426039599-94f4879f5299?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 403, name: 'Karaoke Machine with Mics', price: { from: 2500, to: 3500 }, imageUrl: 'https://images.unsplash.com/photo-1567588339128-9f150510526e?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 404, name: 'Popcorn Machine', price: { from: 800 }, imageUrl: 'https://images.unsplash.com/photo-1598214886392-59851b443b74?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 405, name: 'Bose S1 Pro PA System', price: { from: 2800 }, imageUrl: 'https://images.unsplash.com/photo-1543443376-35a2e994f318?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 406, name: 'PlayStation 5 Console', price: { from: 2000, to: 2500 }, imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 407, name: 'Xbox Series X Console', price: { from: 2000, to: 2500 }, imageUrl: 'https://images.unsplash.com/photo-1627843444005-2985fc7129b2?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
      { id: 408, name: 'Nintendo Switch OLED', price: { from: 1500, to: 2000 }, imageUrl: 'https://images.unsplash.com/photo-1654277563814-4204d8847849?auto=format&fit=crop&w=800&q=80', categoryName: 'Entertainment' },
    ],
  },
];