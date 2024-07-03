export interface ContactOfficer {
    id?: number;
    name: string;
    email: string;
    phone: string;
  }
  
  export interface Sponsor {
    id?: number;
    sponsor_code: string;
    sponsor_name: string;
    sponsor_name_latin: string;
    sponsor_type: string;
    address: string;
    postal_code: string;
    phone: string;
    email: string;
    max_limit: number;
    financial_limit: number;
    time_limit: number;
    active: boolean;
    contactOfficers?: ContactOfficer[];
  }
  
export interface SponsorResponse {
    success: boolean;
    message: string;
    data: {
      current_page: number;
      data: Sponsor[];
      first_page_url: string;
      last_page_url: string;
    };
  }
  