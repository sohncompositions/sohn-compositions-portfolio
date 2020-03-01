declare interface ITrack {
    title: string;
    category: string;
    src: string;
}

declare interface ILogo {
    url: string;
}

declare interface IContactInfo {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    company: string;
}

declare interface ISocialMediaLink {
    url: string;
    iconLabel: string;
}

declare interface IConfig {
    homePageCategories: string[];
    tracks: ITrack[];
    logo: ILogo;
    contactInfo: IContactInfo;
    socialMediaLinks: ISocialMediaLink[];
}