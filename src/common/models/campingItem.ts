type CampingItem = {
  id: string;
  name: string;
  location: {
    longitude: number;
    latitude: number;
  }
  description?: string;
  image?: string;
  address?: string;
  zipcode?: number;
  city?: string;
  nb_spots?: number;
  nb_stars?: number;
  phone_number?: string;
  email?: string;
  website?: string;
}

export { CampingItem }
