export interface UserProfile {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone: string;
    avatar_url: string;
    created_at: string; // ISO timestamp
    updated_at: string; // ISO timestamp
}